# Phase Plan (proposed) — awaiting approval

**Date:** 2026-11-10 · **Status:** 🟡 PROVISIONAL

> ⚠️ **This plan is not grounded in `BUILD_BRIEF.md`.** That file does not exist in the repo, in
> any branch, in git history, or in session uploads — so Phases 1–5 below are inferred from the
> Phase 0 instructions plus what the audit found. **Treat it as a starting point for discussion,
> not a committed scope.** Send the brief and I will rewrite this against it.

---

## Phase 1 — SEO & indexing integrity *(highest value, lowest risk)*

Fixes every issue the crawl surfaced. No visual change.

1. **Settle one canonical host.** Decide apex vs `www`, then make `sitemap.ts`, `robots.ts`,
   `metadataBase` and OG URLs all agree. Today the site serves `www`, the sitemap lists apex, and
   OG tags use apex.
2. **Per-page canonical tags** via `alternates.canonical` — *per page*, never site-wide
   (a site-wide one pointing at `/` was a real bug removed earlier).
3. **Redirect map** from Google Search Console → Pages → "Not found (404)". Implement as
   `redirects()` in `next.config.ts` (permanent 301s).
4. **Add `/privacy` + `/terms` to the sitemap**; write real meta descriptions for both.
5. **De-duplicate JSON-LD** — `LocalBusiness` + the full 7-service `OfferCatalog` currently renders
   on all 15 pages. Keep it on `/` (and `/contact`), reference by `@id` elsewhere.
6. **Analytics** — none exists. Recommend Vercel Analytics (one line, privacy-friendly, no cookie
   banner) or GA4 if you want demographics. *Your call — see Questions.*

**Risk:** very low. **Verification:** re-run this crawl; diff before/after.

## Phase 2 — Content structure & accessibility

7. **Section headings for 6 blog posts.** Only `why-trained-cleaners-matter` uses the `{heading}`
   block; the rest are unbroken prose. The renderer already supports headings — this is purely
   editorial.
8. **FAQ questions become headings.** Currently `<span>` inside buttons: the page has one H2 for
   10 questions. Fix markup while keeping the accordion and `FAQPage` JSON-LD.
9. **Blog card titles** — featured card uses H2, the other six H3; normalise.
10. **Accessibility pass** — heading order, focus-visible states, form labels/`aria-describedby`,
    contrast re-check, reduced-motion handling for the hero orbital.

**Risk:** low. **Verification:** crawl heading structure; keyboard pass; axe audit.

## Phase 3 — Performance

11. **Image weight.** `public/images/` is 11 MB / 34 files. `sofa-cleaning.jpg` 1.1 MB,
    `post-construction-exterior.jpg` 1.1 MB, two more at 952 KB, `balcony-washing.jpg` 868 KB.
    Convert to WebP/AVIF at sensible dimensions.
12. **Delete dead assets** — `sofa-cleaning.webp` (1.1 MB, unreferenced), byte-identical duplicate
    pairs (`ac-cleaning-office`/`ac-unit-cleaning`, `home-fan-cleaning`/`fan-cleaning-residential`),
    and the unused `next.svg`/`vercel.svg`/`file.svg`/`globe.svg`/`window.svg` from the starter.
13. **CSS `background-image` → `next/image`** in Hero and service cards, so the LCP image is
    optimised, responsive and preloaded.
14. **Dead config** — remove the `assets.zyrosite.com` `remotePatterns` entry (nothing uses it);
    drop unused deps `@headlessui/react` and `react-hook-form`.
15. **Hero orbital** re-renders ~20×/sec via `setInterval`; move to CSS transform or rAF.

**Risk:** low–medium (image swaps are visible). **Verification:** Lighthouse before/after; screenshots.

## Phase 4 — Hardening & resilience

16. **Security headers** — CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
    (none currently set).
17. **Form robustness** — move the Formspree endpoint to an env var; add honeypot/rate-limiting;
    consider a `/contact/thank-you` URL so conversions are measurable.
18. **Content architecture** — `/about` milestones are hard-coded in the page while all other
    content lives in `constants.ts`; unify.
19. **Resolve the "Facility Management" gap** — advertised in the hero orbital but has no service
    entry, section or anchor. Either add it as a service or stop advertising it.
20. **Fix two stale `href`s** — `post-construction` and `carpet-upholstery` point at the generic
    `/services#cleaning` though their own card anchors exist.

**Risk:** low, except CSP (needs testing against inline JSON-LD + framer-motion).

## Phase 5 — Growth

21. **Local SEO depth** — per-district landing pages (Gwarinpa, Maitama, Wuse, Asokoro…) are the
    single biggest organic opportunity for a local service business; `SERVICE_AREAS` already lists 18.
22. **Service-specific pages** — individual URLs per service instead of anchors, so each can rank.
23. **Editorial cadence** — publishing schedule; `Service` + `Review` schema.
24. **Conversion** — quote-form analytics, WhatsApp click tracking, trust signals near CTAs.

**Risk:** scope-dependent. Phase 5 is a menu, not a commitment.

---

## Sequencing

```
Phase 1 ──► Phase 2 ──► Phase 3 ──► Phase 4 ──► Phase 5
(SEO)       (content)    (perf)      (harden)    (growth)
```

Phase 1 first because indexing problems compound daily. Phases 2 and 3 are independent and could
run in parallel. Phase 5 should not start until 1–4 are stable.

**Per phase:** branch → change → `npm run build` → crawl/screenshot verification → PR → your
review → merge → Vercel deploy. One PR per phase, so anything can be reverted cleanly.
