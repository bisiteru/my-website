#!/usr/bin/env node
/**
 * URL check — BUILD_BRIEF §3.1 (final bullet) and §10 (first checkbox).
 *
 * Requests every URL recorded in URL_INVENTORY.md against a target origin and
 * reports the status code, so we can prove that the structure freeze held:
 * every pre-existing URL must still return 200 at the identical path.
 *
 *   node scripts/url-check.mjs                      # against localhost:3000
 *   node scripts/url-check.mjs https://example.com  # against a preview
 *
 * Exit code 0 = every frozen URL returned 200. Non-zero = structure broke.
 */

const target = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

/** Every URL that existed before the rebuild. These MUST NOT move. */
const FROZEN = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/blog/why-trained-cleaners-matter",
  "/blog/how-often-should-you-deep-clean",
  "/blog/signs-of-termite-infestation",
  "/blog/office-cleaning-productivity",
  "/blog/eco-friendly-cleaning-tips",
  "/blog/pest-control-abuja-rainy-season",
  "/blog/move-out-cleaning-checklist",
  "/contact",
  "/faqs",
  "/privacy",
  "/terms",
  "/sitemap.xml",
  "/robots.txt",
];

/** Added by the rebuild — additive only, must never displace a frozen URL. */
const ADDED = ["/training", "/abuja", "/lagos", "/clients", "/gallery"];

/** Anchors that must resolve on /services (§3.1), including legacy aliases. */
const SERVICE_ANCHORS = [
  "cleaning",
  "pest-control",
  "training-consultancy",
  "residential-cleaning",
  "commercial-cleaning",
  "office-cleaning", // legacy alias — brief §3.1
  "deep-cleaning",
  "post-construction",
  "carpet-upholstery",
];

const pad = (s, n) => String(s).padEnd(n);

async function check(path) {
  const url = target + path;
  try {
    const res = await fetch(url, { redirect: "manual" });
    return { path, status: res.status, location: res.headers.get("location") };
  } catch (err) {
    return { path, status: 0, error: err.message };
  }
}

async function main() {
  console.log(`\nURL check against ${target}\n${"=".repeat(60)}`);

  let failures = 0;

  console.log("\nFROZEN URLs — must be 200 at the same path");
  for (const p of FROZEN) {
    const r = await check(p);
    const ok = r.status === 200;
    if (!ok) failures++;
    console.log(
      `  ${ok ? "PASS" : "FAIL"}  ${pad(r.status || r.error, 5)} ${p}` +
        (r.location ? `  → ${r.location}` : "")
    );
  }

  console.log("\nNEW URLs — additive");
  for (const p of ADDED) {
    const r = await check(p);
    const ok = r.status === 200;
    if (!ok) failures++;
    console.log(`  ${ok ? "PASS" : "FAIL"}  ${pad(r.status || r.error, 5)} ${p}`);
  }

  console.log("\n/services anchor IDs — must all be present in the HTML");
  const res = await fetch(target + "/services");
  const html = await res.text();
  for (const id of SERVICE_ANCHORS) {
    const present = html.includes(`id="${id}"`);
    if (!present) failures++;
    console.log(`  ${present ? "PASS" : "FAIL"}  #${id}`);
  }

  const total = FROZEN.length + ADDED.length + SERVICE_ANCHORS.length;
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${total - failures}/${total} passed, ${failures} failed\n`);
  process.exit(failures === 0 ? 0 : 1);
}

main();
