import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ContactActionsProvider } from "@/components/layout/ContactActionsProvider";
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
    ratingValue: "4.4",
    reviewCount: "64",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

// WebSite schema (linked to the organization above)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "de-DE",
  publisher: { "@id": `${siteConfig.url}/#organization` },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LB71DB28VR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LB71DB28VR');
          `}
        </Script>
        <ContactActionsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </ContactActionsProvider>
        <CookieConsent />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
