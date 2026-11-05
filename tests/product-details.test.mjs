import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const exported = join(root, "out");
const publicDir = join(root, "public");
const categories = ["laptops", "mini-pcs", "tablets", "all-in-one-pcs", "phones", "projectors", "portable-monitors"];
const css = readFileSync(join(root, "app/laptops/fd16/product-detail.css"), "utf8");
const centeredImages = css.match(/\.detailImages img\{([^}]+)\}/)?.[1] ?? "";
assert.match(centeredImages, /margin:0 auto/);
assert.match(centeredImages, /max-width:1160px/);
assert.match(centeredImages, /width:100%/);
assert.match(css, /\.productOverview\{[^}]*margin:0 auto;max-width:1440px/);

function* pages(folder) {
  for (const entry of readdirSync(folder, { withFileTypes: true })) {
    const name = join(folder, entry.name);
    if (entry.isDirectory()) yield* pages(name);
    else if (entry.name === "index.html") yield name;
  }
}

let total = 0;
const missingImages = [];
for (const category of categories) {
  let count = 0;
  for (const file of pages(join(exported, category))) {
    const html = readFileSync(file, "utf8");
    if (!html.includes('class="productOverview"')) continue;
    const path = relative(exported, file).replaceAll("\\", "/");
    count++;
    assert.match(html, /class="detailImages"/, `${path}: centered image section missing`);
    assert.doesNotMatch(html, /class="detailImageStack"/, `${path}: legacy unstyled image stack`);
    const cta = html.match(/<a\b([^>]*class="detailWhatsapp"[^>]*)>(.*?)<\/a>/s);
    assert.ok(cta, `${path}: green WhatsApp CTA missing`);
    assert.match(cta[2], /Chat on WhatsApp/, `${path}: CTA label missing`);
    const href = cta[1].match(/\bhref="([^"]+)"/)?.[1]?.replaceAll("&amp;", "&");
    assert.ok(href, `${path}: CTA URL missing`);
    const target = new URL(href);
    assert.equal(target.hostname, "api.whatsapp.com", `${path}: wrong WhatsApp host`);
    assert.match(target.pathname, /^\/send\/?$/, `${path}: wrong WhatsApp path`);
    assert.equal(target.searchParams.get("phone"), "8613556351212", `${path}: wrong phone`);
    assert.ok(target.searchParams.get("text")?.includes("Weiboer"), `${path}: message missing`);
    for (const image of html.matchAll(/<img\b[^>]*\bsrc="(\/[^"]+)"[^>]*>/g)) {
      const src = image[1].split("?")[0];
      const local = join(publicDir, src.replace(/^\//, ""));
      if (!existsSync(local) || statSync(local).size === 0) missingImages.push(`${path}: ${src}`);
    }
  }
  assert.ok(count > 0, `${category}: no exported products found`);
  total += count;
  console.log(`${category}: ${count} pages passed`);
}
assert.ok(total >= 69, `Expected at least the 69 inventoried products; found ${total}`);
if (missingImages.length) console.error(`Missing local images (${missingImages.length}):\n${missingImages.join("\n")}`);
assert.equal(missingImages.length, 0, "Product pages must not contain broken local images");
console.log(`${total} product pages passed`);
