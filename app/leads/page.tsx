import type { Metadata } from "next";
import LeadsView from "./view";

export const metadata: Metadata = {
  title: "Private Lead Desk | Weiboer",
  robots: { index: false, follow: false, noarchive: true },
  referrer: "no-referrer",
};

export default function LeadsPage() {
  return <LeadsView />;
}
