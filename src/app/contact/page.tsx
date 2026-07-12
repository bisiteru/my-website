import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Dust & Wipes Limited for a free cleaning or pest control quote in Abuja. Call 0809 970 0001, WhatsApp, or fill our quick form — we respond within 2 hours.",
  keywords: [
    "cleaning quote Abuja",
    "book cleaning service Abuja",
    "pest control quote Abuja",
    "contact Dust and Wipes",
    "cleaning company phone number Abuja",
  ],
};

export default function ContactPage() {
  return <ContactContent />;
}
