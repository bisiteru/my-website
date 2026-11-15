import type { Metadata } from "next";
import { SITE_URL, absolute } from "@/lib/seo";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/layout/Analytics";

// §4.3 — typeface pairing.
//
// Fraunces (display serif) for headings, Hanken Grotesk for body. This replaces
// Montserrat + Inter: Inter is the default-looking grotesque this project set
// out to avoid, and long Montserrat headlines sat heavy on narrow screens
// because a geometric sans has no optical-size axis to thin out as it scales.
//
// Fraunces is variable on wght and opsz, so the same face can be set light and
// airy at hero size and sturdier at card size — see the font-variation-settings
// in globals.css. SOFT is held low (rounded terminals read friendly, not
// childish) and WONK is left at 0, since its canted forms are too playful for a
// facility-services brand.
//
// next/font self-hosts and subsets automatically, with font-display: swap.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// §3.1 / §9.7 — preview and staging deployments must never be indexed.
// Vercel sets VERCEL_ENV to "production" only on the production deployment.
const isProduction = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dust & Wipes Limited | Cleaning, Pest Control & Cleaner Training in Abuja & Lagos",
    template: "%s | Dust & Wipes Limited",
  },
  description:
    "Professional cleaning, pest control, facility support and cleaner training since 2017. Offices in Abuja and Lagos: residential and office cleaning, deep cleans, pest control under EHCON and PECAN licensing, and janitorial retainers. 650+ clients served.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Dust & Wipes Limited",
    title: "Dust & Wipes Limited | Cleaning, Pest Control & Cleaner Training in Abuja & Lagos",
    description:
      "Cleaning, pest control and cleaner training since 2017, from offices in Abuja and Lagos. 650+ clients served.",
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
    title: "Dust & Wipes Limited | Cleaning & Pest Control, Abuja & Lagos",
    description: "Cleaning, pest control and cleaner training across Abuja FCT and Lagos. 650+ clients served since 2017.",
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
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
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
              // aggregateRating removed. Google's own guidance requires a
              // review count alongside a rating, and the owner has asked that
              // the count not be published. A rating without it is both invalid
              // structured data and an unverifiable claim, so neither is shown.
              hasMap: "https://maps.google.com/?q=Irama+Plaza+Gwarinpa+Abuja",
              memberOf: [
                { "@type": "Organization", name: "ISSA — The Association for Cleaning & Facility Solutions" },
                { "@type": "Organization", name: "Pest Control Association of Nigeria (PECAN)" },
                { "@type": "Organization", name: "Environmental Health Council of Nigeria (EHCON)" },
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
        <Analytics />
      </body>
    </html>
  );
}
