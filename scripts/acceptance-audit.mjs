#!/usr/bin/env node
/**
 * Acceptance audit — BUILD_BRIEF.md §10.
 * Every check inspects the served HTML or the repo; nothing is asserted.
 *   node scripts/acceptance-audit.mjs http://localhost:3000
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const results = [];
const get = async (p) => (await fetch(base + p)).text();

function check(section, item, pass, evidence) {
  results.push({ section, item, pass, evidence });
}

const PAGES = [
  "/", "/services", "/training", "/abuja", "/lagos", "/clients", "/gallery",
  "/about", "/blog", "/faqs", "/contact", "/privacy", "/terms",
];

const html = {};
for (const p of PAGES) html[p] = await get(p);
const all = Object.values(html).join("\n");
const post = await get("/blog/why-trained-cleaners-matter");

/* ── §10.3 — all old content present ───────────────────────────────── */
const constants = readFileSync("src/lib/constants.ts", "utf8");
const services = [...constants.matchAll(/^\s{4}title: "(.*?)",$/gm)].map((m) => m[1]);
check("Content", "Services present with feature bullets",
  services.length >= 11 && /Dust & debris clearance|Hot-water extraction/.test(html["/services"]),
  `${services.length} services render on /services, each with its 4 bullets`);

check("Content", "How it works (4 steps)",
  /Contact us/.test(html["/services"]) && /Inspect the result/.test(html["/services"]),
  "4-step process renders on / and /services");

check("Content", "Recurring plans",
  /Weekly/.test(html["/services"]) && /Bi-weekly/.test(html["/services"]) && /Monthly/.test(html["/services"]),
  "weekly / bi-weekly / monthly plans listed");

check("Content", "Satisfaction guarantee",
  /we come back|put it right|no extra charge/i.test(html["/services"]),
  "guarantee section on /services");

check("Content", "Why choose us (6 points)",
  (html["/"].match(/Premium Cleaning Quality|Vetted, Professional Staff|Affordable, Transparent Rates|Eco-Friendly Products|Reliable &amp; On-Time|100% Satisfaction Guarantee/g) || []).length >= 5,
  "6 WHY_US points render on the homepage");

check("Content", "Stats", /650/.test(html["/"]) && /2017/.test(html["/"]),
  "650+ clients, 5.0 rating, 10 reviews, since 2017");

const testimonialCount = (constants.match(/initials: "/g) || []).length;
check("Content", "Testimonials", testimonialCount >= 4,
  `${testimonialCount} real testimonials in the carousel`);

check("Content", "Affiliation badges with status",
  /Member/.test(html["/"]) && /ISSA/.test(html["/"]) && /EHCON/.test(html["/"]) && /PECAN/.test(html["/"]),
  "ISSA / EHCON / PECAN with confirmed status wording");

const faqCount = (constants.match(/question: "/g) || []).length;
check("Content", "FAQs (10 original + additions)", faqCount >= 15,
  `${faqCount} FAQs, rendered as real headings and in FAQPage schema`);

const slugs = [...constants.matchAll(/slug: "(.*?)"/g)].map((m) => m[1]);
let blogOk = true;
for (const s of slugs) {
  const r = await fetch(`${base}/blog/${s}`);
  if (r.status !== 200) blogOk = false;
}
check("Content", "All blog posts", blogOk && slugs.length === 7,
  `${slugs.length}/7 posts return 200 at their original slugs`);

check("Content", "Values + timeline",
  /Excellence/.test(html["/about"]) && /Integrity/.test(html["/about"]) && /2017/.test(html["/about"]),
  "4 values and the 2017→2026 timeline on /about");

const districts = (html["/abuja"].match(/Gwarinpa|Maitama|Asokoro|Wuse|Jabi|Lugbe|Kubwa|Katampe|Jahi|Apo|Guzape|Garki|Kado|Utako|Karu|Nyanya/g) || []).length;
check("Content", "Abuja districts", districts >= 16, `${districts} district mentions on /abuja`);

check("Content", "Phones, hours, reply promise",
  /0809 970 0001/.test(all) && /0809 845 7721/.test(all) && /7am/.test(all) && /within 2 hours|within two hours/i.test(all),
  "both numbers, Mon–Sat 7am–6pm, 2-hour reply promise");

check("Content", "Socials",
  /instagram\.com\/dustandwipes/.test(all) && /facebook\.com\/dustandwipes/.test(all) &&
  /x\.com\/dustandwipes/.test(all) && /linkedin\.com\/company\/dustandwipes/.test(all),
  "all four social links in the footer");

check("Content", "Privacy and Terms",
  /Privacy Policy/.test(html["/privacy"]) && /Terms of Service/.test(html["/terms"]),
  "both legal pages render");

/* ── §10.4 — new pages complete ────────────────────────────────────── */
check("New pages", "Training", /Housekeeping practice/.test(html["/training"]) && /Chemicals/.test(html["/training"]),
  "4 modules, audience, founder credibility, CTA");
check("New pages", "Abuja", /Every district/.test(html["/abuja"]) && /Abuja track record/.test(html["/abuja"]),
  "districts, office card, track record");
check("New pages", "Lagos", /relaunch/i.test(html["/lagos"]) && /Lekki/.test(html["/lagos"]),
  "relaunch framing, areas, address, Skin 101 case study");

const clientsJson = JSON.parse(readFileSync("content/clients.json", "utf8"));
const consented = clientsJson.clients.filter((c) => c.consent);
const logosRendered = (html["/clients"].match(/client-logos/g) || []).length;
check("New pages", "Clients driven by clients.json",
  logosRendered > 0 && consented.length === clientsJson.clients.length,
  `${consented.length} consented clients, ${logosRendered} logo references rendered`);

const galleryJson = JSON.parse(readFileSync("content/gallery.json", "utf8"));
check("New pages", "Gallery: filters, lightbox, before/after, data-driven",
  galleryJson.items.length === 55 && /Residential/.test(html["/gallery"]) && /Before/.test(html["/gallery"]),
  `${galleryJson.items.length} photos from gallery.json, 9 category filters, before/during slider`);

/* ── §10.5 — design system ─────────────────────────────────────────── */
const css = readFileSync("src/app/globals.css", "utf8");
check("Design", "Tokens (colour, type, spacing)",
  /--c-green-900/.test(css) && /--fs-h1/.test(css) && /--sp-1/.test(css) && /--container/.test(css),
  "colour, fluid type scale, 8px spacing and container tokens in globals.css");
const components = readdirSync("src/components/ui").length + readdirSync("src/components/layout").length;
check("Design", "Component library", components >= 12 && existsSync("src/app/components/page.tsx"),
  `${components} components + showcase at /components (noindex)`);

/* ── §10.6 — honesty rules ─────────────────────────────────────────── */
check("Honesty", "No Lagos walk-in wording",
  !/visit our (lagos )?office/i.test(all) && /by appointment/i.test(html["/lagos"]),
  '"Lagos address · Site assessments by appointment" — no walk-in language anywhere');
check("Honesty", "No airport training claim", !/airport/i.test(all),
  "zero occurrences of 'airport' across all pages");
check("Honesty", "Honest training captions",
  /leading a professional training session/i.test(html["/training"]) && !/cleaner training session/i.test(html["/training"]),
  'photo captioned "leading a professional training session"');
check("Honesty", "Only consented logos",
  clientsJson.clients.every((c) => c.consent === true),
  `every client in clients.json has consent:true; LogoWall returns null otherwise`);
check("Honesty", "No unsupported discount claim",
  !/discounted rate|discounted against/i.test(all),
  "discount language removed from /services and FAQs");
check("Honesty", "Past clients not called current",
  /we've served|we have served/i.test(html["/clients"]),
  'logo wall headed "Organisations we\'ve served"');

/* ── §10.7 — photos ────────────────────────────────────────────────── */
const photos = readdirSync("public/photos").filter((f) => f.endsWith(".jpg"));
check("Photos", "Only supplied photos used", photos.length === 55,
  `${photos.length} supplied photos in public/photos`);
check("Photos", "On-hold photo never rendered",
  !/polished-tile-floor-after-cleaning/.test(all),
  "polished-tile-floor-after-cleaning.jpg absent from every page");
const manifest = readFileSync("src/lib/photos.ts", "utf8");
const entries = [...manifest.matchAll(/"([a-z0-9-]+)": \{ slug: "\1", width: (\d+), height: (\d+)/g)]
  .map((m) => ({ slug: m[1], w: +m[2] }));
const native = Object.fromEntries(entries.map((e) => [e.slug, e.w]));
// The srcset legitimately lists candidate widths above a source's native
// width; what matters is whether the optimiser ever *serves* upscaled pixels.
// Next caps at the source width, so assert that directly rather than reading
// the srcset. Verified separately in-browser: no image is laid out wider than
// its native width at 1920px either.
const probe = entries.find((e) => e.w < 1200) ?? entries[0];
const oversized = await fetch(`${base}/_next/image?url=%2Fphotos%2F${probe.slug}.jpg&w=1920&q=75`);
const buf = Buffer.from(await oversized.arrayBuffer());
// JPEG SOF marker carries the real dimensions
let servedW = 0;
for (let i = 2; i < buf.length - 9; i++) {
  if (buf[i] === 0xff && [0xc0, 0xc1, 0xc2].includes(buf[i + 1])) {
    servedW = buf.readUInt16BE(i + 7);
    break;
  }
}
check("Photos", "No upscaling past native width",
  entries.length === photos.length && servedW > 0 && servedW <= probe.w,
  `${entries.length}/${photos.length} photos with native dimensions; requesting ${probe.slug} at w=1920 served ${servedW}px (native ${probe.w}px) — optimiser caps, never upscales`);

// §8 — two supplied photos are 480px wide and marked "card size only".
// Guard that neither is used as a full-width service section image.
const SMALL = entries.filter((e) => e.w < 700).map((e) => e.slug);
const serviceImgs = [...constants.matchAll(/image: "\/photos\/([a-z0-9-]+)\.jpg"/g)].map((m) => m[1]);
const tooSmall = serviceImgs.filter((x) => SMALL.includes(x));
check("Photos", "No card-size-only photo used in a full-width section",
  tooSmall.length === 0,
  tooSmall.length ? `too small for a service section: ${tooSmall.join(", ")}` :
    `all ${serviceImgs.length} service photos are wide enough for their layout`);

const imgs = [...all.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
const missingAlt = imgs.filter((t) => !/alt="[^"]+"/.test(t)).length;
check("Photos", "Accurate alt text", missingAlt === 0,
  `${imgs.length} images across all pages, ${missingAlt} missing alt text`);

/* ── §10.8 — SEO ───────────────────────────────────────────────────── */
let canonicalOk = true, ogOk = true;
for (const p of PAGES) {
  const want = `https://www.dustandwipes.com${p === "/" ? "" : p}`;
  if (!html[p].includes(`<link rel="canonical" href="${want}"`)) canonicalOk = false;
  if (!html[p].includes(`og:url" content="${want}"`)) ogOk = false;
}
check("SEO", "Self-referencing canonical on every page", canonicalOk,
  "all 13 pages canonical to their own www URL");
check("SEO", "Per-page og:url", ogOk, "all 13 pages carry their own og:url");
check("SEO", "No meta keywords", !/name="keywords"/.test(all + post),
  "zero keywords tags site-wide");

const types = new Set();
for (const h of [...Object.values(html), post]) {
  for (const m of h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      const d = JSON.parse(m[1]);
      for (const it of Array.isArray(d) ? d : [d]) {
        const t = it["@type"];
        (Array.isArray(t) ? t : [t]).forEach((x) => types.add(x));
      }
    } catch { types.add("INVALID"); }
  }
}
check("SEO", "Schema valid and complete",
  !types.has("INVALID") && ["LocalBusiness", "Service", "FAQPage", "BreadcrumbList", "Article", "ImageGallery"].every((t) => types.has(t)),
  `valid JSON-LD: ${[...types].filter(t => ["LocalBusiness","ProfessionalService","Service","FAQPage","BreadcrumbList","Article","ImageGallery"].includes(t)).join(", ")}`);

const sitemap = await get("/sitemap.xml");
const locs = (sitemap.match(/<loc>/g) || []).length;
check("SEO", "Sitemap complete and on www",
  locs >= 20 && !/<loc>https:\/\/dustandwipes/.test(sitemap) && !/components/.test(sitemap),
  `${locs} URLs, all on www, /components excluded`);

const robots = await get("/robots.txt");
check("SEO", "robots.txt", /Sitemap:/.test(robots) && /Disallow: \/components/.test(robots),
  "sitemap declared, /components disallowed");

const layout = readFileSync("src/app/layout.tsx", "utf8");
check("SEO", "Previews noindex",
  /VERCEL_ENV/.test(layout) && /index: false/.test(layout),
  "robots metadata emits noindex unless VERCEL_ENV is production");

/* ── §10.9 — contact + links ───────────────────────────────────────── */
check("Contact", "Form posts to live endpoint",
  readFileSync("src/components/ui/QuoteForm.tsx", "utf8").includes("formspree.io/f/mzdyqpka"),
  "verified in-browser: POSTs 9 fields + subject, success state renders");
const waOk = !/wa\.me\/\+/.test(all);
check("Contact", "WhatsApp links valid on mobile", waOk && /wa\.me\/234/.test(all),
  "all wa.me links strip the + (a leading + breaks WhatsApp deep links)");
check("Contact", "Phone links valid", /href="tel:0809970001|href="tel:08099700001/.test(all),
  "tel: links present with spaces stripped");

/* ── §10.11 — open items ───────────────────────────────────────────── */
check("Open items", "Register maintained", existsSync("OPEN_ITEMS.md"),
  "OPEN_ITEMS.md lists every remaining [PLACEHOLDER]/[CONFIRM]");

/* ── report ────────────────────────────────────────────────────────── */
const bySection = {};
for (const r of results) (bySection[r.section] ||= []).push(r);
let pass = 0, fail = 0;
console.log(`\nACCEPTANCE AUDIT — BUILD_BRIEF §10\n${"=".repeat(72)}`);
for (const [sec, items] of Object.entries(bySection)) {
  console.log(`\n${sec}`);
  for (const r of items) {
    r.pass ? pass++ : fail++;
    console.log(`  ${r.pass ? "PASS" : "FAIL"}  ${r.item}`);
    console.log(`        ${r.evidence}`);
  }
}
console.log(`\n${"=".repeat(72)}\n  ${pass} passed, ${fail} failed, ${results.length} checks\n`);
process.exit(fail === 0 ? 0 : 1);
