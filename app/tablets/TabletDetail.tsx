"use client";

import { useState } from "react";
import "../laptops/fd16/product-detail.css";
import "../laptops/product-spec.css";
import type { TabletProduct } from "./tablet-data";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

export default function TabletDetail({ product, slug }: { product: TabletProduct; slug: string }) {
  const [active, setActive] = useState(0);
  const gallery = Array.from({ length: product.galleryCount }, (_, index) => `/tablets/${slug}/gallery/${String(index + 1).padStart(2, "0")}-${["main", "front", "back", "side", "ports", "angle"][index] || `view-${index + 1}`}.webp`);
  const details = Array.from({ length: product.detailCount }, (_, index) => `/tablets/${slug}/detail/${String(index + 1).padStart(2, "0")}-detail-${String(index + 1).padStart(2, "0")}.webp`);
  const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${product.code}.`)}`;

  return (
    <>
      <main className="detailPage">
      <header className="detailHeader">
        <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav><a href="/">Home</a><a href="/tablets">Products</a><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav>
        <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
      </header>

      <section className="productOverview" data-track-event={`whatsapp-${slug}`}>
        <div className="galleryWrap">
          <div className="mainProductImage"><img src={gallery[active]} alt={`${product.code} ${product.title} view ${active + 1}`} width="1600" height="1600" loading="eager" decoding="async" /></div>
          <div className="thumbnailRow">{gallery.map((image, index) => <button className={active === index ? "active" : ""} key={image} onClick={() => setActive(index)} aria-label={`Show product image ${index + 1}`}><img src={image} alt="" width="260" height="260" loading="eager" decoding="async" /></button>)}</div>
        </div>
        <div className="productSummaryPanel">
          <p className="detailEyebrow">WEIBOER / {product.code} · {product.eyebrow}</p>
          <h1>{product.h1}</h1>
          <p className="detailLead">{product.description}</p>
          <div className="detailHighlights">{product.highlights.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="detailFacts"><div><b>MOQ</b><strong>1 pc</strong></div><div><b>LEAD TIME</b><strong>Confirm</strong></div></div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · Hardware configuration · Language · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>{product.kids ? "Learning-focused hardware." : "Flexible tablet hardware."}<br /><span>Ready for your brand.</span></h2></section>
      <section className="detailImages">{details.map((image, index) => <img src={image} alt={`${product.code} product detail ${index + 1}`} key={image} width="1400" height="1400" loading="lazy" decoding="async" />)}</section>

      <section className="detailSpecs"><div className="specHead"><p>TECHNICAL SPECIFICATIONS · {product.code}</p><h2>Configurations you can<br /><span>tune to your market.</span></h2></div><div className="specGrid">{product.specs.map(([label, value]) => <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>)}</div></section>
      <section className="detailFaq"><div className="faqHead"><p>FAQ · {product.code} OEM / ODM</p><h2>Buyer questions,<br /><span>answered before sampling.</span></h2></div><div className="faqList">{product.faqs.map(([question, answer]) => <article className="faqItem" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <section className="detailBottomCta" data-track-event={`whatsapp-${slug}-cta`}><p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p><h2>Ready to launch your<br /><span>{product.kids ? "kids tablet line?" : "Android tablet line?"}</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask for {product.code} specifications on WhatsApp <b>↗</b></a></section>
    </main>
    </>
  );
}
