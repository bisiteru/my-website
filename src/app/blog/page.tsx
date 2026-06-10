import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog & Cleaning Tips",
  description:
    "Expert cleaning and pest control tips from Dust & Wipes Limited. Learn how to maintain a spotless, pest-free home or office in Abuja.",
  keywords: [
    "cleaning tips Abuja",
    "pest control tips Nigeria",
    "how to deep clean house",
    "termite prevention tips",
    "office cleaning advice",
    "eco-friendly cleaning",
    "Dust and Wipes blog",
  ],
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Expert Advice
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Cleaning &amp; Pest Control Tips
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Practical advice from our team of cleaning and pest control professionals to help you
            maintain a healthy, spotless space.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blog Grid — client component with live category filtering */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
    </>
  );
}
