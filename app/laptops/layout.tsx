import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop OEM Supplier | Business, Gaming & Dual-Screen | Weiboer",
  description: "Source Weiboer laptop OEM platforms for B2B programs: business, gaming and dual-screen laptops with configurable hardware, branding, keyboard language and packaging.",
  keywords: ["OEM laptops", "ODM laptop manufacturer", "low MOQ laptops", "business laptop supplier", "dual-screen laptop OEM", "Weiboer"],
  alternates: { canonical: "/laptops" },
  openGraph: { title: "Laptop OEM Supplier | Business, Gaming & Dual-Screen", description: "Business, gaming and dual-screen laptop platforms for B2B buyers with configurable hardware, branding and packaging.", url: "/laptops", type: "website" },
};

export default function LaptopsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
