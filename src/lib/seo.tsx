import type { Metadata } from "next";

/**
 * Central SEO helper — BUILD_BRIEF §9.
 *
 * §9.4 fixes the canonical host as https://www.dustandwipes.com, so every
 * canonical, og:url and sitemap entry is generated from SITE_URL rather than
 * written by hand. The Phase 0 crawl found three conflicting host signals
 * (site on www, sitemap on apex, og:url on apex); one constant prevents that
 * from coming back.
 *
 * §9.2 — no `keywords` field is produced here. The meta keywords tag is
 * ignored by search engines and the brief requires it removed everywhere.
 */
export const SITE_URL = "https://www.dustandwipes.com";
export const SITE_NAME = "Dust & Wipes Limited";
export const DEFAULT_OG_IMAGE = "/images/og-image.jpg";

export function absolute(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

interface PageSeoInput {
  /** Route path, e.g. "/services" */
  path: string;
  title: string;
  description: string;
  /** Page-specific social image (§9.3). Falls back to the brand card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

/** Builds title, description, canonical and per-page OpenGraph/Twitter tags. */
export function pageSeo({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Dust and Wipes Limited — professional cleaning in Abuja and Lagos",
  type = "website",
  publishedTime,
}: PageSeoInput): Metadata {
  const url = absolute(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_NG",
      images: [{ url: absolute(image), width: 1200, height: 630, alt: imageAlt }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute(image)],
    },
  };
}

/** BreadcrumbList JSON-LD (§9.5). */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absolute(t.path),
    })),
  };
}

/** Renders one or more JSON-LD blocks. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
