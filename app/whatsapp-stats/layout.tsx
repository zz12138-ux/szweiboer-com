import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Traffic Analytics | Weiboer",
  description: "Private Weiboer traffic-source and WhatsApp conversion dashboard.",
  robots: { index: false, follow: false, nocache: true },
};

export default function WhatsAppStatsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
