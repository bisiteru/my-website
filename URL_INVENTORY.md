# URL Inventory — dustandwipes.com

**Crawl date:** 2026-11-10 · **Crawled:** `https://www.dustandwipes.com`
**Method:** sitemap discovery + recursive internal-link following + legacy-path probing
**Result:** 15 pages, **all HTTP 200**, no broken internal links, no orphan pages.

---

## 🔴 Finding #1 — The crawled site *is* this repo's rebuild, not an old site

The brief says to crawl `www.dustandwipes.com` and inventory "each **old** page", marking blocks
*in-rebuild / missing / changed*. That framing assumes an older site to migrate **from**.
It isn't there. Evidence:

| Signal | Observed |
|---|---|
| `server` header | **`Vercel`** (`x-vercel-cache: HIT`, `x-vercel-id: iad1::…`) |
| Asset paths | **180×** `/_next/` references |
| Logo | `logo-192` ×22 — the self-hosted logo added in commit **`6ee3b02`** (this repo) |
| Zyro fingerprints | **zero** |
| Page set | Exactly the 15 routes in `src/app/` — no extras |

**`www.dustandwipes.com` serves the current Next.js build.** There is no old Zyro site at this
address to inventory, so `CONTENT_INVENTORY.md` cannot mark anything *missing* or *changed*
without a separate source for the old content. **This needs your decision** — see Questions.

## Finding #2 — Host & redirect behaviour

```
https://dustandwipes.com/      → 301 → https://www.dustandwipes.com/   (www is canonical in practice)
https://www.dustandwipes.com/  → 200
```

But the **sitemap lists apex URLs** (`https://dustandwipes.com/about`, …), so **every one of the
13 sitemap entries is a redirect**. Sitemaps should list final canonical URLs. `sitemap.ts` and
`robots.ts` both hard-code the apex host.

Compounding it: **no page emits a `<link rel="canonical">`** (confirmed on all 15), and OG tags
point at the **apex** (`https://dustandwipes.com/images/og-image.jpg`) while the site serves **www**.
Three different host signals. Google will usually pick one, but this is avoidable ambiguity.

## Finding #3 — Legacy paths all 404 (redirect map still unknown)

Every plausible legacy path returns **404** — no redirect infrastructure exists:

`/home` `/index.html` `/about-us` `/our-services` `/services.html` `/contact-us`
`/cleaning-services` `/pest-control` `/fumigation` `/gallery` `/team` `/testimonials`
`/booking` `/quote` `/faq` `/blog/index` `/service` `/training` → **all 404**

Two are notably risky: **`/pest-control`** (prime keyword path, plausible old URL) and **`/faq`**
(this site uses `/faqs`).

> ✅ **The authoritative source for the real redirect map is Google Search Console →
> Indexing → Pages → "Not found (404)".** It lists the exact old URLs Google still has indexed or
> sees linked. Guessing is unnecessary — please export that report (see Questions).

---

## Page-by-page inventory

Legend: all pages return **200**, `robots: index, follow`, `canonical: none`, OG image
`https://dustandwipes.com/images/og-image.jpg`.

### `/`
- **Title:** Professional Cleaning & Pest Control in Abuja | Dust and Wipes Ltd.
- **Description:** Abuja's most trusted cleaning and pest control company since 2017. Residential, commercial & specialist cleaning in Gwarinpa, Maitama, Wuse & across FCT. 650+ happy clients. Get a free quote today.
- **H1:** Professional Cleaning & Pest Control in Abuja
- **H2:** Our Services · Transforming Spaces with Care · The Dust & Wipes Difference · What Our Clients Say · Service Areas in Abuja · Expert Cleaning Advice · Let's Make Your Space Spotless
- **JSON-LD:** LocalBusiness (+Person, PostalAddress, GeoCoordinates, 2× OpeningHours, AggregateRating, OfferCatalog ×7 Service, AdministrativeArea)

### `/about`
- **Title:** About Us | Dust & Wipes Limited
- **Description:** Learn about Dust & Wipes Limited — founded in 2017 by Bisi Teru, Abuja's trusted professional cleaning and pest control company. Our story, values, and commitment to excellence.
- **H1:** Cleaning Abuja, One Space at a Time
- **H2:** Born from a Simple but Powerful Desire · A Company Built on Trust & Quality · What We Stand For · From Humble Beginnings · Let's Make Your Space Spotless

### `/services`
- **Title:** Our Services | Dust & Wipes Limited
- **Description:** Explore Dust & Wipes Limited's full range of cleaning and pest control services in Abuja — residential cleaning, office cleaning, deep cleaning, carpet cleaning, termite control, rodent control, bed bug treatment, training and more.
- **H1:** Our Services
- **H2:** Professional Cleaning Solutions · Effective Pest Control Solutions · Professional Development & Consulting · Simple, Hassle-Free Booking · Let's Make Your Space Spotless
- **Anchor IDs (live, confirmed):**
  `#cleaning` · `#pest-control` · `#training-consultancy` *(sections)*
  `#residential-cleaning` · `#commercial-cleaning` · `#deep-cleaning` · `#post-construction` · `#carpet-upholstery` *(cards)*
  → all 7 service cards + 3 sections resolve; **no broken anchors**

### `/blog`
- **Title:** Blog & Cleaning Tips | Dust & Wipes Limited
- **Description:** Expert cleaning and pest control tips from Dust & Wipes Limited. Learn how to maintain a spotless, pest-free home or office in Abuja.
- **H1:** Cleaning & Pest Control Tips
- **H2:** *(only)* Why Trained Cleaners Matter… *(featured card)* — ⚠️ the other 6 post titles render as `h3`

### `/contact`
- **Title:** Contact Us — Get a Free Quote | Dust & Wipes Limited
- **Description:** Contact Dust & Wipes Limited for a free cleaning or pest control quote in Abuja. Call 0809 970 0001, WhatsApp, or fill our quick form — we respond within 2 hours.
- **H1:** Book a Service or Get a Quote
- **H2:** Contact Information · Request a Free Quote

### `/faqs`
- **Title:** Frequently Asked Questions | Dust & Wipes Limited
- **Description:** Answers to common questions about Dust & Wipes Limited's cleaning and pest control services in Abuja — booking, pricing, safety, service areas and more.
- **H1:** Frequently Asked Questions
- **H2:** *(only)* Let's Make Your Space Spotless — ⚠️ **the 10 questions are not headings** (rendered as `<span>` in buttons). JSON-LD `FAQPage` is correct, but on-page heading structure is flat.
- **JSON-LD:** + FAQPage with 10 Question/Answer pairs ✅

### `/privacy`
- **Title:** Privacy Policy | Dust & Wipes Limited
- **Description:** Dust & Wipes Limited Privacy Policy ⚠️ *thin*
- **H1:** Privacy Policy · **H2:** 1. Information We Collect · 2. How We Use Your Information · 3. Data Security · 4. Contact Us
- ⚠️ **Not in sitemap**

### `/terms`
- **Title:** Terms of Service | Dust & Wipes Limited
- **Description:** Dust & Wipes Limited Terms of Service ⚠️ *thin*
- **H1:** Terms of Service · **H2:** 1. Services · 2. Booking & Cancellation · 3. Satisfaction Guarantee · 4. Liability · 5. Contact
- ⚠️ **Not in sitemap**

### Blog posts (7) — all 200, all with `Article` + `BreadcrumbList` JSON-LD

| URL | Title | H2s |
|---|---|---|
| `/blog/why-trained-cleaners-matter` | Why Trained Cleaners Matter: The Hidden Link Between Cleaning Skills and Workplace Safety | **6 real** + CTA |
| `/blog/how-often-should-you-deep-clean` | How Often Should You Deep Clean Your Home? | CTA only ⚠️ |
| `/blog/signs-of-termite-infestation` | 7 Early Warning Signs of a Termite Infestation | CTA only ⚠️ |
| `/blog/office-cleaning-productivity` | How a Clean Office Boosts Employee Productivity by Up to 15% | CTA only ⚠️ |
| `/blog/eco-friendly-cleaning-tips` | 5 Eco-Friendly Cleaning Habits You Can Start Today | CTA only ⚠️ |
| `/blog/pest-control-abuja-rainy-season` | Why Pest Control Is Critical During Abuja's Rainy Season | CTA only ⚠️ |
| `/blog/move-out-cleaning-checklist` | The Ultimate Move-Out Cleaning Checklist for Abuja Renters | CTA only ⚠️ |

Each has a unique title + description (all within healthy length). ⚠️ Six of seven posts have
**no section headings** — only the newest uses the `{heading}` content block. Long-form posts
without H2s read as walls of text and lose heading-based SEO signals.

---

## Issues found by the crawl (candidates for Phase 1)

| # | Issue | Severity |
|---|---|---|
| 1 | Sitemap lists apex URLs that all 301 → www | High |
| 2 | No `canonical` on any page; OG uses apex while site serves www | High |
| 3 | No redirects at all; old URLs (unknown set) 404 | High — needs GSC data |
| 4 | `LocalBusiness` + full 7-service `OfferCatalog` duplicated on **all 15 pages** | Medium |
| 5 | `/privacy`, `/terms` absent from sitemap | Medium |
| 6 | 6 of 7 blog posts have no H2 section headings | Medium |
| 7 | `/faqs` questions are not headings | Medium |
| 8 | `/privacy`, `/terms` meta descriptions are 3–5 words | Low |
| 9 | No analytics on any page (no GA4/GTM/Vercel Analytics) | Medium |
