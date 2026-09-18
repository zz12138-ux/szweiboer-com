"use client";

import { useState } from "react";
import "../../laptops/fd16/product-detail.css";
import "../../laptops/product-spec.css";
import { ProductStructuredData } from "../../components/StructuredData";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const productCode = "N5";
const title = "Intel N150 Mini PC — OEM / ODM Ready";
const gallery = [
  "/mini-pcs/wb-mc-02/gallery/01-main.webp",
  "/mini-pcs/wb-mc-02/gallery/02-front.webp",
  "/mini-pcs/wb-mc-02/gallery/03-rear-ports.webp",
  "/mini-pcs/wb-mc-02/gallery/04-side.webp",
  "/mini-pcs/wb-mc-02/gallery/05-top.webp",
  "/mini-pcs/wb-mc-02/gallery/06-angle.webp",
];
const details = [
  "/mini-pcs/wb-mc-02/detail/01-spec-table.webp",
  "/mini-pcs/wb-mc-02/detail/02-product-studio.webp",
  "/mini-pcs/wb-mc-02/detail/03-front-ports.webp",
  "/mini-pcs/wb-mc-02/detail/04-rear-io.webp",
  "/mini-pcs/wb-mc-02/detail/05-n150-cpu.webp",
  "/mini-pcs/wb-mc-02/detail/06-triple-screen.webp",
  "/mini-pcs/wb-mc-02/detail/07-wireless.webp",
  "/mini-pcs/wb-mc-02/detail/08-compact-size.webp",
  "/mini-pcs/wb-mc-02/detail/09-port-compatibility.webp",
  "/mini-pcs/wb-mc-02/detail/10-type-c-power.webp",
  "/mini-pcs/wb-mc-02/detail/11-use-cases.webp",
  "/mini-pcs/wb-mc-02/detail/12-mini-size-performance.webp",
];
const specs: Array<[string, string]> = [
  ["CPU", "Intel Processor N95 / N100 / N150 (4C/4T options)"],
  ["Graphics", "Intel UHD Graphics, integrated graphics with shared memory"],
  ["Operating System", "Windows 10 Pro / Windows 11 Pro / Linux"],
  ["Memory", "12GB LPDDR5 4800MHz"],
  ["Storage", "M.2 2242 SATA / NVMe PCIe 3.0 SSD, up to 2TB"],
  ["Wireless", "Intel AX200 WiFi 6 + Bluetooth 5.2"],
  ["Video Output", "HDMI ×2 + DisplayPort 1.4, triple-screen 4K support"],
  ["Networking", "RJ45 ×2"],
  ["I/O Ports", "USB 3.2 ×3, Type-C ×2, HDMI ×2, DP 1.4 ×1, RJ45 ×2, audio ×1"],
  ["Color", "White"],
  ["Body", "Compact mini PC chassis"],
  ["Reference Model", "N5 (internal engineering code)"],
  ["Dimensions", "90 × 90 × 38.5 mm product size"],
  ["Package", "32.3 × 21.9 × 8.5 cm · approx. 1.5 kg gross"],
  ["Warranty", "1 year"],
  ["Certifications", "CE, RoHS"],
  ["Customization", "Logo +$2/unit, custom packaging +$2/unit, language and boot logo"],
  ["MOQ", "1 pc for samples · bulk pricing available"],
  ["Lead Time", "7 days shown for standard orders"],
];
const faqs: Array<[string, string]> = [
  [
    "Which Intel processor options are available?",
    "The platform supports Intel Processor N95, N100 and N150 configurations. Confirm the selected CPU, memory and storage combination with our B2B team before production.",
  ],
  [
    "Can this mini PC drive three 4K displays?",
    "The product detail specifies HDMI and DisplayPort outputs for multi-screen 4K workstations. We recommend confirming the exact display combination and refresh-rate requirement for your project before sampling.",
  ],
  [
    "What is the storage configuration?",
    "The unit uses an M.2 2242 SATA or NVMe PCIe 3.0 SSD platform with capacity options up to 2TB, depending on the selected configuration.",
  ],
  [
    "Can the product carry my brand?",
    "Yes. Weiboer supports logo printing, custom packaging, language selection and boot-logo configuration for OEM and private-label programs.",
  ],
  [
    "What is the minimum order quantity?",
    "The listing supports sample orders from 1 unit. Contact us for bulk pricing and the production schedule for your target configuration.",
  ],
];

export default function WBMC02Page() {
  const [active, setActive] = useState(0);
  const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for the ${productCode} Intel N95/N100/N150 mini PC.`)}`;
  return (
    <>
      <ProductStructuredData product={{ code: productCode, title, h1: title, description: "Intel N95/N100/N150 mini PC with LPDDR5, WiFi 6, dual LAN and multi-screen output." }} category="mini-pcs" slug="wb-mc-02" />
      <main className="detailPage">
      <header className="detailHeader">
        <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav><a href="/">Home</a><a href="/mini-pcs">Products</a><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav>
        <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
      </header>

      <section className="productOverview" data-track-event="whatsapp-wb-mc-02">
        <div className="galleryWrap">
          <div className="mainProductImage"><img src={gallery[active]} alt={`${productCode} Intel mini PC view ${active + 1}`} width="1600" height="1600" loading="eager" decoding="async" /></div>
          <div className="thumbnailRow">{gallery.map((image, index) => <button className={active === index ? "active" : ""} key={image} onClick={() => setActive(index)} aria-label={`Show product image ${index + 1}`}><img src={image} alt="" width="260" height="260" loading="eager" decoding="async" /></button>)}</div>
        </div>
        <div className="productSummaryPanel">
          <p className="detailEyebrow">WEIBOER / {productCode} · INTEL N-SERIES MINI PC PLATFORM</p>
          <h1>{title}</h1>
          <p className="detailLead">A compact Intel mini PC for office deployment, remote workstations, digital signage, learning and multi-screen projects. Choose N95, N100 or N150 with custom branding and packaging.</p>
          <div className="detailHighlights"><span>Intel N95 / N100 / N150</span><span>12GB LPDDR5</span><span>Up to 2TB M.2 SSD</span><span>WiFi 6 + dual LAN</span><span>Triple-screen 4K</span></div>
          <div className="detailFacts"><div><b>MOQ</b><strong>1 pc</strong></div><div><b>LEAD TIME</b><strong>7 days</strong></div></div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · OS language · Hardware configuration · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Compact computing.<br /><span>Ready for your brand.</span></h2></section>
      <section className="detailImages">{details.map((image, index) => <img src={image} alt={`${productCode} product detail ${index + 1}`} key={image} width="1400" height="1400" loading="lazy" decoding="async" />)}</section>

      <section className="detailSpecs"><div className="specHead"><p>TECHNICAL SPECIFICATIONS · {productCode}</p><h2>Flexible configurations for<br /><span>every compact workstation.</span></h2></div><div className="specGrid">{specs.map(([label, value]) => <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>)}</div></section>
      <section className="detailFaq"><div className="faqHead"><p>FAQ · N5 OEM / ODM</p><h2>Buyer questions,<br /><span>answered before sampling.</span></h2></div><div className="faqList">{faqs.map(([question, answer]) => <article className="faqItem" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <section className="detailBottomCta" data-track-event="whatsapp-wb-mc-02-cta"><p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p><h2>Ready to launch your<br /><span>mini PC product line?</span></h2><a href={inquiry} target="_blank" rel="noreferrer">Ask for {productCode} specifications on WhatsApp <b>↗</b></a></section>
    </main>
    </>
  );
}
