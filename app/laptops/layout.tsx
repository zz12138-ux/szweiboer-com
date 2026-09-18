import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weiboer Laptop OEM Supplier | Low MOQ OEM & ODM",
  description: "Choose Weiboer laptop platforms for B2B sourcing: business laptops, gaming laptops and dual-screen laptops with low MOQ OEM/ODM configuration, branding and packaging.",
  keywords: ["OEM laptops", "ODM laptop manufacturer", "low MOQ laptops", "business laptop supplier", "dual-screen laptop OEM", "Weiboer"],
  alternates: { canonical: "/laptops" },
  openGraph: { title: "Weiboer Laptop OEM Supplier | Low MOQ OEM & ODM", description: "Business, gaming and dual-screen laptop platforms for B2B buyers with configurable branding, packaging and hardware.", url: "/laptops", type: "website" },
};

export default function LaptopsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
