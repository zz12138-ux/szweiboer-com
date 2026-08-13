import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://szweiboer.com"),
  title: "Low MOQ OEM/ODM Consumer Electronics Manufacturer | Weiboer",
  description: "Weiboer is a low MOQ OEM and ODM consumer electronics manufacturer for laptops, tablets, projectors and portable monitors. Request a B2B quotation or WhatsApp our team.",
  keywords: ["low MOQ OEM manufacturer", "ODM consumer electronics", "custom laptops manufacturer", "tablet OEM", "projector ODM", "portable monitor supplier", "Weiboer"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: "/", siteName: "Weiboer",
    title: "Low-MOQ OEM/ODM Consumer Electronics | Weiboer",
    description: "Factory-direct laptops, tablets, projectors and portable monitors for global B2B buyers.",
    images: [{ url: "/weiboer-hero-video-poster-v136.webp", width: 1920, height: 1080, alt: "Weiboer consumer electronics factory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-MOQ OEM/ODM Consumer Electronics | Weiboer",
    description: "Factory-direct consumer electronics with flexible OEM and ODM customization.",
    images: ["/weiboer-hero-video-poster-v136.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
