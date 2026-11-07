import type { Metadata } from "next";
import CityPage from "@/components/sections/CityPage";
import { LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning & Cleaner Training in Lagos",
  description: "Dust & Wipes has an office at 5 Admiralty Road, Off Admiralty Way, Lekki Phase 1, Lekki, Lagos. Enquire about managed cleaning and practical training for your in-house cleaning team.",
};

export default function LagosPage() {
  return <CityPage city="Lagos" eyebrow="Lagos · Lekki office" title="Professional care for Lagos spaces." intro="From hospitality and institutional workplaces to private residences, Dust & Wipes helps teams plan cleaning with attention to hygiene, people and day-to-day operations." address={LOCATIONS.lagos.address} note="Please contact us to discuss site requirements or arrange an appointment." />;
}
