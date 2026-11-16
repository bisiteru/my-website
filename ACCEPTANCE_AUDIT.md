# Acceptance Audit — BUILD_BRIEF §10

**Date:** 2026-11-13 · **Branch:** `claude/cleaning-company-website-PJw6I`
**Reproduce:** `npm run build && npx next start` then
`node scripts/acceptance-audit.mjs http://localhost:3000`

**Result: 44 of 44 automated checks pass.** Every check inspects the served HTML, the
repository or a real browser — nothing is asserted without evidence.

---

## §10 checklist

### ☑︎ URL check: every inventory URL returns 200 at the same path; titles/H1s preserved
`scripts/url-check.mjs` → **31/31 pass**: 17 frozen URLs at identical paths, 5 new
additive URLs, 9 `/services` anchors. Titles, H1s and meta descriptions verified unchanged
against `URL_INVENTORY.md` on all 8 original pages. Run after every phase since Phase 1.

### ☑︎ All old anchors on /services land on the right section
All 9 resolve, including **`#office-cleaning`**, restored as an alias of
`#commercial-cleaning` so older external links still land (§3.1 "alongside, never instead").

### ☑︎ All old content present
| Block | Evidence |
|---|---|
| Services + bullets | 11 services, each with 4 features |
| How it works | 4 steps on `/` and `/services` |
| Recurring plans | weekly / bi-weekly / monthly |
| Guarantee | "we return and put it right free of charge" |
| Why choose us | 6 points |
| Stats | 650+ clients · 5.0 · 10 reviews · since 2017 |
| Testimonials | 5 real, in the carousel |
| Badges | ISSA / EHCON / PECAN with confirmed status wording |
| FAQs | 15 (10 original + 5 new), as real headings + `FAQPage` schema |
| Blog posts | 7/7 return 200 at original slugs |
| Values + timeline | 4 values, 2017→2026 |
| Districts | 18 Abuja districts |
| Phones, hours, promise | both numbers, Mon–Sat 7am–6pm, 2-hour reply |
| Socials | all four |
| Privacy / Terms | both render |

### ☑︎ New pages complete
`/training` (4 modules, audience, founder credibility) · `/abuja` (districts, office,
track record) · `/lagos` (relaunch framing, Ikoyi/VI/Lekki axis, address, Skin 101 case
study) · `/clients` (**12 consented clients from `clients.json`**) · `/gallery`
(**55 photos from `gallery.json`**, 9 filters, lightbox, before/during slider).

### ☑︎ Design system: tokens + component library; screenshots at 360/768/1280/1440
Tokens in `globals.css` (colour from the logo only, fluid type, 8px spacing, 1240px
container) — see `DESIGN_TOKENS.md` with WCAG evidence for all 15 pairings.
**16 components** + showcase at `/components` (noindex, not in nav, absent from sitemap).
**16 screenshots** captured at all four widths; **no horizontal overflow at any width**.

### ☑︎ Honesty rules respected
| Rule | Evidence |
|---|---|
| No Lagos walk-in wording | "Lagos address · Site assessments by appointment"; zero "visit our office" |
| No airport claim | zero occurrences of "airport" site-wide |
| Honest training captions | "leading a professional training session" |
| Only consented logos | every entry `consent: true`; `LogoWall` returns `null` otherwise |
| Past ≠ current | wall headed "Organisations we've served" |
| No unsupported discount claim | removed from `/services` and 2 FAQ answers after the client confirmed no discount structure exists |

### ☑︎ Only supplied photos; privacy edits intact; none upscaled; accurate alt text
55 supplied photos, no stock imagery anywhere. The on-hold
`polished-tile-floor-after-cleaning.jpg` appears on **no** page. **186 images across all
pages, 0 missing alt text.** Upscaling verified two ways: requesting a 963px source at
`w=1920` serves **963px** (the optimiser caps), and a browser check at 1920px found **no
image laid out wider than its native width**. That check caught one real violation —
`office-disinfection-misting` (480px, marked "card size only" in §8) was rendering at
556px in a service section; swapped for a 1242px photo and a guard added.

### ☑︎ SEO items in §9 done; schema validates; previews noindex
Self-referencing canonical **and** own `og:url` on all 13 pages, all on `www`.
Zero `keywords` tags. Valid JSON-LD across the site: `LocalBusiness` +
`ProfessionalService`, 11 × `Service`, `FAQPage`, `BreadcrumbList`, `Article`,
`ImageGallery`. Sitemap: 20 URLs, all `www`, `/components` excluded. `robots.txt`
declares the sitemap and disallows `/components`. Preview deployments emit
`noindex, nofollow, nocache` unless `VERCEL_ENV === production`.

### ☑︎ Contact form delivers; WhatsApp/phone links work on mobile
Verified in a real browser by intercepting the request: POSTs all **9 fields + subject**
to `https://formspree.io/f/mzdyqpka`, success state renders, failure path shows a
WhatsApp/phone fallback. **Every `wa.me` link strips the `+`** — a leading `+` silently
breaks WhatsApp deep links. `tel:` links have spaces stripped.

⚠️ **One gap:** Formspree is blocked by this sandbox's network policy, so the final
delivery hop could not be exercised here. The form also gained fields in Phase 3, so the
owner's earlier live test does not cover the current version. **Send one real submission
from the preview before launch** — see `LAUNCH_PLAN.md`.

### ⚠️ Lighthouse mobile ≥ 90 ×4
| Page | Perf | A11y | Best practices | SEO |
|---|---|---|---|---|
| `/` | 91 | **100** | **100** | **100** |
| `/services` | 92 | **100** | **100** | **100** |
| `/clients` | 93 | **100** | **100** | **100** |
| `/contact` | 95 | **100** | **100** | **100** |
| `/gallery` | **84–89** | **100** | **100** | **100** |

Accessibility, best practices and SEO are **100 on every page, in every run**. Accessibility
started at 89 and was raised by fixing four real defects: an `aria-label` on a div with no
role, a 4.34:1 footer label, 8px carousel dots below the 24px target minimum, and a logo
link whose accessible name omitted its visible text.

**Performance cannot be certified from this sandbox.** Identical code returned 69, 84, 86,
89, 90, 91, 94 and 95 across runs, with the *worst* score once coinciding with the *best*
LCP. On `/gallery` the LCP element is the hero paragraph, which paints at **128 ms** in a
real browser — the 4.3 s Lighthouse figure comes from its simulated 4G + 4× CPU throttling
on a contended shared CPU. **Re-measure on the Vercel preview before launch**; if
`/gallery` is genuinely below 90 there, the fix is to paginate it rather than ship 55
images in one DOM.

### ☑︎ List of all open [PLACEHOLDER] / [CONFIRM] items
`OPEN_ITEMS.md`. Nothing unresolved is faked or placeheld — each is hidden until supplied.

**Remaining, none blocking launch:**
1. An **"after"** photo for the post-construction job → the slider is honestly labelled Before/During until then
2. **Staff consent** for named first-name profiles → team photos show roles only, nobody named
3. **Engagement years** → deliberately omitted; `"since": YYYY` can be added later

---

## Changes this audit forced

An audit that finds nothing has usually tested nothing. This one changed the site twice:

1. **`office-disinfection-misting` was being stretched** 480px → 556px in a service
   section, which §8 explicitly warned against. Swapped for a 1242px photo; a guard now
   fails the audit if any "card size only" photo is used in a full-width section.
2. **The gallery loaded 6 images eagerly.** With 55 photos that starves the webfont, so
   the eager batch is now 2 with explicit `fetchPriority`.

It also corrected itself twice: one check miscounted by one because the TypeScript
interface matched its own regex, and another hardcoded "0" into its evidence string so it
could never report a real failure. Both were rewritten to assert observable behaviour.
