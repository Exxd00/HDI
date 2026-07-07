import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site-config";
import { locations } from "@/lib/data/regions";

// Served automatically at /sitemap.xml by Next.js.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    // Core
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ueber-uns", priority: 0.7, changeFrequency: "monthly" },

    // Versicherungen (Service)
    { path: "/service/lebensversicherung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/risikolebensversicherung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/berufsunfaehigkeit", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/altersvorsorge", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/private-krankenversicherung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/sachversicherungen", priority: 0.8, changeFrequency: "monthly" },

    // Absicherung nach Lebenssituation
    { path: "/familie-absichern", priority: 0.8, changeFrequency: "monthly" },
    { path: "/einkommen-absichern", priority: 0.8, changeFrequency: "monthly" },
    { path: "/immobilienkredit-absichern", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kinder-absichern", priority: 0.8, changeFrequency: "monthly" },
    { path: "/paare-absicherung", priority: 0.8, changeFrequency: "monthly" },
    { path: "/selbststaendige-absicherung", priority: 0.8, changeFrequency: "monthly" },

    // Rechtliches
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
    { path: "/erstinformation", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Local-SEO Standort- & Zielgruppenseiten (Franken)
  const localSeoEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${base}/${loc.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: loc.kind === "region" ? 0.8 : 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...localSeoEntries];
}
