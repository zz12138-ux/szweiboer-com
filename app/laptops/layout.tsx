import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low MOQ OEM & ODM Laptops | Weiboer",
  description: "Browse Weiboer laptop platforms for B2B buyers: dual-screen laptops, business notebooks and gaming laptops with low MOQ OEM and ODM customization.",
  keywords: ["OEM laptops", "ODM laptop manufacturer", "low MOQ laptops", "custom gaming laptop", "business laptop supplier", "Weiboer"],
  alternates: { canonical: "/laptops" },
};

export default function LaptopsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
