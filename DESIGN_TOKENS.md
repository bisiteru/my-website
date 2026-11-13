# Design Tokens — Dust & Wipes

**Implements:** `BUILD_BRIEF.md` §4.2 (colour), §4.3 (typography), §4.4 (layout & spacing)
**Source of truth:** `src/app/globals.css`

---

## Colour

Brand colours are taken **from the logo only** (client direction, 2026-11-12). The logo
carries exactly two brand colours; every other value below is a neutral, or an
accessibility-driven tint/shade of those two.

| Sampled from | Pixels averaged | Value |
|---|---|---|
| Logo lettering (green) | 6,153 | **`#248F4D`** |
| Logo swoosh (orange) | 3,733 | **`#DB4F32`** |

> The uniform yellow was sampled early on and **discarded** — brand colour comes from the
> logo alone. No yellow token exists in the system.

### Primary — Deep Green
Headings, buttons, footer background.

| Token | Value | Use |
|---|---|---|
| `--c-green-900` | `#0B3B21` | footer background, deepest surfaces |
| `--c-green-800` | `#10492A` | headings on light |
| `--c-green-700` | `#155E35` | primary button, links |
| `--c-green-600` | `#1A7442` | primary hover |
| `--c-green-500` | `#248F4D` | **the logo green** — accents, large text |
| `--c-green-100` | `#E3F1E8` | tinted band |
| `--c-green-50` | `#F1F8F4` | lightest wash |

### Accent — Orange
Highlights, small accents, stat numbers, hover states.

| Token | Value | Use |
|---|---|---|
| `--c-orange-300` | `#F1B9AD` | accent text/icons on dark green |
| `--c-orange-500` | `#DB4F32` | **the logo swoosh** — fills, graphics, large text |
| `--c-orange-600` | `#C23F23` | CTA button background |
| `--c-orange-700` | `#C9482E` | small accent text on light |

### Neutrals

| Token | Value | Use |
|---|---|---|
| `--c-bg` | `#FBFAF7` | warm off-white page background |
| `--c-surface` | `#FFFFFF` | cards |
| `--c-band` | `#F2F1EC` | soft stone grey section band |
| `--c-ink` | `#15181A` | near-black body text |
| `--c-ink-2` | `#4A5350` | secondary text |
| `--c-border` | `#E3E1DA` | hairlines |

### WCAG AA verification

Every pairing in use was computed, not estimated. AA requires 4.5:1 for body text,
3:1 for large text.

| Pairing | Ratio | Needs | |
|---|---|---|---|
| body ink on page bg | 17.09:1 | 4.5 | PASS |
| body ink on band | 15.77:1 | 4.5 | PASS |
| secondary ink-2 on page bg | 7.61:1 | 4.5 | PASS |
| heading green-800 on page bg | 10.02:1 | 4.5 | PASS |
| heading green-800 on band | 9.25:1 | 4.5 | PASS |
| link green-700 on page bg | 7.49:1 | 4.5 | PASS |
| white on green-700 button | 7.82:1 | 4.5 | PASS |
| white on green-800 | 10.46:1 | 4.5 | PASS |
| white on green-900 footer | 12.64:1 | 4.5 | PASS |
| white on orange-600 CTA | 5.21:1 | 4.5 | PASS |
| orange-300 on green-900 | 7.39:1 | 4.5 | PASS |
| orange-300 on green-800 | 6.12:1 | 4.5 | PASS |
| orange-300 on green-700 | 4.58:1 | 4.5 | PASS |
| orange-700 on page bg | 4.52:1 | 4.5 | PASS |
| green-500 on page bg (large only) | 3.94:1 | 3.0 | PASS |

**Rules enforced by the token set**
- `orange-500` is **3.89:1** on light — large text only, never body copy. Use `orange-700`.
- `orange-500` is **3.12:1** on `green-900` — never small text on dark. Use `orange-300`.

## Typography (§4.3)

- **Headings:** Montserrat 600/700 — chosen over Poppins for a more corporate tone
- **Body:** Inter 400/500/600
- Both self-hosted and subset by `next/font/google`, with `font-display: swap`

| Token | Clamp | Range |
|---|---|---|
| `--fs-h1` | `clamp(2.5rem, 1.6rem + 3.6vw, 4rem)` | 40 → 64px |
| `--fs-h2` | `clamp(1.875rem, 1.4rem + 1.9vw, 2.75rem)` | 30 → 44px |
| `--fs-h3` | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` | 22 → 28px |
| `--fs-body` | `clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem)` | 17 → 18px |

Line-height 1.6; max line length `--measure: 70ch`. `.eyebrow` gives the letter-spaced
uppercase label above section headings.

## Layout & spacing (§4.4)

- `--container: 1240px`, 12-column grid
- 8px scale: `--sp-1` … `--sp-16`
- `--section-y: clamp(4rem, 2rem + 8vw, 8rem)` → 64px mobile, 128px desktop
- Radius `--r-md: 12px` / `--r-lg: 16px`
- Shadows only on hover (`--shadow-hover`), flat at rest

## Motion (§4.8)

`.animate-fade-up`, `.photo-zoom` (1.03 hover), `.animate-spin-slow`. A global
`prefers-reduced-motion` block disables animation, transitions and hover zoom.

## ⚠ Cascade layers — important for later phases

Tailwind v4 places utilities in `@layer utilities`. **Unlayered CSS beats every layered
rule regardless of specificity**, so base and component styles here are wrapped in
`@layer base` and `@layer components`. Without that, `h1 { color }` silently overrode
`text-white` on dark heroes (caught and fixed during Phase 1). Keep new rules inside a
layer.
