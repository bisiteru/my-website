# Launch Plan — dustandwipes.com

**Prepared:** 2026-11-13 · For: Bisi Teru
**Scope:** taking the rebuild live on `www.dustandwipes.com`.

> **I will not switch the domain.** Every step that changes what the public sees is yours
> to run. This document is the order to run them in, what to check at each point, and how
> to get back if something is wrong.

---

## The one thing to understand first

The current live site **is already this repository**, deployed on Vercel. So this is not a
platform migration — there is no DNS change, no nameserver edit, no propagation wait. It is
a **merge to `main`**, which Vercel builds and deploys automatically.

That makes rollback cheap and fast, which shapes everything below.

---

## Step 1 — Back up what is live (before anything else)

Vercel keeps every previous deployment and can roll back to any of them, so the deployment
itself is already backed up. What is *not* automatically recoverable is the content state,
so capture it:

```bash
# Record the exact commit currently serving production
git fetch origin
git rev-parse origin/main          # ← write this down. This is your rollback target.
git tag pre-rebuild-backup origin/main
git push origin pre-rebuild-backup
```

Also save, outside the repo:
- A copy of `content/clients.json` and `content/gallery.json`
- The current Formspree submission history (export from the Formspree dashboard)

**Checkpoint:** you have a commit SHA written down and a `pre-rebuild-backup` tag pushed.

## Step 2 — Review the preview deployment

Open the PR for `claude/cleaning-company-website-PJw6I`. Vercel posts a **preview URL** on it.
Preview deployments emit `noindex, nofollow, nocache`, so nothing you do here can be indexed.

On the preview, check:

- [ ] **Submit the contact form for real.** This is the single most important check — it is
      the one thing not verified from the build sandbox, and the form gained fields in
      Phase 3, so earlier tests do not cover it. Confirm the email arrives at
      `infodesk@dustandwipes.com` with all nine fields.
- [ ] Tap **Call**, **WhatsApp** and **Get a quote** on a real phone. WhatsApp should open
      with the message pre-filled.
- [ ] Run **Lighthouse mobile** on `/` and `/gallery` from Chrome DevTools. The build
      sandbox could not certify performance (see `ACCEPTANCE_AUDIT.md`). If `/gallery` is
      below 90 here, say so and I will paginate it.
- [ ] Read `/lagos`, `/clients` and `/about` for anything factually wrong. These carry the
      claims that matter — client names, the Lagos relaunch framing, affiliation statuses.
- [ ] Accept the cookie banner once, then confirm GA4 realtime shows your visit in
      Google Analytics.

**Do not proceed until the form test passes.**

## Step 3 — Merge to production

```bash
# On the PR page: "Merge pull request" → "Confirm merge"
```

Vercel builds and deploys `main` automatically, normally in 1–2 minutes.

Production is indexable because `VERCEL_ENV === "production"` flips the robots metadata —
**there is no noindex to remove by hand.** Verify rather than assume:

```bash
curl -s https://www.dustandwipes.com/ | grep -o '<meta name="robots"[^>]*>'
# expect: content="index, follow" — NOT noindex
```

## Step 4 — Verify the live site

```bash
node scripts/url-check.mjs https://www.dustandwipes.com
```

**Required: 31/31 pass.** This proves every pre-existing URL still answers at its exact
path and every `/services` anchor still resolves. If anything fails here, go to Rollback.

Then spot-check by hand:

```bash
curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" -L https://dustandwipes.com/
# expect: 200, redirected to https://www.dustandwipes.com/

curl -s https://www.dustandwipes.com/robots.txt      # sitemap declared, /components disallowed
curl -s https://www.dustandwipes.com/sitemap.xml | grep -c "<loc>"   # expect 20
```

## Step 5 — Tell the search engines

**Google Search Console** — you are already verified.
1. **Sitemaps** → submit `https://www.dustandwipes.com/sitemap.xml`
2. **URL Inspection** → paste `https://www.dustandwipes.com/` → **Request indexing**
3. Repeat the request for the five new pages: `/training`, `/abuja`, `/lagos`,
   `/clients`, `/gallery`
4. Set the Google Analytics link: **Admin → Product links → Google Analytics**

**Bing Webmaster Tools** — `bing.com/webmasters`
1. Sign in with the same Google account
2. **Import from Google Search Console** — this carries over verification and the sitemap
   in one step, and is far quicker than verifying again
3. Confirm the sitemap is listed

**Google Business Profile** — add `https://www.dustandwipes.com` as the website URL if it
is not already exact, including the `www`.

## Step 6 — Watch for a week

| When | Check |
|---|---|
| Day 1 | GA4 realtime shows traffic; one test enquiry arrives by email |
| Day 2–3 | Search Console → **Pages**: new URLs moving to "Indexed" |
| Day 7 | Search Console → **Pages → Not found (404)** — this reveals any old URL still being requested that we did not know about. Send me the list and I will add redirects. |
| Day 7 | Search Console → **Core Web Vitals** — real-user data, which is the honest answer to the Lighthouse question |

---

## Rollback

Two options. Use the first.

**A — Instant, via Vercel (seconds, no git):**
1. Vercel dashboard → the project → **Deployments**
2. Find the last deployment before the merge (the SHA from Step 1)
3. **⋯ → Promote to Production**

Live within seconds. Nothing is lost; the new code stays on `main` for a second attempt.

**B — Via git, if you want `main` itself reverted:**
```bash
git revert -m 1 <merge-commit-sha>
git push origin main
```

**When to roll back:** `url-check` fails on live, the contact form stops delivering, or any
page 500s. **When not to:** a typo, a photo you dislike, a wording change — those are a
normal edit, not an emergency.

---

## After launch

Nothing below blocks going live; all are tracked in `OPEN_ITEMS.md`.

1. **The "after" photo** for the post-construction job → turns Before/During into a true
   before/after
2. **Client engagement years**, if you want `"since 2019"` style tenure on the logo wall
3. **Staff consent** if you want named team profiles on `/about`
4. **A blog post every month or two** — the strongest ongoing SEO signal for a local
   service business, and the cheapest
5. **Re-check `AggregateRating`** in `src/app/layout.tsx` whenever your Google review count
   changes. It currently says 10. A figure that drifts from reality risks a Google penalty,
   so treat it as a number to maintain, not set and forget.
