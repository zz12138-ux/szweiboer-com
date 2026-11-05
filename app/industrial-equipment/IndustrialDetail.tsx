"use client";

import { useState } from "react";
import "../laptops/fd16/product-detail.css";
import "../laptops/product-spec.css";
import "./industrial-equipment.css";
import { industrialCommonImages, type IndustrialProduct } from "./product-data";

const imageRoot = "/assets/images/industrial-equipment";

export default function IndustrialDetail({ product }: { product: IndustrialProduct }) {
  const [active, setActive] = useState(0);
  const gallery = [1, 2].map((number) => `${imageRoot}/${product.slug}-${String(number).padStart(2, "0")}.webp`).concat(industrialCommonImages);
  const details = Array.from({ length: product.detailCount }, (_, index) => `${imageRoot}/${product.slug}-detail-${String(index + 1).padStart(2, "0")}.webp`);
  const inquiry = `https://api.whatsapp.com/send/?phone=8613556351212&text=${encodeURIComponent(`Hello Weiboer, please confirm ${product.code} specifications and an OEM quotation.\n\nSelected configuration:\nEstimated quantity:\nDestination market:\nBranding requirements:`)}`;
  return <main className="detailPage industrialDetail">
    <header className="detailHeader">
      <a className="detailLogo" href="/" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/industrial-equipment/">Industrial equipment</a><a href="/#products">Products</a><a href="/#about">OEM / ODM</a></nav>
      <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get OEM Quote</a>
    </header>
    <section className="productOverview" data-track-event={`whatsapp-${product.slug}`} data-product-code={product.code}>
      <div className="galleryWrap">
        <div className="mainProductImage"><img src={gallery[active]} alt={active < 2 ? `${product.code} source product image ${active + 1}` : `Illustrative industrial equipment use case ${active - 1}, not a ${product.code} product photo`} width="1200" height="1200" loading="eager" /></div>
        <div className="thumbnailRow">{gallery.map((image, index) => <button key={image} type="button" className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`}><img src={image} alt="" width="220" height="220" /></button>)}</div>
        <p className="industrialGalleryDisclosure">Images 1–2 are supplier listing artwork and may retain the supplier brand or promotional copy. Images 3–6 are category illustrations, not photos of this model. Final branding and specifications must be confirmed on an approved sample.</p>
      </div>
      <div className="productSummaryPanel">
        <p className="detailEyebrow">INDUSTRIAL EQUIPMENT / {product.code} · {product.segment}</p>
        <h1>{product.name}</h1>
        <p className="detailLead">{product.summary}</p>
        <div className="detailHighlights">{product.highlights.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="detailFacts"><div><b>MOQ</b><strong>Confirm on quote</strong></div><div><b>LEAD TIME</b><strong>Confirm on quote</strong></div></div>
        <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
        <p className="customizationNote">Logo · Graphic customization · Packaging · Final configuration confirmation</p>
      </div>
    </section>
    <section className="detailIntro"><p>PRODUCT DETAILS / {product.code}</p><h2>Inspect the device.<br /><span>Confirm the configuration.</span></h2></section>
    <section className="detailImages">{details.map((image, index) => <img key={image} src={image} alt={`${product.code} product-focused supplier detail ${index + 1}`} loading="lazy" decoding="async" />)}</section>
    <section className="detailSpecs"><div className="specHead"><p>CONFIGURATION CHECK / {product.code}</p><h2>Specifications to confirm<br /><span>before sampling.</span></h2></div><div className="specGrid">{product.specs.map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}</div><p className="industrialSpecNote">{product.note}</p></section>
    <section className="detailBottomCta"><p>INDUSTRIAL EQUIPMENT / B2B INQUIRY</p><h2>Discuss the exact<br /><span>{product.code} configuration.</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask about {product.code} on WhatsApp ↗</a><p className="industrialBack"><a href="/industrial-equipment/">← Browse industrial equipment</a></p></section>
  </main>;
}
