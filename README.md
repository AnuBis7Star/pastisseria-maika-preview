# Pastisseria Maika Astro

Static preview website for Pastisseria Maika, a local bakery in Reus. The site is built with Astro for a fast client preview and can later be moved to Hostinger, another static host, or a custom domain.

## Tech Stack

- Astro static output
- TypeScript content/data files
- Global CSS
- Small vanilla JavaScript enhancement for the mobile menu and product filters
- GitHub Actions deployment for GitHub Pages previews

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── .nojekyll
│   ├── assets/
│   └── scripts/site.js
├── src/
│   ├── components/
│   ├── data/site.ts
│   ├── layouts/
│   ├── pages/index.astro
│   ├── styles/global.css
│   └── utils/paths.ts
├── astro.config.mjs
├── package.json
└── package-lock.json
```

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Main Files To Edit

- `src/data/site.ts`: business details, navigation, product gallery, and opening hours.
- `src/pages/index.astro`: page structure and section markup.
- `src/styles/global.css`: global visual styling.
- `public/assets/`: static images copied directly into the build.
- `public/scripts/site.js`: lightweight browser behavior.

Public asset paths should be stored without a leading slash, for example `assets/img/logo-maika.jpg`. Use `withBase()` from `src/utils/paths.ts` when rendering public asset URLs so previews work under the GitHub Pages repository path.

## GitHub Pages Preview

This project is configured for a GitHub Pages project preview:

- `astro.config.mjs` sets `site: "https://anubis7star.github.io"`.
- `astro.config.mjs` sets `base: "/pastisseria-maika-preview/"`.
- `.github/workflows/deploy.yml` builds the Astro site and deploys `dist/`.
- `public/.nojekyll` disables Jekyll processing on GitHub Pages.

In GitHub, check:

```text
Settings > Pages > Source: GitHub Actions
```

Preview URL:

```text
https://anubis7star.github.io/pastisseria-maika-preview/
```

## Future Production Hosting

The `base` value is only needed for this GitHub Pages project preview. For Hostinger or a custom domain hosted at the root, remove `base` from `astro.config.mjs` or update it to match the final hosting path.

For Hostinger or another static host:

```bash
npm run build
```

Upload the contents of `dist/` to the hosting provider.

## Author

Created as a static preview website by Alin Nascutiu.
