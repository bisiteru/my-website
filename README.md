# Dust & Wipes Limited — website

Next.js 16 (App Router) + Tailwind v4, deployed on Vercel from `main`.
The build is governed by [`BUILD_BRIEF.md`](./BUILD_BRIEF.md); phase prompts live in
[`PROMPTS.md`](./PROMPTS.md).

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
node scripts/url-check.mjs http://localhost:3000   # structure-freeze check
```

| Doc | What it covers |
|---|---|
| `BUILD_BRIEF.md` | The brief. Single source of truth. |
| `DESIGN_TOKENS.md` | Colour, type, spacing tokens + WCAG evidence |
| `COMPONENTS.md` | The component library (§4.7) |
| `URL_INVENTORY.md` | Every URL with title/H1/H2s — the frozen structure |
| `OPEN_ITEMS.md` | Every open `[PLACEHOLDER]` / `[CONFIRM]` |
| `PHASE_PLAN.md` | Phase plan and progress |

---

## Editing content without touching code

All editable content lives in **`content/*.json`** and **`src/lib/constants.ts`**.
After any edit run `npm run build` to confirm nothing broke.

### Add a client → `content/clients.json`

```jsonc
{
  "name": "Example Organisation Ltd",
  "sector": "Corporate offices",      // must match a label in "sectors"
  "city": "Abuja",
  "services": ["Commercial cleaning"],
  "startYear": 2025,
  "status": "current",                 // "current" | "past"
  "consent": false,                    // ← see below
  "logo": "example-logo.png"           // file in public/client-logos/
}
```

> **`consent` is the safety switch.** The logo wall and any naming of a client render
> **only** when `consent: true`. With `false` the client is invisible sitewide — this is the
> brief's §3.2 honesty rule enforced in code, not left to memory. Flip it to `true` only
> once written permission is on file.
>
> `status` controls wording: `"past"` clients are described as **served**, never *current*.

### Add a photo → `content/gallery.json`

1. Put the JPEG in **`public/photos/`** (never re-crop or upscale the supplied file).
2. Regenerate the dimension manifest so the image cannot shift layout:
   ```bash
   node scripts/build-photo-manifest.mjs
   ```
3. Add an entry:
   ```jsonc
   { "file": "new-photo-name", "alt": "Plain description of what is visible", "category": "residential" }
   ```
   `file` omits the `.jpg`. `category` must be one of the slugs in `"categories"`.
   Write alt text describing what is actually visible — it is read aloud to screen-reader users.

### Add a testimonial → `src/lib/constants.ts` → `TESTIMONIALS`

```ts
{ name: "Full Name", initials: "FN", role: "Service used", rating: 5, text: "…" }
```
Only real, received testimonials. The review count in the homepage stats and the
`AggregateRating` schema must match your true Google figures.

### Add an FAQ → `src/lib/constants.ts` → `FAQS`

```ts
{ question: "…?", answer: "…" }
```
Added automatically to both the accordion and the `FAQPage` structured data.

### Add or change a service → `src/lib/constants.ts` → `SERVICES`

```ts
{
  id: "my-service",                  // becomes the /services#my-service anchor
  title: "My Service",
  shortDesc: "One line for cards.",
  description: "Fuller paragraph for the service section.",
  image: "/photos/some-photo.jpg",
  href: "/services#my-service",
  features: ["…", "…", "…", "…"],
  category: "cleaning",              // "cleaning" | "pest-control" | "training"
}
```

> **Never change an existing `id`.** Each one is a live URL anchor that external links
> depend on (§3.1). If a name must change, keep the old anchor as an alias — see
> `ALIAS_ANCHORS` in `src/app/services/page.tsx`, which is how `#office-cleaning`
> still works after that service was renamed.

---

## Rules the code enforces

- **Structure freeze** — every pre-existing URL stays at its exact path. `scripts/url-check.mjs`
  fails the build check if one moves. Run it before every merge.
- **No placeholders live** — anything unconfirmed is hidden, never faked.
- **Photos only from `public/photos/`** — no stock imagery anywhere on the site.
- **Preview deployments are `noindex`**; only production is indexable.
