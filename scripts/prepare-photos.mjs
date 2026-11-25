import sharp from "sharp";
import { mkdirSync } from "node:fs";
const source = process.argv[2];
if (!source)
  throw new Error(
    "Usage: node scripts/prepare-photos.mjs <directory-with-original-jpgs>",
  );
mkdirSync("public/photos", { recursive: true });
for (const name of [
  "DSC03714",
  "DSC03719",
  "DSC03816",
  "DSC03839",
  "DSC03951",
  "DSC04032",
]) {
  for (const width of [480, 960, 1800])
    await sharp(`${source}/${name}.jpg`)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(`public/photos/${name}-${width}.webp`);
}
console.log("Created 18 responsive photo assets; original files unchanged.");
