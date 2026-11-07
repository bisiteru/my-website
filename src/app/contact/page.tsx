import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Enquire About Cleaning or Training",
  description: "Contact Dust & Wipes about managed cleaning, property care or in-house cleaner training in Abuja and Lagos.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ city?: string; service?: string }> }) {
  const { city, service } = await searchParams;
  return <ContactContent initialCity={city === "Lagos" || city === "Abuja" ? city : ""} initialService={service === "training" ? "Cleaner training" : ""} />;
}
