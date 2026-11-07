import type { Metadata } from "next";
import CityPage from "@/components/sections/CityPage";
import { LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning & Cleaner Training in Abuja",
  description: "Dust & Wipes provides managed cleaning and practical training for in-house cleaning teams in Abuja. Contact our Gwarinpa office.",
};

export default function AbujaPage() {
  return <CityPage city="Abuja" eyebrow="Abuja · established operations" title="Thoughtful service across Abuja." intro="Founded in Abuja in 2017, Dust & Wipes works with homes and organisations seeking consistent cleaning, clear supervision and practical staff development." address={LOCATIONS.abuja.address} note="Contact our team to confirm service availability for your site and arrange an assessment." />;
}
