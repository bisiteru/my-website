# Phase Plan — grounded in BUILD_BRIEF.md v2

**Date:** 2026-11-10 · **Status:** awaiting approval · **Brief:** `BUILD_BRIEF.md` (now saved in repo)

---

## 🔴 Blocker — none of the supplied assets are in the repo

The brief is explicitly **photo-led** and forbids placeholders ("Never use placeholder text, stock
images, vector illustrations or generic graphics in place of real photos"). It depends on four
asset directories. **All four are absent** — from the working tree, from `main`, from
`codex/premium-lagos-training`, and from anywhere on this machine:

| Required (§2) | Contains | Status |
|---|---|---|
| `dust-and-wipes-photos/` | 56 web-ready JPEGs | ❌ **missing** |
| `dust-and-wipes-badges/` | ISSA, EHCON, PECAN logos | ❌ **missing** |
| `dust-and-wipes-logos/` | client logos incl. `skin101-clinics-logo.png` | ❌ **missing** |
| `dust-and-wipes-video/` | glass-polishing clips + poster | ❌ **missing** |

I checked every filename in the §8 photo map against `public/images/` (34 files):
**zero overlap.** The existing images are a different set entirely
(`ac-cleaning-office.jpg`, `balcony-washing.jpg`, `clinic-cleaning-1.jpg`…). Not one of
`chandelier-cleaning.jpg`, `lagos-team-uniform.jpg`, `bisi-teru-leading-training.jpg`,
`dust-and-wipes-branded-van.jpg` etc. exists.

**Consequence:** under the brief's own no-placeholder rule, every photo-dependent section would
have to be hidden. That is most of the site — hero collage, services cards, gallery, before/after,
clients, our people, Lagos team, training. Building those now would produce a site that is mostly
invisible. **Phases 1–3 below are deliberately sequenced to be asset-independent**, so real
progress continues while the files are sent.

**How to send them:** Google Drive works well (that's how the founder photo arrived). A single
zip of the four directories is ideal.

---

## ✅ What the brief resolves from my Phase 0 questions

| Question | Brief's answer |
|---|---|
| Canonical host? | **`www`** — §9.4: canonical → `https://www.dustandwipes.com/...` |
| Facility Management? | **Real service** — §6.2 #10, "old site listed it" |
| Old site to reconcile? | §2 names the live URL — but see below |

## ⚠️ Where the brief and the live site disagree

**1. There is no older site at `www.dustandwipes.com`.** §2 calls it the "old site (content +
structure source)", but my crawl proves it serves *this repo's* Next.js build on Vercel
(`server: Vercel`, 180× `/_next/`, the `logo-192` asset from commit `6ee3b02`). Zero Zyro
fingerprints. **So "freeze the existing structure" means freezing the current live site** — which
`URL_INVENTORY.md` has now captured, satisfying §3.1's first bullet. If a pre-Vercel Zyro version
needs reconciling, I need a separate source (Zyro export / Wayback / Search Console 404 report).

**2. `#office-cleaning` does not exist.** §3.1 lists it among anchors to keep. The live
`/services` has `#commercial-cleaning` instead (it was renamed in an earlier session). Per
"Add new anchors alongside, never instead", **I will restore `#office-cleaning` as an alias**
so any old external link still lands correctly. All other listed anchors verified present.

**3. Two §9 violations confirmed live** — both exactly as the brief predicts:
- `<meta name="keywords">` is present on every page → §9.2 says remove everywhere
- `og:url` is `https://dustandwipes.com` on **every** page → §9.3: "fixes the old and new sites
  pointing everything at the homepage"

**4. "Keep the existing analytics ID" (§3.1, §9.11) — there is no analytics on the site at all.**
No GA4, no GTM, no Vercel Analytics. So this is a genuine **[CONFIRM]**: a new property is needed.

**5. The codex branch is `codex/premium-lagos-training`** (slash, not dash as §1 writes). It
exists on the remote and contains `/training`, `/abuja`, `/lagos` and a `CityPage` component.
The `/training` page is well-written and matches the brief's four modules exactly — good source
material. ⚠️ But the branch is a net **−1,339 lines** against `main`: it heavily strips Hero,
Navbar, Footer, `/services` and the homepage. **I will port the Lagos/Training *direction*, not
merge the branch wholesale**, so current content and SEO work aren't lost.

---

## Phase 1 — Foundation & SEO integrity *(no assets needed)*

1. **Design tokens** from the logo and uniform: Deep Green primary, Brand Yellow accent, warm
   off-white, stone grey, near-black — as CSS variables. WCAG AA checked on every pairing (§4.2).
2. **Typography** (§4.3): Poppins *or* Montserrat headings + Inter body, self-hosted and subset,
   `font-display: swap`, fluid clamp scale, eyebrow labels.
3. **Layout system** (§4.4): 12-col, ~1240px max, 8px scale, 96–128/64px section padding, card radius.
4. **Content files** (§7): `content/{clients,gallery,testimonials,faqs,services}.json` + types,
   migrating existing content out of `constants.ts`. README docs on editing them.
5. **SEO fixes** (§9): remove `keywords` everywhere · per-page `og:url` + canonical → **www** ·
   fix sitemap/robots to www · `/privacy` + `/terms` into sitemap · de-duplicate the
   `LocalBusiness` JSON-LD currently on all 15 pages · preview deployments `noindex`.
6. **Structure-freeze script** (§3.1 final bullet): requests every `URL_INVENTORY.md` URL against
   a preview and reports status. Required: 100% 200 at identical paths. Runs every phase after.
7. **Restore `#office-cleaning`** as an alias anchor.

*No visual change beyond tokens. Verification: crawl diff + URL script.*

## Phase 2 — Component library & existing pages *(no assets needed)*

8. **Components** (§4.7): header (transparent→solid), Services mega-menu, mobile drawer, sticky
   mobile bar (Call · WhatsApp · Quote), button variants, stat counter, service card, sector tile,
   testimonial carousel, process steps, FAQ accordion, CTA band, quote form, map block, footer.
   Photo-bearing components get their image slot behind a flag that hides cleanly when empty.
9. **Services → 11** (§6.2): add Disinfection & sanitisation, Window & glass cleaning,
   Event & exhibition cleaning, Facility management support. All old anchors preserved, new ones
   added alongside. Plus How it works, recurring plans, guarantee.
10. **FAQs** (§6.9): keep all 10, add Lagos coverage, on-premises training, certificates,
    recurring plans, pest-control safety.
11. **Contact** (§6.10): add organisation, city, area fields + full service list + privacy note;
    keep delivery working (Formspree is confirmed working — move endpoint to an env var).
12. **Blog** (§6.11): index redesign with categories + featured, related-services block, author box.
13. **Accessibility + motion** (§4.8, §9.10): keyboard for menu/carousel/accordion,
    `prefers-reduced-motion`, focus states. Fix the "Post-construction cleaning01" label glitch (§4.10).

## Phase 3 — New pages, text-first *(no assets needed; photo slots hidden)*

14. `/training` (§6.3) — port from `codex/premium-lagos-training`, extend with delivery options,
    employer benefits, founder credibility, 4-step process, training FAQs.
15. `/abuja` (§6.4) and `/lagos` (§6.5) — port `CityPage`, unique copy per city, honest Lagos
    wording ("Lagos address · Site assessments by appointment"), no airport claim.
16. `/clients` (§6.7) — sector tiles, logo wall and case studies all driven by `clients.json`,
    rendering **only** `consent: true` entries. Seeded with Skin 101 at `consent: false`, so it
    stays hidden until written consent lands.
17. `/gallery` (§6.8) — masonry, filters, lightbox, before/after slider, driven by `gallery.json`
    (empty until photos arrive, so the page ships but shows nothing).
18. **Branded 404** (§5).

## Phase 4 — Assets 🔴 *blocked until the four directories arrive*

19. Copy photos/badges/logos/video in; build WebP/AVIF + responsive sizes (never re-crop or upscale).
20. Wire the §8 photo map; write accurate alt text per image.
21. Populate `gallery.json` (55 approved; `polished-tile-floor-after-cleaning.jpg` **on hold**),
    before/after pair, glass-polishing video at card size with poster + reduced-motion fallback.
22. Affiliation badges on white tiles, greyscale→colour, ISSA ≤64px.
23. Un-hide every photo-dependent section; apply the CSS colour grade (§4.5).

## Phase 5 — Verification & launch

24. URL check script: 100% 200 at identical paths; titles/H1s preserved.
25. Schema validation in Rich Results Test; `AggregateRating` only from genuine figures.
26. Lighthouse mobile ≥ 90 ×4, with screenshots.
27. WCAG 2.1 AA pass.
28. Screenshots at 360/768/1024/1280/1440.
29. Final `OPEN_ITEMS.md` report of every [PLACEHOLDER]/[CONFIRM].

---

## Sequencing

```
Phase 1 ─► Phase 2 ─► Phase 3 ─────────► Phase 5
(tokens,    (components,  (new pages,  ┌► (verify,
 SEO)        existing)     text-first) │   launch)
                                       │
Phase 4 (assets) ──────────────────────┘
   ▲ starts the moment the four directories arrive — can run parallel to 2–3
```

Phases 1–3 need **nothing from you but approval**. Phase 4 unblocks on the assets. One PR per
phase, each verified by the URL script before merge, so any phase can be reverted cleanly.
