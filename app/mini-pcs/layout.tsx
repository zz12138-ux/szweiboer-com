import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini PC OEM Supplier | N100 & AMD Ryzen Platforms | Weiboer",
  description:
    "Mini PC OEM supplier for office, digital signage and retail deployments. Compare Intel N-series and AMD Ryzen platforms with configurable memory, storage, ports, logo and packaging.",
  alternates: { canonical: "/mini-pcs" },
  openGraph: {
    title: "Mini PC OEM Supplier | N100 & AMD Ryzen | Weiboer",
    description: "Office and digital signage mini PC platforms for B2B buyers, with Intel N-series and AMD Ryzen configurations.",
    url: "/mini-pcs",
    type: "website",
  },
};

export default function MiniPcsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
