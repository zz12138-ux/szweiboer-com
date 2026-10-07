import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Weiboer",
  description: "How Weiboer uses anonymous website traffic and WhatsApp click analytics.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "96px 24px", color: "#183653", fontFamily: "Manrope, Arial, sans-serif", lineHeight: 1.7 }}>
      <p style={{ color: "#086fd6", fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>WEIBOER · PRIVACY NOTICE</p>
      <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.05, margin: "0 0 24px" }}>Anonymous traffic and WhatsApp click analytics</h1>
      <p>We use anonymous website analytics to understand which referral channels and landing pages are useful to business buyers, and which WhatsApp buttons they use. This measurement records website activity, not messages sent inside WhatsApp.</p>
      <h2>What we store</h2>
      <p>On the first page of a browser session, the website stores a randomly generated browser identifier, a temporary session identifier, the landing-page path, the referring hostname when available, and selected campaign fields such as UTM source, medium and campaign. When a visitor clicks a WhatsApp button, we also store the page path, product code when available, button location and click time.</p>
      <h2>What we do not store</h2>
      <p>We do not use this analytics feature to collect a visitor&apos;s name, email address, phone number, WhatsApp account, message content or IP address. We do not store the full referring URL or unrelated query-string parameters.</p>
      <h2>Traffic-source limits</h2>
      <p>Traffic sources depend on referral and campaign information supplied by the browser. Some apps and privacy settings remove that information, so their visits may appear as direct or unknown. AI citations that do not produce a website visit cannot be measured. Traffic-source history begins when this feature is enabled and cannot be reconstructed for earlier visits.</p>
      <h2>How click deduplication works</h2>
      <p>To reduce repeated-click inflation, the first click from the same anonymous browser for the same product in a 24-hour period is counted as an effective click. The browser identifier is stored locally and can be removed by clearing browser site data.</p>
      <h2>Limits</h2>
      <p>This is not identity verification. A visitor who changes browser, device or clears site data may be counted again. Multiple people using the same browser may be counted as one anonymous visitor.</p>
      <p><a href="/" style={{ color: "#086fd6", fontWeight: 700 }}>Back to Weiboer</a></p>
    </main>
  );
}
