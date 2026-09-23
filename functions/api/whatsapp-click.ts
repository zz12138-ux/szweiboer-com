interface Env {
  DB: D1Database;
}

type Payload = {
  eventKey?: unknown;
  pagePath?: unknown;
  productCode?: unknown;
};

const text = (value: unknown, fallback: string, max = 160) => {
  if (typeof value !== "string") return fallback;
  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, max) : fallback;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as Payload;
    const eventKey = text(body.eventKey, "whatsapp-other");
    const pagePath = text(body.pagePath, "/");
    const productCode = text(body.productCode, "", 80) || null;

    await env.DB.prepare(
      "INSERT INTO whatsapp_clicks (event_key, page_path, product_code) VALUES (?, ?, ?)",
    ).bind(eventKey, pagePath, productCode).run();

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
