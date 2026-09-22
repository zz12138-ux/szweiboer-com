import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMD Ryzen Mini PC OEM | Ryzen 5/7, DDR5, WiFi 6 | Weiboer",
  description:
    "Shenzhen OEM/ODM AMD Ryzen mini PC with Ryzen 5 7640HS / Ryzen 7 8745HS, up to 64GB DDR5, WiFi 6, 2.5G LAN. Low MOQ, custom logo & packaging.",
  alternates: { canonical: "/mini-pcs/wb-mc-01" },
  openGraph: {
    title: "AMD Ryzen Mini PC OEM/ODM — Weiboer",
    description:
      "Custom-branded AMD Ryzen mini PC for global buyers. Ryzen 5 / Ryzen 7, DDR5, WiFi 6, factory direct pricing.",
    url: "/mini-pcs/wb-mc-01",
    type: "article",
  },
};

export default function WBMC01Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
