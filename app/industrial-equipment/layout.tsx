import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Equipment | Rugged Handhelds, Tablets & Laptops | Weiboer",
  description: "Explore rugged handhelds KS-20, KS-10, KP-68, KP-58, KP-26, KP-36 and KP-18. Ask Weiboer to confirm configuration before sampling. Industrial tablets and laptops are also in scope.",
  alternates: { canonical: "/industrial-equipment/" },
};

export default function IndustrialEquipmentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
