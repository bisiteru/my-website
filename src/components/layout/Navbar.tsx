"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, LOGO_URL } from "@/lib/constants";

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

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={LOGO_URL}
              alt="Dust & Wipes Ltd. Logo"
              width={40}
              height={40}
              className="rounded-xl"
              priority
            />
            <div className="leading-tight">
              <div className={`font-bold text-[0.9375rem] tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
                Dust & Wipes
              </div>
              <div className={`text-[9px] font-semibold tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-[#0b8441]" : "text-green-300/80"}`}>
                {COMPANY.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[0.875rem] font-medium transition-colors ${
                      isActive(link.href)
                        ? scrolled ? "text-[#0b8441]" : "text-green-300"
                        : scrolled ? "text-gray-600 hover:text-[#0b8441]" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-54 bg-white rounded-2xl shadow-xl border border-gray-100/80 py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-[#0b8441] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-[0.875rem] font-medium transition-colors ${
                    isActive(link.href)
                      ? scrolled ? "text-[#0b8441]" : "text-green-300"
                      : scrolled ? "text-gray-600 hover:text-[#0b8441]" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && scrolled && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#0b8441]"
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className={`flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors ${
                scrolled ? "text-gray-500 hover:text-[#0b8441]" : "text-white/60 hover:text-white"
              }`}
            >
              <Phone size={13} />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[#dd4c2f] text-white px-5 py-2.5 rounded-full text-[0.875rem] font-semibold hover:bg-[#b83d25] transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: ease }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3.5 py-2.5 rounded-xl text-[0.9375rem] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#0b8441] bg-green-50"
                        : "text-gray-700 hover:text-[#0b8441] hover:bg-green-50/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-5 mt-0.5 mb-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-[#0b8441] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 px-3.5 py-2.5 text-sm text-gray-500"
                >
                  <Phone size={14} />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-[#dd4c2f] text-white px-5 py-3 rounded-full text-[0.9375rem] font-semibold text-center hover:bg-[#b83d25] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
