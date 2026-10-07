interface Env {
  DB: D1Database;
  STATS_KEY?: string;
}

const denied = () => new Response("Unauthorized", { status: 401 });

const startOfDay = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00.000Z`;
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.STATS_KEY || request.headers.get("x-stats-key") !== env.STATS_KEY) return denied();

  const now = new Date();
  const today = startOfDay(now);
  const week = new Date(now.getTime() - 7 * 86400000).toISOString();
  const month = new Date(now.getTime() - 30 * 86400000).toISOString();

  const [totals, quality, byProduct, byEvent, byDate] = await Promise.all([
    env.DB.prepare(
      `SELECT
        SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS today,
        SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS last7Days,
        SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS last30Days,
        COUNT(*) AS allTime
       FROM whatsapp_clicks`,
    ).bind(today, week, month).first(),
    env.DB.prepare(
      `SELECT
        COUNT(DISTINCT CASE WHEN visitor_id IS NOT NULL AND created_at >= ? THEN visitor_id END) AS uniqueVisitors7Days,
        SUM(CASE WHEN is_effective = 1 AND created_at >= ? THEN 1 ELSE 0 END) AS effectiveClicks7Days,
        COUNT(DISTINCT CASE WHEN visitor_id IS NOT NULL THEN visitor_id END) AS uniqueVisitorsAllTime,
        SUM(CASE WHEN is_effective = 1 THEN 1 ELSE 0 END) AS effectiveClicksAllTime
       FROM whatsapp_clicks`,
    ).bind(week, week).first(),
    env.DB.prepare(
      `SELECT
        COALESCE(product_code, 'unknown') AS productCode,
        COUNT(*) AS clicks,
        COUNT(DISTINCT visitor_id) AS uniqueVisitors,
        SUM(CASE WHEN is_effective = 1 THEN 1 ELSE 0 END) AS effectiveClicks
       FROM whatsapp_clicks
       GROUP BY product_code
       ORDER BY effectiveClicks DESC, clicks DESC
       LIMIT 100`,
    ).all(),
    env.DB.prepare(
      `SELECT event_key AS eventKey, page_path AS pagePath, COUNT(*) AS clicks
       FROM whatsapp_clicks
       GROUP BY event_key, page_path
       ORDER BY clicks DESC
       LIMIT 100`,
    ).all(),
    env.DB.prepare(
      `SELECT
        strftime('%Y-%m-%d', created_at) AS date,
        COUNT(*) AS clicks,
        COUNT(DISTINCT visitor_id) AS uniqueVisitors,
        SUM(CASE WHEN is_effective = 1 THEN 1 ELSE 0 END) AS effectiveClicks
       FROM whatsapp_clicks
       WHERE created_at >= ?
       GROUP BY date
       ORDER BY date DESC
       LIMIT 100`,
    ).bind(month).all(),
  ]);

  let traffic = {
    available: false,
    totals: { visits30Days: 0, visitors30Days: 0, aiVisits30Days: 0, whatsappClicks30Days: 0 },
    bySource: [] as unknown[],
    byLandingPage: [] as unknown[],
    byDate: [] as unknown[],
  };

  try {
    const clickSessions = `SELECT session_id, COUNT(*) AS clicks
      FROM whatsapp_clicks
      WHERE session_id IS NOT NULL AND created_at >= ?
      GROUP BY session_id`;
    const [trafficTotals, trafficBySource, trafficByLandingPage, trafficByDate] = await Promise.all([
      env.DB.prepare(
        `SELECT
          COUNT(*) AS visits30Days,
          COUNT(DISTINCT visitor_id) AS visitors30Days,
          SUM(CASE WHEN source_type = 'ai' THEN 1 ELSE 0 END) AS aiVisits30Days,
          COALESCE(SUM(clicks.clicks), 0) AS whatsappClicks30Days
         FROM traffic_visits AS visits
         LEFT JOIN (${clickSessions}) AS clicks ON clicks.session_id = visits.session_id
         WHERE visits.created_at >= ?`,
      ).bind(month, month).first(),
      env.DB.prepare(
        `SELECT
          source_type AS sourceType,
          source_label AS sourceLabel,
          COUNT(*) AS visits,
          COUNT(DISTINCT visitor_id) AS visitors,
          COALESCE(SUM(clicks.clicks), 0) AS whatsappClicks
         FROM traffic_visits AS visits
         LEFT JOIN (${clickSessions}) AS clicks ON clicks.session_id = visits.session_id
         WHERE visits.created_at >= ?
         GROUP BY source_type, source_label
         ORDER BY visits DESC, visitors DESC
         LIMIT 100`,
      ).bind(month, month).all(),
      env.DB.prepare(
        `SELECT
          landing_path AS landingPath,
          COUNT(*) AS visits,
          COUNT(DISTINCT visitor_id) AS visitors,
          COALESCE(SUM(clicks.clicks), 0) AS whatsappClicks
         FROM traffic_visits AS visits
         LEFT JOIN (${clickSessions}) AS clicks ON clicks.session_id = visits.session_id
         WHERE visits.created_at >= ?
         GROUP BY landing_path
         ORDER BY visits DESC, visitors DESC
         LIMIT 100`,
      ).bind(month, month).all(),
      env.DB.prepare(
        `SELECT
          strftime('%Y-%m-%d', created_at) AS date,
          COUNT(*) AS visits,
          COUNT(DISTINCT visitor_id) AS visitors,
          SUM(CASE WHEN source_type = 'ai' THEN 1 ELSE 0 END) AS aiVisits
         FROM traffic_visits
         WHERE created_at >= ?
         GROUP BY date
         ORDER BY date DESC
         LIMIT 100`,
      ).bind(month).all(),
    ]);
    traffic = {
      available: true,
      totals: {
        visits30Days: Number(trafficTotals?.visits30Days || 0),
        visitors30Days: Number(trafficTotals?.visitors30Days || 0),
        aiVisits30Days: Number(trafficTotals?.aiVisits30Days || 0),
        whatsappClicks30Days: Number(trafficTotals?.whatsappClicks30Days || 0),
      },
      bySource: trafficBySource.results,
      byLandingPage: trafficByLandingPage.results,
      byDate: trafficByDate.results,
    };
  } catch {
    // Keep the existing click dashboard available before the traffic table is migrated.
  }

  return Response.json({ totals, quality, byProduct: byProduct.results, byEvent: byEvent.results, byDate: byDate.results, traffic });
};
