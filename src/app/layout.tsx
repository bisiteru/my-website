import type { Metadata } from "next";
import { SITE_URL, absolute } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    template: "%s | Dust & Wipes Limited",
  },
  description:
    "Abuja's most trusted cleaning and pest control company since 2017. Residential cleaning, office cleaning, deep cleaning, carpet cleaning, termite control & more. Serving all FCT districts. 650+ happy clients. Get a free quote.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Dust & Wipes Limited",
    title: "Dust & Wipes Limited | Professional Cleaning & Pest Control in Abuja",
    description:
      "Abuja's most trusted cleaning and pest control company since 2017. 650+ satisfied clients across all FCT districts.",
    images: [
      {
        url: absolute("/images/og-image.jpg"),
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
    images: [absolute("/images/og-image.jpg")],
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
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": `${SITE_URL}/#business`,
              name: "Dust & Wipes Limited",
              legalName: "Dust and Wipes Limited",
              description:
                "Professional cleaning, pest control, facility support and cleaner training in Abuja and Lagos, Nigeria.",
              url: SITE_URL,
              logo: absolute("/images/logo-192.png"),
              image: absolute("/images/og-image.jpg"),
              telephone: "+2348099700001",
              email: "infodesk@dustandwipes.com",
              foundingDate: "2017-03",
              founder: {
                "@type": "Person",
                name: "Bisi Teru",
                jobTitle: "Founder & CEO",
                image: absolute("/images/founder-photo.jpg"),
              },
              // §9.5 — the office is in Abuja; Lagos is areaServed, not a second address
              address: {
                "@type": "PostalAddress",
                streetAddress: "Suite D15, Irama Plaza, 4th Avenue",
                addressLocality: "Gwarinpa",
                addressRegion: "FCT",
                addressCountry: "NG",
              },
              geo: { "@type": "GeoCoordinates", latitude: 9.0765, longitude: 7.3986 },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Abuja Federal Capital Territory, Nigeria" },
                { "@type": "AdministrativeArea", name: "Lagos State, Nigeria" },
              ],
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
                  opens: "07:00",
                  closes: "18:00",
                },
              ],
              // §3.2 / §9.5 — genuine Google figures only
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "10",
                bestRating: "5",
                worstRating: "1",
              },
              hasMap: "https://maps.google.com/?q=Irama+Plaza+Gwarinpa+Abuja",
              memberOf: [
                { "@type": "Organization", name: "International Sanitary Standards Association (ISSA)" },
                { "@type": "Organization", name: "Pest Control Association of Nigeria (PECAN)" },
              ],
              knowsAbout: [
                "Commercial cleaning",
                "Residential cleaning",
                "Pest control",
                "Facility management",
                "Cleaner training",
              ],
              sameAs: [
                "https://instagram.com/dustandwipes",
                "https://facebook.com/dustandwipes",
                "https://x.com/dustandwipes",
                "https://linkedin.com/company/dustandwipes",
              ],
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
