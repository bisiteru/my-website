import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import MasonryGallery, { type GalleryItem } from "@/components/ui/MasonryGallery";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { CtaBand, SectionHeader } from "@/components/ui/Blocks";
import galleryData from "../../../content/gallery.json";
import { JsonLd, breadcrumbs, absolute } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  path: "/gallery",
  title: "Gallery — Our Cleaning Work in Abuja & Lagos",
  description:
    "Photographs of Dust & Wipes teams at work across Abuja and Lagos — residential and office cleaning, deep cleans, post-construction, pest control, windows, healthcare and events.",
  image: "/photos/chandelier-cleaning.jpg",
  imageAlt: "A cleaner carefully cleaning a hanging chandelier",
});

export default function GalleryPage() {
  const items = galleryData.items as GalleryItem[];
  const categories = galleryData.categories.filter(
    (c) => c.slug === "all" || items.some((i) => i.category === c.slug)
  );

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Dust & Wipes — our work in Abuja and Lagos",
    description:
      "Photographs of Dust & Wipes teams at work in real client spaces across Abuja and Lagos.",
    url: absolute("/gallery"),
    image: items.slice(0, 24).map((i) => ({
      "@type": "ImageObject",
      contentUrl: absolute(`/photos/${i.file}.jpg`),
      caption: i.alt,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          gallerySchema,
        ]}
      />
      <PageHero
        eyebrow="Gallery"
        title="Our teams, at work."
        lede="Every photograph here is our own work in real client spaces across Abuja and Lagos. No stock photography."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw">
          <MasonryGallery items={items} categories={categories} />
        </div>
      </section>

      {/* Before & during — §6.8 allows only genuine same-job pairs */}
      <section className="section section--band">
        <div className="container-dw grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <SectionHeader
            eyebrow="Before &amp; during"
            title="Post-construction, from debris to finished floor."
            lede="Drag the handle to compare. We only ever pair photographs from the same job — so this one is labelled during, not after, because that is what the second photograph shows."
          />
          <BeforeAfterSlider
            before="post-construction-before-debris"
            beforeAlt="A newly built interior strewn with construction debris before cleaning"
            after="post-construction-granite-floor-scrubbing"
            afterAlt="An operator machine-scrubbing the granite floor of the same type of space"
            afterLabel="During"
          />
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "What you are seeing in these photographs" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/about", label: "Our people", detail: "The team behind the work" },
          { href: "/blog", label: "Blog", detail: "Cleaning and pest control advice" },
        ]}
      />
      <CtaBand
        title="Want results like these?"
        lede="Tell us about your space and we'll come back within two hours with a clear quote."
      />
    </>
  );
}
