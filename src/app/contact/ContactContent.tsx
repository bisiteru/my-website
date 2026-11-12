"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";
import { MapBlock } from "@/components/ui/Blocks";
import { COMPANY } from "@/lib/constants";

export default function ContactContent({ defaultService = "" }: { defaultService?: string }) {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    COMPANY.whatsappText
  )}`;

  return (
    <section className="section">
      <div className="container-dw grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Contact details */}
        <div>
          <p className="eyebrow">Contact details</p>
          <h2 className="h2-section mt-4 !text-[1.75rem]">Talk to us directly.</h2>
          <p className="mt-4 text-[var(--c-ink-2)]">
            WhatsApp gets the fastest reply. However you reach us, we respond within two hours
            during working hours.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <Phone size={19} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
              <span>
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--c-ink-2)]">Phone</span>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="block font-semibold text-[var(--c-green-800)] hover:text-[var(--c-green-600)]">{COMPANY.phone}</a>
                <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="block font-semibold text-[var(--c-green-800)] hover:text-[var(--c-green-600)]">{COMPANY.phone2}</a>
              </span>
            </li>
            <li className="flex gap-4">
              <MessageCircle size={19} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
              <span>
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--c-ink-2)]">WhatsApp</span>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--c-green-800)] hover:text-[var(--c-green-600)]">
                  Message us — we reply in minutes
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail size={19} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
              <span>
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--c-ink-2)]">Email</span>
                <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[var(--c-green-800)] hover:text-[var(--c-green-600)]">{COMPANY.email}</a>
              </span>
            </li>
            <li className="flex gap-4">
              <MapPin size={19} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
              <span>
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--c-ink-2)]">Offices</span>
                <address className="not-italic font-semibold text-[var(--c-green-800)]">{COMPANY.address}</address>
                {/* §3.2 — Lagos is a business address, not a walk-in office */}
                <span className="mt-1 block text-[0.9375rem] text-[var(--c-ink-2)]">
                  Lagos address · Site assessments by appointment
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <Clock size={19} className="mt-1 shrink-0 text-[var(--c-green-600)]" aria-hidden="true" />
              <span>
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[var(--c-ink-2)]">Hours</span>
                <span className="font-semibold text-[var(--c-green-800)]">Monday–Saturday, 7am–6pm</span>
                <span className="mt-0.5 block text-[0.9375rem] text-[var(--c-ink-2)]">Sunday by appointment</span>
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <MapBlock query={COMPANY.googleMapsUrl.split("q=")[1] ?? "Irama Plaza Gwarinpa Abuja"} />
          </div>
        </div>

        {/* Form */}
        <div>
          <p className="eyebrow">Request a quote</p>
          <h2 className="h2-section mt-4 !text-[1.75rem]">Tell us what you need.</h2>
          <p className="mt-4 text-[var(--c-ink-2)]">
            The more detail you give, the more accurate the quote — and the fewer questions we
            have to come back with.
          </p>
          <div className="mt-8">
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
