import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = pageSeo({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "How Dust & Wipes Limited collects, uses and protects your personal information, including our use of Google Analytics and your choices about cookies.",
});

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-dw max-w-3xl">
        <h1 className="h1-display !text-[2.5rem]">Privacy Policy</h1>
        <p className="mt-3 text-[var(--c-ink-2)]">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-[var(--c-ink-2)]">
          <section>
            <h2 className="h3-card !text-[1.25rem]">1. Who we are</h2>
            <p className="mt-3">
              {COMPANY.name} is a professional cleaning, pest control and cleaner training company
              registered in Nigeria, with its office at {COMPANY.address} We are the data
              controller for the information described in this policy.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">2. Information you give us</h2>
            <p className="mt-3">
              When you use our quote form, WhatsApp or email, we collect the details you provide —
              typically your name, organisation, phone number, email address, city and area, the
              service you need and any notes you add. We use this solely to respond to your
              enquiry, prepare a quote and deliver the service you ask for.
            </p>
            <p className="mt-3">
              Form submissions are processed by Formspree, which forwards them to our email
              address. We do not sell, rent or trade your personal information.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">3. Analytics and cookies</h2>
            <p className="mt-3">
              We use <strong>Google Analytics 4</strong> to understand how this website is used —
              which pages people visit, how they arrived, and which pages lead to enquiries. This
              helps us improve the site.
            </p>
            <p className="mt-3">
              <strong>Google Analytics only runs if you accept it.</strong> When you first visit,
              we ask. If you decline, no analytics script is loaded and no analytics cookie is set.
              If you accept, Google Analytics sets cookies and processes your IP address in
              anonymised form, along with information about your device, browser and the pages you
              view. We do not enable Google&apos;s advertising or personalisation features.
            </p>
            <p className="mt-3">
              You can change your mind at any time by clearing this site&apos;s data in your
              browser settings, which removes your stored choice and lets you answer again. You can
              also opt out of Google Analytics entirely using{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--c-green-700)]"
              >
                Google&apos;s browser opt-out add-on
              </a>
              .
            </p>
            <p className="mt-3">
              The site also stores a small record of your cookie choice in your browser so we
              don&apos;t ask on every page. That record stays on your device and is never sent to us.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">4. How long we keep information</h2>
            <p className="mt-3">
              Enquiry details are kept for as long as needed to respond and to maintain our
              service records. Google Analytics data is retained according to the retention period
              set on our Analytics property.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">5. Your rights</h2>
            <p className="mt-3">
              Under the Nigeria Data Protection Act you may ask us for a copy of the personal
              information we hold about you, ask us to correct it, or ask us to delete it. Email{" "}
              <a href={`mailto:${COMPANY.email}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.email}
              </a>{" "}
              and we will respond.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">6. Data security</h2>
            <p className="mt-3">
              We apply appropriate technical and organisational measures to protect personal
              information against unauthorised access, alteration, disclosure or destruction.
            </p>
          </section>

          <section>
            <h2 className="h3-card !text-[1.25rem]">7. Contact us</h2>
            <p className="mt-3">
              For any privacy question, email{" "}
              <a href={`mailto:${COMPANY.email}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="underline hover:text-[var(--c-green-700)]">
                {COMPANY.phone}
              </a>
              . See also our{" "}
              <Link href="/terms" className="underline hover:text-[var(--c-green-700)]">
                terms of service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
