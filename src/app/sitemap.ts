import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dustandwipes.com";

  const staticRoutes = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/faqs`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.8 },
  ];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
