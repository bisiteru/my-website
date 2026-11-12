# Dust & Wipes rebuild — phased prompts (v2)

Put `BUILD_BRIEF.md` and the `dust-and-wipes-photos/`, `dust-and-wipes-badges/`, `dust-and-wipes-logos/` and `dust-and-wipes-video/` folders in the repository root. Paste one prompt at a time; review the report and preview before the next.

## Phase 0 — Audit (no code changes)
```
Read BUILD_BRIEF.md in full. Do not change code yet.
1. Crawl https://www.dustandwipes.com and produce URL_INVENTORY.md: every URL (incl. every blog post, privacy, terms) with its title, meta description, H1 and H2s, plus every anchor ID used on /services.
2. Produce CONTENT_INVENTORY.md: every content block per old page (services + bullets, FAQs, testimonials, stats, badges, values, timeline, districts, contact details, socials, email), marked in-rebuild / missing / changed.
3. Summarise the repo: framework, routing, content and image locations, form handling, redirects/headers config, analytics and verification tags.
4. Propose the plan for Phases 1–5 and list questions. Wait for approval.
```

## Phase 1 — Structure freeze, routes, design tokens
```
Follow BUILD_BRIEF.md §3 and §5.
1. Keep every existing URL, title, H1, meta description and /services anchor exactly as in URL_INVENTORY.md. Add new pages (/training, /abuja, /lagos, /clients, /gallery) only additively.
2. Build navigation (incl. Services mega-menu and mobile sticky Call/WhatsApp/Quote bar) and a branded 404.
3. Preview deployments noindex.
4. Implement the design tokens from §4 (colour, type, spacing) and copy photos into public images with responsive handling.
5. Write and run the URL check script; show results (must be 100% same-path 200).
```

## Phase 2 — Component library and design system
```
Follow BUILD_BRIEF.md §4. Build every component in §4.7 with the motion rules in §4.8, as a reusable library. Show a component showcase page (not linked in nav, noindex) and screenshots at 360/768/1280/1440.
```

## Phase 3 — Content, pages, Clients and Gallery
```
Follow BUILD_BRIEF.md §3.2, §6, §7 and §8.
- Restore all old content to the copy standard in §4.9 and build every page in §6.
- Build /clients from content/clients.json and /gallery from content/gallery.json (filters, lightbox, before/after).
- Place photos exactly per §8 with accurate alt text.
- Honesty rules exactly. Never invent facts, clients or logos — use [PLACEHOLDER]/[CONFIRM].
- Document in README how to add clients, photos, testimonials and FAQs.
List all open placeholders.
```

## Phase 4 — SEO and technical
```
Implement BUILD_BRIEF.md §9 in full. Wire the contact form to deliver and show evidence of a test. Run Lighthouse (mobile) and Rich Results Test; fix anything under 90.
```

## Phase 5 — QA and launch plan
```
Report pass/fail with evidence on every item in BUILD_BRIEF.md §10. Then write LAUNCH_PLAN.md: backup of live site, domain switch steps, remove noindex in production only, submit sitemap to Search Console and Bing, re-run URL check on live, rollback plan. Do not switch the domain yourself.
```
