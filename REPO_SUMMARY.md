# Repo Summary — dustandwipes.com rebuild

**Audit date:** 2026-11-10 · **Branch:** `claude/cleaning-company-website-PJw6I` · **HEAD:** `6ee3b02`
**Status:** Phase 0, item 3 of 4 — complete. Items 1–2 blocked (see `URL_INVENTORY.md`).

---

## 1. Framework & build

| Item | Value |
|---|---|
| Framework | **Next.js 16.2.6** (App Router, Turbopack), React 19.2.4 |
| Language | TypeScript 5 (strict via `tsconfig.json`) |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`; `@import "tailwindcss"` in `globals.css` — no `tailwind.config.js`) |
| Animation | `framer-motion` ^12.38 |
| Icons | `lucide-react` ^1.14 |
| Also installed | `@headlessui/react` ^2.2.10, `react-hook-form` ^7.75 — **both currently unused** (candidates for removal) |
| Scripts | `dev`, `build`, `start`, `lint` (no test script — no test suite exists) |
| Rendering | Fully static. `npm run build` prerenders 20 routes; blog posts are SSG via `generateStaticParams`. No server actions, no API routes, no database. |

> ⚠️ **AGENTS.md warns this Next.js version differs from training data.** Bundled docs live at
> `node_modules/next/dist/docs/` and must be consulted before writing code in later phases.
> Already verified against them this session: the app-icon file convention.

## 2. Routing & page inventory (current rebuild)

App Router, all under `src/app/`. **9 page routes + 7 SSG blog posts = 16 HTML URLs.**

| Route | File | Type | Metadata |
|---|---|---|---|
| `/` | `page.tsx` | Static | ✅ title + description |
| `/about` | `about/page.tsx` | Static | ✅ + keywords |
| `/services` | `services/page.tsx` | Static | ✅ + keywords |
| `/blog` | `blog/page.tsx` | Static | ✅ + keywords |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | SSG ×7 | ✅ `generateMetadata` + OG/Twitter |
| `/contact` | `contact/page.tsx` → `ContactContent.tsx` | Static + client | ✅ + keywords |
| `/faqs` | `faqs/page.tsx` → `FaqContent.tsx` | Static + client | ✅ + keywords |
| `/privacy` | `privacy/page.tsx` | Static | ✅ title |
| `/terms` | `terms/page.tsx` | Static | ✅ title |
| `/not-found` | `not-found.tsx` | 404 | — |

**Server/client split pattern:** `/contact` and `/faqs` are server pages (owning `metadata`) that render
a `"use client"` content component. Preserve this split — collapsing them back into client components
silently removes their metadata.

**Blog slugs:** `why-trained-cleaners-matter`, `how-often-should-you-deep-clean`,
`signs-of-termite-infestation`, `office-cleaning-productivity`, `eco-friendly-cleaning-tips`,
`pest-control-abuja-rainy-season`, `move-out-cleaning-checklist`.

### Anchor IDs on `/services`
Section-level: `#cleaning`, `#pest-control`, `#training-consultancy`.
Card-level (rendered from `service.id`): `#residential-cleaning`, `#commercial-cleaning`,
`#deep-cleaning`, `#pest-control`, `#post-construction`, `#carpet-upholstery`, `#training-consultancy`.

> ⚠️ Two `SERVICES` entries still point `href` at the generic `/services#cleaning`
> (`post-construction`, `carpet-upholstery`) although card anchors exist for both.
> Low-priority inconsistency; not user-visible today.

## 3. Content locations

**Single source of truth: `src/lib/constants.ts`** (no CMS, no MDX, no database).

| Export | Count | Consumed by |
|---|---|---|
| `COMPANY` | — | Navbar, Footer, Contact, FAQs, blog, JSON-LD |
| `SERVICES` | 7 | `/services`, `ServicesGrid` |
| `AFFILIATIONS` | 3 | homepage badge bar |
| `SERVICE_AREAS` | 18 | homepage districts |
| `WHY_US` | 6 | `WhyUs` |
| `TESTIMONIALS` | 5 | `Testimonials` |
| `STATS` | 4 | `StatsSection` |
| `FAQS` | 10 | `/faqs` + FAQPage JSON-LD |
| `BLOG_POSTS` | 7 | `/blog`, homepage teaser, sitemap |
| `LOGO_URL` | — | `LogoImg` |

**Blog article bodies are NOT in `constants.ts`** — they live in a `blogContent` map inside
`src/app/blog/[slug]/page.tsx`, typed as `ContentBlock[]` supporting three forms:
plain string (paragraph), `{heading}`, and `{image, alt, caption?}`. All 7 posts have full bodies.

**Components:** `layout/` (Navbar, Footer, WhatsAppButton) · `sections/` (Hero, ServicesGrid,
StatsSection, WhyUs, Testimonials, CTABanner) · `ui/` (LogoImg).

## 4. Images

`public/images/` — **34 files, 11 MB total.** Served via `next/image` (and CSS `background-image`
in Hero + service cards, which bypasses optimisation).

Brand assets: `logo-192.png` (navbar/orbital), `logo-full.png` (master), `og-image.jpg` (1200×630
social card), `founder-photo.jpg`.
Icons: `src/app/favicon.ico` (16/32/48), `icon.png` (192), `apple-icon.png` (180).

> ⚠️ **Oversized originals remain**: `sofa-cleaning.jpg` 1.1 MB, `post-construction-exterior.jpg`
> 1.1 MB, `post-construction-interior/-living-room.jpg` 952 KB each, `balcony-washing.jpg` 868 KB.
> Also `sofa-cleaning.webp` (1.1 MB) is an **unreferenced duplicate** — safe to delete.
> Several files are byte-identical pairs under different names (e.g. `ac-cleaning-office` /
> `ac-unit-cleaning`, `home-fan-cleaning` / `fan-cleaning-residential`).

## 5. Form handling

Single form: `/contact` → `src/app/contact/ContactContent.tsx`.

- Plain `useState` + `fetch` POST to **Formspree** `https://formspree.io/f/mzdyqpka` (hard-coded, not an env var)
- Fields: name, phone (required), email, service, frequency, location (required), message
- Handles success, error (with WhatsApp/phone fallback copy) and loading states
- **Confirmed working on production** by the owner
- `react-hook-form` is installed but unused — this form is hand-rolled

## 6. Redirects, headers, config

- **No `vercel.json`**, no `middleware.ts`, no `redirects()`/`headers()`/`rewrites()` in `next.config.ts`
- **`next.config.ts` contains only** an `images.remotePatterns` allowance for `assets.zyrosite.com`
  — now **dead config**: the logo was self-hosted in `6ee3b02` and nothing loads from that host
- **No security headers** (CSP, HSTS, X-Frame-Options, Referrer-Policy) are set anywhere
- ⚠️ **This is the critical gap for a rebuild/migration**: there is currently *no* redirect
  infrastructure. If the old site's URLs differ from the new ones, every old URL will 404 and its
  accumulated SEO value will be lost. Establishing the old→new redirect map is the single
  highest-risk item in this project.

## 7. SEO, analytics, verification

**Present:**
- `src/app/layout.tsx` — `metadataBase`, title template, 18 keywords, OpenGraph + Twitter cards
  (`/images/og-image.jpg`), `robots` directives
- **JSON-LD**: `LocalBusiness` (layout, with founder, geo, opening hours, `aggregateRating`
  5★/7 reviews, 7-item `hasOfferCatalog`, 4 `sameAs` socials), `FAQPage` (`/faqs`),
  `Article` + `BreadcrumbList` (blog posts)
- `src/app/sitemap.ts` — 6 static routes + 7 blog posts
- `src/app/robots.ts` — allow all, points to sitemap
- `public/google7f2fc51ac653ece2.html` — **Google Search Console** verification (file method)

**Absent:**
- ❌ **No analytics of any kind** — no GA4, no GTM, no `@vercel/analytics`, no `<Script>` tags anywhere
- ❌ `/privacy` and `/terms` are **missing from `sitemap.ts`**
- ❌ No per-page `canonical` tags (the site-wide one was removed as a bug — see note below)
- ❌ No Bing/IndexNow verification

> 📌 A site-wide `alternates.canonical` was **deliberately removed** earlier because it pointed every
> page at the homepage. Per-page canonicals may be reintroduced, but must be per-page.

## 8. Deployment

- GitHub `bisiteru/my-website` → **Vercel**, auto-deploys from **`main`**
- Custom domain `dustandwipes.com` is live and pointing at Vercel
- Work lands on `claude/cleaning-company-website-PJw6I` → PR → merge to `main` → deploy
- PRs #4 and #5 merged; working tree clean, no uncommitted changes

## 9. Known-good invariants (do not regress in Phases 1–5)

1. `/contact` + `/faqs` server/client split — needed for their metadata
2. No site-wide canonical pointing at `/`
3. `wa.me` links must strip `+` from `COMPANY.whatsapp` (a `+` breaks WhatsApp deep links)
4. Favicon is a real brand icon at `src/app/favicon.ico`, not the `create-next-app` default
5. Logo is self-hosted; do not reintroduce the `assets.zyrosite.com` dependency
6. Hero orbital scales `0.78` at `lg`, full at `xl` — it overflows its column otherwise
7. `aggregateRating` must match the real Google review count (currently 7)
