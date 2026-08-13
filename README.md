# Kaikuozhe B2B Consumer Electronics Site

An English B2B lead-generation site for laptops, tablets, projectors and portable monitors.

## Intended stack

- GitHub: source code and product content
- Vercel: Next.js deployment
- Cloudflare R2: product photography and video assets, served from a public custom subdomain
- Namecheap: domain registration and DNS

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and replace the placeholder sales email, WhatsApp number and R2 public URL before launch.

## Content launch checklist

1. Replace the CSS product visuals with real product image URLs from Cloudflare R2.
2. Update the four product category descriptions and specifications from the Alibaba catalog.
3. Connect the inquiry form to the sales inbox or CRM.
4. Replace the placeholder WhatsApp number.
5. Add the final domain in Namecheap and point it to Vercel.
