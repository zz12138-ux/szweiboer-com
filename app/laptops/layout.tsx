import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop OEM & ODM Supplier | Business, Gaming & Dual-Screen | Weiboer",
  description: "Compare Weiboer business, gaming and dual-screen laptop platforms for B2B sourcing. Low MOQ OEM/ODM configuration, branding, packaging and sample terms.",
  keywords: ["OEM laptops", "ODM laptop manufacturer", "low MOQ laptops", "business laptop supplier", "dual-screen laptop OEM", "Weiboer"],
  alternates: { canonical: "/laptops" },
  openGraph: { title: "Laptop OEM & ODM Supplier | Business, Gaming & Dual-Screen | Weiboer", description: "Business, gaming and dual-screen laptop platforms for B2B buyers with low MOQ OEM/ODM configuration, branding and packaging.", url: "/laptops", type: "website" },
};

export default function LaptopsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
