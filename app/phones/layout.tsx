import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone OEM / ODM Catalog | Weiboer",
  description: "Compare four Android phone OEM and ODM platforms for private-label brands, distributors and project buyers. Review real gallery images, configurations and sampling details.",
  keywords: ["phone OEM", "smartphone ODM", "mobile phone supplier", "private label phone"],
  alternates: { canonical: "/phones" },
  openGraph: { title: "Phone OEM / ODM Catalog | Weiboer", description: "Phone platforms for private-label and distributor programs.", url: "/phones", type: "website" },
};

export default function PhonesLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
