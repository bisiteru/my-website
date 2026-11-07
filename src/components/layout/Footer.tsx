import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LogoImg from "@/components/ui/LogoImg";
import { COMPANY, LOCATIONS } from "@/lib/constants";

const links = [
  { label: "Services", href: "/services" },
  { label: "Cleaner training", href: "/training" },
  { label: "Lagos", href: "/lagos" },
  { label: "Abuja", href: "/abuja" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#102a1c] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.65fr_1fr] lg:gap-20 lg:px-12 lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Dust & Wipes Limited, home">
            <LogoImg size={52} className="rounded-sm" />
            <span><strong className="block text-lg">Dust &amp; Wipes Limited</strong><span className="text-xs text-[#a8d0b8]">{COMPANY.tagline}</span></span>
          </Link>
          <p className="mt-7 max-w-sm leading-7 text-white/70">Professionally managed cleaning and practical staff training in Abuja and Lagos.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#a8d0b8] font-semibold hover:text-[#a8d0b8]">Start an enquiry <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a8d0b8]">Explore</h2>
          <ul className="mt-6 space-y-3">{links.map(({ label, href }) => <li key={href}><Link href={href} className="inline-block py-1 text-sm text-white/80 hover:text-white hover:underline underline-offset-4">{label}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a8d0b8]">Our offices</h2>
          <address className="mt-6 space-y-6 not-italic text-sm leading-7 text-white/80">
            <div><strong className="block text-white">Lagos</strong>{LOCATIONS.lagos.address}</div>
            <div><strong className="block text-white">Abuja</strong>{LOCATIONS.abuja.address}</div>
          </address>
          <div className="mt-7 space-y-2 text-sm">
            <a href={`tel:${COMPANY.phone.replaceAll(" ", "")}`} className="block hover:underline">{COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="block hover:underline">{COMPANY.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/60 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} Dust &amp; Wipes Limited.</p>
          <div className="flex gap-5"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
