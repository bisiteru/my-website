# Content Inventory — dustandwipes.com

**Audit date:** 2026-11-10
**Status:** 🟡 **Part A complete** (rebuild side) · 🔴 **Part B cannot proceed from the live site**

The brief asks for every content block per **old** page, marked **in-rebuild / missing / changed**.

**The crawl showed there is no old site to compare against.** `www.dustandwipes.com` serves this
repo's Next.js build on Vercel (see `URL_INVENTORY.md` → Finding #1): `server: Vercel`, 180×
`/_next/`, and the `logo-192` asset added in commit `6ee3b02`. No Zyro fingerprints, and exactly
the 15 routes defined in `src/app/`.

So *missing* / *changed* can only be decided against a **separate source of the old Zyro content**
— a Zyro export, the Wayback Machine, or screenshots. **Please pick one (see Questions).**

Part A below is the authoritative catalogue of what the rebuild contains today; once an old-content
source exists, it fills the right-hand columns unchanged.

All rebuild content lives in **one file**: `src/lib/constants.ts` (plus blog bodies in
`src/app/blog/[slug]/page.tsx`).

---

## Part A — What the rebuild contains today ✅

### Company details — `COMPANY`
| Field | Value | vs old site |
|---|---|---|
| Name | Dust & Wipes Limited | ⏳ |
| Tagline | Restoring a Clean World | ⏳ |
| Phone 1 | 0809 970 0001 | ⏳ |
| Phone 2 | 0809 845 7721 | ⏳ |
| WhatsApp | +2348099700001 | ⏳ |
| Email | infodesk@dustandwipes.com | ⏳ |
| Address | Suite D15, Irama Plaza, 4th Avenue, Gwarinpa, Abuja. | ⏳ |
| Founded | 2017 (March) | ⏳ |
| Socials | instagram / facebook / x / linkedin — all `@dustandwipes` | ⏳ |

### Services — `SERVICES` (7)
| # | Title | Bullets | Anchor | vs old |
|---|---|---|---|---|
| 1 | Residential Cleaning | 4 | `#residential-cleaning` | ⏳ |
| 2 | Commercial Cleaning | 4 | `#commercial-cleaning` | ⏳ |
| 3 | Deep Cleaning | 4 | `#deep-cleaning` | ⏳ |
| 4 | Pest Control | 4 | `#pest-control` | ⏳ |
| 5 | Post-Construction Cleaning | 4 | `#post-construction` | ⏳ |
| 6 | Carpet & Upholstery Cleaning | 4 | `#carpet-upholstery` | ⏳ |
| 7 | Training & Consultancy | 4 | `#training-consultancy` | ⏳ |

Each entry carries `title`, `shortDesc`, `description`, `image`, `href`, 4 `features`, `category`.

> ❓ The old site may list services the rebuild dropped. The homepage hero orbital advertises
> **"Facility Management"**, which is **not** in `SERVICES` — so it is promoted but has no service
> entry, no page section and no anchor. Flagged for resolution (see Questions).

### FAQs — `FAQS` (10)
Service areas · booking · product safety for children/pets · presence during cleaning · session
duration · what a deep clean includes · pest-control frequency · satisfaction guarantee · monthly
plans · staff vetting. → Rendered on `/faqs` **and** emitted as `FAQPage` JSON-LD. ⏳ vs old.

### Testimonials — `TESTIMONIALS` (5)
Mimie Dikko · Chinemerem Ukpai · Mrs. Nnam · Chibuike Amaraegbu · Oloyede Omolola — each with
role, 5★ rating, full text. ⏳ vs old (old site may carry more).

### Stats — `STATS` (4)
650+ Happy Clients · 500+ Projects Completed · 100+ Trained Professionals · 5.0★ Google Rating.
*(650 and 5.0★/7 reviews confirmed accurate by owner.)* ⏳ vs old.

### Badges — `AFFILIATIONS` (3)
ISSA · EHCON · PECAN. ⏳ vs old.

### Values — `WHY_US` (6)
Premium Cleaning Quality · Vetted, Professional Staff · Affordable, Transparent Rates ·
Eco-Friendly Products · Reliable & On-Time · 100% Satisfaction Guarantee. ⏳ vs old.

### Timeline — `/about` milestones (4, inline in `about/page.tsx`, not in constants)
2017 Founded (March) · 2018 Pest control + first 5★ reviews · 2022 500+ clients ·
2026 650+ clients. ⏳ vs old.

> ⚠️ Milestones are hard-coded in the page, inconsistent with every other content type.
> Candidate to move into `constants.ts`.

### Districts — `SERVICE_AREAS` (18)
Gwarinpa, Maitama, Asokoro, Wuse I & II, Jabi, Lugbe, Kubwa, Lifecamp, Katampe, Jahi, Apo,
Guzape, Garki, Central Area, Kado, Utako, Karu, Nyanya. ⏳ vs old.

### Founder story — `/about`
Full Bisi Teru narrative (~6 paragraphs) + signature avatar + captioned portrait card.
Supplied directly by the owner, so **not** expected on the old site. ✅ new.

### Blog — `BLOG_POSTS` (7)
All 7 have complete article bodies. One (`why-trained-cleaners-matter`) was written to brief this
session and carries inline captioned images. ⏳ vs old — the old site may hold posts not migrated.

### Other page content (inline, not in constants)
`/privacy`, `/terms` — full inline copy. ⏳ vs old (legal text should be compared carefully).

---

## Part B — Old-site reconciliation 🔴 NEEDS AN OLD-CONTENT SOURCE

For each old page, every content block gets one of:

| Mark | Meaning |
|---|---|
| ✅ **in-rebuild** | present and equivalent |
| ❌ **missing** | on old site, absent from rebuild — **recover or consciously drop** |
| ✏️ **changed** | present but materially different (wording, figures, claims) |

Highest-risk categories to check, based on Part A:
1. **Services the rebuild dropped** — esp. whether the old site had a Facility Management page
2. **Testimonials** — easy to lose; social proof is high value
3. **Blog posts** — any old post not migrated is a dead URL needing a redirect
4. **Legal copy** — `/privacy` + `/terms` wording may differ from what was published
5. **Contact details** — a stale phone/address on either side
6. **Any page with no rebuild equivalent** — drives the redirect map

### Verified from the live crawl (rebuild side confirmed in production)

These are **confirmed live**, not just present in the repo:

| Block | Live evidence |
|---|---|
| 7 services + all anchors | all 10 anchor IDs resolve on `/services` |
| 10 FAQs | `FAQPage` JSON-LD with 10 Question/Answer pairs |
| 7 blog posts | all 7 URLs return 200 with unique titles/descriptions |
| Company NAP, founder, hours, 5★/7 reviews | `LocalBusiness` JSON-LD on every page |
| Founder story | `/about` H2 "Born from a Simple but Powerful Desire" |
| Values, timeline, districts, stats, badges | homepage + `/about` H2s render as expected |

**No content block catalogued in Part A is missing from production.** The rebuild is internally
complete and self-consistent; the only open question is what the *old Zyro site* had that this
set may not cover.
