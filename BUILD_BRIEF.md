# Dust & Wipes Ltd — Website Rebuild Brief (v2)

Read this whole file before writing any code. It is the single source of truth. Where this brief and existing code disagree, follow the brief. **No placeholders on the live site.** Never use placeholder text, stock images, vector illustrations or generic graphics in place of real photos. Anything marked **[PLACEHOLDER]** or **[CONFIRM]** must be left out of the rendered page (hide the element or section) until the real content is supplied — never invent facts, clients, numbers, logos or quotes. Keep each omitted item behind a config flag or content-file entry, and list all of them in your report.

---

## 1. Goal

A **complete rebuild** of https://www.dustandwipes.com that:

1. **Preserves the existing site structure exactly** so search rankings and Google mappings are not disturbed (see §3).
2. Carries across **every working feature and piece of content** from the old site.
3. Adds the **Lagos and Training direction** from the Vercel rebuild (repo branch `codex-premium-lagos-training`), plus a **Gallery** and a **Clients** showcase.
4. Looks and reads like a **world-class, global-standard cleaning and facilities organisation** — premium, calm, confident, photo-led.

Business: Dust & Wipes Ltd — professional cleaning, pest control, facility support and cleaner training. Founded in Abuja in 2017 by Bisi Teru (Founder & CEO). Expanding into Lagos with a training-led entry. Founding ethos: professional standards and dignity for cleaning staff.

---

## 2. Sources

- **Old site (content + structure source):** https://www.dustandwipes.com — crawl every page, blog post, FAQ, Privacy and Terms.
- **Current rebuild (starting codebase):** this repository.
- **Brand assets:** `dust-and-wipes-badges/` (ISSA, EHCON, PECAN logos, transparent PNG), `dust-and-wipes-logos/` (client logos, e.g. `skin101-clinics-logo.png`), `dust-and-wipes-video/` (glass-polishing clips + poster).
- **Photos:** `dust-and-wipes-photos/` — 56 web-ready JPEGs, already cropped, privacy-edited, compressed and renamed. Copy into the public images folder. Never re-crop, upscale or swap for "originals". Generate WebP/AVIF and responsive sizes at build time.

---

## 3. Structure preservation (non-negotiable)

### 3.1 Freeze the existing structure
- Before any change, crawl the live site and produce `URL_INVENTORY.md`: every URL, its `<title>`, meta description, H1, and H2 headings.
- **Every existing URL stays at the identical path.** Do not rename, nest, move or change trailing-slash behaviour. This includes `/`, `/about`, `/services`, every `/services#anchor` used in links, `/blog`, every `/blog/<slug>`, `/faqs`, `/contact`, `/privacy`, `/terms`, and any other path found.
- **Keep existing `<title>`, H1 and meta description on each existing page** unless this brief explicitly improves one; if changed, the new version must keep the same primary keywords (service + city).
- **Keep existing anchor IDs** on the Services page (e.g. `#residential-cleaning`, `#office-cleaning`, `#deep-cleaning`, `#pest-control`, `#carpet-upholstery`, `#post-construction`, `#cleaning`, `#commercial-cleaning`) so old links still land correctly. Add new anchors alongside, never instead.
- **New pages are additive only:** `/training`, `/abuja`, `/lagos`, `/gallery`, `/clients`. They must not replace or redirect any existing URL.
- If the current rebuild uses any path that differs from the old site, the **old path wins**; the rebuild path gets a 301 to it.
- Keep the old site's analytics ID, Search Console verification tags and any existing structured data identifiers. **[CONFIRM]**
- At the end, prove it: a script that requests every URL in the inventory against the preview and reports status codes. Required result: 100% return 200 at the same path (or a documented 301 only where the old site itself had redirected).

### 3.2 Honesty rules
- **Lagos:** the Lekki address is a business address, not a staffed walk-in office. Never write "Visit our office" for Lagos. Use: "Lagos address · Site assessments by appointment."
- **Airport training:** planned but **not yet delivered**. Do not mention or imply it.
- **Training photos** (`bisi-teru-leading-training.jpg`, `bisi-teru-training-room.jpg`) show Bisi leading a professional training that was **not** a cleaner training. Caption honestly, e.g. "Bisi Teru leading a professional training session."
- **Lagos track record:** Skin 101 Clinics Limited (aesthetics, dermatology and plastic surgery), Lagos, 2024–2025 — a past client, so say "served", never "current". Logo supplied; display it once the client's written OK is on file **[CONFIRM: written consent]**.
- **Clients:** show names/logos only for clients listed as consented in `content/clients.json` (§7). Say "current" only for active clients; otherwise "Organisations we've served".
- **Numbers and reviews:** only real figures — 650+ clients, 5.0 Google rating, 50+ Google reviews, the four real testimonials. Review schema only for genuine reviews.
- **Guarantee:** keep the old site's promise — if not satisfied, we return and fix it free of charge.

### 3.3 Privacy
- Use only supplied photos; their privacy edits (cropped signage/emblem, blurred child's face, blurred client text) must stay.
- `polished-tile-floor-after-cleaning.jpg` is **on hold** — do not use until a matching "before" exists.

---

## 4. Brand and design system (premium, global standard)

### 4.1 Positioning and feel
Benchmark the look against leading international cleaning and facilities firms (e.g. ISS, Sodexo, CBRE facilities, premium boutique cleaning brands): **calm, spacious, confident, photo-led, minimal text per screen**. Every section leads with an image, a number or a short statement — never a wall of paragraphs. It must feel trustworthy to an embassy procurement officer and aspirational to a premium homeowner.

### 4.2 Colour
Derive exact values from the existing logo and uniform; document them as CSS variables / design tokens.
- **Primary — Deep Green** (from the logo lettering): headings, buttons, footer background.
- **Accent — Brand Yellow** (uniform): highlights, small accents, stat numbers, hover states. Never yellow text on white (contrast).
- **Neutrals:** warm off-white page background, soft stone grey for section bands, near-black for body text.
- Limit to these; no extra colours. Check WCAG AA contrast on every pairing.

### 4.3 Typography
- Headings: **Poppins** or **Montserrat** (600–700). Body: **Inter** (400/500). Self-hosted, subset, `font-display: swap`.
- Fluid type scale (clamp): H1 ~40–64px, H2 ~30–44px, H3 ~22–28px, body 17–18px, line-height 1.6, max line length ~70 characters.
- Small uppercase eyebrow labels above section headings (letter-spaced), e.g. "OUR SERVICES".

### 4.4 Layout and spacing
- 12-column grid, max content width ~1240px, generous section padding (96–128px desktop, 64px mobile).
- 8px spacing scale. Consistent card radius (12–16px), soft shadows only on hover.
- Alternate light and tinted section bands for rhythm.

### 4.5 Photography treatment
- Real team photos only (§8 photo map). Consistent subtle colour grade (slight warmth, lifted shadows) applied via CSS, not re-editing files.
- Most photos are portrait: use **split heroes**, **three-photo collages** and **masonry grids** rather than stretching portrait images full-width. Landscape images (§8) are used for full-width bands.
- Favour yellow-uniform photos in hero, cards and team areas; mixed uniforms are fine in the gallery.
- Never display an image larger than its native width; `object-fit: cover` in cards.

### 4.6 Iconography and graphics
- One consistent line-icon set (e.g. Lucide or Phosphor), deep green stroke.
- Subtle brand graphics: soft yellow shape accents or a light pattern derived from the logo mark, used sparingly behind stats or section headings.
- Affiliation badges (ISSA, EHCON, PECAN) from `dust-and-wipes-badges/` — permission confirmed. Show each on a small white rounded tile (the ISSA and EHCON art needs a light background), greyscale with colour on hover. Label each with the accurate status, e.g. "ISSA member", "Registered with EHCON", "PECAN member" **[CONFIRM: exact status wording]**. The ISSA file is small (256px): display at ≤ 64px tall, and swap in the official ISSA member logo if supplied **[CONFIRM]**.

### 4.7 Components (build as a reusable library)
Header (transparent over hero, solid on scroll), mega-menu for Services, mobile drawer menu, sticky mobile bar (Call · WhatsApp · Quote), buttons (primary/secondary/ghost), split hero, collage hero, stat counter row, service card, sector tile, testimonial carousel, logo wall, case-study card, before/after slider, masonry gallery with filters and lightbox, process steps, FAQ accordion, CTA band, quote form, map block, footer.

### 4.8 Motion (subtle, fast, purposeful)
- Count-up stats, gentle fade/slide-in on scroll, image hover zoom (1.03), smooth header transition, carousel and slider interactions.
- Use CSS or a light library only; no heavy animation bundles. Respect `prefers-reduced-motion`.
- Optional: a short muted looping hero video **[PLACEHOLDER: video file]** with a poster image fallback.

### 4.9 Copy standard
- **Voice:** professional, warm, precise, globally credible. Short sentences, active voice, benefits first, no hype or exclamation marks. British/Nigerian English spelling (organisation, colour).
- Every page: one clear headline, one supporting line, one primary action.
- Rewrite old-site copy to this standard while keeping its facts, keywords and FAQ answers' meaning.
- Consistent calls to action: "Get a free quote", "Book a site assessment", "Discuss training", "WhatsApp us".

### 4.10 Quality bar
- Pixel-checked at 360, 768, 1024, 1280 and 1440px.
- No layout shift, no orphaned labels (fix the rebuild's "Post-construction cleaning01"-style glitches), no alt-text mismatches.

---

## 5. Site map and navigation

**Main menu:** Home · Services (mega-menu) · Training · Locations (Abuja, Lagos) · Clients · Gallery · About · Blog · FAQs · **Get a Free Quote** (button). Header also shows phone and WhatsApp on desktop.

| Page | Path | Status |
|---|---|---|
| Home | `/` | existing — keep |
| Services | `/services` (+ all existing anchors) | existing — keep |
| About | `/about` | existing — keep |
| Blog + posts | `/blog`, `/blog/<slug>` | existing — keep every slug |
| FAQs | `/faqs` | existing — keep |
| Contact | `/contact` | existing — keep |
| Privacy / Terms | existing paths | keep |
| Training | `/training` | new |
| Abuja | `/abuja` | new |
| Lagos | `/lagos` | new |
| Clients | `/clients` | new |
| Gallery | `/gallery` | new |
| 404 | — | new, branded |

---

## 6. Page content

### 6.1 Home
1. **Hero** (split or collage): H1 containing "professional cleaning, pest control and cleaner training in Abuja and Lagos"; one-line subhead; buttons Get a free quote + WhatsApp us.
2. **Trust strip:** 650+ clients · 5.0★ Google · 50+ reviews · Since 2017 · affiliation badges.
3. **Services grid** (cards with photo, one-line benefit, link to anchor).
4. **Sectors we serve** tiles (§6.7) linking to Clients.
5. **Featured work:** 3 case-study cards from Clients (only consented ones; otherwise sector stories).
6. **Training teaser** → `/training`.
7. **Two cities** cards (honest Lagos wording).
8. **How it works** (4 steps).
9. **Why choose us** (6 points from old site).
10. **Testimonials** carousel (4 real).
11. **Gallery preview** (8 photos, masonry) → `/gallery`.
12. **Final CTA band** + footer.

### 6.2 Services (`/services`)
Each service: anchored section (keep all old anchor IDs), photo, refined description, 4 bullets (from old site), Get a free quote + Book on WhatsApp (pre-filled with service name).
1. Residential cleaning 2. Commercial & office cleaning 3. Deep cleaning 4. Post-construction cleaning 5. Carpet & upholstery cleaning 6. Pest control & fumigation (termites, rodents, bed bugs; safe for children and pets; licensed technicians; annual plans) 7. Disinfection & sanitisation (new) 8. Window & glass cleaning (new) 9. Event & exhibition cleaning (new) 10. Facility management support (old site listed it) 11. Training & consultancy → `/training`.
Plus: How it works (4 steps), Recurring plans (weekly / bi-weekly / monthly, discounted), Satisfaction guarantee, CTA.

### 6.3 Training (`/training`)
Audience (embassies, international organisations, hotels, restaurants, corporates with in-house cleaners); 4 modules (housekeeping; hygiene & safety; chemicals & PPE; supervision & quality); two-day outline **[CONFIRM: final outline]**; delivery options (on-site or venue, group size, duration, certificates of completion); employer benefits (less chemical waste, safer staff, better value from direct hires); founder credibility (13+ years in operations and IT management, founder since 2017) with honestly captioned photo; 4-step process; optional "Request the programme outline" button (opens enquiry form with service = training); Training FAQs; CTA "Discuss training".

### 6.4 Abuja (`/abuja`)
Unique copy: 8+ years in Abuja, 650+ clients, 5.0 rating, two Abuja testimonials, full district list as text (Gwarinpa, Maitama, Asokoro, Wuse I & II, Jabi, Lugbe, Kubwa, Life Camp, Katampe, Jahi, Apo, Guzape, Garki, Central Area, Kado, Utako, Karu, Nyanya), office map, CTA.

### 6.5 Lagos (`/lagos`)
Unique copy (no duplication of Abuja): training-led entry, audiences with 2–3 short examples each, areas (Lekki, Ikoyi, Victoria Island, Ikeja **[CONFIRM]**), "Lagos address · Site assessments by appointment", Lagos contact: main number 0809 970 0001 (also WhatsApp), the 2024–2025 Lagos engagement with Skin 101 Clinics Limited (per §3.2), the Lagos team photo `lagos-team-uniform.jpg`, Lagos FAQs, CTA.

### 6.6 About (`/about`)
Founder story and photo (from rebuild); values (Excellence, Integrity, Sustainability, Reliability); timeline 2017–2026 incl. Lagos expansion; dignity-for-staff commitment (fair pay, training); **Our people** section (team photos; optional first-name staff profiles **[CONFIRM: staff consent]**); staff Christmas picnic photo as culture moment; branded van — "We arrive fully equipped"; affiliations.

### 6.7 Clients (`/clients`) — new
- **Sectors served** tiles: International organisations · Diplomatic missions · Healthcare & clinics · Corporate offices · Hospitality & salons · Events & exhibitions · Premium residences · Real estate & new builds.
- **Logo wall:** renders only clients with `consent: true` in `content/clients.json`. Monochrome logos, colour on hover.
- **Case studies:** card + detail layout (challenge → what we did → result, with photos). Only for consented clients; otherwise anonymised sector stories ("A diplomatic office in Maitama"). **[CONFIRM]**
- **Testimonials** tied to sectors where possible.
- **Client record:** `content/clients.json` is the editable record — fields: `name`, `sector`, `city`, `services[]`, `startYear`, `status` (current | past), `consent` (true | false), `logo`, `caseStudy` (optional), `testimonial` (optional). The page reads from it; Bisi can update it without touching code. Seed with: `{ "name": "Skin 101 Clinics Limited", "sector": "Healthcare & clinics", "city": "Lagos", "services": ["Commercial cleaning"], "startYear": 2024, "endYear": 2025, "status": "past", "consent": false, "logo": "skin101-clinics-logo.png" }` — flip `consent` to true once written OK is received **[CONFIRM services list]**. Other entries: examples marked **[CONFIRM]**.

### 6.8 Gallery (`/gallery`) — new
- Masonry grid of all approved photos (§8), lazy-loaded.
- **Filters:** All · Residential · Office & commercial · Deep cleaning · Post-construction · Pest control & disinfection · Windows & glass · Healthcare · Events · Our team.
- **Lightbox** with caption, keyboard and swipe navigation.
- **Before & after** section using the slider — only same-job pairs; currently `post-construction-before-debris.jpg` (Before) with `post-construction-granite-floor-scrubbing.jpg` (During). Leave slots for future pairs.
- Content driven by `content/gallery.json` (`file`, `alt`, `caption`, `category`, `city`) so new photos can be added easily.
- CTA band at bottom.

### 6.9 FAQs (`/faqs`)
All 10 old FAQs (meaning preserved; tidy wording allowed), plus: Lagos coverage; on-premises training; certificates; recurring plans; pest-control safety (if not covered). Accordion + FAQPage schema.

### 6.10 Contact (`/contact`)
Form (name, organisation, email, phone, city, area, service — full list from §6.2, message, privacy note) that **actually delivers** (email + log, success state, tested). WhatsApp button, both phones (0809 970 0001, 0809 845 7721), hours Mon–Sat 7am–6pm, "We reply within 2 hours", email infodesk@dustandwipes.com, maps, socials (Instagram, Facebook, X, LinkedIn — old-site URLs).

### 6.11 Blog
Every old post at original slug with images and dates; redesigned index with categories and featured post; related services block at the end of each post; author box for Bisi.

### 6.12 Footer (all pages)
Logo, short description, phones, WhatsApp, email, Abuja address, Lagos address line, hours, reply promise, socials, key links (incl. Clients, Gallery), affiliations, Privacy, Terms.

---

## 7. Content files (editable without code)
- `content/clients.json` — client record (§6.7)
- `content/gallery.json` — gallery items (§6.8)
- `content/testimonials.json`, `content/faqs.json`, `content/services.json`
Document in `README.md` how to add a client, photo, testimonial or FAQ.

---

## 8. Photo map (`dust-and-wipes-photos/`)

| Placement | Files |
|---|---|
| Home hero (collage) | `chandelier-cleaning.jpg`, `office-floor-scrubbing-machine.jpg`, `luxury-living-room-floor-cleaning.jpg` |
| Full-width bands (landscape) | `team-uba-marketplace.jpg`, `rooftop-terrace-machine-scrubbing.jpg`, `post-construction-before-debris.jpg`, `window-grille-wiping.jpg` |
| Training | `bisi-teru-leading-training.jpg` (hero), `bisi-teru-training-room.jpg` — honest captions |
| Residential | `luxury-living-room-floor-cleaning.jpg`, `kitchen-sink-grate-cleaning.jpg`, `residential-shelf-dusting.jpg`, `residential-skirting-mopping.jpg`, `residential-kitchen-cabinet-cleaning.jpg`, `wardrobe-top-dusting.jpg` |
| Office & commercial | `office-floor-scrubbing-machine.jpg`, `boardroom-tv-unit-dusting.jpg`, `corridor-team-mopping.jpg`, `office-lobby-mopping-equipment.jpg`, `office-desk-equipment-wiping.jpg`, `office-floor-deep-clean-team.jpg`, `office-floor-scrubbing-team.jpg` |
| Deep cleaning | `pantry-bar-stool-detail-cleaning.jpg`, `bar-stool-base-polishing.jpg`, `standing-fan-cleaning.jpg`, `table-base-cleaning.jpg` |
| Post-construction | `post-construction-before-debris.jpg` (Before), `post-construction-granite-floor-scrubbing.jpg` (During — not on Training page), `post-construction-paint-removal.jpg`, `new-build-kitchen-cabinet-cleaning.jpg`, `empty-apartment-vacuuming.jpg` |
| Carpet & upholstery | `upholstered-headboard-vacuuming.jpg`, `wet-vacuum-floor-cleaning.jpg` |
| Pest control & disinfection | `pest-control-spraying-driveway.jpg`, `office-fogging-treatment.jpg`, `office-disinfection-misting.jpg` (last two small — card size only) |
| Windows & glass | `exterior-window-cleaning-ladder.jpg`, `high-window-frame-cleaning.jpg`, `residential-window-cleaning.jpg`, `window-grille-wiping.jpg`, `glass-wardrobe-wiping.jpg` |
| Events | `event-stage-cleanup.jpg`, `exhibition-stand-cleaning.jpg`, `event-crew-team.jpg` |
| Healthcare | `healthcare-clinic-room-cleaning.jpg`, `clinic-treatment-chair-cleaning.jpg`, `clinic-reception-mopping.jpg` |
| Hospitality & salons | `salon-floor-cleaning.jpg` |
| International organisations | `international-organisation-entrance-cleaning.jpg` |
| Corporate (care) | `office-wall-frame-dusting.jpg` |
| Lagos page / Lagos team | `lagos-team-uniform.jpg` (Lagos staff), `clinic-reception-mopping.jpg`, `clinic-treatment-chair-cleaning.jpg` (both taken at Skin 101 Clinics, Lagos, 2024–2025; caption as Lagos healthcare work; name the client only once written consent is on file) |
| Our people / culture | `lagos-team-uniform.jpg`, `team-uba-marketplace.jpg`, `event-crew-team.jpg`, `dust-and-wipes-team-uniform.jpg`, `staff-christmas-picnic.jpg` |
| Equipped & mobile | `dust-and-wipes-branded-van.jpg` |
| Gallery extras | `library-bookshelf-dusting.jpg`, `room-floor-mopping.jpg`, `skirting-board-cleaning.jpg`, `office-corridor-mopping.jpg`, `office-lobby-mopping.jpg`, `chandelier-cleaning.jpg` |
| On hold | `polished-tile-floor-after-cleaning.jpg` — do not use |

**Video:** `dust-and-wipes-video/glass-polishing-loop.mp4` (12 s, muted, portrait 352×640) with `glass-polishing-poster.jpg` — autoplay, muted, looping, `playsinline`, at card size (≤ 360px wide) in the Windows & glass section and in the Gallery; `glass-polishing-full.mp4` opens in the lightbox. Never full-width (low resolution); lazy-load; respect reduced motion (show poster).

All 55 approved photos appear in `/gallery` with categories. Write accurate alt text describing what is visible.

---

## 9. SEO and technical
1. Preserve titles/H1/meta on existing pages (§3.1); unique, keyword-led ones on new pages (service + city).
2. Remove the meta keywords tag everywhere.
3. Per-page Open Graph/Twitter tags with the page's own `og:url` and a relevant image (fixes the old and new sites pointing everything at the homepage).
4. Canonical on every page → `https://www.dustandwipes.com/...`.
5. JSON-LD: `LocalBusiness`/`ProfessionalService` (Abuja office; Lagos as `areaServed`), `Service` per service, `FAQPage`, `BreadcrumbList`, `Article` (blog), `ImageGallery` (gallery), `AggregateRating` only from genuine Google figures **[CONFIRM]**. Validate in Rich Results Test.
6. `sitemap.xml` (all old + new URLs) and `robots.txt`.
7. Preview/staging deployments `noindex`; production indexable.
8. Internal linking: services ↔ cities ↔ gallery ↔ clients ↔ blog.
9. Performance: Lighthouse mobile ≥ 90 on all four scores; hero image preloaded; lazy-load below fold; AVIF/WebP; fonts subset; no layout shift.
10. Accessibility: WCAG 2.1 AA (contrast, focus, labels, keyboard for menu, carousel, slider, lightbox).
11. Analytics: keep existing ID **[CONFIRM]**; events for quote, WhatsApp, phone, form submit, training PDF download.

---

## 10. Acceptance checklist
- [ ] URL check script: every inventory URL returns 200 at the same path; titles/H1s preserved.
- [ ] All old anchors on `/services` still land on the right section.
- [ ] All old content present (services + bullets, How it works, plans, guarantee, Why choose us, stats, testimonials, badges, 10 FAQs, all blog posts, values, timeline, districts, phones, hours, reply promise, socials, Privacy, Terms).
- [ ] New pages complete: Training, Abuja, Lagos, Clients (driven by `clients.json`), Gallery (filters, lightbox, before/after, driven by `gallery.json`).
- [ ] Design system implemented as tokens + component library; screenshots at 360/768/1280/1440.
- [ ] Honesty rules respected (no Lagos walk-in wording, no airport claim, honest training captions, only consented logos).
- [ ] Only supplied photos used, privacy edits intact, none upscaled, accurate alt text.
- [ ] SEO items in §9 done; schema validates; previews noindex.
- [ ] Contact form delivers (evidence); WhatsApp/phone links work on mobile.
- [ ] Lighthouse mobile ≥ 90 ×4 (screenshots).
- [ ] List of all open [PLACEHOLDER] / [CONFIRM] items.
