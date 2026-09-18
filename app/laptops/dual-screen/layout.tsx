import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dual-Screen Laptop OEM Platforms | Weiboer",
  description: "Compare FD14, FD16 and DS16 dual-screen laptop OEM platforms for private-label, distributor and mobile workstation programs.",
  alternates: { canonical: "/laptops/dual-screen" },
  openGraph: {
    title: "Dual-Screen Laptop OEM Platforms | Weiboer",
    description: "Compare integrated dual-screen laptop platforms, display layouts and OEM configuration options.",
    url: "/laptops/dual-screen",
    type: "website",
  },
};

export default function DualScreenLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
