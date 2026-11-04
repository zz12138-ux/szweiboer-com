interface Env {
  DB: D1Database;
  WEIBOER_LEADS_PASSWORD?: string;
}

type Lead = {
  id: string;
  created_at: string;
  status: string;
  source: string;
  name: string;
  company: string | null;
  email: string;
  country: string;
  interested_products: string;
  estimated_quantity: string;
  message: string;
};

const STATUSES = new Set(["new", "contacted", "quoted", "closed"]);
const headers = { "Cache-Control": "no-store, private", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" };

function reply(payload: unknown, status = 200) {
  return Response.json(payload, { status, headers });
}

function safeEqual(a: string, b: string) {
  let mismatch = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return mismatch === 0;
}

function authorize(request: Request, env: Env) {
  const expected = env.WEIBOER_LEADS_PASSWORD;
  if (!expected || expected.length < 32) return "not-configured";
  const authorization = request.headers.get("Authorization") ?? "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match && match[1].length <= 256 && safeEqual(match[1], expected) ? "ok" : "unauthorized";
}

function guard(request: Request, env: Env) {
  if (!env.DB) return reply({ error: "Lead storage is not configured." }, 503);
  const result = authorize(request, env);
  if (result === "not-configured") return reply({ error: "Private lead access is not configured." }, 503);
  if (result !== "ok") return reply({ error: "Access denied." }, 401);
  return null;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const denied = guard(request, env);
  if (denied) return denied;
  try {
    // Bounded recent view, not an all-time lead count.
    const leads = await env.DB.prepare(
      "SELECT id, created_at, status, source, name, company, email, country, interested_products, estimated_quantity, message FROM inquiries ORDER BY created_at DESC, id DESC LIMIT 100",
    ).all<Lead>();
    let clicks: Array<{ day: string; source_path: string; count: number }> = [];
    let clicksAvailable = true;
    try {
      const result = await env.DB.prepare(
        "SELECT date(created_at) AS day, page_path AS source_path, COUNT(*) AS count FROM whatsapp_clicks GROUP BY day, source_path ORDER BY day DESC LIMIT 100",
      ).all<{ day: string; source_path: string; count: number }>();
      clicks = result.results ?? [];
    } catch {
      clicksAvailable = false;
    }
    return reply({ leads: leads.results ?? [], clicks, clicksAvailable });
  } catch {
    return reply({ error: "Unable to load private leads." }, 503);
  }
};

export const onRequestPatch: PagesFunction<Env> = async ({ request, env }) => {
  const denied = guard(request, env);
  if (denied) return denied;
  if (request.headers.get("Origin") !== new URL(request.url).origin) {
    return reply({ error: "Invalid origin." }, 403);
  }
  let body: { id?: unknown; from?: unknown; status?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return reply({ error: "Invalid request." }, 400);
  }
  if (typeof body.id !== "string" || !/^[0-9a-f]{8}-[0-9a-f-]{27,36}$/i.test(body.id)
    || typeof body.from !== "string" || !STATUSES.has(body.from)
    || typeof body.status !== "string" || !STATUSES.has(body.status)
    || body.from === body.status) {
    return reply({ error: "Invalid status change." }, 400);
  }
  try {
    const result = await env.DB.prepare(
      "UPDATE inquiries SET status = ? WHERE id = ? AND status = ?",
    ).bind(body.status, body.id, body.from).run();
    if (result.meta.changes !== 1) return reply({ error: "This lead changed or is no longer available. Refresh before updating." }, 409);
    return reply({ ok: true, id: body.id, status: body.status });
  } catch {
    return reply({ error: "Status could not be saved." }, 503);
  }
};
