import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All-in-One PC OEM / ODM Catalog | Weiboer",
  description: "Compare five all-in-one PC OEM and ODM platforms for private-label brands, distributors and project buyers. Review real gallery images, configurations and sampling details.",
  keywords: ["all-in-one PC OEM", "AIO PC ODM", "all-in-one desktop supplier", "private label desktop"],
  alternates: { canonical: "/all-in-one-pcs" },
  openGraph: { title: "All-in-One PC OEM / ODM Catalog | Weiboer", description: "Integrated desktop platforms for private-label and distributor programs.", url: "/all-in-one-pcs", type: "website" },
};

export default function AllInOnePcsLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
