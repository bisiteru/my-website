import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // §2 / §9.9 — serve AVIF then WebP, generated at build/request time from
    // the supplied JPEGs. The source files are never re-cropped or upscaled.
    formats: ["image/avif", "image/webp"],
    // Device widths used for responsive srcset generation.
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [80, 120, 160, 240, 320, 420],
    // Long cache: photo filenames are stable and content-addressed by Next.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  /**
   * Security headers — SITE_REVIEW 6.5. Only HSTS was set, which Vercel adds
   * for us; everything below was missing.
   *
   * The Content-Security-Policy is the one with teeth, so what each source is
   * for, and why the two loose entries are loose:
   *
   * - 'unsafe-inline' in script-src is required by Next's App Router, which
   *   bootstraps with inline scripts, and by the JSON-LD blocks. Removing it
   *   needs per-request nonces, which cannot be set from a static export.
   * - 'unsafe-inline' in style-src is required by Tailwind's inline critical
   *   CSS and by the handful of style={{...}} props.
   * - img-src allows https: generally because next/image serves optimised
   *   images from the deployment origin and the Google Map embed pulls tiles.
   * - connect-src is deliberately narrow: Formspree for the enquiry form and
   *   Google Analytics, nothing else.
   * - frame-src is limited to Google so the Contact map can load, and
   *   frame-ancestors 'self' stops the site being framed elsewhere.
   */
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "img-src 'self' data: blob: https:",
      "media-src 'self'",
      "font-src 'self' data:",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
      "frame-src https://www.google.com https://maps.google.com",
      "frame-ancestors 'self'",
      "form-action 'self' https://formspree.io",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
