import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// §4.3 — Montserrat headings (600–700), Inter body (400/500).
// next/font self-hosts and subsets automatically, with font-display: swap.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// §3.1 / §9.7 — preview and staging deployments must never be indexed.
// Vercel sets VERCEL_ENV to "production" only on the production deployment.
const isProduction = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined;

export const metadata: Metadata = {
  metadataBase: new URL("https://dustandwipes.com"),
  title: {
    default: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    template: "%s | Dust & Wipes Limited",
  },
  description:
    "Abuja's most trusted cleaning and pest control company since 2017. Residential cleaning, office cleaning, deep cleaning, carpet cleaning, termite control & more. Serving all FCT districts. 650+ happy clients. Get a free quote.",
  keywords: [
    "cleaning company Abuja",
    "pest control Abuja",
    "professional cleaners Abuja FCT",
    "deep cleaning Abuja",
    "office cleaning Abuja",
    "residential cleaning Abuja",
    "carpet cleaning Abuja",
    "termite control Abuja",
    "rodent control Abuja",
    "bed bug treatment Abuja",
    "post-construction cleaning Abuja",
    "fumigation Abuja",
    "cleaning services Gwarinpa",
    "cleaning services Maitama",
    "cleaning services Wuse",
    "cleaning services Asokoro",
    "Dust and Wipes Limited",
    "Dust and Wipes Abuja",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dustandwipes.com",
    siteName: "Dust & Wipes Limited",
    title: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    description:
      "Abuja's most trusted cleaning and pest control company since 2017. 650+ satisfied clients across all FCT districts.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dust and Wipes Limited — Professional Cleaning Team Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust & Wipes Limited | Abuja Cleaning & Pest Control",
    description: "Professional cleaning and pest control services across Abuja FCT. 650+ happy clients since 2017.",
    images: ["/images/og-image.jpg"],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : // §3.1 / §9.7 — preview & staging must never be indexed
      { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://dustandwipes.com/#business",
              name: "Dust & Wipes Limited",
              legalName: "Dust and Wipes Limited",
              description:
                "Professional cleaning and pest control services in Abuja, Nigeria. Residential, commercial, deep cleaning, carpet cleaning, fumigation and training.",
              url: "https://dustandwipes.com",
              logo: "https://dustandwipes.com/images/logo-192.png",
              image: "https://dustandwipes.com/images/og-image.jpg",
              telephone: "+2348099700001",
              email: "infodesk@dustandwipes.com",
              foundingDate: "2017-03",
              founder: {
                "@type": "Person",
                name: "Bisi Teru",
                jobTitle: "Founder & CEO",
                image: "https://dustandwipes.com/images/founder-photo.jpg",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite D15, Irama Plaza, 4th Avenue",
                addressLocality: "Gwarinpa",
                addressRegion: "FCT",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 9.0765,
                longitude: 7.3986,
              },
              priceRange: "₦₦",
              currenciesAccepted: "NGN",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "10",
                bestRating: "5",
              },
              hasMap: "https://maps.google.com/?q=Irama+Plaza+Gwarinpa+Abuja",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cleaning & Pest Control Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pest Control" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet & Upholstery Cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Consultancy" } },
                ],
              },
              sameAs: [
                "https://instagram.com/dustandwipes",
                "https://facebook.com/dustandwipes",
                "https://x.com/dustandwipes",
                "https://linkedin.com/company/dustandwipes",
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Abuja FCT, Nigeria",
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
