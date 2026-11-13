"use client";

import { useState } from "react";
import "../laptops/laptops.css";
import "../laptops/nav.css";
import "../product-nav.css";
import "../laptops/product-grid.css";
import "../laptops/product-typography.css";
import "../laptops/mobile.css";
import "./industrial-equipment.css";
import { industrialProducts } from "./product-data";

const inquiry = "https://api.whatsapp.com/send/?phone=8613556351212&text=" + encodeURIComponent("Hello Weiboer, I would like to discuss an industrial device project. Please confirm available models, specifications, minimum order quantity and lead time.");

export default function IndustrialEquipmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="laptopsPage industrialPage">
    <header className={`laptopHeader${menuOpen ? " menuOpen" : ""}`}>
      <a href="/" className="laptopBrand" aria-label="Weiboer home" onClick={() => setMenuOpen(false)}><img src="/weiboer-logo.png" alt="Weiboer" /></a>
      <button className="laptopMenuToggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="industrial-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav id="industrial-navigation" className="laptopNav" aria-label="Main navigation">
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <div className="productMenu"><button className="productMenuTrigger" type="button">Products</button><div className="productMenuList"><a href="/laptops/">Laptops</a><a href="/phones/">Phones</a><a href="/all-in-one-pcs/">All-in-One PCs</a><a href="/industrial-equipment/" onClick={() => setMenuOpen(false)} aria-current="page">Industrial equipment</a><a href="/gaming-laptops/">Gaming Laptops</a><a href="/mini-pcs/">Mini PCs</a><a href="/tablets/">Android Tablets</a><a href="/projectors/">Projectors</a><a href="/portable-monitors/">Portable Monitors</a><a href="/blog/">Buyer Guides</a></div></div>
        <a href="/#about" onClick={() => setMenuOpen(false)}>OEM / ODM</a>
        <a href="/#factory" onClick={() => setMenuOpen(false)}>Factory</a>
        <a className="laptopMobileQuote" href={inquiry} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Ask on WhatsApp ↗</a>
      </nav>
      <a href="/" className="backHome">← Back to home</a>
    </header>
    <section className="laptopHero">
      <p>INDUSTRIAL EQUIPMENT / B2B PRODUCT CATALOG</p>
      <h1>Industrial equipment.<br /><em>Ready for your brief.</em></h1>
      <span>Browse our rugged handheld models below. Industrial tablets and laptops are also in scope for project inquiries. The hero device is an illustrative category visual, not a listed model.</span>
    </section>
    <section className="customBar"><b>RUGGED HANDHELDS</b><b>CONFIGURATION CHECK</b><b>BRANDING OPTIONS</b><b>PROJECT INQUIRIES</b></section>
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
    <section className="laptopCatalog industrialProducts" id="industrial-products" aria-labelledby="industrial-products-title">
      <div className="catalogHeading"><p>RUGGED HANDHELD COLLECTION</p><h2 id="industrial-products-title">Explore the models.<br/><span>Seven distinct models.</span></h2><span className="catalogIntro">Seven distinct models from the supplied listings. Supplier imagery may show original branding; final hardware and specifications are confirmed by configuration.</span></div>
      <div className="laptopProductGrid">{industrialProducts.map((product, index) => {
        const cardInquiry = `https://api.whatsapp.com/send/?phone=8613556351212&text=${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${product.code}.`)}`;
        return <article className="modelCard modelCardClickable" key={product.slug}>
          <a className="modelImage" href={`/industrial-equipment/${product.slug}/`} aria-label={`View ${product.code} details`}>
            <img src={`/assets/images/industrial-equipment/${product.slug}-01.webp`} alt={`${product.code} supplier listing artwork`} loading="lazy" decoding="async" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </a>
          <div className="modelInfo">
            <p className="modelCode">{product.code} · {product.segment}</p>
            <h2>{product.name}</h2>
            <p className="productSummary">{product.summary}</p>
            <a className="viewDetails" href={`/industrial-equipment/${product.slug}/`}>View product details ↗</a>
            <a className="modelWhatsApp" href={cardInquiry} target="_blank" rel="noreferrer">Quote This Product on WhatsApp <b>↗</b></a>
          </div>
        </article>;
      })}</div>
      <p className="industrialCollectionNote">For industrial tablets and laptops, send a project brief. No tablet or laptop SKU is represented by the illustrative category images above.</p>
    </section>
    <section className="catalogCta" data-track-scope="industrial-catalog"><p>CAN&apos;T FIND THE EXACT CONFIGURATION?</p><h2>Tell us your target.<br/><span>We will match the platform.</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a></section>
  </main>;
}
