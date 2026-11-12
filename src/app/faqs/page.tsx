import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Accordion from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/Blocks";
import { FAQS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Dust & Wipes Limited's cleaning, pest control and training services in Abuja and Lagos — booking, pricing, safety, coverage, certificates and recurring plans.",
};

export default function FAQsPage() {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(COMPANY.whatsappText)}`;

  return (
    <>
      {/* FAQPage structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <PageHero
        eyebrow="Got questions?"
        title="Frequently asked questions."
        lede="Everything you need to know about our services. If your question isn't here, WhatsApp us — we reply in minutes."
      >
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--on-dark">
          <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp
        </a>
      </PageHero>

      <section className="section">
        <div className="container-dw max-w-3xl">
          {/* Questions render as real headings (§6.9) */}
          <Accordion items={FAQS} headingLevel={2} />

          <div className="mt-14 card bg-[var(--c-green-50)] p-8 text-center">
            <h2 className="h3-card">Still have questions?</h2>
            <p className="mt-3 text-[var(--c-ink-2)]">
              Our team is available Monday to Saturday, 7am–6pm, and replies within two hours.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn btn--secondary">Send us a message</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
