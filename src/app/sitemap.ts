import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/constants";
import { absolute } from "@/lib/seo";

/** §9.6 — every URL, old and new, on the canonical www host.
 *  /components is intentionally absent: it is the internal showcase. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/training", priority: 0.9, freq: "monthly" },
    { path: "/abuja", priority: 0.8, freq: "monthly" },
    { path: "/lagos", priority: 0.8, freq: "monthly" },
    { path: "/clients", priority: 0.8, freq: "monthly" },
    { path: "/gallery", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/faqs", priority: 0.6, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  return [
    ...pages.map((p) => ({
      url: absolute(p.path),
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: absolute(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
