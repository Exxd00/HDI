import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HDI Generalvertretung Werner Böhm | Versicherung Nürnberg",
    template: "%s | HDI Werner Böhm Nürnberg",
  },
  description: "Persönliche HDI-Beratung in Nürnberg: Lebensversicherung, Berufsunfähigkeit, Altersvorsorge, private Krankenversicherung & mehr. Über 25 Jahre Erfahrung, IHK-zertifiziert.",
  keywords: ["HDI Nürnberg", "Versicherung Nürnberg", "Werner Böhm", "Berufsunfähigkeit", "Altersvorsorge", "Lebensversicherung", "private Krankenversicherung", "Versicherungsberatung Nürnberg"],
  authors: [{ name: "Werner Böhm" }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: "HDI Generalvertretung Werner Böhm",
    title: "HDI Generalvertretung Werner Böhm | Versicherung Nürnberg",
    description: "Persönliche HDI-Beratung in Nürnberg. Über 25 Jahre Erfahrung, IHK-zertifiziert.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// JSON-LD structured data for SEO & AI tools
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  founder: {
    "@type": "Person",
    name: siteConfig.agent.name,
    jobTitle: siteConfig.agent.title,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    postalCode: siteConfig.contact.address.zip,
    addressLocality: siteConfig.contact.address.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.4625",
    longitude: "11.1078",
  },
  areaServed: {
    "@type": "City",
    name: "Nürnberg",
  },
  knowsAbout: [
    "Lebensversicherung",
    "Risikolebensversicherung",
    "Berufsunfähigkeitsversicherung",
    "Altersvorsorge",
    "Private Krankenversicherung",
    "Sachversicherungen",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "HDI Versicherung AG",
    url: "https://www.hdi.de",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
