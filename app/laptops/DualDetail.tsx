"use client";

import { useState } from "react";
import "./fd16/product-detail.css";
import "./product-spec.css";
import type { DualScreenLaptop } from "./dual-data";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const commonGallery = [
  "/laptops/dual-screen-common/01-low-moq-oem-odm.webp",
  "/laptops/dual-screen-common/02-build-your-own-brand.webp",
  "/laptops/dual-screen-common/03-why-choose-weiboer.webp",
  "/laptops/dual-screen-common/04-process-flow.webp",
];

export default function DualDetail({ product, slug }: { product: DualScreenLaptop; slug: string }) {
  const [active, setActive] = useState(0);
  const gallery = product.galleryImages || [
    `/laptops/${slug}/gallery/01-main.webp`,
    ...commonGallery,
  ];
  const details = product.detailImages || Array.from({ length: product.detailCount }, (_, index) => `/laptops/${slug}/detail/${String(index + 1).padStart(2, "0")}-alibaba.webp`);
  const relatedPlatforms = [
    ["FD14 Foldable Dual 14.1-inch Platform", "/laptops/dual-screen/fd14/", "fd14"],
    ["FD16 Dual 16-inch Platform", "/laptops/dual-screen/wb-lt-09/", "wb-lt-09"],
    ["DS16 16-inch + 14-inch Platform", "/laptops/dual-screen/wb-lt-10/", "wb-lt-10"],
  ].filter(([, , relatedSlug]) => relatedSlug !== slug);
  const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${product.code}.`)}`;

  return (
    <main className="detailPage">
      <header className="detailHeader">
        <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav><a href="/">Home</a><a href="/laptops">Products</a><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav>
        <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
      </header>

      <section className="productOverview" data-track-event={`whatsapp-${slug}`}>
        <div className="galleryWrap">
          <div className="mainProductImage"><img src={gallery[active]} alt={`${product.code} ${product.h1} view ${active + 1}`} width="1600" height="1600" loading="eager" decoding="async" /></div>
          <div className="thumbnailRow">
            {gallery.map((image, index) => <button className={active === index ? "active" : ""} key={image} onClick={() => setActive(index)} aria-label={`Show product image ${index + 1}`}><img src={image} alt="" width="260" height="260" loading="eager" decoding="async" /></button>)}
          </div>
        </div>
        <div className="productSummaryPanel">
          <p className="detailEyebrow">WEIBOER / {product.code} · {product.eyebrow}</p>
          <h1>{product.h1}</h1>
          <p className="detailLead">{product.description}</p>
          <div className="detailHighlights">{product.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
          <div className="detailFacts"><div><b>MOQ</b><strong>1 pc</strong></div><div><b>WARRANTY</b><strong>{product.warranty || "Confirm"}</strong></div></div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · Hardware configuration · Keyboard language · Retail packaging</p>
          <nav className="detailRelatedLinks" aria-label="Related dual-screen platforms">
            <a href="/dual-screen-laptop-oem/">Dual-Screen OEM Options ↗</a>
            {relatedPlatforms.map(([label, href]) => <a href={href} key={href}>{label} ↗</a>)}
            <a href="/blog/dual-16-inch-vs-16-plus-14-dual-screen-laptop/">Compare Dual-Screen Layouts ↗</a>
          </nav>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS · ALIBABA SOURCE</p><h2>Built for a differentiated<br /><span>dual-screen product line.</span></h2></section>
      <section className="detailImages">{details.map((image, index) => <img src={image} alt={`${product.code} Alibaba product detail ${index + 1}`} key={image} width="1400" height="1400" loading="lazy" decoding="async" />)}</section>

      <section className="detailSpecs"><div className="specHead"><p>TECHNICAL SPECIFICATIONS · {product.code}</p><h2>A configurable dual-screen<br /><span>platform for global buyers.</span></h2></div><div className="specGrid">{product.specs.map(([label, value]) => <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>)}</div></section>
      <section className="detailFaq"><div className="faqHead"><p>FAQ · {product.code} OEM / ODM</p><h2>Buyer questions,<br /><span>answered before sampling.</span></h2></div><div className="faqList">{product.faqs.map(([question, answer]) => <article className="faqItem" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <section className="detailBottomCta" data-track-event={`whatsapp-${slug}-cta`}><p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p><h2>Ready to launch your<br /><span>dual-screen laptop line?</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask for {product.code} specifications on WhatsApp <b>↗</b></a></section>
    </main>
  );
}
