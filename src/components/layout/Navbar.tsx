"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import LogoImg from "@/components/ui/LogoImg";

/* ── Site map — BUILD_BRIEF §5 ──
   Main menu: Home · Services (mega-menu) · Training · Locations · Clients ·
   Gallery · About · Blog · FAQs · Get a Free Quote.
   Every /services anchor below is verified to exist on the page (§3.1).
   #office-cleaning is kept as an alias of #commercial-cleaning so older
   external links still land correctly — added alongside, never instead. */

interface MegaItem {
  label: string;
  href: string;
  blurb: string;
}

const SERVICE_COLUMNS: { heading: string; items: MegaItem[] }[] = [
  {
    heading: "Cleaning",
    items: [
      { label: "Residential cleaning", href: "/services#residential-cleaning", blurb: "Homes and apartments" },
      { label: "Commercial & office cleaning", href: "/services#commercial-cleaning", blurb: "Workplaces and facilities" },
      { label: "Deep cleaning", href: "/services#deep-cleaning", blurb: "Room-by-room detail" },
      { label: "Post-construction cleaning", href: "/services#post-construction", blurb: "New builds and refits" },
    ],
  },
  {
    heading: "Specialist",
    items: [
      { label: "Carpet & upholstery", href: "/services#carpet-upholstery", blurb: "Hot-water extraction" },
      { label: "Pest control & fumigation", href: "/services#pest-control", blurb: "Licensed technicians" },
      
    ],
  },
  {
    heading: "Training",
    items: [
      { label: "Training & consultancy", href: "/training", blurb: "For in-house cleaning teams" },
    ],
  },
];

const NAV: { label: string; href: string; mega?: boolean; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "Training", href: "/training" },
  {
    label: "Locations",
    href: "/abuja",
    children: [
      { label: "Abuja", href: "/abuja" },
      { label: "Lagos", href: "/lagos" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
];

const waHref = `https://wa.me/${COMPANY.whatsapp.replace("+", "")}?text=${encodeURIComponent(
  "Hello! I'd like to get a quote for your services."
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on navigation
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the drawer and any open menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // small delay so the pointer can travel into the panel without it closing
  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          solid
            ? "bg-[var(--c-surface)]/97 backdrop-blur-md border-b border-[var(--c-border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-dw">
          <div className={`flex items-center justify-between gap-4 transition-all ${solid ? "py-2.5" : "py-4"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Dust &amp; Wipes Limited — home">
              <LogoImg size={solid ? 46 : 54} className="rounded-xl" />
              <span className="leading-tight hidden sm:block">
                <span
                  className={`block font-semibold tracking-tight text-[1.15rem] ${
                    solid ? "text-[var(--c-green-800)]" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Dust &amp; Wipes
                </span>
                <span
                  className={`block text-[10px] font-semibold tracking-[0.18em] uppercase ${
                    solid ? "text-[var(--c-green-600)]" : "text-white/75"
                  }`}
                >
                  {COMPANY.tagline}
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main">
              {NAV.map((link) => {
                const hasPanel = link.mega || link.children;
                const panelOpen = menu === link.label;
                const tone = isActive(link.href)
                  ? solid
                    ? "text-[var(--c-green-700)]"
                    : "text-white"
                  : solid
                    ? "text-[var(--c-ink-2)] hover:text-[var(--c-green-700)]"
                    : "text-white/80 hover:text-white";

                if (!hasPanel) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`px-2.5 py-2 rounded-lg text-[0.875rem] font-medium transition-colors ${tone}`}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => openMenu(link.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={panelOpen}
                      aria-haspopup="true"
                      onClick={() => setMenu(panelOpen ? null : link.label)}
                      className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-[0.875rem] font-medium transition-colors ${tone}`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${panelOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Mega-menu (Services) */}
                    {link.mega && panelOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[46rem] rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] shadow-xl p-6 animate-fade-up"
                        onMouseEnter={() => openMenu(link.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {SERVICE_COLUMNS.map((col) => (
                            <div key={col.heading}>
                              <p className="eyebrow mb-3">{col.heading}</p>
                              <ul className="space-y-1">
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block rounded-lg px-3 py-2 -mx-3 transition-colors hover:bg-[var(--c-green-50)] group"
                                    >
                                      <span className="block text-[0.875rem] font-semibold text-[var(--c-green-800)] group-hover:text-[var(--c-green-700)]">
                                        {item.label}
                                      </span>
                                      <span className="block text-[0.75rem] text-[var(--c-ink-2)]">{item.blurb}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-5 border-t border-[var(--c-border)] flex items-center justify-between">
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[var(--c-green-700)] hover:gap-3 transition-all"
                          >
                            View all services <ArrowRight size={15} aria-hidden="true" />
                          </Link>
                          <Link href="/contact" className="btn btn--primary !min-h-10 !py-2 !px-5 text-[0.8125rem]">
                            Get a free quote
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Simple dropdown (Locations) */}
                    {link.children && panelOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] shadow-xl py-2 animate-fade-up"
                        onMouseEnter={() => openMenu(link.label)}
                        onMouseLeave={scheduleClose}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[0.875rem] text-[var(--c-ink-2)] hover:bg-[var(--c-green-50)] hover:text-[var(--c-green-700)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop phone + CTA (§5: header shows phone and WhatsApp on desktop).
                The phone appears from 2xl up — at exactly 1280px the full nav
                plus phone plus CTA overflows the viewport. */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className={`hidden 2xl:flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors ${
                  solid ? "text-[var(--c-ink-2)] hover:text-[var(--c-green-700)]" : "text-white/75 hover:text-white"
                }`}
              >
                <Phone size={14} aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn btn--primary !min-h-10 !py-2 !px-5 text-[0.8125rem]">
                Get a free quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`xl:hidden p-2.5 rounded-xl transition-colors ${
                solid ? "text-[var(--c-green-800)] hover:bg-[var(--c-band)]" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (§4.7) ── */}
      {open && (
        <div
          id="mobile-drawer"
          className="xl:hidden fixed inset-0 z-40 bg-[var(--c-surface)] pt-[4.5rem] overflow-y-auto"
        >
          <nav className="container-dw py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-[var(--c-green-50)] text-[var(--c-green-700)]"
                        : "text-[var(--c-green-800)] hover:bg-[var(--c-band)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.mega && (
                    <ul className="pl-4 mt-1 mb-2 space-y-0.5">
                      {SERVICE_COLUMNS.flatMap((c) => c.items).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-[0.9375rem] text-[var(--c-ink-2)] hover:text-[var(--c-green-700)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {link.children && (
                    <ul className="pl-4 mt-1 mb-2 space-y-0.5">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-[0.9375rem] text-[var(--c-ink-2)] hover:text-[var(--c-green-700)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-[var(--c-border)] space-y-3">
              <Link href="/contact" className="btn btn--primary w-full">
                Get a free quote
              </Link>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn btn--secondary w-full">
                <Phone size={16} aria-hidden="true" /> {COMPANY.phone}
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* ── Sticky mobile bar: Call · WhatsApp · Quote (§4.7) ── */}
      {!open && (
        <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-[var(--c-border)] bg-[var(--c-surface)]/97 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[var(--c-green-800)] active:bg-[var(--c-band)]"
          >
            <Phone size={19} aria-hidden="true" />
            <span className="text-[11px] font-semibold">Call</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[var(--c-green-800)] border-x border-[var(--c-border)] active:bg-[var(--c-band)]"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.525 5.856L.057 23.876a.5.5 0 0 0 .609.61l6.207-1.63C8.41 23.578 10.17 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.782 0-3.487-.47-4.97-1.362l-.356-.21-3.688.969.984-3.596-.232-.37A9.935 9.935 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 bg-[var(--c-green-700)] text-white active:bg-[var(--c-green-600)]"
          >
            <ArrowRight size={19} aria-hidden="true" />
            <span className="text-[11px] font-semibold">Get a quote</span>
          </Link>
        </div>
      )}
    </>
  );
}
