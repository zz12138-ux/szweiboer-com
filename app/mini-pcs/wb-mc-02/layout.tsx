import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intel N150 Mini PC OEM | DDR5, WiFi 6, Dual LAN | Weiboer",
  description:
    "Shenzhen OEM/ODM Intel N95/N100/N150 mini PC with 12GB LPDDR5, dual HDMI, DisplayPort, WiFi 6 and dual RJ45 LAN. Low MOQ, custom logo and packaging.",
  alternates: { canonical: "/mini-pcs/wb-mc-02" },
  openGraph: {
    title: "Intel N150 Mini PC OEM/ODM — Weiboer",
    description: "Compact Intel mini PC for office, signage and remote workstations. Custom branding and factory-direct supply.",
    url: "/mini-pcs/wb-mc-02",
    type: "article",
  },
};

export default function WBMC02Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
