import type { Metadata } from "next";
import { pageSeo, JsonLd, breadcrumbs } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ContactContent from "./ContactContent";

export const metadata: Metadata = pageSeo({
  path: "/contact",
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Dust & Wipes Limited for a free cleaning, pest control or training quote in Abuja and Lagos. Call 0809 970 0001, WhatsApp, or use the form — we reply within 2 hours.",
  image: "/photos/office-lobby-mopping-equipment.jpg",
  imageAlt: "A cleaner mopping an office lobby beside cleaning equipment",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = service === "training" ? "Training & consultancy" : "";

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get in touch"
        title="Book a service or get a quote."
        lede="Fill in the form and we'll come back within two hours with a clear, no-obligation quote."
      />
      <ContactContent defaultService={defaultService} />
    </>
  );
}
