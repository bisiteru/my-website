import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import LoopVideo from "@/components/ui/LoopVideo";
import RelatedLinks from "@/components/ui/RelatedLinks";
import MasonryGallery, { type GalleryItem } from "@/components/ui/MasonryGallery";
import { EnquirySection } from "@/components/ui/Blocks";
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

      {/* Footage — the one clip we hold, placed where the review asked for it.
          Portrait, so it sits as a card beside the text rather than running
          full width. */}
      <section className="section section--band">
        <div className="container-dw grid items-center gap-10 sm:grid-cols-[1fr_1.4fr] sm:gap-14">
          <LoopVideo
            src="/videos/glass-polishing-loop.mp4"
            poster="/videos/glass-polishing-poster.jpg"
            width={352}
            height={640}
            label="A Dust and Wipes cleaner polishing a pane of glass to a streak-free finish"
            className="mx-auto w-full max-w-[280px]"
          />
          <div>
            <p className="eyebrow">On the job</p>
            <h2 className="h2-section mt-4 max-w-[18ch]">Twelve seconds of glass work.</h2>
            <p className="lede mt-5">
              Filmed on one of our own jobs. It runs silently and only starts once you have
              scrolled to it — and if you have asked your device to reduce motion, it stays a
              photograph.
            </p>
            <Link href="/services#window-glass-cleaning" className="btn btn--primary mt-8">
              Window &amp; glass cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Before & after section removed at the owner's request (15 Nov).
          The only pair available was before/during from two different jobs,
          which is not the comparison a visitor reads it as. The
          BeforeAfterSlider component is kept and still demonstrated on
          /components; this section returns when a true same-job pair is
          supplied. */}

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "What you are seeing in these photographs" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/about", label: "Our people", detail: "The team behind the work" },
          { href: "/blog", label: "Blog", detail: "Cleaning and pest control advice" },
        ]}
      />
      <EnquirySection
        title="Want results like these?"
        lede="Every photograph above is our own team on a real job. Tell us about your space and we will tell you honestly what it would take."
        points={[
          "Send photographs of the space if you have them — it speeds up the quote considerably.",
          "A written quote within two working hours, itemised by task.",
          "Post-construction, deep cleans and one-off jobs are quoted after a site visit.",
        ]}
      />
    </>
  );
}
