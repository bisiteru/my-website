import type { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Dust & Wipes Limited's cleaning and pest control services in Abuja — booking, pricing, safety, service areas and more.",
  keywords: [
    "cleaning service FAQ Abuja",
    "pest control questions Abuja",
    "how much does cleaning cost Abuja",
    "is fumigation safe for pets",
    "deep cleaning what's included",
  ],
};

export default function FAQsPage() {
  return (
    <>
      {/* FAQPage structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <FaqContent />
    </>
  );
}
