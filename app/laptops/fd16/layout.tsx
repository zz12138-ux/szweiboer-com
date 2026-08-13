import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16-inch Dual-Screen Touch Laptop OEM/ODM | Weiboer",
  description: "Low-MOQ 16-inch dual-screen touch laptop with Intel Core i5-12450H, up to 64GB DDR4 and OEM/ODM customization.",
  alternates: { canonical: "/laptops/fd16" },
};

export default function FD16Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
