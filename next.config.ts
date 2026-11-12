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
};

export default nextConfig;
