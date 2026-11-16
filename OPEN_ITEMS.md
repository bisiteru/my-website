# Open Items — what is still waiting on you

**Updated:** after the SITE_REVIEW.md pass (16 November 2026).

Per the brief's opening rule, **every unresolved item below is hidden on the rendered
site** — nothing is invented, nothing is filled with placeholder text or stock imagery.

Status: 🔴 blocking a visible feature · 🟡 would improve a built section · 🟢 resolved

---

## 🔴 Waiting on you

| # | Item | Why it matters | What the site does meanwhile |
|---|---|---|---|
| C9 | **Staff consent for named profiles** | §6.6 | "Our people" shows team photographs with role captions only. Nobody is named. |
| C11 | **A true before/after pair from one job** | §3.3, §6.8 · review "Fix first" 10 | The before/after section is **removed**. The only pair we held was before/during, from two different jobs, which is not the comparison a visitor reads it as. `BeforeAfterSlider` is kept and still demonstrated on `/components`; the section returns the day a real pair arrives. |
| C15 | **Recurring-plan discount figures** | §6.2 | Plans are described as discounted with no percentage quoted, because none was supplied. |
| C16 | **Typical price ranges per service** | review 5.3 | The review asks for ranges. None exist, so instead of inventing them every service page carries **"what moves the price"** — the factors that change the number. If you want figures published, send them and they go in. |
| C17 | **Formspree auto-reply** | review 4.3 | An enquirer gets no confirmation email. This is a switch in your Formspree dashboard, not something in the code — turn on auto-reply and nothing here needs to change. |
| C18 | **Search Console verification** | review 3.8 | No verification tag in the HTML. It may already be verified by DNS; check in your account. Send me a tag if you want the meta method instead. |
| C19 | **Google Business Profile link** | review 3.8 | The Contact map is a plain search for the address, not your GBP listing. Send the profile URL and the map and the schema can point at the real listing. |

## 🟡 Would improve a built section

| # | Item | Note |
|---|---|---|
| C12 | More same-job before/after pairs | The component is built and reusable. |
| C13 | Case studies for more consented clients | Two named case studies are published; the rest of the wall is logos only. |
| C20 | A second video | `glass-polishing-loop.mp4` is wired into the Windows & glass section and the Gallery. One clip is doing a lot of work — footage of a deep clean or a post-construction job would spread it. |
| C21 | Larger source photographs for pest control | Only one pest photograph is wide enough to render at full width without upscaling, so both pest blog posts share it. |

## 🟢 Resolved

| Item | Resolution |
|---|---|
| Brand colour source | **Logo only** — green `#248F4D`, orange `#DB4F32`. No uniform-derived colour. |
| Heading font | **Fraunces**, after Montserrat was judged heavy on mobile. |
| Body font | **Hanken Grotesk**, replacing Inter and then Source Sans 3, at your direction. |
| Google review count | **Not published anywhere**, at your direction. "5.0 on Google" remains; `aggregateRating` was removed from the schema, since Google requires a count alongside a rating. |
| Analytics | GA4 `G-GXR7K2CX6K`, consent-gated, with quote, WhatsApp, phone and email events. |
| CAC registration | **RC 1397102**, confirmed by you, now in the footer and in the Terms. |
| Opening hours | Monday–Saturday 7am–6pm, Sundays by appointment. Held in one place in `constants.ts`. |
| Terms contact details | Corrected to `infodesk@dustandwipes.com` and the two real numbers, read from `constants.ts` so they cannot drift again. |
| ISSA name | "The Association for Cleaning & Facility Solutions", at your direction. |
| "Safe for children and pets" | True of the **cleaning** products, and said so. Not claimed for pest control, where the page says plainly why not. |
| "Licensed and insured" | Removed. The site claims only EHCON, PECAN and the AMAC Operational Permit. |
| Glass-polishing video | Wired into `/services#window-glass-cleaning` and `/gallery`. |
| Canonical host | `www` (§9.4). |
| `#office-cleaning` anchor | Still resolves as an alias of `#commercial-cleaning`. |

---

## Before launch

1. **Submit the enquiry form on the preview** and confirm the message reaches the
   Formspree inbox. The form posts correctly in-browser, but the final delivery hop
   cannot be tested from this sandbox.
2. **Re-run Lighthouse on the preview**, not locally. Sandbox numbers are not
   trustworthy — see `ACCEPTANCE_AUDIT.md`.
3. **Test the Content-Security-Policy on the preview.** It was driven through eight
   pages in a real browser here with zero violations, but a CSP is exactly the kind of
   thing that behaves differently against a real deployment. If anything breaks, the
   relevant directive is commented in `next.config.ts`.
