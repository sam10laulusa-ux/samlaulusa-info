// Decodes base64 asset files back into public/ before build.
// Binary files are stored as base64 text so the whole site lives in git.
// Large assets may be split into parts: name.b64.0, name.b64.1, ...
// Scans both assets-b64/ and the repo root (web UI uploads land there).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url)) + "/..";
const src = join(root, "assets-b64");
const dest = join(root, "public");

// key -> { parts: Map<index, text> }
const singles = new Map();
const multis = new Map();

function addFile(dir, file) {
  const text = readFileSync(join(dir, file), "utf8").trim();
  const partMatch = file.match(/^(.*\.b64)\.p?(\d+)$/);
  if (partMatch) {
    const [, key, idx] = partMatch;
    if (!multis.has(key)) multis.set(key, new Map());
    multis.get(key).set(Number(idx), text);
  } else if (file.endsWith(".b64")) {
    singles.set(file, text);
  }
}

if (existsSync(src)) for (const f of readdirSync(src)) addFile(src, f);
for (const f of readdirSync(root)) {
  if (f.endsWith(".b64") || /\.b64\.p?\d+$/.test(f)) addFile(root, f);
}

// Multi-part entries win over a single-file entry with the same base name.
for (const key of singles.keys()) {
  if (multis.has(key)) singles.delete(key);
}

let count = 0;
function restore(key, text) {
  const rel = key.replace(/\.b64$/, "").replaceAll("__", "/");
  const data = Buffer.from(text, "base64");
  const out = join(dest, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, data);
  console.log("restored", rel);
  count++;
}

for (const [key, text] of singles) restore(key, text);
for (const [key, parts] of multis) {
  const joined = [...parts.keys()].sort((a, b) => a - b).map((i) => parts.get(i)).join("");
  restore(key, joined);
}

if (count === 0) {
  console.warn("restore-assets: no .b64 files found, skipping");
}
