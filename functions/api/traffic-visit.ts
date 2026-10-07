import { classifyTrafficSource } from "../../lib/traffic-attribution";

interface Env {
  DB: D1Database;
}

type Payload = {
  visitorId?: unknown;
  sessionId?: unknown;
  landingPath?: unknown;
  referrerHost?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
};

const text = (value: unknown, fallback: string, max = 160) => {
  if (typeof value !== "string") return fallback;
  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, max) : fallback;
};

const anonymousId = (value: unknown) => {
  const candidate = text(value, "", 80);
  return /^[a-z0-9-]{16,80}$/i.test(candidate) ? candidate : null;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as Payload;
    const visitorId = anonymousId(body.visitorId);
    const sessionId = anonymousId(body.sessionId);
    if (!visitorId || !sessionId) return Response.json({ ok: false }, { status: 400 });

    const landingPath = text(body.landingPath, "/", 240);
    const referrerHost = text(body.referrerHost, "", 160) || null;
    const utmSource = text(body.utmSource, "", 100) || null;
    const utmMedium = text(body.utmMedium, "", 100) || null;
    const utmCampaign = text(body.utmCampaign, "", 160) || null;
    const attribution = classifyTrafficSource(referrerHost, utmSource);

    await env.DB.prepare(
      `INSERT OR IGNORE INTO traffic_visits
        (visitor_id, session_id, landing_path, referrer_host, source_type, source_label, utm_source, utm_medium, utm_campaign)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      visitorId,
      sessionId,
      landingPath,
      referrerHost,
      attribution.sourceType,
      attribution.sourceLabel,
      utmSource,
      utmMedium,
      utmCampaign,
    ).run();

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
