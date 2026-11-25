import React from "react";
(globalThis as typeof globalThis & { React: typeof React }).React = React;
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../src/App";
import { routes, pageMeta } from "../src/data/seo";
const base = readFileSync("dist/index.html", "utf8");
const escape = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const route of routes) {
  const meta = pageMeta(route);
  const url = "https://samlaulusa.info" + (route === "/" ? "" : route);
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${escape(meta.description)}" />`,
    )
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<meta\s+property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escape(meta.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escape(meta.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"[^>]*>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(
        <StaticRouter location={route}>
          <App />
        </StaticRouter>,
      )}</div>`,
    );
  if (route === "/journal")
    html = html.replace(
      "</head>",
      '<meta name="robots" content="noindex"/></head>',
    );
  const dir = "dist" + (route === "/" ? "" : route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + "/index.html", html);
}
writeFileSync(
  "dist/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    routes
      .filter((r) => !["/journal", "/resume/print"].includes(r))
      .map(
        (r) =>
          `<url><loc>https://samlaulusa.info${r === "/" ? "" : r}</loc></url>`,
      )
      .join("") +
    "</urlset>",
);
console.log(`Prerendered ${routes.length} pages and sitemap.`);
