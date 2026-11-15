import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/terms",
  title: "Terms of Service",
  description:
    "The terms under which Dust & Wipes Limited provides cleaning, pest control, facility support and training services in Abuja and Lagos.",
});

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-dw max-w-3xl">
        <h1 className="h1-display !text-[2.5rem]">Terms of Service</h1>
        <p className="mt-3 text-[var(--c-ink-2)]">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-[var(--c-ink-2)]">
          <section>
            <h2 className="h3-card !text-[1.25rem]">1. Services</h2>
            <p className="mt-3">
              {COMPANY.name} provides professional cleaning, pest control, facility support and
              cleaner training to residential, commercial and institutional clients in{" "}
              <strong className="text-[var(--c-green-800)]">Abuja FCT and Lagos</strong>, Nigeria.
              All services are subject to availability and a confirmed booking agreement.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">2. Booking and cancellation</h2>
            <p className="mt-3">
              Bookings are confirmed once service details and pricing are agreed. Cancellations
              made less than 24 hours before the scheduled service may incur a cancellation fee.
              We reserve the right to reschedule in cases of emergency or extreme weather.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">3. Pest control services</h2>
            <p className="mt-3">
              Pest control products are hazardous by design. We are licensed by EHCON and PECAN
              and hold an Operational Permit from the Abuja Municipal Area Council (AMAC). Before
              any treatment we carry out a site assessment and issue written instructions covering
              who must vacate the premises, what should be covered or removed, and when it is safe
              to return.
            </p>
            <p className="mt-3">
              Those instructions form part of these terms. We cannot accept liability for harm
              arising where vacating or re-entry instructions were not followed. Our full
              procedure is set out in our{" "}
              <Link href="/services#pest-control" className="underline hover:text-[var(--c-green-700)]">
                pest control safety protocol
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">4. Satisfaction guarantee</h2>
            <p className="mt-3">
              If you are not satisfied with any aspect of our service, tell us within 24 hours of
              completion. We will return and remedy the issue at no additional charge, subject to
              our assessment.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">5. Liability</h2>
            <p className="mt-3">
              While we take every precaution, {COMPANY.name} is not liable for pre-existing damage,
              or for damage resulting from following client instructions. Except where pest control
              instructions apply as described above, our liability is limited to the cost of the
              service provided.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">6. Contact</h2>
            <p className="mt-3">
              For service-related enquiries, email{" "}
              <a href={`mailto:${COMPANY.email}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.phone}
              </a>
              {" "}or{" "}
              <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.phone2}
              </a>
              . See also our{" "}
              <Link href="/privacy" className="underline hover:text-[var(--c-green-700)]">
                privacy policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
