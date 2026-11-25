# Portfolio revamp — handoff

Implemented for samlaulusa.info on November 24, 2026.

## Changes
- Dark editorial design, restrained blue-gray accent, Inter typography and responsive navigation.
- Home prioritizes practical AI and Makaia, followed by rugby branding and original photography.
- New AI & Technology index plus CRM and digital-commerce case studies; new Business page and Design route.
- Updated Stafford, Virginia location and entrepreneur/creative/AI-builder positioning. Community management is past experience.
- All four remaining creative case studies and all thirteen original gallery photographs preserved. All six supplied photographs added: five featured, one at the start of the archive.
- Full-screen native dialog viewer with keyboard navigation, Escape, focus return, and swipe handling. Responsive WebP files preserve original proportions; source JPEGs are unchanged.
- Eighteen prerendered routes, unique metadata, canonical URLs, Open Graph metadata, sitemap, robots.txt, structured data, and favicon.
- Existing contact provider and email/social links retained. Validation errors are linked to fields and the first invalid field receives focus.
- Sina HQ removed from active projects. Its source asset and old résumé remain recoverable in Git, but are no longer published. Old résumé downloads redirect to the updated printable résumé. Existing work URLs and ventures route have redirects.

## Content still needed
1. Confirm Ensign degree completion, award date, certificate names/dates and Excel certification. Until then only communications studies at Ensign are shown.
2. Supply the community association role's end date; it is labeled as a past role without inventing one.
3. Supply approved, redacted CRM screenshots and verify the current Gmail sync activation state. No private CRM records were copied into this repository.
4. Supply product-development examples with labels identifying AI concept, original design, or manufactured product. Supply an outreach workflow example and measured results before turning those areas into additional completed case studies.
5. Optional: approved uniform/product photos and a digital-commerce screenshot. Existing brand and marketing work is preserved.
6. Confirm inbox delivery from the retained FormSubmit setup. Client validation was tested without sending an unsolicited email. Provider activation and actual receipt are not verified.

## Evidence and limits
CRM claims were checked against the private repository README and release status (November 22, 2026) plus the Cloudflare domain configuration. The CRM is deployed privately; no email-sending capability is claimed. Background Gmail sync activation is not claimed. Commerce claims were checked against its repository README and live Cloudflare Pages configuration. No customer data, exact business counts, revenue, time-saving metrics, testimonials, or OpenAI affiliation claims were added.

## Updating photographs
Edit `src/data/photography.ts`: reorder `featuredPhotos` or move entries between it and `archivePhotos`. Keep three to five featured images. All six supplied files are already included.
For new originals, put JPEG files in a local folder, update the names in `scripts/prepare-photos.mjs`, then run `node scripts/prepare-photos.mjs <folder>`. It creates 480, 960 and 1800 pixel WebP variants in `public/photos`. Add descriptive alt text and a caption to the configuration. Run `node scripts/inspect-assets.mjs` to refresh image dimensions. Commit `public/photos` and the config; original Downloads files are never needed by production builds.

## Development and checks
`npm ci`, `npm run dev`, `npm run build`, `npm run typecheck`, `npm run lint`, `node scripts/validate-build.mjs`.
The build restores the existing encoded assets, builds Vite, and prerenders React routes. It retains the original React/TypeScript/Tailwind stack. No runtime dependency was added.
Desktop and 390px mobile browser checks covered Home, AI, Business, Design, Photography, About and Contact. Gallery controls, arrow keys, Escape/focus return, mobile navigation, and required-field validation were checked. Physical-device touch/swipe and actual inbox delivery remain unverified.

## Deployment and recovery
The actual production repository is `sam10laulusa-ux/samlaulusa-info`, connected to Cloudflare Worker `samlaulusa-info`; the similarly named `samlaulusa-portfolio` has the same original application/assets but is not the live build source.
Preserve the pre-revamp commit `9447b05` (tag `pre-revamp-2026-11-24`). Production uses the existing Workers Builds integration: `npm run build`, then `npx wrangler deploy`. Domain and account configuration are unchanged. Do not push checkpoint branches: this account's existing non-main trigger also runs `wrangler deploy`.
To roll back, revert the revamp commit on main and allow the existing build pipeline to deploy, or select the prior successful Worker version in Cloudflare. Do not force-push away history.
