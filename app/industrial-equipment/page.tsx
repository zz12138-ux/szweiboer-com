import type { Metadata } from "next";
import "../laptops/laptops.css";
import "../laptops/nav.css";
import "../product-nav.css";
import "./industrial-equipment.css";

const inquiry = "https://api.whatsapp.com/send/?phone=8613556351212&text=" + encodeURIComponent("Hello Weiboer, I would like to discuss an industrial PDA project. Please confirm available models, specifications, minimum order quantity and lead time.");

export const metadata: Metadata = {
  title: "Industrial equipment | Rugged PDA Project Inquiries | Weiboer",
  description: "Explore industrial PDA project inquiries with Weiboer. Request verified models, specifications, minimum order quantity and lead time before sampling.",
  alternates: { canonical: "/industrial-equipment/" },
};

export default function IndustrialEquipmentPage() {
  return <main className="laptopsPage industrialPage">
    <header className="laptopHeader">
      <a href="/" className="laptopBrand" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
      <nav className="laptopNav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/#products">Products</a>
        <a href="/#about">OEM / ODM</a>
        <a href="/#factory">Factory</a>
      </nav>
      <a href="/" className="backHome">← Back to home</a>
    </header>
    <section className="laptopHero">
      <p>INDUSTRIAL EQUIPMENT / B2B CATEGORY</p>
      <h1>Industrial equipment.<br /><em>Ready for your brief.</em></h1>
      <span>Explore rugged handheld PDA project requirements with our team. The device shown is an illustrative category visual, not a verified product listing.</span>
    </section>
    <section className="industrialCatalog" aria-labelledby="industrial-title">
      <div className="industrialVisual"><img src="/assets/images/industrial-equipment-pda.webp" alt="Illustrative rugged industrial PDA category visual" width="832" height="800" /></div>
      <div className="industrialCopy">
        <p className="industrialEyebrow">INDUSTRIAL PDA / PROJECT INQUIRY</p>
        <h2 id="industrial-title">Start with the workflow.<br /><span>Confirm the device.</span></h2>
        <p>Tell us how the handheld will be used and what your team needs to connect. We will confirm suitable models and the actual configuration before providing specifications or a quotation.</p>
        <ul>
          <li>Deployment environment and daily workflow</li>
          <li>Required software, connectivity and peripherals</li>
          <li>Target quantity, destination market and branding needs</li>
        </ul>
        <p className="industrialDisclosure">Concept image only. Device model, durability rating, certifications and accessories are not yet verified.</p>
        <a className="industrialWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
        <a className="industrialQuote" href="/#email-quote">Send a project inquiry by email ↗</a>
      </div>
    </section>
  </main>;
}
