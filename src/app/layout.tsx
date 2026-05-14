import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dustandwipes.com"),
  title: {
    default: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    template: "%s | Dust & Wipes Limited",
  },
  description:
    "Abuja's trusted professional cleaning and pest control company. We offer residential cleaning, office cleaning, deep cleaning, termite control, rodent control, and more. Serving all FCT districts.",
  keywords: [
    "cleaning company Abuja",
    "pest control Abuja",
    "professional cleaners Abuja",
    "deep cleaning Abuja",
    "office cleaning Abuja",
    "termite control Abuja",
    "rodent control Abuja",
    "bed bug treatment Abuja",
    "carpet cleaning Abuja",
    "Dust and Wipes Limited",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dustandwipes.com",
    siteName: "Dust & Wipes Limited",
    title: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    description:
      "Abuja's trusted professional cleaning and pest control company. Serving all FCT districts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust & Wipes Limited | Abuja Cleaning & Pest Control",
    description: "Professional cleaning and pest control services across Abuja FCT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dust & Wipes Limited",
              description:
                "Professional cleaning and pest control services in Abuja, Nigeria.",
              url: "https://dustandwipes.com",
              telephone: "+2348099700001",
              email: "infodesk@dustandwipes.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abuja",
                addressRegion: "FCT",
                addressCountry: "NG",
              },
              priceRange: "₦₦",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
