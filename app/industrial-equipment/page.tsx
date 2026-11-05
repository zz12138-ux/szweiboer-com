import type { Metadata } from "next";
import "../laptops/laptops.css";
import "../laptops/nav.css";
import "../product-nav.css";
import "./industrial-equipment.css";
import { industrialProducts } from "./product-data";

const inquiry = "https://api.whatsapp.com/send/?phone=8613556351212&text=" + encodeURIComponent("Hello Weiboer, I would like to discuss an industrial device project. Please confirm available models, specifications, minimum order quantity and lead time.");

export const metadata: Metadata = {
  title: "Industrial Equipment | Rugged Handhelds, Tablets & Laptops | Weiboer",
  description: "Explore rugged handhelds KS-20, KS-10, KP-68, KP-58, KP-26, KP-36 and KP-18. Ask Weiboer to confirm configuration before sampling. Industrial tablets and laptops are also in scope.",
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
      <span>Browse our rugged handheld models below. Industrial tablets and laptops are also in scope for project inquiries. The hero device is an illustrative category visual, not a listed model.</span>
    </section>
    <section className="industrialCatalog" aria-labelledby="industrial-title">
      <div className="industrialVisual"><img src="/assets/images/industrial-equipment-pda.webp" alt="Illustrative rugged industrial PDA category visual" width="832" height="800" /></div>
      <div className="industrialCopy">
        <p className="industrialEyebrow">HANDHELD / TABLET / LAPTOP INQUIRIES</p>
        <h2 id="industrial-title">Start with the workflow.<br /><span>Confirm the device.</span></h2>
        <p>Whether you need a handheld, tablet or laptop, tell us how your team works and what it needs to connect. We will confirm the actual model and configuration before providing specifications or a quotation.</p>
        <ul>
          <li>Choose a handheld, industrial tablet or industrial laptop</li>
          <li>Describe the environment, software and connectivity needs</li>
          <li>Share target quantity, destination market and branding needs</li>
        </ul>
        <p className="industrialDisclosure">Concept image only. Device model, durability rating, certifications and accessories are not yet verified.</p>
        <a className="industrialWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
        <a className="industrialQuote" href="/#email-quote">Send a project inquiry by email ↗</a>
      </div>
    </section>
    <section className="industrialProducts" id="industrial-products" aria-labelledby="industrial-products-title">
      <div className="industrialProductsHead"><p>RUGGED HANDHELD COLLECTION</p><h2 id="industrial-products-title">Explore the models.</h2><span>Seven distinct models from the supplied listings. Supplier imagery may show original branding; final hardware and specifications are confirmed by configuration.</span></div>
      <div className="industrialProductGrid">{industrialProducts.map((product) => <a className="industrialProductCard" href={`/industrial-equipment/${product.slug}/`} key={product.slug}>
        <div className="industrialProductVisual"><img src={`/assets/images/industrial-equipment/${product.slug}-01.webp`} alt={`${product.code} supplier listing artwork`} loading="lazy" /></div>
        <div className="industrialProductMeta"><span>{product.segment}</span><h3>{product.code}</h3><p>{product.summary}</p><strong>View product details <b>↗</b></strong></div>
      </a>)}</div>
      <p className="industrialCollectionNote">For industrial tablets and laptops, send a project brief. No tablet or laptop SKU is represented by the illustrative category images above.</p>
    </section>
  </main>;
}
