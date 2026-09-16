# Rana Saad Safdar — Portfolio V2

A minimal, client-first portfolio authored with React, Vite, and CSS. Production builds include static HTML and a small native-menu enhancement. React runs during development and build time only; it is not shipped to visitors. Content and navigation also work without JavaScript. No WebGL or animation library is used.

## Local development

Requires Node.js 20.19+ or 22.12+ (the supported Vite Node.js release lines).

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173.

## Production preview

```sh
npm run build
npm run preview
```

The preview path follows the production URL in `src/site.js`. With the current production URL, open http://127.0.0.1:4173/.

## Content

- `src/site.js`: name, production URL, email, GitHub, optional LinkedIn and resume.
- `src/constants/index.js`: client work, technical projects, and experience.
- `src/components/`: page sections.
- `src/index.css`: responsive layout and design tokens.
- `public/images/`: optimized project previews.
- `src/assets/projects/`: retained original technical project images.

The production URL is taken from the public GitHub repository homepage and was verified to serve the current portfolio. LinkedIn uses the profile supplied by the owner. Resume actions open `public/Saad_Resume.pdf` directly. Client contribution text is owner-provided.

Client screenshots were captured from their public websites for this portfolio. Descriptions identify the products; they do not claim an unverified technology stack, responsibility, or business outcome. Update screenshots and descriptions when those sites change.

The Hydroponics project is published first in Engineering Projects. Its native Project details disclosure includes the prototype, architecture, hardware, and dashboard photographs. Image provenance is documented in src/assets/projects/hydroponics/README.md.

## Build and SEO

`npm run build` builds the client bundle and prerenders the full React page. Metadata and JSON-LD derive from `src/site.js`. The build regenerates `public/robots.txt` and `public/sitemap.xml` from the same URL. If hosting under a path, publish robots.txt at the origin root as well where hosting permits.

The production artifact is `dist/`. The old tracked `docs/` build and unused assets are preserved under `archive/legacy/`, outside the production build. Configure the host to build with `npm run build` and serve `dist/`; do not deploy until the domain and content are approved.

Images use local WebP variants, fixed dimensions, and lazy loading. Inter is self-hosted with its OFL license. The hero has no image dependency. Reduced-motion preferences disable transitions and smooth scrolling.

Contact uses a mailto link to the email already documented in this repository; no EmailJS configuration is used or bundled. Existing private environment files remain local.

No ESLint configuration existed in the original repository.
