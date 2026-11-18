# CLAUDE.md — saadsafdar.dev portfolio

## 1. Project overview

Single-page personal portfolio for Rana Saad Safdar (AI & Automation Engineer), live at https://saadsafdar.dev/. It is authored in React but shipped as **static, prerendered HTML + CSS**: React runs only in dev and at build time, and production visitors get no React bundle, just small plain-DOM scripts (the `<details>` mobile menu, the carousel buttons, scroll reveals, and the screenshot lightbox). The page is a dark, calm, product-launch layout (one accent color, Inter only, one soft hero glow, no WebGL or animation library). The repo folder is still called `3D_portfolio` from an older Three.js version, which is archived and not used.

## 2. Tech stack and commands

- **Framework:** React 18 (authoring only), Vite 7, plain CSS (no Tailwind, no CSS modules, no UI library).
- **Runtime deps:** `react`, `react-dom`. **Dev deps:** `vite`, `@vitejs/plugin-react`, `@types/react*`. No lint/test/format tooling is configured.
- **Node:** `^20.19.0 || >=22.12.0`.
- **Hosting:** Vercel (project `3-d-portfolio`, linked in the gitignored `.vercel/`). No `vercel.json`: Vercel uses the `build` script and serves `dist/`. Custom domain `saadsafdar.dev`. Vercel Web Analytics is loaded from `/_vercel/insights/script.js` in `index.html`. This 404s in local dev; that is expected.

| Task | Command |
|---|---|
| Install | `npm install` |
| Dev server | `npm run dev` → http://127.0.0.1:5173 (full React app, HMR) |
| Production build | `npm run build` (runs `scripts/build.mjs`) |
| Preview build | `npm run preview` → http://127.0.0.1:4173/ |
| Deploy | Push to the Git branch Vercel tracks (normally `main`; verify in Vercel project settings), or run `vercel --prod` with the Vercel CLI. Confirm with the owner before deploying. |

**What `npm run build` does** (`scripts/build.mjs`):
1. Regenerates `public/robots.txt` and `public/sitemap.xml` from `site.url`. It stamps today's date as `<lastmod>`, so **every build changes the tracked `public/sitemap.xml`**.
2. Runs `vite build`. The `portfolio-metadata` plugin in `vite.config.js` fills in `%SITE_TITLE%`, `%SITE_DESCRIPTION%`, `%SITE_URL%` and injects the JSON-LD.
3. SSR-renders `src/entry-server.jsx` with `renderToString(<App/>)` and writes the result into `dist/index.html`'s `#root`.

Because production is static HTML, **React state, effects, and event handlers do not run for visitors**. Any interactivity has to be native HTML (`<details>`, radio groups, links, CSS) or plain DOM JS initialized in `src/main.jsx` (prod) and `src/development.jsx` (dev).

## 3. File structure

```
index.html              HTML shell: meta/OG/Twitter tags, favicons, font preload, Vercel analytics, JSON-LD placeholder
vite.config.js          Vite config + metadata/JSON-LD injection plugin; dev port 5173, preview 4173
package.json            Scripts (dev/build/preview), deps, Node engine range
scripts/build.mjs       Build: writes robots/sitemap, vite build, SSR prerender into dist/index.html
README.md               Human-facing project notes (content, build, image provenance)
CLAUDE.md               This file

src/
  main.jsx              Entry. DEV: loads development.jsx (client React). PROD: runs initializeNavigation/Carousels/Reveal/Zoom/HoverLoops()
  carousel.js           Plain-DOM enhancement for [data-carousel]: prev/next, "2 / 5" counter, arrow/Home/End keys, resize re-align
  reveal.js             Scroll reveals (fade + rise, IntersectionObserver). Only elements below the first screen; off under reduced motion
  hoverloop.js          Hover loop for [data-hover-video] frames (8K AI Films card): desktop pointers only, off under reduced motion, video fetched on first hover
  zoom.js               Tap-to-enlarge: turns a[data-zoom] screenshot links into a native <dialog> lightbox (link opens the image without JS)
  development.jsx       Dev-only createRoot render of <App/> (StrictMode)
  entry-server.jsx      render() via renderToString, used by the build prerender
  App.jsx               Section order (skip link, Navbar, main sections, Footer)
  navigation.js         Progressive enhancement: closes mobile <details> menu on link click / Escape;
                        opens a collapsed <details> when the URL hash targets it (e.g. #black-rock-electric)
  site.js               Site config (name, title, description, url, email, socials, resume, calendly) + asset() helper
  index.css             ALL styles: @font-face, tokens, components, breakpoints, reduced-motion
  constants/index.js    ALL content data: blackRockCaseStudy, fxTradingAgent, aiProducts, clientProjects (web builds),
                        automationProjects, projects, additionalProjects, experiences, reviewSummary, reviews
  components/
    Navbar.jsx          Sticky header: wordmark, desktop links (`navigation` array), Resume button, <details> mobile menu
    Hero.jsx            Centred hero: eyebrow, H1, subline, CTA row (button + Resume text link), trust line; soft glow (.hero::before)
    CaseStudy.jsx       01 Flagship launch (Black Rock Electric, #black-rock-electric): big title + one line, piece map (CSS radio group)
                        driving laptop/phone device frames, facts row, <details> full case study (Problem, Key features)
    AISystems.jsx       02 AI Systems: FX Trading Agent case study (NDA wording) + product cards (feature rows / compact)
    Carousel.jsx        Static scroll-snap screenshot carousel (used by AI product feature rows with a `gallery`; none at the moment)
    WebBuilds.jsx       03 Web builds: three open client-website cards (browser-frame screenshot, 2-image CSS radio switch, lightbox)
    Testimonials.jsx    Client feedback: CSS marquee of Fiverr reviews (duplicated, aria-hidden copy)
    AutomationSystems.jsx 04 AI Automation Systems: grid of ProjectCard
    Works.jsx           05 Engineering Projects: grid of ProjectCard + "More Projects" links
    Experience.jsx      06 Experience timeline
    About.jsx           07 About: portrait, facts, bio (copy is inline)
    Contact.jsx         08 Contact: big headline, mailto, Calendly button, socials
    Footer.jsx          Copyright (year fixed at build time), back-to-top
    ProjectCard.jsx     Card used by Automation + Engineering (image or architecture preview, tags, link);
                        exports isOrphan() so a lone last card spans the row (.technical-card-wide)
    ProjectDetails.jsx  Native <details> expander with overview + image gallery (used by Hydroponics)
    Shared.jsx          Arrow icon, ExternalLink, SocialLinks, SectionHeading, BrowserPreview (site screenshot in browser chrome)

public/                 Copied verbatim to dist/
  images/               Optimized WebP previews (see §5 for naming)
    automation/         n8n workflow screenshots
    web/                Web build screenshots: <slug>-{hero,inner}-{640,800,1280}.webp (16:10)
    hydroponics/        Hydroponics photos used by the card and ProjectDetails
    black-rock/         Black Rock launch screens, redacted copies: laptop screens 16:10 (640/800/1280), phone 5-mobile-phone-{348,696}
  video/                8k-ai-films-loop.mp4 (6s muted hover loop, 720px wide, ~210 KB)
  fonts/                inter-latin.woff2 (variable 100–900) + OFL.txt
  og-image.png          1200×630 social share image
  favicon.svg, favicon-32.png, apple-touch-icon.png
  Saad_Resume.pdf       Resume linked from nav, hero, socials
  robots.txt, sitemap.xml  Generated by the build; do not hand-edit

docs-private/           (gitignored, local only) Project facts, client content rules, image provenance. The repo is public: private details live here, never in tracked files
concepts/               Hero + first-scroll design concepts A/B/C (static HTML, dev server only, not built or linked). Reference for the redesign
src/assets/projects/    Retained original PNG/JPEGs. NOT imported or shipped. Hydroponics provenance README
archive/                (gitignored) Legacy 3D site build + source images (incl. the original automation WhatsApp JPEGs)
review.local/           (gitignored) Older audit screenshots/reports and verify scripts
audit/                  (gitignored) Playwright screenshots: roast/, concepts/, redesign-before/, redesign-after/, capture/, work/
.playwright-mcp/        (gitignored) Playwright MCP logs
.agents/, .codex/       (gitignored) Local AI-tooling config (skills, hooks), not part of the site
.env                    (gitignored) legacy, unused by the current build
```

## 4. Section order

Defined in `src/App.jsx`. The number in the heading eyebrow is hard-coded per component.

| # | Section | Anchor `id` | Component | Data source |
|---|---|---|---|---|
| — | Header / nav | — | `Navbar.jsx` | `site.js` |
| — | Hero | `#top` | `Hero.jsx` | `site.js`, `reviewSummary` |
| 01 | Flagship launch: Black Rock Electric | `#black-rock-electric` (opens the full case study); its heading is `#work` (nav target, does not open it) | `CaseStudy.jsx` | `blackRockCaseStudy` |
| 02 | AI Systems | `#ai-systems` (FX `#fx-trading-agent`) | `AISystems.jsx` | `fxTradingAgent`, `aiProducts` (published only) |
| 03 | Web builds (open, three cards) | `#client-work` | `WebBuilds.jsx` | `clientProjects` |
| 04 | AI Automation Systems | `#automation-systems` | `AutomationSystems.jsx` | `automationProjects` |
| 05 | Engineering Projects | `#technical-work` | `Works.jsx` | `projects`, `additionalProjects` |
| 06 | Experience | `#experience` | `Experience.jsx` | `experiences` |
| — | Client feedback / reviews | `#reviews` | `Testimonials.jsx` | `reviews`, `reviewSummary` |
| 07 | About | `#about` | `About.jsx` | inline copy |
| 08 | Contact | `#contact` | `Contact.jsx` | `site.js` |
| — | Footer | — | `Footer.jsx` | inline |

Nav links (`navigation` array in `Navbar.jsx`): Work `#work` (the flagship heading, start of the case study and project sections), Experience `#experience`, About `#about`, Contact `#contact`, plus the Resume button. They fit inline down to 768px; at ≤767px the nav uses the `<details>` menu (panel at `top: 70px`). Hero: View case study (`#black-rock-electric`, button) and Resume ↗ (PDF, plain text link); trust line = portrait + "4.9 from 43 Fiverr reviews" (`#reviews`) · "Also coaching founders on Claude Code" (`#contact`). Social links live in Contact and the footer, not the hero. A hash that targets a section containing a `<details>` opens it (`src/navigation.js`). If you add or reorder a numbered section, renumber the `number=` props, the case study eyebrow (hard-coded `01` in `CaseStudy.jsx`), and the Contact eyebrow (`08 / Let's talk` in `Contact.jsx`).

## 5. Adding a project card

### A. Automation or Engineering card (`ProjectCard`)

1. Open `src/constants/index.js` and append an object to `automationProjects` (section 02) or `projects` (section 03). Array order is display order.
2. Fields:

| Field | Required | Notes |
|---|---|---|
| `name` | yes | Card `<h3>`. Also the React key, so it must be unique. |
| `category` | yes | Eyebrow above title, e.g. `"AI Automation · Outreach"` (use ` · ` separators) |
| `description` | yes | One or two sentences. Only claim what is verifiable. |
| `tags` | yes | Array of strings (tech chips) |
| `image` | no | Path under `public/images/` **without** `.webp` and size suffix, e.g. `"outreach"` or `"automation/lead-auto-reply"`. `null` or omitted → architecture preview is shown instead |
| `alt` | if `image` | Descriptive alt text |
| `imageWidth` / `imageHeight` | no | Intrinsic size of the 800w file. Defaults are 800×450. Set them for non-16:9 images. |
| `imageFull` | no | Path (no `.webp`) to a full-res image. The preview links to it in a new tab |
| `imageCaption` | no | Small note shown above the eyebrow (e.g. "demo with mock data") |
| `architecture` | no | Array of step labels → rendered as `A → B → C` flow. It is the image placeholder if there is no `image`, otherwise it appears under the description |
| `role` | no | "Role" line |
| `url` | no | External link. If no `imageFull` is set, the image links here too. Use `null` for none |
| `linkLabel` | if `url` | Link text, e.g. `"View repository"`, `"View workflow"`, `"View documentation"` |
| `featured` | no | `true` = full-width two-column card (Hydroponics uses it). Use at most one per grid |
| `details` | no | `{ overview, capabilities: [..], sections: [{ title, description, images: [{ src, width, height, alt, caption }] }] }` → `<details>` expander. `src` follows the same rule as `image`, without `.webp` |

3. Images: put **two WebP files** in `public/images/` (or a subfolder):
   - `<image>.webp`: **800 px wide** (this is the `800w` src and default)
   - `<image>-400.webp`: **400 px wide** (the `400w` src)
   - optional `<imageFull>.webp`: ~1600 px wide full-frame copy
   - Preferred ratio **16:9 (800×450)**. The frame is a fixed 16:9 box with 20 px padding and `object-fit: contain`, so other ratios get letterboxed. Featured cards use a 3:4 frame (Hydroponics is 800×1067).
   - Keep files small. Existing previews are 3–30 KB at 800w; photos are up to ~130 KB.
4. Tags that repeat an architecture step (or part of one, e.g. `Gmail` in `Form / Gmail`) are dropped from the chip row (`uniqueTags()` in `ProjectCard.jsx`). Architecture arrows lead each step after the first, so a wrapped line never ends on an arrow.
5. Both grids are 2 columns on desktop. When the non-featured cards are odd in number, `isOrphan()` makes the last one a full-width two-column card (`.technical-card-wide`), so no cell is left empty.

### A0. Flagship case study (`blackRockCaseStudy`, section 01)

One object: `name`, `slug` (also the section id), `category`, `status`, `summary` (the launch's one line), `role`, `url`/`domain` (public site only), `problem`, `hosting` (label of the group that wraps the hosted pieces), `features[{ group, items[] }]`, and `pieces` in display order:

`pieces[{ key, name, line, detail, stack?: string[], hosted?, status?, screens[{ key, label?, frame: "laptop"|"phone", src, caption, alt }] }]`, plus `hostingLabel` (short map label) and `hosting` (full sentence, shown in the full case study)

- A piece with `screens` becomes a radio in the piece map (`#piece-<key>`); the first is checked by default. CSS `:checked` rules in `index.css` show `.view-<key>`, so a new piece key needs matching selectors there.
- A piece with no screens (3D rooms) renders as a non-interactive "Planned" item, never selectable.
- `portal` renders its screens with a small Schedule/Estimate switch; a piece with two screens renders laptop + phone together; one screen renders a single laptop.
- `hosted: true` pieces sit beside the hosting line. `line` is the map's short line; `stack` (array) renders as chips under the stage for the selected piece only.
- Laptop screens: `<src>-{640,800,1280}.webp` at 16:10. Phone screens: `<src>-{348,696}.webp` (portrait, 348×756). Every screen links to its largest file (`data-zoom`).
- Facts come only from `docs-private/`; check `docs-private/client-rules.md` before editing (it lists wording rules for this client).

### A2. AI product card (`aiProducts`, section 02)

Rendering: a product with `gallery` (carousel) or `image` + `url` (browser preview) becomes a full-width **feature row** (`.product-feature`: media left 1.25fr, copy right 1fr, stacks at ≤1023px). Without media it renders as a **product sheet** (`ProductSheet`, `.product-sheet`): the same weight as the FX case study, with title + one-line value | contribution, stack chips and link, then a Highlights band in three columns. Only fields that exist render; a product with only a description shows just its head.

1. Add the facts to `docs-private/projects-inventory.md` first, then an object to `aiProducts` in `src/constants/index.js` (array order = display order, after the flagship).
2. Fields: `name`, `slug` (unique key), `published` (**must be `true` to render**), `category`, `description`, optional `contribution`, `status` (short badge, e.g. `"In active development"`, never wraps), `tags`, `url` + `domain`, `image` (slug of a 1280×900 WebP set, same files as web-build rows in B).
3. The product grid is a single column: every product is a full-width row. `gallery` wins over `image`; with neither, the product renders as a sheet (see above).
4. **Missing link, stack or image:** omit the field and leave a `// TODO(owner): …` comment. Never publish placeholder text. Pending approval → `published: false`.
5. Optional rich fields: `highlights` (bullet strings), `stack` (`[{ name, detail? }]`, rendered as "Name detail" lines), `pieces` (`[{ name, detail, stack?, status? }]`, rendered as a "What’s in it" band under the row; `status` shows a badge such as "Planned"), `gallery` (`[{ src, caption, alt }]`, see 6).
6. **Carousel slides** (`gallery`): `src` is a path under `public/images/` without size or extension, e.g. `"black-rock/2-schedule"`. Provide `<src>-640.webp`, `-800.webp`, `-1280.webp` at **16:10** (640×400, 800×500, 1280×800), WebP quality ≈80. The frame is a fixed 16:10 box (`object-fit: cover`, top-aligned), so no layout shift. Captions are one short sentence; alt describes what is visible. Screenshots of private apps must be redacted copies (blur customer/staff names, addresses, emails, phones, codes, revenue) approved by the owner from a before/after contact sheet; never modify the source folders. Record provenance in `docs-private/image-provenance/<project>.md`, never in `public/` (publicly served) or other tracked files (the repo is public).
7. The FX case study (`fxTradingAgent`) is a single object: `summary`, `engagement`, `role`, `tags`, `stages[{ name, detail, gate? }]` (the `gate: true` stage is highlighted), `safetyNote`. Client work under NDA: never add performance numbers or client names.

### B. Web build card (`clientProjects`, section 03)

1. Append to `clientProjects` in `src/constants/index.js` (array order = display order). Fields: `name`, `slug`, `url`, `domain` (shown in the frame bar), `category`, `description` (one line), `contribution` (owner-provided text), `shots` (exactly two: `[{ key, label, alt }]`, the first is shown by default), optional `loop` (path under `public/` to a short muted MP4 played on hover).
2. Images: for each shot, `public/images/web/<slug>-<shot.key>-{640,800,1280}.webp` at **16:10** (640×400, 800×500, 1280×800), WebP quality ≈80. Capture at 1440×900 with the scrollbar and any chat widget or cookie banner hidden. OCR every capture and avoid sections that show real people's names, emails or phones.
3. The grid is 3 columns on desktop, one horizontal card per row at ≤1023px, and a single stacked column at ≤767px. Three cards fill the desktop row; a fourth would need a layout decision.
4. Hover loop (`loop`): keep it under 1.5 MB, no audio. `src/hoverloop.js` only creates the `<video>` on the first hover, on desktop pointers at ≥1024px and never under `prefers-reduced-motion`, so phones never request the file.

### C. "More Projects" text links

Append `{ name, url }` to `additionalProjects`.

### Image conversion (example)

```sh
python -c "from PIL import Image; im=Image.open('src.png').convert('RGB'); \
[im.resize((w, round(im.height*w/im.width)), Image.LANCZOS).save(f'public/images/name{s}.webp','WEBP',quality=82,method=6) for w,s in [(800,''),(400,'-400')]]"
```
(or `cwebp -q 82 -resize 800 0 src.png -o name.webp`). Strip EXIF and orient first for photos. Record the source in `docs-private/image-provenance/` when provenance matters.

## 6. Design tokens and conventions

**Colors** (`:root` in `src/index.css`):

| Token | Value | Use |
|---|---|---|
| `--bg` | `#111113` | Page background, header, review cards (also `theme-color`) |
| `--surface` | `#1c1c1f` | The one card surface: FX case, product sheets/cards, technical cards, review cards, the launch stage. The page itself is one tone (`--bg`); there are no muted bands |
| `--text` | `#f0efed` | Primary text |
| `--muted` | `#a7a6ad` | Secondary text, eyebrows, nav links |
| `--accent` | `#b79aee` | Lavender: highlights, categories, focus rings, primary button, selection |
| `--line` | `#303034` | Hairline borders / dividers |

Hard-coded supporting shades (not tokenized): image wells `#202023`, caption bar `#252528`, hover well `#29282d`, button hover `#242327`, button border `#4a494e`, accent hover `#c7b0f3`, text on accent `#17121f`, hero description `#bdbcc2`, tag text `#c4c2ca` / border `#38373d`, link underlines `#626067` / `#65616e`, preview border `#414046`. Reuse these. Don't invent new grays or colors.

**Typography:** Inter only (self-hosted variable woff2, `font-display: swap`, preloaded). Fallback `Arial, sans-serif`.
- Display scale (redesign): Hero H1 `clamp(40px, 5vw, 76px)` (mobile `clamp(36px, 10vw, 52px)`) / `-0.034em` (looser on purpose: no letters may touch) / lh 1.04, centred, max 16ch. Hero subline 17px on one line at desktop. Launch title `clamp(26px, 3.3vw, 50px)` (about 65% of the hero H1) / `-0.04em`. Section H2 `clamp(26px, 3.2vw, 48px)` (never above the launch title). FX case and product sheet titles `clamp(28px, 2.8vw, 40px)` (24px mobile). Contact H2 `clamp(44px, 6.5vw, 82px)`. Card H3 24px. Client H3 `clamp(30px, 3vw, 40px)`. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.
- Body: `p` line-height 1.7. Hero intro 18px. Section intro 16px muted. Card body 14px muted. Meta text 11–13px.
- Eyebrow (`.eyebrow`): 12px (11px on mobile; never smaller), weight 500, uppercase, `letter-spacing: 0.15em`, muted. A `<span>` inside is accent (used for section numbers `01 / Title`).
- The accent color on part of a heading (`.hero h1 span`) is the only text emphasis device.

**Spacing / layout:**
- Container: `min(1200px, 100% − 80px)`. ≤1023px: `100% − 56px`. ≤767px: `100% − 40px`. ≥1920px: max 1320px.
- Section padding: 104px → 80px (≤1023) → 64px (≤767). `.section-compact` = 0.8×.
- Section heading bottom margin 52px (34px mobile). Card padding 28px (24px mobile). Grid gap `36px 28px`.
- Radius: 6px cards/previews, 5px buttons, 3px tags/chips, 4px small controls. Borders are always 1px.
- One page tone: every section sits on `--bg`, separated by spacing only (no bands, no band edges). Cards are the only `--surface` step.
- The hero and the flagship launch are centred; every other section is left-aligned.
- About: heading across the top, then portrait (0.38fr, radius 10px) | copy (lead `clamp(22px, 2.2vw, 30px)`, body 16px `#bdbcc2`, facts in two columns, note), all text capped at 640px.
- Min hit target 44px (`.text-link`, `.button-small`, menu button). Buttons 48px.

**Breakpoints** (desktop-first `max-width`): `1023px` (tablet), `767px` (mobile: single column, menu becomes `<details>`), `359px` (very small). `min-width: 1440px` (taller hero) and `1920px` (wider container).

**Motion:** calm. Scroll reveals (`src/reveal.js`): fade + rise 24px, 560–620ms, `--ease-out: cubic-bezier(0.2, 0.7, 0.2, 1)`, 70ms sibling stagger (max 280ms), once; only for elements below the first screen, never nested, off under reduced motion; anything at or above the viewport is shown on scroll (fast scrolls, End key, hash jumps never leave hidden content) and everything is shown in print; the device stage only rises (transform, 14px, 500ms) so it is never hidden. Piece switch: 450ms transform-only. Hover/press: 0.18–0.2s color/background, `scale(0.985)` on map pieces. Other transitions: 0.18–0.2s `ease` color/border/background. Client preview lifts `translateY(-3px)` on hover. Text-link arrows nudge `translate(2px,-2px)`. Reviews marquee runs 70s linear and pauses on hover/focus; it becomes a scroll-snap row on mobile. `prefers-reduced-motion` disables all animation/transition and smooth scroll. No JS animation.

**Carousel:** `.carousel` (column: viewport, controls), `.carousel-viewport` (scroll-snap x mandatory, `scroll-snap-stop: always`, hidden scrollbar, focusable with accent focus ring, smooth scroll only under `prefers-reduced-motion: no-preference`), `.carousel-frame` (16:10, `#202023`), `figcaption` 13px muted, `.carousel-controls` hidden until `.is-ready`, `.carousel-button` 44×44 with the button border `#4a494e` / hover `#242327` / active `#29282d`, disabled at 0.35 opacity, counter in tabular numerals. A global `.visually-hidden` utility now exists. Feature rows: `.product-feature`, `.product-media` (`#202023` well, 1px divider), `.product-highlights`, `.product-stack`, `.product-pieces` (`--bg` band, 220px name column, 1px row dividers).

**Hero height budget:** the top of the flagship laptop must show in the first screen at 1440×800 and 1366×768 (measured: 56px and 42px visible). Anything added to the hero or the launch head has to give that height back.

**Hero CTA + trust:** `.hero-ctas` (primary button + `.hero-text-link` Resume ↗), `.hero-trust` (13px muted: 28px portrait + rating link, a `·` separator hidden on mobile, coaching link). Measured first screen: laptop top visible by 213px at 1440×900 and 96px at 1366×768.

**Scrollbar:** thin, `--bg` track, `#3a3940` thumb with a 3px `--bg` border, lavender on hover (`::-webkit-scrollbar*`). Firefox gets `scrollbar-color` inside `@supports (-moz-appearance: none)` only, because a standard `scrollbar-color` overrides the WebKit pseudo-elements in Chrome 121+.

**Hero glow:** `.hero::before`, a radial lavender at 17% opacity, blurred 40px. It is the page's only gradient: no gradient text, no glow behind devices.

**Launch components:** `.launch-head` (centred eyebrow, `.launch-title`, `.launch-value`), `.launch-system` (grid: `.piece-map` 0.31fr, min 270px | `.launch-stage` 1fr; ≤1023px the map becomes a horizontal pill row above the stage). The piece map is a plain list with no boxes: `.map-piece` = title (`.map-name`, muted, brighter on hover/focus) + one short `.map-line` (piece `line`, max ~8 words); selected = `#1b1b1e` fill + 2px lavender inset bar + white title. `.map-host` = small muted `.map-host-label` (`hostingLabel`) + `.map-host-items` with a 1px `#3a3940` vertical line beside the hosted pieces. `.map-piece-planned` (3D rooms) is dimmed with a `.map-status` "Planned" tag, never interactive. Stacks are not in the map: each view shows its piece's `stack` as `.tags.view-stack` chips under the detail, so only the selected piece's stack is visible. `.launch-stage` (`#1a1a1d`, radius 20px), `.device-laptop` / `.device-phone` (`#0b0b0c` bezel, 1px `#2c2c30` inner line, soft shadow), `.screen-switch` (pill), `.launch-facts`, `.case-details` (Problem, Key features, Hosting), `.lightbox` (native dialog).

**Web builds components:** `.web-grid`, `.web-card` (surface + the only 1px border; the screenshot sits flush, no inner boxes), `.web-frame-bar` (three dots + domain), `.web-shots` (fixed 16:10; `.web-shot-1/2` toggled by `.web-radio-1/2:checked`), `.web-switch` (two text labels with a dot, lavender when selected, 44px targets), `.web-copy` (category 12px, h3 20px, value 14px, contribution 13px, Visit site link), `.web-loop` (hover video, fades in once playing). Deliberately lighter than the AI Systems cards.

**Full case study** (inside the launch): `.case-details` (summary with the chevron beside the label, label swaps Read/Hide), `.case-body`, `.case-block` (1px dividers, h3 22px), `.case-lead`, `.case-features` (2 columns, 1 on mobile).

**AI Systems components:** `.fx-case` (surface card: head grid plus a `--bg` pipeline band), `.pipeline` (5-column `<ol>` that stacks into rows at ≤1023px; the gate stage gets a 1px accent outline and an accent-tinted ground `color-mix(accent 9%, bg)` ≈ `#1f1d26`), `.status-badge` (11px accent text, 1px 45%-accent border, 3px radius, nowrap), `.product-card` / `.product-card-compact`. `color-scheme: dark` is set on `:root`.

**Components/patterns:** `SectionHeading` (eyebrow + H2 + optional intro), `ExternalLink` (always `target=_blank rel="noopener noreferrer"` with an "(opens in a new tab)" aria-label), `.button` / `.button-primary` / `.button-quiet` / `.button-small`, `.tags`, `.architecture` flow chips, `.text-link`. Use `asset("images/…")` from `site.js` for public paths.

## 7. SEO setup

- `index.html`: `<title>`, description, canonical, `og:*` (type `profile`, image `og-image.png` 1200×630 with alt), Twitter `summary_large_image`, `theme-color`, SVG/PNG favicons, apple-touch-icon.
- Values come from `src/site.js` (`title`, `description`, `url`) through the Vite plugin. **Change SEO text in `site.js`, not `index.html`.**
- JSON-LD (`vite.config.js`): `ProfilePage` → `mainEntity` `Person` (name, jobTitle "AI & Automation Engineer", description, url, `sameAs` = GitHub, LinkedIn, Fiverr).
- JSON-LD also has `hasPart`: a `CreativeWork` for the in-page case study (`site.url#black-rock-electric`, from `site.caseStudy` in `site.js`).
- `robots.txt` (allow all + sitemap) and a single-URL `sitemap.xml` are generated by the build. The case study is in-page, so it adds no sitemap URL (fragments can't be listed). A separate `/work/...` page would need: a second HTML entry with its own meta, a page switch in `entry-server.jsx`, a render loop in `scripts/build.mjs`, page-aware entries in `main.jsx`/`development.jsx`, and a sitemap URL list.
- Full content is prerendered HTML, so it is crawlable without JS.

## 8. Content inventory (as of 2026-11-18)

**Flagship launch** (`blackRockCaseStudy`): Black Rock Electric, in-page at `#black-rock-electric`; piece map Crew portal (Schedule, Estimate), Building monitoring (laptop + phone), Website, 3D rooms (Planned); full case study in `<details>`; "In active development"; https://blackrockelectric.pro/ (public site only).

**AI Systems** (`fxTradingAgent`, `aiProducts`). Full detail and TODOs are in `docs-private/projects-inventory.md` (local only).
| Project | Rendered | Live link |
|---|---|---|
| News-Driven FX Trading Agent (case study, NDA) | yes | none (client work under NDA) |
| HealthPrep AI (text-only row: highlights + stack; screenshot TODO) | yes | https://www.healthprep-ai.com/ |
| EIDOPHOR Voice / MyVoiceAgent | no (`published: false` until highlights, stack and link exist) | TBD |

**Web builds** (`clientProjects`, section 03, open cards; hero + one inner screenshot each)
| Project | Category | Live link |
|---|---|---|
| 8K AI Films (hover loop) | AI / Digital media | https://8kaifilms.com/ |
| SusuKonnect | Fintech / Community savings | https://susukonnect.com/ |
| AI InterConnect | AI / B2B growth | https://www.aiinterconnect.com/ |

**AI Automation Systems** (`automationProjects`)
| Project | Image | Link |
|---|---|---|
| AI Lead Auto-Reply & Follow-Up | `automation/lead-auto-reply` | none (image opens full screenshot) |
| AI Customer Support Agent | `automation/customer-support` (mock data) | none (image opens full screenshot) |
| AI Job Outreach Automation | `outreach` | https://drive.google.com/file/d/1KChkhPhmar6gtm6Ptxj8foPxQDETVKM6/view?usp=drive_link |

**Engineering Projects** (`projects`)
| Project | Image | Link |
|---|---|---|
| AI-Powered IoT Hydroponics System (featured, with details) | `hydroponics/prototype` + 5 gallery images | none |
| Fighter Jet CNN Classifier | `classifier` | https://github.com/Mr-Engnr/fighterjet-cnn-classifier |
| Chicago Crime ETL Pipeline | `chicago` | https://github.com/Mr-Engnr/chicago-crime-etl |
| End-to-End AWS Data Solution | `aws` | https://drive.google.com/file/d/18jDXEx8sc_0sFcKDsXNtfu2gJ7KEzcjt/view?usp=drive_link |

**More Projects** (`additionalProjects`)
- Game Bidding Platform: https://github.com/Mr-Engnr/game-bidding-platform
- Enterprise Network Architecture: https://drive.google.com/drive/folders/1ItlTgba5bN4Yqpol6YGLm_LpkWXPISPN?usp=sharing

**Other content:** 4 experience entries (Data Pilot, Manafa Technologies, Exarta Labs, ACM UET Lahore). 10 Fiverr reviews quoted verbatim (summary: 4.9 avg / 43 reviews). Socials, resume, and Calendly are in `site.js`.

## 9. Rules

- **Keep the existing visual style.** Dark palette, the single lavender accent, Inter only, hairline 1px borders, small radii, uppercase eyebrows with `NN / Title`, restrained motion. Reuse the existing tokens, shades, and component classes. No new fonts, gradients, glows, shadows, or color families, and no rebrand.
- **Images:** WebP only for site imagery. Provide the size variants in §5, set `width`/`height`, use `loading="lazy"` + `decoding="async"` below the fold, and write meaningful `alt` text. Keep originals out of `public/` unless they are intentionally linked.
- **Responsive:** check 1440, 1024, 768, 390, and 360 px. There must be no horizontal scroll on mobile, and hit targets must stay ≥44px.
- **Accessible:** semantic sections with `aria-labelledby`, one H1, proper heading order, visible focus rings (accent outline), the "(opens in a new tab)" label on external links, honor `prefers-reduced-motion`, and keep AA contrast against `--bg`/`--surface`.
- **Static-first:** no client-side React features (state, effects, handlers) in components; they won't run in production. Prefer native HTML (`<details>`, anchors) and CSS.
- **Content honesty:** descriptions must not claim unverified stack, outcomes, or responsibilities (see README). Client contribution text is owner-provided.
- **Data lives in `src/constants/index.js`**, with facts mirrored in `docs-private/projects-inventory.md`. Add content there rather than hard-coding it in components.
- **No placeholders, no guessed facts.** Missing link, stack, or image → `TODO(owner)` comment and the field omitted. Unapproved projects stay out of tracked files entirely (list them in `docs-private/`). FX agent: never show performance numbers. Per-client content rules (wording, what never to mention, which links are private) are in `docs-private/client-rules.md`; read it before touching a client card.
- **The GitHub repo is public.** Never put client-private details in tracked files: no private hostnames, unreleased features, unreleased projects, end-client names, source folder paths, or internal decision history. Put them in `docs-private/` and refer to that folder.
- **Private screenshots:** work on copies only, exclude third-party product UI (e.g. the client's previous CRM), blur personal and client data, and get owner approval on a before/after contact sheet before anything enters `public/`.
- **Don't run `npm run build` casually.** It rewrites the tracked `public/sitemap.xml` (lastmod). If you must, run `git checkout public/sitemap.xml` afterwards unless a sitemap change is intended.
- SEO text belongs in `src/site.js`. Never hand-edit `public/robots.txt` / `public/sitemap.xml`.
- Update this file whenever sections, data shape, tokens, or commands change.

## Change log

- 2026-11-18: CLAUDE.md created from a full code read and Playwright audit. No site code changed.
- 2026-11-18: New section 01 **AI Systems & Products** (`AISystems.jsx`): FX Trading Agent flagship case study with a safety-gated pipeline, product cards, and client websites moved into a collapsed **Web builds** row (`ClientWorks.jsx` → `WebBuilds.jsx`; `#client-work` auto-opens it). Nav gained Automation and Engineering. A lone last card in the Automation/Engineering grids spans the row (`isOrphan`). WhatsApp source JPEGs removed from `public/`. README live-site note. `audit/`, `.playwright-mcp/`, `.agents/`, `.codex/`, `docs-private/` gitignored.
- 2026-11-18: HealthPrep AI and Black Rock Electric became feature rows. Black Rock gained a 5-slide scroll-snap carousel (`Carousel.jsx` + `src/carousel.js`) of owner-approved redacted screenshots and a "What’s in it" list. HealthPrep is text-only until an inside-product screenshot exists.
- 2026-11-18: Public-repo scrub. Client facts, content rules, unreleased projects, and image provenance moved to the gitignored `docs-private/`; tracked files only reference it. Building names blurred in carousel slides 4 and 5.
- 2026-11-18: Restructured around one flagship case study. New section 01 `CaseStudy.jsx` (Black Rock Electric, in-page `#black-rock-electric`: carousel card + native `<details>` with Problem, What I built, inline SVG `SystemDiagram.jsx`, Key features, Stack, Status). Order: hero → case study → AI Systems (02, muted) → Automation (03) → Engineering (04, muted) → Web builds (05, own section) → Experience (06) → Reviews → About (07) → Contact (08). Hero sub-line leads with systems; CTAs View case study + Resume. Nav adds Case study and uses the menu below 1024px. `flagshipSystem` → `fxTradingAgent`, `.flagship*` → `.fx-case*`. SEO: new description, JSON-LD `hasPart` for the case study. No sitemap change (in-page anchor).
- 2026-11-18: Visual redesign (branch `redesign`). Roast, then concepts in `concepts/` (A cinematic, B calm, C system map); owner chose a mix. Hero: centred and compact with one soft glow, so the flagship title and device top land in a 1440×900 first screen. Flagship: full-width launch (big title, one line) with a piece map (CSS radio group, Crew portal first, 3D rooms a non-interactive "Planned" item, stacks inside the map) driving CSS-drawn laptop/phone frames, tap-to-enlarge (`zoom.js`). Removed `SystemDiagram.jsx`, the separate Stack and Status blocks, and the 16:10 mobile slide; phone screen is `5-mobile-phone-{348,696}`. Display type scale, 12px eyebrows (11px mobile), `--surface` #19191c, scroll reveals (`reveal.js`). Slide 1's town name blurred.
- 2026-11-18: Final pass. Staff initials blurred in the phone screen (all sizes and the concept copy). AI products without screenshots render as product sheets with FX-card weight (HealthPrep complete; EIDOPHOR Voice waits on highlights, stack and link). Duplicate Automation chips dropped; architecture arrows no longer dangle. About relaid out (portrait | copy, facts row). Polish: cards on muted bands one tone step up, scroll reveals can no longer leave skipped content hidden, print shows everything.
- 2026-11-18: Hero copy (owner): "I build AI systems that run real businesses." (accent on "real businesses"), subline "From crew portals to live building monitoring, I design, build and ship the whole system.", plus a muted "Also coaching founders on Claude Code" link to #contact. Looser headline tracking. Hero and launch head tightened so the laptop top shows at 1440×800 and 1366×768. Styled scrollbar. Meta/OG description updated in `site.js`.
- 2026-11-18: Piece map simplified: no boxes, title + one short line per piece, selected = subtle fill + 2px lavender bar + white title, hosting shown as a small label and a vertical line, 3D rooms dimmed with a Planned tag. Stacks moved to chips under the stage (selected piece only); the full hosting sentence moved into the full case study.
- 2026-11-18: Hero and first screen simplified: hero = eyebrow, H1, subline, CTA (button + Resume text link), trust line; socials and the "What I build with" row removed (`Capabilities.jsx` deleted). Flagship title about 65% of the hero H1; section and card titles scaled under it. Nav: Work, Experience, About, Contact + Resume (Work → `#work` on the flagship heading; AI Systems is now `#ai-systems`; menu only ≤767px). One page tone, one card surface (`#1c1c1f`), no muted bands. Glow a little stronger.
- 2026-11-18: Cleanup. Customer-support screenshots re-cut without the browser address bar and with the mock customer's name blurred. EIDOPHOR Voice hidden (`published: false`) until it has highlights, a stack and a link.
- 2026-11-18: Web builds upgraded (branch `web-builds`): now section 03, open, directly under AI Systems (Automation → 04, Engineering → 05). Three small cards with fresh 1440×900 captures (hero + one inner section each, `public/images/web/`), a two-image CSS radio switch, the shared lightbox, and a hover loop on the 8K AI Films card (`src/hoverloop.js`, `public/video/`). The collapsed `<details>` row and the old 1280×900 previews are gone; `#client-work` stays as the section id.
