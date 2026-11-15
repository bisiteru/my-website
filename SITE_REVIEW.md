# Dust & Wipes — New Build Review

**Build reviewed:** `my-website-git-claude-cleaning-compan-756fcd-bisiterus-projects.vercel.app` (preview)
**Date:** 14 November 2026
**Pages read:** Home, Services, Training, Abuja, Lagos, Clients, Gallery, About, Blog, one blog post, FAQs, Contact, Privacy, Terms, 404, `sitemap.xml`, `robots.txt`, the stylesheet and the site's JavaScript.

## How this was checked

- **Read in full:** the HTML, CSS and JavaScript of every page listed above, through the Vercel connection.
- **Viewed and tested in Chrome on your computer:** Home, Clients, About, Gallery and Contact at 1440px wide, and Home and Contact at 520px wide (the narrowest a Chrome window goes).
- **Not done:** Lighthouse and PageSpeed runs, real iPhone and Android devices, Safari, Firefox, and screens wider than 1440px. Search Console and Google Business Profile can only be checked from inside your Google account. The code repository was not read, only what the site serves to a browser.

## Verdict

The build is structurally sound: every page has one H1, a unique title, a canonical link, working navigation, real photographs and a working enquiry form. It does not yet feel premium or hand-made, for three reasons:

1. **Two designs are stitched together.** About, Blog, blog posts, Terms and one closing banner are still the old site's design and wording. The rest is new.
2. **The look is a recognisable template.** Montserrat and Inter, a dark green gradient hero on all 14 pages, uppercase labels, three-column cards with "Learn more →", numbered 01–04 steps and a counter row.
3. **Several statements are wrong or unverified,** and one is a placeholder (see Fix first).

## Owner decisions, 14 November 2026

- **Form delivery:** confirmed. The TEST message reached the Formspree inbox.
- **Confirmed true, keep as written:** Skin 101 served in Abuja from 2018; Skin 101 named with the client's permission; licensed and insured pest control technicians.
- **Review count:** remove it. The Google profile has 10 ratings; do not show the number anywhere. Keep "5.0 on Google".
- **Staff wording (15 Nov):** "background-checked and trained". No staff certification exists yet, so "certified" comes out wherever it describes staff or technicians.
- **Carpet equipment (15 Nov):** Rug Doctor machines plus other rug-washing equipment.
- **Before and after (15 Nov):** the owner will supply true before-and-after photographs; the current before/during pair is removed until then.

## Fix first

| # | Problem | Where |
|---|---|---|
| 1 | **Placeholder contact details:** "info@dustandwipes.com or +234 806 000 0000". | Terms, section 5 |
| 2 | **12 named client logos** under "Shown with each organisation's permission", including Deloitte, the Belgian embassy, the National Assembly and Chemonics. Each needs written permission on file, or it comes off. "Embassy of Belgium Consulate" is also not a correct name. | Clients |
| 3 | **ISSA is misnamed** as "International Sanitary Standards Association". It is "ISSA – The Worldwide Cleaning Industry Association" (formerly the International Sanitary Supply Association). | Home, footer, schema |
| 4 | **Stats show "0+", "0.0★" and "0"** in the page source. They only become 650+, 5.0 and 10 after JavaScript runs and the row scrolls into view. | Home |
| 5 | **Cookie banner covers the hero buttons and the Call / WhatsApp / Quote bar** on a phone's first visit. | All pages, mobile |
| 6 | **Old-design pages** with Title Case headings, emoji icons and old colours. | About, Blog, posts, Terms, closing banner on Training, Abuja, About and posts |
| 7 | **Training page ends with a house-cleaning banner:** "Let's Make Your Space Spotless… We serve all districts across Abuja FCT." | Training |
| 8 | **No security headers** beyond HSTS. | Site-wide |
| 9 | **Contradictions:** "reply in minutes" vs "within two hours"; "Monday–Saturday" vs "7 days a week" vs "Sunday by appointment"; "Eleven services" vs seven in the Services menu. | Several |
| 10 | **Claims settled 15 November:** staff are background-checked and trained, not certified; Rug Doctor is one of several carpet machines; the before/during pair comes down until real before-and-after photos arrive. | Home, Services, FAQs, Gallery |

---

## 1. Design and Brand

**1.1 Fonts.** Headings use **Montserrat** (600 and 700). Body text uses **Inter** (400 and 500, 18px, line height 1.6). Both are self-hosted. They were named in the build brief, so this is the brief's fault, not the developer's. Both are the generic defaults you want to avoid.
**Fix:** headings in **Fraunces** (a warm serif with real character, weight 500–600); body in **Hanken Grotesk**. A sans-only alternative is **Bricolage Grotesque** with **Instrument Sans**. All four are free and load through the same mechanism already in use.

**1.2 Colours and gradients.**

| Token | Hex | Where it appears |
|---|---|---|
| green-900 | `#0b3b21` | Hero base, shadows |
| green-800 | `#10492a` | Headings, form labels, links |
| green-700 | `#155e35` | Primary buttons, stat numbers, avatar circles |
| green-600 | `#1a7442` | Uppercase labels, icons, focus ring |
| green-500 | `#248f4d` | Hover states |
| green-100 / 50 | `#e3f1e8` / `#f1f8f4` | Quote marks, hover backgrounds |
| orange-300 | `#f1b9ad` | Label text on the hero |
| orange-500 | `#db4f32` | Review stars |
| orange-600 | `#c23f23` | "+" and "★" beside stats |
| orange-700 | `#c9482e` | Required asterisks, error text |
| bg / band / surface | `#fbfaf7` / `#f2f1ec` / `#ffffff` | Page, alternating sections, cards |
| ink / ink-2 | `#15181a` / `#4a5350` | Body text, secondary text |
| border | `#e3e1da` | Card and field borders |
| WhatsApp | `#25d366` | Floating button |
| **Legacy** | `#0b8441`, `#076634`, `#dd4c2f`, `#b83d25`, Tailwind greys, amber `#fcbb00` | About (48 uses of `#0b8441`), Blog (26), Terms |

Gradients:

- **Hero:** `linear-gradient(150deg, #06250f, #0b3b21, #10492a, #166c3b)` on the hero of all 14 pages.
- **Accent line:** green to orange, 6 times on About.
- **Gradient text:** green to orange on "650+" (About); pale green to pink on the word "Spotless" in the old closing banner (About, Abuja, Training, blog posts).
- **Image overlays:** two uses.

**Brand trace:** green and red-orange match the logo's wordmark and swirl. The uniform's **yellow**, the colour in most of your photographs, is not used anywhere. The exact logo values were not sampled; they should come from the master logo file.
**Fix:** delete the legacy colours; drop gradient text and the accent line; keep one gradient at most (or replace the hero gradient with a flat deep green plus a photograph); add uniform yellow as a small highlight.

**1.3 Repeated templates.**

| Pattern | Where | Redesign |
|---|---|---|
| Dark gradient hero: label, H1, paragraph, pill buttons | All 14 pages | Keep a photo-led hero on Home only. Inner pages get a short light header with a breadcrumb and one relevant photograph. |
| Six identical cards, 3 × 2, "Learn more →" (cards sit at uneven heights) | Home | A two-column service index: service names as a large list on the left, one changing photograph on the right. |
| Numbered 01–04 steps | Home, Services, Training | One horizontal timeline using real photos: enquiry, the van arriving, the team at work, the finished room. |
| "Why choose us" 01–06 grid | Home | Three written promises with proof beside each (see 2.3). |
| Counter row | Home | A single sentence: "650+ clients since 2017 · 5.0 on Google · members of ISSA and PECAN." |
| Nine sector tiles | Home, Clients | A logo-and-sector strip tied to real case studies. |
| "Explore more" link cards plus a closing banner | Eight pages | One closing block per page, written for that page. |
| Centred hero with pill label and wave edge | About | Rebuild in the new system. |
| Floating, pulsing WhatsApp bubble with a "Chat with us!" pop-up | Desktop | Remove; WhatsApp is already in the hero, header and footer. |

**1.4 Photography.** Real team photographs are used throughout: 55 in the Gallery, the hero collage, every service card, the Lagos team, the van, the Christmas picnic and the founder portrait. No stock images or illustrations were found in the new sections.

- **Unverified (old-site images still in use):** `team-meeting.jpg`, `kitchen-cleaning.jpg`, `pest-control-fumigation.jpg`, `commercial-office-sweeping.jpg`, `green-uniform-office.jpg`, `fumigation-office-blue.jpg`, `post-construction-living-room.jpg`, `clinic-cleaning-1.jpg` (Blog and posts) and `og-image.jpg`. If any is stock, the Home claim "No stock imagery anywhere on this site" is false. Replace them with gallery photos.
- **Caption to check:** a blog post captions `team-meeting.jpg` as "A Dust & Wipes training session".
- **Emoji used as icons** (🏠 🏢 🏗️ 🏨) on About. Replace with photographs or the line-icon set.
- **Missing:** the glass-polishing video is not used anywhere. There is one before/during pair and no true before/after.
- **Client logos are tiny:** Chemonics is 70 × 31px, Infracorp 93 × 28px, National Assembly 116 × 91px.

**1.5 Spacing and type system.** Consistent on the new pages, not on the legacy ones.

- **Type scale:** H1 `clamp(2.5rem → 4rem)`; H2 `clamp(1.875rem → 2.75rem)`; H3 `clamp(1.375rem → 1.75rem)`; body `clamp(1.0625rem → 1.125rem)`; small `0.9375rem`; extra small `0.8125rem`.
- **Spacing:** 8px base (`0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8rem`); section padding `clamp(4rem → 8rem)`; container 1240px; radii 8, 12, 16px and full.
- **Breaks from the system:** legacy pages use Tailwind's own sizes and greys; several headings are forced to 28px with one-off overrides; text drops to 10px (tagline) and 11px (mobile bar, badge captions); a duplicate HTML id `training-consultancy` on Services.

**1.6 Motion.**

| Animation | Purpose | Keep? |
|---|---|---|
| Fade-up on scroll, 0.6s | Mild polish | Keep, but never hide content until scripts run |
| Stat count-up, 1.4s | Decorative; causes the "0" problem | Render real numbers first, animate as an extra |
| Testimonial auto-advance, 7s (pauses on hover and focus) | Functional | Keep |
| Header turning solid on scroll | Functional | Keep |
| Mega-menu fade | Functional | Keep |
| WhatsApp pulse, infinite | Decorative | Remove |
| `spin-slow` keyframes | Unused | Delete |
| `animate-fadeIn` class | Referenced but not defined | Delete |

Reduced-motion settings are respected.

**1.7 Mobile, tablet, desktop.**

- **Desktop (1440px):** clean and well spaced.
- **Phone (520px):** no sideways scrolling. Problems: the cookie banner covers the buttons (Fix first 5); 27 tap targets under 40px tall, including footer links at 18px and carousel dots at 16 × 24px; the Home page is 14,750px long.
- **Tablet and small laptop:** the full menu only appears at 1280px and above, so a 1024px laptop gets the phone menu and phone bar. Lower the switch to about 1100px with a shorter menu.
- **Not tested:** real phones, and screens above 1440px.

---

## 2. Copy and Positioning

**2.1 Headlines.** Every H1 and H2, with the claim, the audience, and a rewrite where it is generic.

| Headline | Page | Claim and audience | Verdict |
|---|---|---|---|
| Professional cleaning, pest control and cleaner training in Abuja and Lagos. | Home | What and where; everyone | Keep |
| Everything a property needs, from one team. | Home | One supplier; property managers | Keep |
| Built for places where cleanliness is scrutinised. | Home, Clients | Audited environments; embassies, clinics | Keep; strongest line on the site |
| Better cleaning starts with better equipped people. | Home, Training | Training belief; employers | Keep as a subheading |
| Two cities, one standard. | Home | Consistency | Keep |
| Four steps, no surprises. | Home | Predictable process | Keep; reuse on Services |
| The Dust & Wipes difference. | Home | None | **Rewrite:** "What we put in writing." |
| Five stars, from every review. | Home, Clients | Rating | Keep; remove the "Ten five-star Google reviews" line beneath it |
| Real jobs, real teams, real photographs. | Home | Authenticity | Keep once blog images are confirmed |
| Let's make your space spotless. | 6 pages | None | **Rewrite:** "Tell us the space. You'll have a quote within two hours." |
| Our Services | Services | None | **Rewrite:** "Cleaning, pest control and cleaner training in Abuja and Lagos" |
| Professional cleaning solutions. | Services | None | **Rewrite:** "Eight cleaning services, one written standard." |
| Treatments that are safe around people. | Services | Safety; families, offices | Keep |
| For organisations with their own cleaners. | Services | Audience | Keep |
| Simple, hassle-free booking. | Services | None | **Replace with** "Four steps, no surprises." |
| Keep it clean, on a schedule. | Services | Recurring plans | Keep |
| If you are not satisfied, we come back. | Services | Guarantee | Keep |
| Strengthen your in-house team. | Training | Generic | **Rewrite:** "For the cleaners already on your payroll." |
| Four modules, shaped to your site. | Training | Structure | Keep |
| Led by an operator, not a lecturer. | Training | Credibility | Keep |
| Our home city, since 2017. | Abuja | Tenure; no keyword | **Rewrite H1:** "Cleaning and pest control across Abuja, since 2017." |
| Every district in the FCT. | Abuja | Coverage | Keep |
| Organisations that have trusted us here. | Abuja | Track record | Keep, with names only where permitted |
| A training-led relaunch in Lagos. | Lagos | Internal language | **Rewrite H1:** "Cleaner training and commercial cleaning in Lagos." |
| Training first, cleaning alongside. | Lagos | Approach | Keep |
| What we delivered here. | Lagos | Track record | Keep |
| Starting with your team in Lagos. | Lagos | Call to action | Keep |
| Organisations we've served. | Clients (H1 and H2) | Track record | Keep one; the H2 duplicates the H1 |
| What the work looks like in practice. | Clients | Case studies | Keep |
| Our teams, at work. | Gallery | No keyword | **Rewrite H1:** "Our cleaning work in Abuja and Lagos." |
| Post-construction, from debris to finished floor. | Gallery | Result | Keep if the pair is one job |
| Want results like these? | Gallery | Generic | **Rewrite:** "Have a space like one of these?" |
| Cleaning Abuja, One Space at a Time | About | Abuja only | **Rewrite:** "Why I started Dust & Wipes." |
| Born from a Simple but Powerful Desire | About | None | **Rewrite:** "It started with the cleaners in my own office." |
| A Company Built on Trust & Quality | About | None | **Rewrite:** "Trained people and a re-clean guarantee." |
| What We Stand For | About | Values | Sentence case |
| From Humble Beginnings | About | Cliché | **Rewrite:** "2017 to today." |
| A family of professionals, not a roster of names. | About | Culture | Keep |
| Cleaning & Pest Control Tips | Blog | Topic | Keep |
| Frequently asked questions. | FAQs | Topic | Keep |
| Book a service or get a quote. | Contact | Action | Keep |
| Talk to us directly. / Tell us what you need. | Contact | Action | Keep |

Blog titles: drop "Ultimate" from the move-out checklist; give a source for "Up to 15%" or remove the number.

**2.2 Flagged phrases.** None of your six named phrases appears. These equivalents do, with no proof beside them:

| Phrase | Page | Fix |
|---|---|---|
| "every result exceeds expectations" | Home | Delete |
| "the latest professional equipment… international cleaning standards" | Home | Name the equipment and the standard, or delete |
| "customised solutions — quality cleaning accessible to all" | Home | "We quote to the job, in writing, before we start." |
| "done to perfection" | Services | Delete |
| "hassle-free" | Services | Delete |
| "industry-grade Rug Doctor equipment" | Services | Keep only if you use Rug Doctor machines |
| "Your satisfaction is our top priority" | FAQs | Delete; the guarantee already says it |
| "Absolutely." / "Yes!" | FAQs | "Yes." |
| "exceptional", "raise the bar" | About | Rewrite with the About page |
| "in our DNA" | Blog post | Rewrite |
| "eco-friendly" (5 pages), "certified" (4 pages), "background-checked" | Several | State what the product or certificate is, or soften |

**2.3 Differentiators.**

- **Stated:** the 24-hour re-clean guarantee (Services, FAQs, Terms); the two-hour reply (Home, Contact, footer); the same team returning on recurring plans (Services); colour-coded equipment by zone (the Skin 101 case study only); ISSA, EHCON and PECAN affiliations (Home, footer).
- **Missing:** membership or registration numbers; the pest-control licence and insurer behind "Licensed and insured"; what "background-checked" involves; named products; your CAC registration number; the colour-coding method on the Services page, where buyers look for it.

**2.4 Tone.** Two voices. The new pages are calm, specific and sound like an owner. The legacy pages are Title Case marketing copy. The About page is written in the first person but sits inside old headings. Unify everything in the new voice.

**2.5 Service pages.** No. Cleaning and pest control share one `/services` page as short cards with four bullets each. Training has its own page. None has its own process, pricing guidance or FAQs.

- **Fix:** add `/services/pest-control`, `/services/deep-cleaning`, `/services/post-construction` and `/services/commercial-cleaning` as new pages, keeping the existing anchors. Each gets a process, a "what affects the price" section, three or four FAQs and photographs.
- **Training lacks:** the two-day outline, delivery options, group size, certificates (mentioned only on FAQs), pricing guidance and its own FAQs.

---

## 3. SEO

**3.1 Titles, descriptions, H1s.** All are unique.

| Page | Title (characters) | Description | H1 |
|---|---|---|---|
| `/` | Professional Cleaning, Pest Control & Cleaner Training in Abuja and Lagos (73) | 175 | Professional cleaning, pest control and cleaner training in Abuja and Lagos. |
| `/services` | Our Services \| Dust & Wipes Limited (35) | 262 | Our Services |
| `/training` | Cleaner Training for Organisations in Abuja & Lagos \| Dust & Wipes Limited (74) | 196 | Better cleaning starts with better equipped people. |
| `/abuja` | Cleaning & Pest Control in Abuja \| Dust & Wipes Limited (55) | 171 | Our home city, since 2017. |
| `/lagos` | Cleaning & Cleaner Training in Lagos \| Dust & Wipes Limited (59) | 169 | A training-led relaunch in Lagos. |
| `/clients` | Clients & Sectors We Serve \| Dust & Wipes Limited (49) | 201 | Organisations we've served. |
| `/gallery` | Gallery — Our Cleaning Work in Abuja & Lagos \| Dust & Wipes Limited (67) | 177 | Our teams, at work. |
| `/about` | About Us \| Dust & Wipes Limited (31) | 177 | Cleaning Abuja, One Space at a Time |
| `/blog` | Blog & Cleaning Tips \| Dust & Wipes Limited (43) | 133 | Cleaning & Pest Control Tips |
| `/faqs` | Frequently Asked Questions \| Dust & Wipes Limited (49) | 192 | Frequently asked questions. |
| `/contact` | Contact Us — Get a Free Quote \| Dust & Wipes Limited (52) | 173 | Book a service or get a quote. |
| `/privacy` | Privacy Policy \| Dust & Wipes Limited (37) | 149 | Privacy Policy |
| `/terms` | Terms of Service \| Dust & Wipes Limited (39) | 37 | Terms of Service |
| blog post | Why Trained Cleaners Matter… \| Dust & Wipes Limited (112) | 196 | (same as title) |

- **Too long (over about 60 characters):** Home, Training, Gallery and the blog post titles.
- **Descriptions over about 160 characters:** ten pages; Services is worst at 262.
- **Too short:** Terms, at 37.
- **Weak:** "Our Services" and "About Us" carry no keyword or city.

**3.2 Heading order.** Exactly one H1 on every page. Order is logical. Two faults: the footer column titles ("Services", "Company", "Get in touch") are H2s on every page, and Clients repeats its H1 as an H2.

**3.3 Keyword map.**

| Page | Target terms |
|---|---|
| `/` | cleaning company Abuja; cleaning company Lagos; pest control Abuja |
| `/services` | cleaning services Abuja; office cleaning Abuja; residential cleaning Abuja |
| `/services#deep-cleaning` (own page later) | deep cleaning Abuja |
| `/services#post-construction` | post-construction cleaning Abuja |
| `/services#carpet-upholstery` | carpet cleaning Abuja; sofa cleaning Abuja |
| `/services#pest-control` | pest control Abuja; fumigation Abuja; termite control Abuja; bed bug treatment Abuja |
| `/services#window-glass-cleaning` | window cleaning Abuja |
| `/training` | cleaner training Lagos; cleaner training Abuja; housekeeping training Nigeria |
| `/abuja` | cleaning services Gwarinpa, Maitama, Asokoro, Wuse, Jabi |
| `/lagos` | cleaner training Lekki; commercial cleaning Ikoyi, Victoria Island, Ikeja |
| `/clients` | embassy cleaning Abuja; clinic cleaning Lagos |
| `/faqs` | how much does cleaning cost Abuja; is fumigation safe for pets |

The H1s on Abuja, Lagos, Training and Gallery do not contain their own terms (see 2.1).

**3.4 Structured data.** Present:

- **Every page:** `LocalBusiness` + `ProfessionalService`, with a nested `AggregateRating` and `Organization` memberships.
- **Services:** 11 `Service` items and a `BreadcrumbList`.
- **FAQs:** `FAQPage` with 15 questions.
- **Gallery:** `ImageGallery`.
- **Blog posts:** `Article`.
- **Missing:** individual `Review` items; a `Course` or training service on `/training`.

Excerpt from the site:

```json
{"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],
 "@id":"https://www.dustandwipes.com/#business","name":"Dust & Wipes Limited",
 "telephone":"+2348099700001","email":"infodesk@dustandwipes.com","foundingDate":"2017-03",
 "address":{"@type":"PostalAddress","streetAddress":"Suite D15, Irama Plaza, 4th Avenue",
   "addressLocality":"Gwarinpa","addressRegion":"FCT","addressCountry":"NG"},
 "areaServed":[{"@type":"AdministrativeArea","name":"Abuja Federal Capital Territory, Nigeria"},
   {"@type":"AdministrativeArea","name":"Lagos State, Nigeria"}],
 "priceRange":"₦₦","currenciesAccepted":"NGN",
 "aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},
 "memberOf":[{"@type":"Organization","name":"International Sanitary Standards Association (ISSA)"},
   {"@type":"Organization","name":"Pest Control Association of Nigeria (PECAN)"}]}
```

Faults: the ISSA name; EHCON is missing from `memberOf`; `reviewCount` must match your live Google profile; `image` points to `og-image.jpg`; hours list Monday to Saturday while Contact adds Sunday.

**3.5 Sitemap, robots, canonicals, URLs.**

- **Sitemap:** present, 20 URLs, all on `https://www.dustandwipes.com`.
- **Robots:** `Disallow: /` plus `noindex` headers on this preview, which is correct. Production must allow crawling and name the sitemap; that cannot be seen from a preview.
- **Canonicals:** on every page except the 404.
- **URLs:** clean; every old address and old Services anchor still resolves; no broken internal links.

**3.6 Regions.**

- **hreflang:** none. That is correct for a single English site.
- **Language:** the page says `lang="en"`; change to `en-NG`. `og:locale` is already `en_NG`.
- **Location pages:** Abuja and Lagos.
- **Currency:** NGN appears only in schema.
- **For embassies and international organisations:** phone links use the local format (`tel:08099700001`), which fails from a foreign SIM. Use `tel:+2348099700001`. One legacy link is malformed (`tel:0809 970 0001`, with spaces).

**3.7 Images.**

- **Alt text:** every image has it. Service-card alts are a template ("Pest Control — a Dust and Wipes team member at work"), and one is wrong: the training card's alt describes a team member at work on a photo of you presenting.
- **Formats:** images go through Next.js image optimisation with responsive sizes at quality 75. AVIF is not switched on.
- **Social images:** declared as 1200 × 630 but the photographs are other sizes (the team photo is 1056 × 810).

**3.8 Search Console, Business Profile, analytics.**

- **Analytics:** Google Analytics 4 is wired in (`G-GXR7K2CX6K`) and loads only after consent.
- **Search Console:** no verification tag in the HTML. It may be verified by DNS; check in your account.
- **Google Business Profile:** not visible from the site. The map embed is a plain search for "Irama Plaza Gwarinpa Abuja", not your profile.

---

## 4. Performance and Functionality

**4.1 Speed.** Lighthouse and PageSpeed were not run, so there are no scores to report. Measured once in Chrome on your computer, Home page, desktop:

| Measure | Result |
|---|---|
| First and Largest Contentful Paint | 0.95s (the H1 text) |
| Cumulative Layout Shift | 0 |
| Server response | 0.25s |
| Full load | 4.5s |
| Requests | 64 |
| JavaScript | about 215 KB compressed |
| Images above the fold | 13, about 364 KB |

Interaction to Next Paint needs real use to measure. Run PageSpeed Insights on the production address after launch for mobile and desktop scores on each key page.

**4.2 Tests run.**

| Tested | How | Result |
|---|---|---|
| 14 pages | Fetched each | All return 200 |
| Internal links and Services anchors | Parsed every link on every page | All resolve; old anchors preserved |
| Unknown address | Fetched a made-up URL | Returns 404 with a branded page |
| Mobile menu | Opened at 520px | Opens, 20 links; Escape closes; focus is not moved into it |
| Quote form, empty | Submitted blank | Blocked; four required fields flagged with the browser's own message |
| Quote form, bad email | Typed "not-an-email" | Flagged |
| Quote form, phone | Typed "abc" | **Accepted** |
| Quote form, live send | Sent one message labelled TEST | Accepted in about 2s; shows "Request received… Thank you, TEST" |
| Quote form, failure | Read in code only | Shows "Something went wrong…" with WhatsApp and phone fallbacks |
| Gallery | Opened a photo, pressed Escape | Lightbox opens, focus moves in, Escape closes; 10 filters |
| Testimonials | Read in code | Arrows, keyboard and swipe; pauses on hover |

**4.3 Where enquiries go.** The form posts to Formspree (`formspree.io/f/mzdyqpka`), which forwards to an email inbox. **Check your Formspree inbox for the message named "TEST - website review (please ignore)" to confirm delivery.**

- **Client confirmation:** none is sent. Email is optional on the form, so many enquirers could not receive one.
- **Spam protection:** none on the page (no honeypot, no CAPTCHA). Formspree's own filter is the only defence.
- **Without JavaScript the form cannot send:** the fields have no `name` attributes and the form has no `action`.
- **Fix:** add names and an action so it works without scripts; add a honeypot field; turn on Formspree's auto-reply, or send leads to your CRM.

**4.4 Quote flow.** One page, one form, four required fields, plus WhatsApp. That is short. Training enquiries arrive with the service pre-selected. There is no booking or scheduling step.

**4.5 Browsers and devices.** Chrome on your desktop only, at 1440px and 520px. Safari on iPhone, Chrome on Android, Firefox and Edge were not tested.

**4.6 Failure states.** The 404 page reads "This page has been cleared away." with links to Home, Services, Training, Gallery, Blog, FAQs and Contact. The form error offers WhatsApp and the phone number. The 404's description still says "Abuja's most trusted…".

**4.7 Secrets.** The code served to browsers contains only two identifiers, both public by design: the Formspree form ID and the Analytics ID. No keys or tokens were found. The repository itself was not read, and it is **public on GitHub**, so confirm no `.env` file has been committed.

---

## 5. Marketability and Conversion

**5.1 Primary call to action.**

| Page | Primary action | Above the fold? |
|---|---|---|
| Home, Services, Abuja, Clients, Gallery | Get a free quote | Yes on desktop |
| Training, Lagos | Discuss training | Yes |
| FAQs | Ask on WhatsApp | Yes |
| Contact | The form | Below the contact details on phones |
| About, Blog | None in the hero | No |

On a phone's first visit the cookie banner sits on top of the hero buttons and the bottom bar.

**5.2 Trust signals.**

| Signal | Status |
|---|---|
| Affiliations (ISSA, EHCON, PECAN) | Home and footer; no membership numbers |
| Licences and insurance | Claimed on About; no licence number or insurer |
| Client logos | 12 on Clients; permission to confirm |
| Reviews | 5 testimonials in a carousel; "10 five-star reviews"; no link to Google |
| Case studies | 2 (Skin 101; a post-construction job) |
| Before and after | 1 pair, labelled before/during |
| Guarantee | Services, FAQs, Terms |

**5.3 Pricing, response time, service area.**

- **Pricing:** none anywhere. Add "what affects the price" and typical ranges, or at least a starting point per service.
- **Response time:** "within two hours" is clear, but contradicted by "in minutes".
- **Service area:** clear for both cities.

**5.4 Instant contact.** Click-to-call and WhatsApp are present: hero, footer, the phone bar, and the header number on very wide screens only. No live chat; with WhatsApp, none is needed.

**5.5 Follow-up capture.** Only the quote form. No email sign-up and no lead magnet. After sending, the visitor sees a thank-you and a WhatsApp link; nothing else happens automatically. A "Request the programme outline" button on Training would capture procurement buyers.

**5.6 Training offer.** Presented: audience, four modules, employer benefits and your photograph, honestly captioned. Not presented: dates or schedule, accreditation, how to enrol, group size, duration, price or payment. Do not claim accreditation you do not hold; "certificate of completion" is accurate.

**5.7 Tracked events.** `quote_form_submit` (with service and city), `whatsapp_click` (phone bar, floating button, form success), `phone_click` (phone bar).

- **Not tracked, as far as the code read shows:** the hero and footer WhatsApp and phone links, the header quote button, email clicks and gallery use.
- **All tracking needs consent.** Anyone who declines is invisible. Vercel Web Analytics needs no cookies and would give a baseline.

**5.8 Sharing.**

- **Share previews:** each page has its own title, description, image and address.
- **Icons:** favicon, 192px icon and Apple touch icon are present. No web manifest or theme colour.
- **Social links:** Instagram, Facebook, LinkedIn and X. Your X profile showed no posts in search; remove the link or start posting.

---

## 6. Accessibility, Security, Compliance

**6.1 Contrast (WCAG AA needs 4.5:1 for normal text).**

| Pairing | Ratio | Result |
|---|---|---|
| Body text on page | 17.1 | Pass |
| Secondary text on page | 7.6 | Pass |
| Green label on page | 5.6 | Pass |
| White on primary button | 7.8 | Pass |
| White on lightest part of hero | 6.5 | Pass |
| Orange error text on white | 4.7 | Pass |
| Hero label (pale orange) on lightest part of hero | 3.8 | **Fail** |
| Translucent white text on lightest part of hero | 4.4 | **Borderline fail** |
| Legacy grey dates on Blog (`#99a1af`) | 2.6 | **Fail** |
| Legacy orange on white (`#dd4c2f`) | 4.1 | **Fail** |
| Gradient text on About | varies | **Fails at the orange end** |

**6.2 Keyboard and screen readers.**

- **Good:** a visible 3px green focus ring; labels attached to every field; menu buttons announce open and closed; the form error is announced; the lightbox manages focus.
- **Faults:** no "skip to content" link; the mobile menu and cookie banner do not trap or move focus; the floating WhatsApp pop-up's close button has no label; carousel dots are marked as tabs with no panels; a duplicate id on Services.

**6.3 Cookies and privacy.**

- **Banner:** present; Accept and Decline carry equal weight; Analytics loads only after Accept. That meets GDPR and Nigeria's Data Protection Act.
- **Gaps:** no "Cookie settings" link to change the choice later; the Google Map on Contact loads without consent and sets Google cookies.
- **Privacy policy:** current (November 2026); names Formspree, Analytics and your NDPA rights. Missing: a stated retention period, transfer of data outside Nigeria, and WhatsApp.

**6.4 Terms and registration.**

- **Terms:** dated May 2025; covers Abuja only; placeholder contact details; nothing on training, payment or refunds beyond a cancellation line.
- **Registration:** no CAC number is published anywhere. A public directory lists RC 1397102 for the company; confirm it and add it to the footer and Terms.

**6.5 HTTPS and headers.** HTTPS is enforced, with `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. Nothing else is set. Add to `next.config`:

```js
async headers() {
  return [{ source: "/(.*)", headers: [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://formspree.io https://www.google-analytics.com; frame-src https://www.google.com; frame-ancestors 'self'" }
  ]}];
}
```

Test the Content-Security-Policy on the preview before launch; a wrong value blocks scripts.

---

## Motion direction (added 15 November 2026)

Use movement sparingly. A few deliberate touches read as premium; movement on every section reads as a template and slows the site on mobile networks.

**Add**

| Movement | Where | Detail |
|---|---|---|
| Hero photo reveal | Home hero only | Image eases in and settles (slight scale from 1.04 to 1, opacity 0 to 1) over about 1s, once, on load |
| Headline rise | The H1 of each page only | Lines rise in one after another, once; 0.5s each, 80ms apart |
| Silent video loop | Windows & glass section; Gallery | `glass-polishing-loop.mp4`, muted, looping, `playsinline`, poster image, lazy-loaded, card size only |
| Before-and-after slider | Gallery; relevant service sections | Dragged by the visitor; only with true same-job pairs supplied by the owner |
| Photo swap on the service index | Home | The photograph cross-fades (0.3s) as the visitor hovers, focuses or scrolls through the service list |
| Hover zoom | Gallery tiles and photo cards | Scale to 1.03 over 0.4s; desktop pointers only |
| Lightbox cross-fade | Gallery | 0.25s fade in and out |

**Do not use**

- Text that types itself, bounces, or slides in from the sides.
- Fade-in on every section while scrolling. Remove the current site-wide scroll reveal except where listed above.
- Parallax backgrounds, floating shapes, gradient blobs, pulsing buttons (including the WhatsApp bubble).
- Counting numbers.
- Auto-playing carousels in the hero.

**Rules**

- One thing moves at a time per screen.
- Durations 0.3–0.6s (hero reveal up to 1s), ease-out, movement no more than 16px.
- Animate only `opacity` and `transform`.
- Content never waits for animation: everything is visible and readable in the server HTML and if scripts fail.
- Respect `prefers-reduced-motion`: no movement, content shown immediately, video replaced by its poster.
- Plain CSS, plus `IntersectionObserver` where needed. No animation libraries.
- No layout shift; Largest Contentful Paint must not get slower.

## Prompt for the coding agent

```
Read SITE_REVIEW.md in full. Fix in this order and report against each item.

P0 — before anyone else sees the site
1. Terms: replace the placeholder contact with infodesk@dustandwipes.com and 0809 970 0001; update the date; cover Lagos and training.
2. Clients: render only logos whose entry has consent: true in content/clients.json. Set every entry to false until the owner confirms. Hide "Shown with each organisation's permission" while the list is empty.
3. ISSA: use "ISSA – The Worldwide Cleaning Industry Association" in copy, alt text and schema. Add EHCON to memberOf.
4. Stats: server-render the final values (650+, 5.0, 2017). Remove the review-count stat and every mention of "ten" or "10" reviews, and remove aggregateRating from the schema (it requires a count). Keep "5.0 on Google". Animate only as progressive enhancement.
5. Cookie banner: on mobile it must not cover the hero buttons or the sticky bar. Add a footer "Cookie settings" link.
6. Claims, per the owner: (a) staff are "background-checked and trained" — remove every "certified" wording about staff or technicians; keep "certificate of completion" for training participants. (b) Carpet copy: "using Rug Doctor and other professional carpet-washing machines". (c) Remove the before/during slider and its section until the owner supplies a true before-and-after pair from one job; keep the slider component. Already confirmed, keep as written: Skin 101 served in Abuja from 2018; Skin 101 named with permission; licensed and insured pest control technicians.

P1 — design and consistency
7. Rebuild About, Blog index, blog posts and Terms in the new design system. Remove every legacy colour, Tailwind grey, emoji icon, gradient text and the accent line.
8. Delete the legacy "Let's Make Your Space Spotless" banner. Give each page one closing block written for that page.
9. Fonts: Fraunces for headings, Hanken Grotesk for body, self-hosted.
10. Replace the repeated templates as described in section 1.3. Keep the gradient hero on Home only.
11. Remove the floating WhatsApp bubble, spin-slow and animate-fadeIn. Remove the stat count-up animation.
12. Apply the headline rewrites in 2.1 and the phrase fixes in 2.2. Resolve the contradictions in "Fix first" item 9. List all 11 services in the Services menu.
13. Replace old /images/ blog photos with photos from /photos/. Use the glass-polishing video in Windows & glass and the Gallery.

P2 — SEO, function, compliance
14. Titles under 60 characters, descriptions under 160; keyword-bearing H1s per 2.1; footer column titles not H2; fix the duplicate id.
15. Accurate, specific alt text on service cards. Correct og:image dimensions. lang="en-NG".
16. All phone links as tel:+234…
17. Form: name attributes and a real action so it works without JavaScript; a honeypot; phone pattern validation; Formspree auto-reply.
18. Add the security headers in 6.5 and test them on the preview.
19. Skip link; focus management for the mobile menu and cookie banner; 44px minimum tap targets; no text under 12px; fix the contrast failures in 6.1.
20. Load the Contact map only after a click.
21. Track hero, header and footer call, WhatsApp, quote and email clicks.
22. Training: add the two-day outline, delivery options, certificate of completion, pricing guidance and FAQs. Add dedicated pages for pest control, deep cleaning, post-construction and commercial cleaning without removing any existing anchor.

Motion
23. Implement the "Motion direction" section exactly: add the listed movements, remove the site-wide scroll reveal and everything under "Do not use", and follow every rule. Report the before and after Largest Contentful Paint and Cumulative Layout Shift for Home.
```
