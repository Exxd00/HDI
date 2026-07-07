import type { Metadata } from "next";
import { LocationLandingPage } from "@/components/regions/LocationLandingPage";
import { getLocation } from "@/lib/data/regions";

const data = getLocation("versicherung-nuernberg")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `/${data.slug}`,
    type: "website",
    locale: "de_DE",
  },
};

export default function Page() {
  return <LocationLandingPage data={data} />;
}
