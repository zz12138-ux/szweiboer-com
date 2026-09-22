import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15.6\" Intel Core i9 Business Laptop OEM | i9-11900H / 12900HK | Weiboer",
  description:
    "Shenzhen OEM/ODM 15.6\" Intel Core i9 business laptop with i9-11900H or i9-12900HK, up to 64GB DDR4, dual M.2 SSD, RJ45, fingerprint and backlit keyboard. Low MOQ.",
  alternates: { canonical: "/laptops/wb-lt-03" },
  openGraph: {
    title: "15.6\" Intel Core i9 Business Laptop OEM/ODM — Weiboer",
    description:
      "Custom Intel Core i9 15.6\" laptop for global buyers. i9-11900H / i9-12900HK, RJ45, 64GB DDR4, dual SSD, factory direct.",
    url: "/laptops/wb-lt-03",
    type: "article",
  },
};

export default function WBLT03Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
