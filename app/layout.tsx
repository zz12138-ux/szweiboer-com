import type { Metadata } from "next";
import "./globals.css";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { JsonLd, organizationJsonLd } from "./components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.szweiboer.com"),
  title: "Weiboer Laptop OEM Supplier & Consumer Electronics Manufacturer",
  description: "Weiboer is a low MOQ laptop OEM supplier and consumer electronics manufacturer for business laptops, gaming laptops, tablets, mini PCs, projectors and portable monitors. Request a B2B quotation.",
  keywords: ["low MOQ OEM manufacturer", "ODM consumer electronics", "custom laptops manufacturer", "tablet OEM", "projector ODM", "portable monitor supplier", "Weiboer"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: "/", siteName: "Weiboer",
    title: "Weiboer Laptop OEM Supplier | Low-MOQ Consumer Electronics",
    description: "Laptop OEM and ODM platforms for global B2B buyers, including business laptops, gaming laptops, tablets, mini PCs and portable monitors.",
    images: [{ url: "/weiboer-hero-video-poster-v136.webp", width: 1920, height: 1080, alt: "Weiboer consumer electronics factory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-MOQ OEM/ODM Consumer Electronics | Weiboer",
    description: "Factory-direct consumer electronics with flexible OEM and ODM customization.",
    images: ["/weiboer-hero-video-poster-v136.webp"],
  },
  icons: {
    icon: "/favicon-512.png",
    shortcut: "/favicon-512.png",
    apple: "/favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <JsonLd data={organizationJsonLd()} />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
