"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS, COMPANY } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#0b8441] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

const faqCategories = [
  { label: "🗓️ Booking", questions: [0, 1] },
  { label: "🧪 Products & Safety", questions: [2, 3] },
  { label: "⏱️ Service Details", questions: [4, 5, 6] },
  { label: "💰 Pricing & Plans", questions: [7, 8, 9] },
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services. Can&apos;t find your answer? Chat with us on WhatsApp.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-gradient-to-br from-[#0b8441]/5 to-[#dd4c2f]/5 rounded-3xl p-8 text-center border border-gray-100">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-500 mb-6">
              Our team is available 7 days a week via WhatsApp, phone, or email. We&apos;ll get back to you within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1da851] transition-all"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0b8441] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#076634] transition-all"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
