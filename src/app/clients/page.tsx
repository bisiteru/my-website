import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import clientsData from "../../../content/clients.json";

export const metadata: Metadata = {
  title: "Clients & Sectors We Serve",
  description:
    "The sectors Dust & Wipes Limited serves across Abuja and Lagos — international organisations, diplomatic missions, healthcare, corporate offices, hospitality, events and premium residences.",
};

interface ClientRecord {
  name: string;
  sector: string;
  city: string;
  services: string[];
  startYear: number;
  endYear?: number;
  status: "current" | "past";
  consent: boolean;
  logo?: string;
}

export default function ClientsPage() {
  const all = clientsData.clients as ClientRecord[];
  // §3.2/§6.7 — a client is only ever named or shown with written consent on file.
  const consented = all.filter((c) => c.consent);

  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Organisations we've served."
        lede="From diplomatic offices to clinics, new builds to premium homes — the standard is the same."
      >
        <Link href="/contact" className="btn btn--on-dark">Get a free quote</Link>
      </PageHero>

      <section className="section">
        <div className="container-dw">
          <p className="eyebrow">Sectors we serve</p>
          <h2 className="h2-section mt-4 max-w-[22ch]">Built for places where cleanliness is scrutinised.</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientsData.sectors.map((s) => (
              <li key={s.slug} className="card p-6">
                <span className="h3-card !text-[1.0625rem] font-semibold text-[var(--c-green-800)]">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Logo wall — renders only consented clients; hidden entirely otherwise (§6.7) */}
      {consented.length > 0 && (
        <section className="section section--band">
          <div className="container-dw">
            <p className="eyebrow">Trusted by</p>
            <h2 className="h2-section mt-4">Organisations we&apos;ve served.</h2>
            <ul className="mt-10 flex flex-wrap items-center gap-8">
              {consented.map((c) => (
                <li key={c.name}>
                  {c.logo ? (
                    <Image
                      src={`/client-logos/${c.logo}`}
                      alt={c.name}
                      width={160}
                      height={80}
                      className="h-14 w-auto object-contain grayscale transition hover:grayscale-0"
                    />
                  ) : (
                    <span className="font-semibold text-[var(--c-green-800)]">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
