"use client";

import { useState } from "react";
import "./product-detail.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const title = "New 16 Inch Intel Core I5 12450H Two Screen Business Laptop Win11 Pro 1TB/2TB/4TB DDR4 Dual Screen Touch Laptop";
const gallery = [
  { image: "/laptop-model-01-main-opt.webp", thumb: "/laptop-model-01-main-thumb.webp" },
  { image: "/fd16-gallery-v111-01.webp", thumb: "/fd16-gallery-v111-01-thumb.webp" },
  { image: "/fd16-gallery-v111-02.webp", thumb: "/fd16-gallery-v111-02-thumb.webp" },
  { image: "/fd16-gallery-v111-03.webp", thumb: "/fd16-gallery-v111-03-thumb.webp" },
  { image: "/fd16-gallery-v111-04.webp", thumb: "/fd16-gallery-v111-04-thumb.webp" },
];
const details = [
  "/fd16-detail-clean-01-opt.webp",
  "/fd16-detail-clean-02-opt.webp",
  "/fd16-detail-clean-03-opt.webp",
  "/fd16-detail-clean-04-opt.webp",
  "/fd16-detail-clean-05-opt.webp",
  "/fd16-detail-clean-06-opt.webp",
];

export default function FD16Page() {
  const [active, setActive] = useState(0);
  const inquiry = `${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a quotation for the FD16 dual-screen laptop.")}`;
  return <main className="detailPage">
    <header className="detailHeader">
      <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
      <nav><a href="/">Home</a><a href="/laptops">Products</a><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav>
      <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
    </header>

    <section className="productOverview">
      <div className="galleryWrap">
        <div className="mainProductImage"><img src={gallery[active].image} alt={`FD16 product view ${active + 1}`} width="1600" height="1600" loading="eager" decoding="async" /></div>
        <div className="thumbnailRow">{gallery.map((item, index) => <button className={active === index ? "active" : ""} key={item.image} onClick={() => setActive(index)} aria-label={`Show product image ${index + 1}`}><img src={item.thumb} alt="" width="260" height="260" loading="eager" decoding="async" /></button>)}</div>
      </div>
      <div className="productSummaryPanel">
        <p className="detailEyebrow">WEIBOER / FD16 DUAL-SCREEN PLATFORM</p>
        <h1>{title}</h1>
        <p className="detailLead">A flexible dual-screen business platform for distributors, retailers and private-label brands. Supports full OEM and ODM customization.</p>
        <div className="detailHighlights"><span>16 + 16 inch dual touch</span><span>Intel Core i5-12450H</span><span>DDR4 up to 64GB</span><span>SSD up to 4TB</span></div>
        <div className="detailFacts"><div><b>MOQ</b><strong>1 pc</strong></div><div><b>LEAD TIME</b><strong>7 days</strong></div></div>
        <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
        <p className="customizationNote">Custom logo · Boot logo · Hardware configuration · Keyboard language · Packaging design</p>
      </div>
    </section>

    <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Built for flexible work.<br/><span>Ready for your brand.</span></h2></section>
    <section className="detailImages">{details.map((image, index) => <img src={image} alt={`FD16 product detail ${index + 1}`} key={image} width="1200" height="1200" loading="lazy" decoding="async" />)}</section>
    <section className="detailBottomCta"><p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p><h2>Ready to build your<br/><span>dual-screen laptop line?</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask for specifications on WhatsApp <b>↗</b></a></section>
  </main>;
}
