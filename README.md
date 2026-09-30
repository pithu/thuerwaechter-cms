# thuerwaechter.de

Monorepo (lerna) with two packages:

- `packages/react`: the website (React + Snowpack). Loads its content from Sanity at runtime.
- `packages/cms`: Sanity Studio for editing the content (project `7shyam02`, dataset `production`).

## Build

```bash
npm install
npm run build            # builds both packages
```

The website ends up in `packages/react/build/` (including `.htaccess`, copied by `postbuild`).

Run locally:

```bash
cd packages/react
npm start                        # dev server with hot reload
npx serve build -l 8080          # test the production build
```

Use port 8080: Sanity only accepts whitelisted origins (CORS), otherwise the loading spinner never stops.

## Updating the site

| Change | What to do |
|---|---|
| **Content** in Sanity Studio | Nothing, the site loads it live. |
| **Code** in `packages/react` | Build and upload via FTP, see below. |
| **Schema** in `packages/cms` | `npm run deploy` in the repo root (requires Sanity login). |

### Deploying code changes

1. Build: `npm run build`
2. Upload the **contents** of `packages/react/build/` via FTP to the web root of the Hetzner webspace.
   Enable hidden files in the FTP client so `.htaccess` is included.

   | Upload | Don't upload |
   |---|---|
   | `.htaccess` | `_snowpack/` |
   | `index.html` | `dist/` |
   | `js/` | |
   | `css/` | |
   | `blumenwiese.jpg` | |
   | `landbit-logo.svg` | |

   `_snowpack/` and `dist/` are unbundled intermediate output and aren't used by the site.
3. Optional: delete old files in `js/` and `css/` on the server first. File names contain hashes, so every build adds new ones.

## Hosting

- Hetzner webspace, DNS managed in konsoleH. `thuerwaechter.de` and `www` point to `213.133.104.45`.
- `.htaccess` redirects everything to `https://www.thuerwaechter.de`.
- Whitelist new domains/ports in Sanity under manage.sanity.io → API → CORS origins.
