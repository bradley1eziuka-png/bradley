# Master painting website

Master template. Don't customize here — generate a client with `npm run create-client` from the workspace
root (see `../README.md`). Develop the template itself with:

```bash
npm install
npm run dev        # preview
npm run build      # production build (runs sitemap script first)
npm run typecheck && npm run lint
```
Config: `src/config/site.config.json` (validated by `src/config/schema.ts`). Default copy: `src/config/defaults.ts`.

## Bradley Interior Painting LLC — open items
- Folder name contains an apostrophe, which breaks the TanStack router build. Rename the folder (no `'`) before running `npm run dev`/`build`.
- Confirm: street address/ZIP, operating days, founding year, insurance/touch-up terms, BBB status.
- Add: logo (`branding.logo.src`), valid social URLs (`business.social`), real project photos (`branding.images`), form endpoint (`form`), `seo.siteUrl`.
- Gallery images are stock/illustrative and labeled as such.
