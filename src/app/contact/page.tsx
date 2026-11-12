import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Dust & Wipes Limited for a free cleaning, pest control or training quote in Abuja and Lagos. Call 0809 970 0001, WhatsApp, or use the form — we reply within 2 hours.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = service === "training" ? "Training & consultancy" : "";

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book a service or get a quote."
        lede="Fill in the form and we'll come back within two hours with a clear, no-obligation quote."
      />
      <ContactContent defaultService={defaultService} />
    </>
  );
}
