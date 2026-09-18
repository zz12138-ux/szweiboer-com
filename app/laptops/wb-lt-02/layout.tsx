import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUC GR180 15.6-inch Intel Business Laptop OEM | Weiboer",
  description:
    "Source the NUC GR180 15.6-inch Intel business laptop for OEM/ODM programs: i5-1235U or i7-13620H, up to 64GB DDR4, dual M.2 SSD and Wi-Fi 6. Confirm the final configuration before production.",
  alternates: { canonical: "/laptops/wb-lt-02" },
  openGraph: {
    title: "NUC GR180 15.6-inch Intel Business Laptop OEM",
    description:
      "A configurable NUC GR180 business laptop platform for global B2B buyers, with custom branding, dual M.2 storage and Wi-Fi 6.",
    url: "/laptops/wb-lt-02",
    type: "article",
  },
};

export default function WBLT02Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
