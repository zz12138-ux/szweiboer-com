import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
const industrialProductSlugs = ["ks-20", "kp-68", "kp-58", "kp-26", "kp-36", "kp-18", "ks-10"];
import { join } from "node:path";

const root = process.cwd();
const home = readFileSync(join(root, "out/index.html"), "utf8");
const page = readFileSync(join(root, "out/industrial-equipment/index.html"), "utf8");
const sitemap = readFileSync(join(root, "out/sitemap.xml"), "utf8");
const image = join(root, "out/assets/images/industrial-equipment-pda.webp");

assert.match(home, /href="\/industrial-equipment"[^>]*>Industrial equipment/);
assert.match(home, /09(?:<!-- -->)? \/ PRODUCT CATEGORY/);
assert.match(home, /<option>Industrial equipment<\/option>/);
assert.match(page, /Industrial equipment\./);
assert.match(page, /illustrative category visual, not a listed model/);
assert.match(page, /Concept image only/);
assert.match(page, /src="\/assets\/images\/industrial-equipment-pda\.webp"/);
assert.match(page, /Chat on WhatsApp/);
assert.match(page, /href="https:\/\/api\.whatsapp\.com\/send\/\?phone=\d+&amp;text=[^"]+"/);
assert.match(page, /rel="canonical" href="https:\/\/www\.szweiboer\.com\/industrial-equipment\/"/);
assert.match(sitemap, /https:\/\/www\.szweiboer\.com\/industrial-equipment\//);
assert.ok(statSync(image).size > 0);
for (let index = 1; index <= 4; index++) {
  const common = join(root, `out/assets/images/industrial-equipment/common-${String(index).padStart(2, "0")}.webp`);
  assert.ok(statSync(common).size > 0, `Missing common image ${index}`);
}
for (const slug of industrialProductSlugs) {
  assert.match(page, new RegExp(`href="/industrial-equipment/${slug}/"`), `${slug} missing from catalog`);
  assert.match(sitemap, new RegExp(`https://www\\.szweiboer\\.com/industrial-equipment/${slug}/`), `${slug} missing from sitemap`);
  const html = readFileSync(join(root, `out/industrial-equipment/${slug}/index.html`), "utf8");
  assert.match(html, /class="productOverview"/);
  assert.match(html, /class="detailWhatsapp"[^>]*>Chat on WhatsApp/);
  assert.match(html, /class="detailImages"/);
  assert.match(html, /class="thumbnailRow"/);
  assert.match(html, /supplier listing artwork and may retain the supplier brand/);
  assert.match(html, /category illustrations, not photos of this model/);
  for (let index = 1; index <= 2; index++) {
    const asset = join(root, `out/assets/images/industrial-equipment/${slug}-${String(index).padStart(2, "0")}.webp`);
    assert.ok(statSync(asset).size > 0, `${slug}: missing product image ${index}`);
  }
  for (let index = 1; index <= 4; index++) {
    assert.match(html, new RegExp(`common-${String(index).padStart(2, "0")}\\.webp`));
  }
}
console.log("Industrial equipment category and seven product pages, six-image galleries, CTA and sitemap passed");
