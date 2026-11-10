# Open Items — [PLACEHOLDER] / [CONFIRM] register

**Opened:** 2026-11-10 · Required by `BUILD_BRIEF.md` §10 final checkbox.

Every item the brief marks `[PLACEHOLDER]` or `[CONFIRM]`, plus items the audit found that the
brief assumes exist but don't. Per §0, anything unresolved here **must be hidden on the live
site** — never invented, never placeholder-filled.

Status: 🔴 blocking · 🟡 needed before that section ships · 🟢 resolved

---

## 🔴 Blocking — assets (brief §2, §8)

| # | Item | Brief ref | Notes |
|---|---|---|---|
| A1 | `dust-and-wipes-photos/` — 56 JPEGs | §2, §8 | **Not in repo.** Zero overlap with the 34 files in `public/images/`. Blocks hero, services cards, gallery, clients, our people, training, Lagos. |
| A2 | `dust-and-wipes-badges/` — ISSA, EHCON, PECAN | §2, §4.6 | Not in repo. Trust strip + footer affiliations hidden until supplied. |
| A3 | `dust-and-wipes-logos/` — client logos | §2, §6.7 | Not in repo. Logo wall hidden (also gated on consent — C1). |
| A4 | `dust-and-wipes-video/` — glass-polishing clips + poster | §2, §8 | Not in repo. Video blocks hidden. |

## 🔴 Blocking — facts the brief assumes

| # | Item | Brief ref | Finding |
|---|---|---|---|
| F1 | "Keep the old site's analytics ID" | §3.1, §9.11 | **No analytics exists** on the live site — no GA4, GTM or Vercel Analytics. A new property is needed. Which? |
| F2 | "Old site" at `www.dustandwipes.com` | §2 | That URL serves **this repo's build**. No pre-Vercel content there. If a Zyro version must be reconciled, supply an export / Wayback range / GSC 404 export. |
| F3 | Structured-data identifiers to preserve | §3.1 | None found beyond the GSC verification file (`google7f2fc51ac653ece2.html`, already in `public/`). Confirm nothing else needs carrying over. |

## 🟡 Content confirmations

| # | Item | Brief ref | Needed for |
|---|---|---|---|
| C1 | **Written consent** from Skin 101 Clinics Limited | §3.2, §6.7 | Seeded `consent: false` → logo, name and the Lagos case study stay hidden until flipped. |
| C2 | Skin 101 services list — brief seeds `["Commercial cleaning"]` | §6.7 | Confirm accuracy before display. |
| C3 | Other client entries for `clients.json` | §6.7 | Logo wall is otherwise empty. Name + sector + city + years + consent for each. |
| C4 | Affiliation status wording — "ISSA member" / "Registered with EHCON" / "PECAN member" | §4.6 | Must be exact; these are verifiable claims. |
| C5 | Official ISSA member logo (supplied file is 256px) | §4.6 | Fallback: display ≤64px tall. |
| C6 | Training two-day outline — final version | §6.3 | Training page outline section. |
| C7 | Lagos areas — Lekki, Ikoyi, Victoria Island, Ikeja? | §6.5 | Lagos coverage list. |
| C8 | Lagos business address (full) | §6.5, §6.12 | Footer + Lagos page. Wording fixed as "Lagos address · Site assessments by appointment". |
| C9 | Staff consent for first-name profiles | §6.6 | "Our people" section — optional; omit if not granted. |
| C10 | Google review count — brief says **50+**; live schema says **7** | §3.2, §9.5 | ⚠️ **Direct conflict.** You confirmed 7 in an earlier session. `AggregateRating` must match reality or risks a Google penalty. Which is correct today? |
| C11 | Testimonials — brief says **4 real**; repo has **5** | §6.1, §3.2 | Confirm which are genuine and approved. |
| C12 | Case studies (challenge → what we did → result) | §6.7 | Needs consent + content per client. |

## 🟡 Decisions for you

| # | Decision | Brief ref | Default if you don't mind |
|---|---|---|---|
| D1 | Headings font: **Poppins or Montserrat** | §4.3 | Montserrat — slightly more corporate, pairs cleanly with Inter |
| D2 | Hero video | §4.8 | Omit until A4 arrives; poster fallback ready |
| D3 | Exact Deep Green + Brand Yellow hex values | §4.2 | Will derive from the logo and uniform photos and show you swatches for sign-off |
| D4 | Analytics platform (see F1) | §9.11 | Vercel Analytics — no cookie banner needed; GA4 if you want demographics |

## 🟢 Resolved by the brief

| Item | Resolution |
|---|---|
| Canonical host | **www** (§9.4) |
| Facility Management service | Real — §6.2 #10, "old site listed it". Resolves the hero-advertises-but-no-page gap found in the audit. |
| `#office-cleaning` anchor | Restore as an alias alongside `#commercial-cleaning` (§3.1 "alongside, never instead") |
| Meta keywords tag | Remove everywhere (§9.2) — confirmed present on all live pages |
| Per-page `og:url` | Fix — confirmed identical (`https://dustandwipes.com`) on every live page (§9.3) |
