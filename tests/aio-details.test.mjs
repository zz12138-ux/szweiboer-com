import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const inventory = readFileSync(join(root, "app/all-in-one-pcs/aio-detail-images.ts"), "utf8");
const page = readFileSync(join(root, "app/all-in-one-pcs/AioDetail.tsx"), "utf8");
const matches = [...inventory.matchAll(/^\s+(?:"([\w-]+)"|([\w-]+)): \{ files: \[([^\]]+)\], extension: "(\w+)" \}/gm)];
assert.equal(matches.length, 15, "Every published AIO model must have a reviewed list");
assert.match(page, /className="detailWhatsapp"/);
assert.match(page, /Chat on WhatsApp/);
assert.match(page, /<b>LEAD TIME<\/b>/);
assert.doesNotMatch(page, /detailPrimaryCta|View Alibaba product source/);

for (const match of matches) {
  const slug = match[1] || match[2];
  const ids = match[3].split(",").map(Number);
  assert.ok(ids.length > 0, `${slug}: no selected detail images`);
  for (const id of ids) {
    const ext = match[4] === "mixed" ? (slug === "t1-s" ? "png" : id === 1 ? "jpg" : "png") : "webp";
    const filename = join(root, "public/all-in-one-pcs", slug, "detail", `${String(id).padStart(2, "0")}-detail.${ext}`);
    assert.ok(existsSync(filename) && statSync(filename).size > 200, `${slug}: missing or empty ${filename}`);
  }
  console.log(`${slug}: ${ids.length} reviewed details`);
}
