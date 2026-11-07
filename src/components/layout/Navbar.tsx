"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import LogoImg from "@/components/ui/LogoImg";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Lagos", href: "/lagos" },
  { label: "Abuja", href: "/abuja" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce5dc] bg-white/98 text-[#173627] backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Dust & Wipes Limited, home">
          <LogoImg size={54} className="rounded-sm" />
          <span className="leading-tight"><strong className="block text-lg tracking-tight">Dust &amp; Wipes</strong><span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0b8441]">Restoring a Clean World</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`rounded-md px-3 py-3 text-sm font-semibold transition-colors hover:bg-[#eff5f0] hover:text-[#0b8441] ${active(href) ? "text-[#0b8441]" : "text-[#345543]"}`}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden min-h-11 shrink-0 items-center gap-2 rounded-md bg-[#0b8441] px-5 py-2 font-semibold text-white transition-colors hover:bg-[#076634] active:scale-[0.98] lg:inline-flex">Enquire <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button type="button" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#dce5dc] lg:hidden">
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#dce5dc] bg-white px-5 pb-5 sm:px-8 lg:hidden">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active(href) ? "page" : undefined} className="block border-b border-[#edf1ec] py-3.5 font-semibold text-[#173627]">{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0b8441] px-5 py-3 font-semibold text-white">Send an enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </nav>
      )}
    </header>
  );
}
