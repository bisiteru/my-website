import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import BlogList from "./BlogList";

export const metadata: Metadata = pageSeo({
  path: "/blog",
  title: "Blog & Cleaning Tips",
  description:
    "Expert cleaning and pest control tips from Dust & Wipes Limited. Learn how to maintain a spotless, pest-free home or office in Abuja.",
  image: "/photos/bisi-teru-training-room.jpg",
  imageAlt: "Bisi Teru speaking in a training room",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Expert advice"
        crumbs={[{ label: "Blog" }]}
        photo="bisi-teru-training-room"
        alt="Bisi Teru speaking in a training room"
        title="Cleaning &amp; pest control tips."
        lede="Practical advice from our cleaning and pest control teams, written so you can act on it yourself."
      />

      {/* Blog Grid — client component with live category filtering */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
    </>
  );
}
