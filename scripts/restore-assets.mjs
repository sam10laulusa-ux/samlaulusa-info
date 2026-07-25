// Decodes base64 asset files back into public/ before build.
// Looks in assets-b64/ AND the repo root (files uploaded via GitHub web UI
// land at the root when a folder can't be created).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url)) + "/..";
const dest = join(root, "public");
const sources = [join(root, "assets-b64"), root];

let count = 0;
for (const src of sources) {
  if (!existsSync(src)) continue;
  for (const file of readdirSync(src)) {
    if (!file.endsWith(".b64")) continue;
    const rel = file.replace(/\.b64$/, "").replaceAll("__", "/");
    const data = Buffer.from(readFileSync(join(src, file), "utf8"), "base64");
    const out = join(dest, rel);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, data);
    console.log("restored", rel);
    count++;
  }
}
if (count === 0) console.warn("no .b64 assets found — building without image assets.");
