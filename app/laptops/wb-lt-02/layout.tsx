import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15.6\" Intel Business Laptop OEM | i5/i7, 64GB DDR4 | Weiboer",
  description:
    "Shenzhen OEM/ODM 15.6\" Intel business laptop with Core i5-1235U / i7-13620H, up to 64GB DDR4 and dual M.2 SSD. Wi-Fi 6, fingerprint, backlit keyboard, custom logo & packaging.",
  alternates: { canonical: "/laptops/wb-lt-02" },
  openGraph: {
    title: "15.6\" Intel Business Laptop OEM/ODM — Weiboer",
    description:
      "Custom-branded 15.6\" Intel business laptop for global buyers. Low MOQ, factory direct, dual M.2 storage and WiFi 6.",
    url: "/laptops/wb-lt-02",
    type: "article",
  },
};

export default function WBLT02Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
