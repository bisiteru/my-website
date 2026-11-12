import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import galleryData from "../../../content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery — Our Work in Abuja & Lagos",
  description:
    "Photographs of Dust & Wipes teams at work across Abuja and Lagos — residential, office, deep cleaning, post-construction, pest control, windows and healthcare.",
};

interface GalleryItem {
  file: string;
  alt: string;
  caption?: string;
  category: string;
  city?: string;
}

export default function GalleryPage() {
  const items = galleryData.items as GalleryItem[];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our teams, at work."
        lede="Every photograph here is our own work, in real client spaces across Abuja and Lagos."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      {items.length > 0 ? (
        <section className="section">
          <div className="container-dw">
            <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
              {/* Full masonry grid, filters, lightbox and before/after land in Phase 3 */}
            </div>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container-dw prose-measure">
            <p className="text-[var(--c-ink-2)]">
              Our photo gallery is being prepared and will be published shortly. In the meantime,
              you can see our work throughout the site.
            </p>
            <Link href="/services" className="btn btn--secondary mt-6">View our services</Link>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
