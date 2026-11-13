import { MetadataRoute } from "next";
import { absolute } from "@/lib/seo";

/** §9.6 / §9.7 — production is indexable; the internal component showcase is not.
 *  Preview deployments are additionally noindex via the robots metadata in layout.tsx. */
export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined;

  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/components"] },
    sitemap: absolute("/sitemap.xml"),
    host: absolute("/").replace(/\/$/, ""),
  };
}
