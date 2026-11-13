# Component Library

**Implements:** `BUILD_BRIEF.md` §4.7 (components) with §4.8 (motion), on the §4.2–4.4 tokens.
**Showcase:** `/components` — not linked in navigation, `noindex, nofollow, nocache`, absent from `sitemap.ts`.

| Component | File | Notes |
|---|---|---|
| Header (transparent → solid) | `layout/Navbar.tsx` | Phase 1 |
| Services mega-menu | `layout/Navbar.tsx` | 3 columns + footer CTA; hover intent delay |
| Mobile drawer | `layout/Navbar.tsx` | scroll lock, Escape to close |
| Sticky mobile bar | `layout/Navbar.tsx` | Call · WhatsApp · Quote |
| Buttons | `globals.css` | primary / secondary / ghost / on-dark / outline-dark |
| Split hero | `ui/Heroes.tsx` | one portrait beside the message |
| Collage hero | `ui/Heroes.tsx` | lead photo + two portraits (§6.1) |
| Stat counter row | `ui/StatCounter.tsx` | rAF count-up on scroll; static under reduced motion |
| Service card | `ui/Cards.tsx` | photo · benefit · anchor link |
| Sector tile | `ui/Cards.tsx` | text-only, never blocked on a photo |
| Case-study card | `ui/Cards.tsx` | challenge → what we did → result |
| Logo wall | `ui/Cards.tsx` | **returns null when nothing is consented** |
| Process steps | `ui/Cards.tsx` | numbered, 4-up |
| Testimonial carousel | `ui/TestimonialCarousel.tsx` | keyboard, swipe, pauses on hover/focus |
| Before/after slider | `ui/BeforeAfterSlider.tsx` | pointer drag + range input for keyboard/SR |
| Masonry gallery | `ui/MasonryGallery.tsx` | CSS columns, filters, lightbox |
| FAQ accordion | `ui/Accordion.tsx` | questions are real headings |
| CTA band | `ui/Blocks.tsx` | — |
| Quote form | `ui/QuoteForm.tsx` | organisation, city, area, 11 services, privacy note |
| Map block | `ui/Blocks.tsx` | lazy-loaded iframe |
| Section header | `ui/Blocks.tsx` | eyebrow · heading · lede |
| Scroll reveal | `ui/Reveal.tsx` | IntersectionObserver + CSS |
| Footer | `layout/Footer.tsx` | §6.12 in full |

## Motion (§4.8)
Count-up stats, fade/slide-in on scroll, 1.03 image hover zoom, smooth header transition,
carousel and slider interactions. No animation library is used for any new component —
IntersectionObserver plus CSS transitions only. A global `prefers-reduced-motion` block
disables animation, transitions and hover zoom, and the carousel does not auto-advance.

## Accessibility
Focus-visible outline on every interactive element; 48px minimum touch targets;
`aria-expanded`/`aria-controls` on disclosures; carousel exposes tabs and arrow-key
navigation; lightbox is a labelled modal with Escape, arrow keys and focus move;
before/after exposes a labelled range input; form fields all have real `<label>`s.

## Honesty rules in code (§3.2)
- `LogoWall` renders **nothing** unless a client has `consent: true`.
- Footer states affiliation names only — the exact membership wording is `[CONFIRM]`, so
  no membership status is claimed yet.
- The before/after demo is labelled **Before / During**, because no genuine matching
  "after" exists for that job.
- Footer says "Lagos address · Site assessments by appointment", never "visit our office".
