import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import Image from "next/image";
import { PHOTOS, photoSrc, type PhotoSlug } from "@/lib/photos";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { CheckCircle, ArrowRight, Award, Users, Leaf, Clock, Quote } from "lucide-react";
import { EnquirySection } from "@/components/ui/Blocks";

export const metadata: Metadata = pageSeo({
  path: "/about",
  title: "About Us — Our Story & Founder",
  description:
    "Dust & Wipes was founded in Abuja in March 2017 by Bisi Teru. Why the company exists, what it stands for, and how it has grown across Abuja and Lagos.",
  image: "/photos/dust-and-wipes-team-uniform.jpg",
  imageAlt: "Two Dust and Wipes team members in branded uniform",
});

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standard in every job, big or small." },
  { icon: Users, title: "Integrity", desc: "Honest pricing, transparent communication, and trustworthy staff." },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products that protect your family and the environment." },
  { icon: Clock, title: "Reliability", desc: "Punctual arrivals, consistent quality, and dependable service every time." },
];

const milestones = [
  { year: "2017", title: "Founded", desc: "Dust & Wipes Limited was established in Abuja in March 2017 by Bisi Teru, with a mission to raise the standard of professional cleaning across the FCT." },
  { year: "2018", title: "Pest control, and the first five-star reviews", desc: "We expanded into comprehensive pest control services and earned our first 5-star Google reviews — a rating we have maintained ever since." },
  { year: "2022", title: "500+ clients served", desc: "Crossed the 500-client milestone, serving homes, offices, and facilities across all FCT districts." },
  { year: "2026", title: "650+ clients, and growing", desc: "Now trusted by over 650 clients with a perfect 5-star Google rating, we work across Abuja and Lagos in cleaning, pest control, facility support and cleaner training." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About us"
        crumbs={[{ label: "About" }]}
        photo="dust-and-wipes-team-uniform"
        alt="The Dust and Wipes team in branded uniform"
        title="Why I started Dust &amp; Wipes."
        lede="A cleaning, pest control and training company built on a belief I formed watching how cleaners were treated in my own office — that the work deserves training, and the people deserve respect."
      />

      {/* ── Founder's Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow">Our story</span>
            <h2 className="h2-section mt-2">It started with the cleaners in my own office.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Story text */}
            <div className="space-y-5 text-[var(--c-ink-2)] leading-relaxed text-[1.0625rem]">
              <p>
                Dust and Wipes Limited was born from a simple but powerful desire: to make a
                difference.
              </p>
              <p>
                Before founding the company in 2017, I spent many years working as an Information
                Technology consultant and manager for government agencies, international NGOs, and
                corporate organizations. During that time, I observed a recurring challenge within
                the cleaning industry — many cleaners worked under difficult conditions, received
                little or no professional training, endured delayed payments, and were often
                undervalued despite the important role they played.
              </p>
              <p>
                In 2016, while serving as a full-time IT Manager, I developed close relationships
                with the cleaners in my organization. Listening to their stories, struggles, and
                aspirations opened my eyes even further to the need for change. It became clear to
                me that cleaning was more than a service; it was an opportunity to create meaningful
                impact.
              </p>
              <p>
                <strong className="text-[var(--c-green-800)]">
                  That realization inspired the birth of Dust and Wipes Limited.
                </strong>
              </p>
              <p>
                The vision was straightforward: a company where the cleaning is done by people
                who have been properly trained for it, and where those people are treated with
                dignity, respect and fairness. The two are not separate ambitions. Work improves
                when the person doing it has been taught how, is paid properly for it, and is
                treated as a professional rather than as hired hands.
              </p>
              <p>
                Today, years later, that vision continues to guide everything we do. At Dust and
                Wipes, I do not see myself as a boss. Rather, I am privileged to lead a family of
                dedicated professionals whom I proudly call my brothers and sisters. Together, we
                are committed to creating cleaner, healthier, and more welcoming environments while
                transforming lives, one space and one person at a time.
              </p>

              {/* Signature */}
              <div className="pt-4 border-t border-[var(--c-border)] flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-[var(--c-green-600)]/30 shrink-0 overflow-hidden relative shadow-sm">
                  <Image
                    src="/images/founder-photo.jpg"
                    alt="Bisi Teru, Founder & CEO of Dust and Wipes Limited"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <div className="font-bold text-[var(--c-green-800)]">Bisi Teru</div>
                  <div className="text-sm text-[var(--c-green-700)] font-medium">
                    Founder &amp; CEO, Dust and Wipes Limited
                  </div>
                </div>
                <Quote size={32} className="text-[var(--c-green-700)]/15 ml-auto shrink-0" />
              </div>
            </div>

            {/* Photos column */}
            <div className="flex flex-col gap-5">
              {/* Team photo */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md">
                <Image
                  src="/images/team-uba-marketplace.webp"
                  alt="The Dust and Wipes team at UBA Marketplace Abuja"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Founder portrait */}
              <div className="rounded-2xl overflow-hidden aspect-square relative shadow-md">
                <Image
                  src="/images/founder-photo.jpg"
                  alt="Bisi Teru, Founder & CEO of Dust and Wipes Limited"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 pt-14">
                  <div className="text-white font-bold text-lg leading-tight">Bisi Teru</div>
                  <div className="text-[var(--c-orange-300)] text-sm font-medium">
                    Founder &amp; CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Differentiators ── */}
      <section className="py-20 bg-[#f8f9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--c-green-700)] font-semibold text-sm uppercase tracking-widest">
                What Sets Us Apart
              </span>
              <h2 className="h2-section mt-2 mb-6">Trained people, and a re-clean guarantee.</h2>
              <div className="space-y-4 text-[var(--c-ink-2)] leading-relaxed">
                <p>
                  We saw a gap in the market — too many cleaning companies cutting corners, using
                  cheap products, and treating clients as transactions rather than partners. We
                  decided to do things differently.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of clients across Maitama, Asokoro,
                  Wuse, Garki, Gwarinpa, and every other district in the FCT. Our reputation is
                  built on referrals, five-star reviews, and the simple satisfaction of a job done
                  right.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Pest control licensed by EHCON and PECAN, with an AMAC Operational Permit",
                  "Biodegradable cleaning products, safe for children and pets",
                  "Thoroughly vetted and uniformed staff",
                  "Flexible scheduling — 7 days a week",
                  "100% satisfaction guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[var(--c-green-700)] mt-0.5 shrink-0" />
                    <span className="text-[var(--c-ink-2)] text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--c-green-700)] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[var(--c-green-600)] transition-colors"
                >
                  Work With Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Where we work — photographs, not emoji (review 1.4). The four
                emoji tiles sat on a two-colour gradient tint built from the old
                brand hexes; both are gone. */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { photo: "luxury-living-room-floor-cleaning" as PhotoSlug, label: "Homes", alt: "A cleaner mopping the floor of a furnished living room" },
                { photo: "office-floor-scrubbing-machine" as PhotoSlug, label: "Offices", alt: "An operator running a floor-scrubbing machine through an office" },
                { photo: "post-construction-paint-removal" as PhotoSlug, label: "Facilities", alt: "A team member removing paint residue in a newly built space" },
                { photo: "clinic-reception-mopping" as PhotoSlug, label: "Clinics", alt: "A cleaner mopping a clinic reception floor" },
              ].map(({ photo, label, alt }) => (
                <figure key={label} className="m-0">
                  <div className="photo-zoom overflow-hidden rounded-2xl">
                    <Image
                      src={photoSrc(photo)}
                      alt={alt}
                      width={PHOTOS[photo].width}
                      height={PHOTOS[photo].height}
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="h-32 w-full object-cover photo-grade sm:h-40"
                    />
                  </div>
                  <figcaption className="mt-2 text-[0.875rem] font-semibold text-[var(--c-green-800)]">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--c-green-700)] font-semibold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="h2-section mt-2">What we stand for.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 text-center border border-[var(--c-border)] card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--c-green-50)] flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[var(--c-green-700)]" />
                </div>
                <h3 className="font-semibold text-[var(--c-green-800)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--c-ink-2)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f8f9f6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--c-orange-700)] font-semibold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="h2-section mt-2">2017 to today.</h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--c-green-700)] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[var(--c-border)] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-[var(--c-green-800)] mb-1">{m.title}</h3>
                  <p className="text-sm text-[var(--c-ink-2)] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our people (§6.6) ── */}
      <section className="section bg-[var(--c-surface)]">
        <div className="container-dw">
          <p className="eyebrow">Our people</p>
          <h2 className="h2-section mt-4 max-w-[24ch]">
            A family of professionals, not a roster of names.
          </h2>
          <p className="lede mt-5">
            We were founded on the belief that cleaners deserve training, fair treatment and
            professional respect. These are the people who carry the standard.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "dust-and-wipes-team-uniform", alt: "Two Dust and Wipes team members in branded yellow uniform in an office", cap: "Abuja team, in uniform" },
              { slug: "lagos-team-uniform", alt: "The Dust and Wipes Lagos team in branded uniform", cap: "Our Lagos team" },
              { slug: "event-crew-team", alt: "The Dust and Wipes event crew in uniform", cap: "The event crew" },
            ].map((t) => (
              <figure key={t.slug} className="m-0">
                <div className="photo-zoom overflow-hidden rounded-2xl">
                  <Image
                    src={photoSrc(t.slug as PhotoSlug)}
                    alt={t.alt}
                    width={PHOTOS[t.slug as PhotoSlug].width}
                    height={PHOTOS[t.slug as PhotoSlug].height}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="h-64 w-full object-cover photo-grade"
                  />
                </div>
                <figcaption className="mt-2.5 text-[0.875rem] text-[var(--c-ink-2)]">{t.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture + equipped (§6.6) ── */}
      <section className="section section--band">
        <div className="container-dw grid gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="m-0">
            <div className="photo-zoom overflow-hidden rounded-2xl">
              <Image
                src={photoSrc("staff-christmas-picnic")}
                alt="Dust and Wipes staff together at the company Christmas picnic"
                width={PHOTOS["staff-christmas-picnic"].width}
                height={PHOTOS["staff-christmas-picnic"].height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto photo-grade"
              />
            </div>
            <figcaption className="mt-3 text-[0.875rem] text-[var(--c-ink-2)]">
              The team at our Christmas picnic.
            </figcaption>
          </figure>
          <figure className="m-0">
            <div className="photo-zoom overflow-hidden rounded-2xl">
              <Image
                src={photoSrc("dust-and-wipes-branded-van")}
                alt="The branded Dust and Wipes van, listing the services offered"
                width={PHOTOS["dust-and-wipes-branded-van"].width}
                height={PHOTOS["dust-and-wipes-branded-van"].height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto photo-grade"
              />
            </div>
            <figcaption className="mt-3 text-[0.875rem] text-[var(--c-ink-2)]">
              We arrive fully equipped.
            </figcaption>
          </figure>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/services", label: "All services", detail: "What we do" },
          { href: "/clients", label: "Who we work with", detail: "Sectors and organisations served" },
          { href: "/gallery", label: "See the work", detail: "Photographs from real jobs" },
          { href: "/training", label: "Cleaner training", detail: "Our founding commitment, in practice" },
        ]}
      />
      <EnquirySection
        eyebrow="Work with us"
        title="Eight years of this, and still the same standard."
        lede="If what you have read here sounds like the way you would want your premises looked after, tell us about the space and we will put a scope and a price to it."
        points={[
          "A written scope of work before anything is agreed.",
          "A named supervisor, background-checked staff, and training to a written standard.",
          "A reply within two working hours, and a site visit where the job warrants one.",
        ]}
      />
    </>
  );
}
