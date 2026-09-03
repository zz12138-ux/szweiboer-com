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
       FROM whatsapp_clicks GROUP BY event_key, page_path ORDER BY clicks DESC LIMIT 100`,
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

  return Response.json({ totals, quality, byProduct: byProduct.results, byEvent: byEvent.results, byDate: byDate.results });
};
