import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Accordion from "@/components/ui/Accordion";
import { EnquirySection } from "@/components/ui/Blocks";
import { FAQS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/faqs",
  title: "Frequently Asked Questions",
  description:
    "Answers on booking, pricing, safety, chemicals, staffing, coverage and recurring plans for our cleaning, pest control and training services in Abuja and Lagos.",
  image: "/photos/corridor-team-mopping.jpg",
  imageAlt: "Two cleaners mopping an office corridor",
});

export default function FAQsPage() {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(COMPANY.whatsappText)}`;

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ])}
      />
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
        crumbs={[{ label: "FAQs" }]}
        photo="corridor-team-mopping"
        alt="Two cleaners mopping an office corridor"
        title="Frequently asked questions."
        lede="Everything you need to know about our services. If your question isn't here, ask us directly — we reply within two hours during working hours."
      >
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
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

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "What we do" },
          { href: "/contact", label: "Get a quote", detail: "We reply within two hours" },
          { href: "/training", label: "Cleaner training", detail: "For organisations with in-house teams" },
        ]}
      />
      <EnquirySection
        eyebrow="Still unsure?"
        title="Ask us the question that is not answered above."
        lede="We would far rather you knew before you booked than found out afterwards. Ask about scope, chemicals, staffing, insurance or price — all of it is fair game."
        action={{ href: "/contact", label: "Ask us a question" }}
        points={[
          "A straight answer, with no sales call attached to it.",
          "A reply within two working hours on a working day.",
          "If the honest answer is that we are not the right firm for the job, we will say so.",
        ]}
      />
    </>
  );
}
