import type { Metadata } from "next";
import { JsonLd, productJsonLd } from "../../components/StructuredData";

const product = {
  code: "DS15",
  title: "15.6-inch Dual-Screen Touch Laptop — OEM / ODM Ready",
  description: "A 15.6-inch plus 7-inch dual-screen touch laptop for private-label brands, e-commerce operators and productivity buyers.",
  highlights: ["Intel N100 / N150", "DDR4 up to 32GB", "15.6-inch plus 7-inch touch displays", "RGB backlit keyboard"],
  imagePath: "/laptops/wb-lt-04/gallery/01-main.webp",
};

export const metadata: Metadata = {
  title: "15.6\" Dual-Screen Laptop OEM | Intel N100/N150, 32GB RGB Touch | Weiboer",
  description:
    "Shenzhen OEM/ODM 15.6\" + 7\" dual-screen touch laptop with Intel N100 / N150, up to 32GB DDR4, RGB backlit keyboard, fingerprint and pluggable 2MP camera. Low MOQ, custom logo & packaging.",
  alternates: { canonical: "/laptops/wb-lt-04" },
  openGraph: {
    title: "15.6\" Dual-Screen Laptop OEM/ODM — Weiboer",
    description:
      "White-label dual-screen laptop with 15.6\" + 7\" touch panel, Intel N100 / N150, RGB keyboard, fingerprint and factory-direct pricing.",
    url: "/laptops/wb-lt-04",
    type: "article",
  },
};

export default function WBLT04Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<JsonLd data={productJsonLd(product, "laptops", "wb-lt-04")} /></>;
}
