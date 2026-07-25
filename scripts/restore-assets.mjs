// Decodes base64 asset files (assets-b64/) back into public/ before build.
// Binary files are stored as base64 text so the whole site lives in git.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url)) + "/..";
const src = join(root, "assets-b64");
const dest = join(root, "public");

for (const file of readdirSync(src)) {
  if (!file.endsWith(".b64")) continue;
  const rel = file.replace(/\.b64$/, "").replaceAll("__", "/");
  const data = Buffer.from(readFileSync(join(src, file), "utf8"), "base64");
  const out = join(dest, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, data);
  console.log("restored", rel);
}
