import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, AFFILIATIONS } from "@/lib/constants";
import LogoImg from "@/components/ui/LogoImg";

/** Footer — BUILD_BRIEF §6.12, on every page. */

const SERVICES = [
  { label: "Residential cleaning", href: "/services#residential-cleaning" },
  { label: "Commercial & office", href: "/services#commercial-cleaning" },
  { label: "Deep cleaning", href: "/services#deep-cleaning" },
  { label: "Post-construction", href: "/services#post-construction" },
  { label: "Carpet & upholstery", href: "/services#carpet-upholstery" },
  { label: "Pest control", href: "/services#pest-control" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/** Brand marks as inline SVG — lucide-react v1 no longer ships brand icons. */
const SOCIALS = [
  {
    label: "Instagram",
    href: COMPANY.social.instagram,
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.43.42.7.82.9 1.4.18.42.37 1 .43 2.2.06 1.3.07 1.6.07 4.8s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.42.43-.82.7-1.4.9-.42.18-1 .37-2.2.43-1.3.06-1.6.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.43-.42-.7-.82-.9-1.4-.18-.42-.37-1-.43-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.42-.43.82-.7 1.4-.9.42-.18 1-.37 2.2-.43C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.43-1.3.82-.4.4-.63.8-.82 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 3.1.07 4.3c.05 1.1.24 1.7.4 2.1.2.5.43.9.82 1.3.4.4.8.63 1.3.82.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.43 1.3-.82.4-.4.63-.8.82-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-4.3s0-3.1-.07-4.3c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.82-1.3 3.5 3.5 0 0 0-1.3-.82c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    label: "Facebook",
    href: COMPANY.social.facebook,
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.76-1.6 1.54V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "LinkedIn",
    href: COMPANY.social.linkedin,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "X",
    href: COMPANY.social.twitter,
    path: "M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h7l4.8 6.3L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z",
  },
];

/** Badge files supplied in dust-and-wipes-badges/ (§4.6). Status wording is
 *  [CONFIRM] in the brief, so only the organisation's name is stated — no
 *  membership claim is made until the exact wording is confirmed. */
const BADGE_FILES: Record<string, string> = {
  ISSA: "issa-logo.png",
  EHCON: "ehcon-logo.png",
  PECAN: "pecan-logo.png",
};

export default function Footer() {
  const wa = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
    COMPANY.whatsappText
  )}`;

  return (
    <footer className="bg-[var(--c-green-900)] text-white/75">
      <div className="container-dw py-[var(--section-y)]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoImg size={52} className="rounded-xl" />
              <span className="leading-tight">
                <span className="block text-[1.0625rem] font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Dust &amp; Wipes
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--c-orange-300)]">
                  {COMPANY.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed">
              Professional cleaning, pest control and cleaner training in Abuja and Lagos.
              Founded in 2017 on one belief: better cleaning starts with better equipped people.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav aria-labelledby="f-services">
            <h2 id="f-services" className="text-[0.8125rem] font-bold uppercase tracking-[0.16em] !text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.9375rem] transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="f-company">
            <h2 id="f-company" className="text-[0.8125rem] font-bold uppercase tracking-[0.16em] !text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.9375rem] transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[0.8125rem] font-bold uppercase tracking-[0.16em] !text-white">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-[0.9375rem]">
              <li className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-[var(--c-orange-300)]" aria-hidden="true" />
                <span>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="block hover:text-white">{COMPANY.phone}</a>
                  <a href={`tel:${COMPANY.phone2.replace(/\s/g, "")}`} className="block hover:text-white">{COMPANY.phone2}</a>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[var(--c-orange-300)] hover:text-white">
                    WhatsApp us →
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-[var(--c-orange-300)]" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--c-orange-300)]" aria-hidden="true" />
                <span>
                  <address className="not-italic">{COMPANY.address}</address>
                  {/* §3.2 — Lagos is a business address, never a walk-in office */}
                  <span className="mt-1.5 block text-white/60">
                    Lagos address · Site assessments by appointment
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-[var(--c-orange-300)]" aria-hidden="true" />
                <span>
                  Monday–Saturday, 7am–6pm
                  <span className="mt-1 block text-white/60">We reply within 2 hours</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliations — §4.6 */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-white/75">
            Affiliations
          </p>
          <ul className="mt-5 flex flex-wrap items-center gap-4">
            {AFFILIATIONS.map((a) => (
              <li key={a.short} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
                <Image
                  src={`/badges/${BADGE_FILES[a.short]}`}
                  alt={`${a.full} logo`}
                  width={64}
                  height={64}
                  className="h-10 w-auto object-contain grayscale transition hover:grayscale-0"
                />
                <span className="leading-tight">
                  <span className="block text-[0.8125rem] font-semibold text-[var(--c-green-800)]">
                    {a.status} {a.short}
                  </span>
                  <span className="block text-[0.6875rem] text-[var(--c-ink-2)]">{a.full}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
