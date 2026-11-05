import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
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
assert.match(page, /illustrative category visual, not a verified product listing/);
assert.match(page, /Concept image only/);
assert.match(page, /src="\/assets\/images\/industrial-equipment-pda\.webp"/);
assert.match(page, /Chat on WhatsApp/);
assert.match(page, /href="https:\/\/api\.whatsapp\.com\/send\/\?phone=\d+&amp;text=[^"]+"/);
assert.match(page, /rel="canonical" href="https:\/\/www\.szweiboer\.com\/industrial-equipment\/"/);
assert.match(sitemap, /https:\/\/www\.szweiboer\.com\/industrial-equipment\//);
assert.ok(statSync(image).size > 0);
console.log("Industrial equipment category route, CTA, image and sitemap passed");
