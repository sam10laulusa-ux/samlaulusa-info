# Sam Laulusa — Portfolio (samlaulusa.info)

Personal portfolio site. React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Develop

```bash
npm install
npm run build   # restores binary assets from assets-b64/ into public/, then builds
npm run preview
```

## Deploy to Cloudflare (one click)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sam10laulusa-ux/samlaulusa-portfolio)

Cloudflare Workers Builds runs `npm run build` and deploys `dist/` as static assets
(`wrangler.json` is already configured, including SPA fallback).

## Notes

- Images and the résumé PDF live in `assets-b64/` as base64 text and are decoded
  into `public/` by `scripts/restore-assets.mjs` during every build.
- Site content is edited in `src/data/content.ts`.
