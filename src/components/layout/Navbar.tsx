"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Cleaning", href: "/services#residential-cleaning" },
      { label: "Office Cleaning", href: "/services#office-cleaning" },
      { label: "Deep Cleaning", href: "/services#deep-cleaning" },
      { label: "Pest Control", href: "/services#pest-control" },
      { label: "Carpet & Upholstery", href: "/services#carpet-upholstery" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#0b8441] flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:bg-[#076634] transition-colors">
              D<span className="text-[#dd4c2f]">&</span>W
            </div>
            <div className="leading-none">
              <div
                className={`font-black text-base tracking-tight transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Dust & Wipes
              </div>
              <div
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? "text-[#0b8441]" : "text-green-200"
                }`}
              >
                Limited
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? scrolled
                          ? "text-[#0b8441]"
                          : "text-green-300"
                        : scrolled
                        ? "text-gray-600 hover:text-[#0b8441]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        dropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-[#0b8441] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-[#0b8441] bg-green-50"
                        : "text-green-300"
                      : scrolled
                      ? "text-gray-600 hover:text-[#0b8441] hover:bg-green-50"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#0b8441]" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={14} />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[#dd4c2f] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#b83d25] transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#0b8441] bg-green-50"
                      : "text-gray-700 hover:text-[#0b8441] hover:bg-green-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-[#0b8441] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="bg-[#dd4c2f] text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-[#b83d25] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
