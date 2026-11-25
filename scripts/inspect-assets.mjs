import sharp from "sharp";
import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
const files = readdirSync("public/assets").filter((f) => /\.jpg$/.test(f));
const tiles = [];
for (let i = 0; i < files.length; i++) {
  const buf = await sharp("public/assets/" + files[i])
    .resize(190, 150, { fit: "contain", background: "#222" })
    .png()
    .toBuffer();
  tiles.push({ input: buf, left: (i % 5) * 210, top: Math.floor(i / 5) * 180 });
  const label = Buffer.from(
    `<svg width="200" height="28"><text x="3" y="20" fill="white" font-size="13">${files[i]}</text></svg>`,
  );
  tiles.push({
    input: label,
    left: (i % 5) * 210,
    top: Math.floor(i / 5) * 180 + 150,
  });
}
mkdirSync("qa", { recursive: true });
await sharp({
  create: {
    width: 1050,
    height: Math.ceil(files.length / 5) * 180,
    channels: 3,
    background: "#111",
  },
})
  .composite(tiles)
  .png()
  .toFile("qa/asset-review.png");
const sizes = {};
for (const dir of ["assets", "photos"])
  for (const file of readdirSync("public/" + dir)) {
    if (!/\.(jpg|png|webp)$/.test(file)) continue;
    const m = await sharp("public/" + dir + "/" + file).metadata();
    sizes["/" + dir + "/" + file] = { width: m.width, height: m.height };
  }
writeFileSync("src/data/image-sizes.json", JSON.stringify(sizes, null, 2));
