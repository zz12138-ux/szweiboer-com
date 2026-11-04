interface Env {
  DB: D1Database;
}

type Payload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  product?: unknown;
  quantity?: unknown;
  requirements?: unknown;
  pagePath?: unknown;
  website?: unknown;
};

const clean = (value: unknown, max = 2000) => {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : "";
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (request.headers.get("Origin") !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid origin." }, { status: 403 });
  }
  try {
    if (Number(request.headers.get("Content-Length") || 0) > 12000) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    const body = (await request.json()) as Payload;
    if (JSON.stringify(body).length > 12000) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: bots fill the hidden field; humans never see it.
    if (clean(body.website)) {
      return Response.json({ ok: true, reference: "WB-RECEIVED" }, { status: 201 });
    }

    const name = clean(body.name, 120);
    const company = clean(body.company, 180);
    const email = clean(body.email, 254);
    const product = clean(body.product, 180);
    const quantity = clean(body.quantity, 180);
    const requirements = clean(body.requirements, 4000);
    const pagePath = clean(body.pagePath, 200) || "/";

    if (!name || !email || !product || !requirements) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please enter a valid business email." }, { status: 400 });
    }

    const cf = request.cf as { country?: unknown } | undefined;
    const country = typeof cf?.country === "string" ? cf.country.slice(0, 8) : "";

    const id = crypto.randomUUID();
    await env.DB.prepare(
      `INSERT INTO inquiries (id, status, source, name, company, email, country, interested_products, estimated_quantity, message)
       VALUES (?, 'new', ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      id,
      `website-form:${pagePath}`,
      name,
      company || null,
      email,
      country,
      product,
      quantity,
      requirements,
    ).run();

    return Response.json(
      { ok: true, reference: `WB-${id.slice(0, 8).toUpperCase()}` },
      { status: 201, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } },
    );
  } catch {
    console.error("Inquiry submission failed");
    return Response.json(
      { error: "We could not save your inquiry. Please contact us by WhatsApp or email." },
      { status: 500 },
    );
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
