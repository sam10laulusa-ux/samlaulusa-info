import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import assert from "node:assert/strict";
const walk = (dir) =>
  readdirSync(dir).flatMap((n) =>
    statSync(dir + "/" + n).isDirectory()
      ? walk(dir + "/" + n)
      : [dir + "/" + n],
  );
const pages = walk("dist").filter((p) => p.endsWith(".html"));
let links = 0,
  images = 0;
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${page}: single H1`);
  assert.match(html, /<link rel="canonical" href="https:\/\/samlaulusa.info/);
  assert.doesNotMatch(
    html,
    /Sina HQ|SinaHQ|Auxili|Orem, Utah|Expected Aug 2026|I manage HOA/,
  );
  for (const [, path] of html.matchAll(/(?:src|href)="(\/[^"#]*)"/g)) {
    if (path === "/" || path.startsWith("/#")) continue;
    assert(
      existsSync("dist" + path) || existsSync("dist" + path + "/index.html"),
      `${page}: missing ${path}`,
    );
    links++;
  }
  for (const [, attrs] of html.matchAll(/<img\s([^>]+)>/g)) {
    assert.match(attrs, /alt="[^"]+"/);
    images++;
  }
}
const photos = readFileSync("dist/photography/index.html", "utf8");
assert.equal((photos.match(/class="photo-item"/g) || []).length, 19);
assert.equal((photos.match(/View photograph:/g) || []).length, 19);
assert(!existsSync("dist/sam-laulusa-resume.pdf"), "Old résumé not published");
assert(existsSync("dist/_redirects"));
assert(existsSync("dist/robots.txt"));
assert(existsSync("dist/sitemap.xml"));
console.log(
  `PASS: ${pages.length} prerendered pages, ${links} internal links/assets, ${images} image descriptions; all 19 photos preserved; stale claims absent.`,
);

const titleSet = new Set(pages.map(p => readFileSync(p,"utf8").match(/<title>([\s\S]*?)<\/title>/)?.[1]));
assert(titleSet.size >= 16, "Page-specific titles must be generated");
assert.match(readFileSync("dist/ai-technology/makaia-crm/index.html","utf8"), /<meta property="og:title" content="Makaia CRM/);
