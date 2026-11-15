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
            <h2 className="h3-card !text-[1.25rem]">3. Payment</h2>
            <p className="mt-3">
              Charges, payment schedule and any deposit are set out in the written quotation or
              proposal for the job and are agreed before work begins. We do not vary an agreed
              price after the fact; where the scope changes on site, we stop and agree the change
              with you in writing first. Recurring and retainer contracts are invoiced on the cycle
              stated in the contract.
            </p>
            <p className="mt-3">
              Where a service has been delivered to the agreed scope, charges are payable in full.
              Our satisfaction guarantee below sets out what happens where it has not.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">4. Pest control services</h2>
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
            <h2 className="h3-card !text-[1.25rem]">5. Cleaner training</h2>
            <p className="mt-3">
              Training engagements are governed by the written proposal issued after the site
              visit, which sets out who attends, which modules are covered, where and when delivery
              takes place, the deliverables and the cost. The site visit and the proposal are free
              of charge and carry no obligation.
            </p>
            <p className="mt-3">
              Training is delivered on the client&apos;s premises unless otherwise agreed.
              Rescheduling is accommodated where practicable; a session cancelled at short notice
              may incur a charge, which will have been stated in the proposal. Participants receive
              a certificate of completion. We make no claim of external accreditation for our
              training and do not represent it as accredited by any body.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">6. Satisfaction guarantee</h2>
            <p className="mt-3">
              If you are not satisfied with any aspect of our service, tell us within 24 hours of
              completion. We will return and remedy the issue at no additional charge, subject to
              our assessment.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">7. Liability</h2>
            <p className="mt-3">
              While we take every precaution, {COMPANY.name} is not liable for pre-existing damage,
              or for damage resulting from following client instructions. Except where pest control
              instructions apply as described above, our liability is limited to the cost of the
              service provided.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">8. Contact</h2>
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
            <p className="mt-3">
              {COMPANY.name} is registered in Nigeria with the Corporate Affairs Commission under{" "}
              <strong className="text-[var(--c-green-800)]">{COMPANY.rcNumber}</strong>. Registered
              office: {COMPANY.address} Our working hours are {COMPANY.hours.toLowerCase()},{" "}
              {COMPANY.hoursNote.toLowerCase()}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
