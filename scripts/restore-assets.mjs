// Decodes base64 asset files (assets-b64/) back into public/ before build.
// If assets-b64/ is missing, the build continues without images.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url)) + "/..";
const src = join(root, "assets-b64");
const dest = join(root, "public");

if (!existsSync(src)) {
  console.warn("assets-b64/ not found — building without image assets.");
  process.exit(0);
}

for (const file of readdirSync(src)) {
  if (!file.endsWith(".b64")) continue;
  const rel = file.replace(/\.b64$/, "").replaceAll("__", "/");
  const data = Buffer.from(readFileSync(join(src, file), "utf8"), "base64");
  const out = join(dest, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, data);
  console.log("restored", rel);
}
