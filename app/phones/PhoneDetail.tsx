"use client";

import { useState } from "react";
import "../laptops/fd16/product-detail.css";
import "../laptops/product-spec.css";
import type { PhoneProduct } from "./phone-data";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

export default function PhoneDetail({ product, slug }: { product: PhoneProduct; slug: string }) {
  const [active, setActive] = useState(0);
  const gallery = Array.from({ length: product.galleryCount }, (_, index) => `/phones/${slug}/gallery/${String(index + 1).padStart(2, "0")}-gallery.webp`);
  const details = Array.from({ length: product.detailCount }, (_, index) => `/phones/${slug}/detail/${String(index + 1).padStart(2, "0")}-detail.webp`);
  const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like specs and an OEM quote for ${product.code}.\n\nTarget configuration:\nEstimated quantity:\nTarget market:\nNeed logo, packaging or graphic customization:`)}`;

  return <main className="detailPage">
    <header className="detailHeader">
      <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
      <nav><a href="/">Home</a><a href="/phones/">Phones</a><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav>
      <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get OEM Quote</a>
    </header>

    <section className="productOverview" data-track-event={`whatsapp-${slug}`} data-product-code={product.code}>
      <div className="galleryWrap">
        <div className="mainProductImage"><img src={gallery[active]} alt={`${product.code} ${product.title} view ${active + 1}`} width="1600" height="1600" loading="eager" decoding="async" /></div>
        <div className="thumbnailRow">{gallery.map((image, index) => <button className={active === index ? "active" : ""} key={image} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`}><img src={image} alt="" width="260" height="260" loading="eager" /></button>)}</div>
      </div>
      <div className="productSummaryPanel">
        <p className="detailEyebrow">WEIBOER / {product.code} · {product.eyebrow}</p>
        <h1>{product.h1}</h1>
        <p className="detailLead">{product.description}</p>
        <div className="detailHighlights">{product.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
        <div className="detailFacts"><div><b>MOQ</b><strong>{product.moq}</strong></div><div><b>MODEL</b><strong>{product.code}</strong></div></div>
        <a className="detailPrimaryCta" href={inquiry} target="_blank" rel="noreferrer">Get Specs & OEM Quote ↗</a>
        <p className="detailCtaNote">Logo · Graphic customization · Packaging · Network and configuration confirmation</p>
      </div>
    </section>

    <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Configurable hardware.<br />Ready for your <span>phone line.</span></h2></section>
    <section className="detailImageStack">{details.map((image, index) => <img key={image} src={image} alt={`${product.code} product detail ${index + 1}`} loading="lazy" />)}</section>
    <section className="detailSpecs"><div className="specHead"><p>TECHNICAL SPECIFICATIONS · {product.code}</p><h2>Configurations you can<br /><span>tune to your market.</span></h2></div><div className="specGrid">{product.specs.map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}</div></section>
    <section className="detailFaq"><div className="specHead"><p>FAQ · {product.code} OEM / ODM</p><h2>Buyer questions,<br /><span>answered before sampling.</span></h2></div><div className="faqList">{product.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="detailBottomCta"><p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p><h2>Ready to source your<br /><span>phone platform?</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask for {product.code} specifications on WhatsApp ↗</a></section>
  </main>;
}
