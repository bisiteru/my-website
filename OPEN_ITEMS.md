# Open Items — [PLACEHOLDER] / [CONFIRM] register

**Updated:** end of Phase 3 · Required by `BUILD_BRIEF.md` §10 (final checkbox) and the
Phase 3 prompt ("List all open placeholders").

Per the brief's opening rule, **every unresolved item below is hidden on the rendered site** —
nothing is invented, nothing is filled with placeholder text or stock imagery.

Status: 🔴 blocking a visible feature · 🟡 needed before that section is complete · 🟢 resolved

---

## 🔴 Hidden on the live site until you confirm

| # | Item | Brief | What is hidden right now |
|---|---|---|---|
| C1 | **Written consent — Skin 101 Clinics Limited** | §3.2, §6.7 | The `/clients` logo wall renders **nothing**; `LogoWall` returns `null` while `consent: false`. The Lagos clinic work appears only as an **anonymised sector story**, never naming the client. Flip `consent` to `true` in `content/clients.json` once permission is on file. |
| C2 | Skin 101 services list — seeded as `["Commercial cleaning"]` | §6.7 | Not displayed. Confirm before the logo goes live. |
| C3 | Other client entries | §6.7 | Logo wall stays hidden entirely. Send name · sector · city · years · consent for each. |
| C4 | **Affiliation status wording** — "ISSA member" / "Registered with EHCON" / "PECAN member" | §4.6 | The badges display with the organisation **name only**. No membership status is claimed anywhere, because the exact wording is unconfirmed and these are verifiable claims. |
| C5 | Official ISSA member logo (supplied file is 256px) | §4.6 | Current file displays at ≤64px, within its native size. |
| C6 | **Training two-day outline** | §6.3 | `/training` shows the four modules and delivery approach, but no day-by-day timetable. |
| C7 | **Lagos areas** — Lekki, Ikoyi, Victoria Island, Ikeja? | §6.5 | `/lagos` names no specific areas. |
| C8 | **Full Lagos address** | §6.5, §6.12 | Footer and `/lagos` say "Lagos address · Site assessments by appointment" — the agreed §3.2 wording — with no street address. |
| C9 | Staff consent for first-name profiles | §6.6 | "Our people" shows team photographs with role captions only; no individual is named. |
| C10 | Analytics property | §9.11 | **No analytics installed.** Nothing is being measured. Phase 4 item. |

## 🟡 Content that would improve a built section

| # | Item | Brief | Note |
|---|---|---|---|
| C11 | A genuine **"after"** photo for the post-construction job | §3.3, §6.8 | The slider is labelled **Before / During**, because the second photo shows work in progress. `polished-tile-floor-after-cleaning.jpg` is correctly withheld as on-hold. One matching after-shot unlocks a true before/after. |
| C12 | More same-job before/after pairs | §6.8 | The component is built and reusable; only one pair exists. |
| C13 | Case studies for consented clients | §6.7 | Two anonymised sector stories are published in their place. |
| C14 | Hero video | §4.8 | Optional. `glass-polishing-loop.mp4` is in `public/video/` and can be wired at card size whenever you want it. |
| C15 | Recurring-plan discount figures | §6.2 | The page says plans are discounted but quotes no percentage, since none was supplied. |

## 🟢 Resolved

| Item | Resolution |
|---|---|
| Brand colour source | **Logo only**, per your direction — green `#248F4D`, orange `#DB4F32`. No uniform-derived colour. |
| Heading font | **Montserrat** + Inter |
| Google review count | **10 five-star reviews**, reflected in the stats row and `AggregateRating` |
| Canonical host | `www` (§9.4) — applied in Phase 4 |
| Facility Management | Now a real service with its own `#facility-management` anchor |
| `#office-cleaning` anchor | Restored as an alias alongside `#commercial-cleaning` |
| All 55 photos | Supplied, categorised and live with written alt text |
| Badges, client logo, video | All supplied and in `public/` |
