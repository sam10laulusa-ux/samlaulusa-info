# Sam Laulusa — samlaulusa.info

React, TypeScript, Vite and Tailwind portfolio, deployed to the existing Cloudflare Worker `samlaulusa-info`.

## Development

```sh
npm ci
npm run dev
npm run build
npm run typecheck
npm run lint
node scripts/validate-build.mjs
```

The build restores original encoded assets, builds the application and prerenders 18 routes. Responsive new photographs are committed in `public/photos`.

## Content

- Biography, experience and original projects: `src/data/content.ts`
- AI case studies: `src/data/ai.ts`
- Featured photographs, order, captions and alternative text: `src/data/photography.ts`
- Search metadata and prerendered routes: `src/data/seo.ts`

See [HANDOFF.md](HANDOFF.md) for the content verification checklist, photo instructions, test coverage and rollback details.

## Deployment

Production source: `sam10laulusa-ux/samlaulusa-info` (not the similarly named portfolio repository). The existing Cloudflare Workers Builds trigger runs `npm run build` followed by `npx wrangler deploy`. Keep `wrangler.json` pointed at the existing Worker and `dist` assets.

The existing non-main trigger also deploys; avoid pushing unreviewed branches or checkpoint branches. Use the `pre-revamp-2026-11-24` tag for the original source checkpoint. The older résumé and retired venture assets remain in Git but are not published.
