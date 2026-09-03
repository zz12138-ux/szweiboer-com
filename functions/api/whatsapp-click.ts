interface Env {
  DB: D1Database;
}

type Payload = {
  eventKey?: unknown;
  pagePath?: unknown;
  productCode?: unknown;
  visitorId?: unknown;
  sessionId?: unknown;
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
    const eventKey = text(body.eventKey, "whatsapp-other");
    const pagePath = text(body.pagePath, "/");
    const productCode = text(body.productCode, "", 80) || null;
    const visitorId = anonymousId(body.visitorId);
    const sessionId = anonymousId(body.sessionId);

    await env.DB.prepare(
      `INSERT INTO whatsapp_clicks (event_key, page_path, product_code, visitor_id, session_id, is_effective)
       SELECT ?, ?, ?, ?, ?,
         CASE WHEN ? IS NOT NULL AND NOT EXISTS (
           SELECT 1 FROM whatsapp_clicks
           WHERE visitor_id = ?
             AND ((? IS NOT NULL AND product_code = ?) OR (? IS NULL AND product_code IS NULL AND page_path = ?))
             AND created_at >= datetime('now', '-24 hours')
         ) THEN 1 ELSE 0 END`,
    ).bind(
      eventKey,
      pagePath,
      productCode,
      visitorId,
      sessionId,
      visitorId,
      visitorId,
      productCode,
      productCode,
      productCode,
      pagePath,
    ).run();

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
