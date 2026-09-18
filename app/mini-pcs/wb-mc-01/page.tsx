"use client";

import { useState } from "react";
import "../../laptops/fd16/product-detail.css";
import "../../laptops/product-spec.css";
import { ProductStructuredData } from "../../components/StructuredData";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const title = "AMD Ryzen Mini PC — OEM / ODM Ready";
const productCode = "EXR1";
const gallery = [
  { image: "/mini-pcs/wb-mc-01/gallery/01-main.webp", thumb: "/mini-pcs/wb-mc-01/gallery/01-main.webp" },
  { image: "/mini-pcs/wb-mc-01/gallery/02-front.webp", thumb: "/mini-pcs/wb-mc-01/gallery/02-front.webp" },
  { image: "/mini-pcs/wb-mc-01/gallery/03-rear-ports.webp", thumb: "/mini-pcs/wb-mc-01/gallery/03-rear-ports.webp" },
  { image: "/mini-pcs/wb-mc-01/gallery/04-side.webp", thumb: "/mini-pcs/wb-mc-01/gallery/04-side.webp" },
  { image: "/mini-pcs/wb-mc-01/gallery/05-top.webp", thumb: "/mini-pcs/wb-mc-01/gallery/05-top.webp" },
  { image: "/mini-pcs/wb-mc-01/gallery/06-angle.webp", thumb: "/mini-pcs/wb-mc-01/gallery/06-angle.webp" },
];
const details = [
  "/mini-pcs/wb-mc-01/detail/01-hero-banner.webp",
  "/mini-pcs/wb-mc-01/detail/02-cpu-options.webp",
  "/mini-pcs/wb-mc-01/detail/03-performance-chart.webp",
  "/mini-pcs/wb-mc-01/detail/04-memory-storage.webp",
  "/mini-pcs/wb-mc-01/detail/05-ports-io.webp",
  "/mini-pcs/wb-mc-01/detail/06-wifi6.webp",
  "/mini-pcs/wb-mc-01/detail/07-cooling.webp",
  "/mini-pcs/wb-mc-01/detail/08-oem-customization.webp",
  "/mini-pcs/wb-mc-01/detail/09-use-scenarios.webp",
  "/mini-pcs/wb-mc-01/detail/10-certifications.webp",
  "/mini-pcs/wb-mc-01/detail/11-factory.webp",
  "/mini-pcs/wb-mc-01/detail/12-quality-process.webp",
  "/mini-pcs/wb-mc-01/detail/13-packaging.webp",
  "/mini-pcs/wb-mc-01/detail/14-brand-service.webp",
];
const specs: Array<[string, string]> = [
  ["CPU", "AMD Ryzen 5 7640HS (6C/12T, up to 4.9 GHz) or Ryzen 7 8745HS (8C/16T, up to 4.9 GHz)"],
  ["Graphics", "AMD Radeon 760M / 780M integrated graphics (varies by CPU)"],
  ["Operating System", "Windows 10 Pro / Windows 11 Pro / Linux"],
  ["Memory", "DDR5 8 GB / 16 GB / 32 GB / 64 GB (dual SO-DIMM)"],
  ["Storage", "M.2 2280 NVMe + M.2 2242 NVMe/SATA, up to 2 TB total"],
  ["Wireless", "Wi-Fi 6 + Bluetooth 5.2"],
  ["Networking", "2.5G RJ45 Ethernet"],
  ["I/O Ports", "USB 3.2 ×5, HDMI 2.1 ×2, USB-C ×1, 3.5 mm audio ×1"],
  ["Color", "Blue"],
  ["Body", "Aluminum-alloy chassis with active cooling"],
  ["Reference Model", "EXR1 (internal engineering code)"],
  ["Dimensions", "323 × 219 × 85 mm"],
  ["Weight", "≈ 1.5 kg"],
  ["Certifications", "CE, RoHS"],
  ["Customization", "Logo printing, boot logo, custom packaging, keyboard/OS language"],
  ["MOQ", "1 pc for samples · 100 pcs for bulk pricing"],
  ["Lead Time", "7-15 days depending on configuration"],
];
const faqs: Array<[string, string]> = [
  [
    "What is the difference between Ryzen 5 7640HS and Ryzen 7 8745HS?",
    "The Ryzen 5 7640HS is a 6-core 12-thread CPU built for everyday office, browsing and light multitasking with excellent power efficiency. The Ryzen 7 8745HS is an 8-core 16-thread CPU with a newer AMD architecture, recommended for heavier workloads such as multitasking-heavy office use, virtualization or light content creation.",
  ],
  [
    "Does this mini PC support a dedicated graphics card?",
    "The EXR1 uses AMD Radeon integrated graphics (760M / 780M) rather than a discrete GPU. It is designed for office, digital signage, POS, and general business computing rather than gaming or GPU-intensive workloads. If you need a discrete-GPU mini PC, contact us — we also offer platforms with dedicated graphics options.",
  ],
  [
    "Can I customize the logo and packaging?",
    "Yes. Weiboer supports product logo printing, custom boot logo, personalised packaging design and multi-language OS/keyboard configuration for OEM and ODM programs.",
  ],
  [
    "What is the minimum order quantity for the EXR1?",
    "Sample orders start at 1 unit. Bulk pricing starts from 100 units, with fast lead times for 500-3000 unit corporate and reseller projects.",
  ],
  [
    "How is quality controlled before shipment?",
    "Every EXR1 unit goes through Weiboer's 8-step process: incoming material inspection, mold verification, assembly, functional testing, aging test, visual QC, packaging and final shipment audit.",
  ],
];

export default function WBMC01Page() {
  const [active, setActive] = useState(0);
  const inquiryText = `Hello Weiboer, I would like a quotation for the ${productCode} AMD Ryzen mini PC.`;
  const inquiry = `${whatsapp}${encodeURIComponent(inquiryText)}`;
  return (
    <>
      <ProductStructuredData product={{ code: productCode, title, h1: title, description: "AMD Ryzen mini PC for OEM/ODM brands with Ryzen 5/Ryzen 7, DDR5, WiFi 6 and 2.5G LAN." }} category="mini-pcs" slug="wb-mc-01" />
      <main className="detailPage">
      <header className="detailHeader">
        <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav>
          <a href="/">Home</a>
          <a href="/mini-pcs">Products</a>
          <a href="/#about">OEM / ODM</a>
          <a href="/#factory">Factory</a>
        </nav>
        <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
      </header>

      <section className="productOverview" data-track-event="whatsapp-wb-mc-01">
        <div className="galleryWrap">
          <div className="mainProductImage">
            <img
              src={gallery[active].image}
              alt={`${productCode} AMD Ryzen mini PC view ${active + 1}`}
              width="1600"
              height="1600"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="thumbnailRow">
            {gallery.map((item, index) => (
              <button
                className={active === index ? "active" : ""}
                key={item.image}
                onClick={() => setActive(index)}
                aria-label={`Show product image ${index + 1}`}
              >
                <img src={item.thumb} alt="" width="260" height="260" loading="eager" decoding="async" />
              </button>
            ))}
          </div>
        </div>
        <div className="productSummaryPanel">
          <p className="detailEyebrow">WEIBOER / {productCode} · AMD RYZEN MINI PC PLATFORM</p>
          <h1>{title}</h1>
          <p className="detailLead">
            A compact AMD Ryzen mini PC for corporate deployment, digital signage, POS systems and private-label brands. Choose CPU, memory, storage and packaging — Weiboer handles the manufacturing.
          </p>
          <div className="detailHighlights">
            <span>AMD Ryzen 5 7640HS / Ryzen 7 8745HS</span>
            <span>DDR5 up to 64 GB</span>
            <span>Dual M.2 NVMe storage</span>
            <span>Wi-Fi 6 + 2.5G LAN</span>
          </div>
          <div className="detailFacts">
            <div><b>MOQ</b><strong>1 pc</strong></div>
            <div><b>LEAD TIME</b><strong>7-15 days</strong></div>
          </div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · Hardware configuration · OS language · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Compact hardware.<br /><span>Ready for your brand.</span></h2></section>
      <section className="detailImages">
        {details.map((image, index) => (
          <img
            src={image}
            alt={`${productCode} product detail ${index + 1}`}
            key={image}
            width="1400"
            height="1400"
            loading="lazy"
            decoding="async"
          />
        ))}
      </section>

      <section className="detailSpecs">
        <div className="specHead">
          <p>TECHNICAL SPECIFICATIONS · {productCode}</p>
          <h2>Configurations you can<br /><span>tune to any market.</span></h2>
        </div>
        <div className="specGrid">
          {specs.map(([label, value]) => (
            <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>
          ))}
        </div>
      </section>

      <section className="detailFaq">
        <div className="faqHead">
          <p>FAQ · EXR1 OEM / ODM</p>
          <h2>Buyer questions,<br /><span>answered before sampling.</span></h2>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <article className="faqItem" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detailBottomCta" data-track-event="whatsapp-wb-mc-01-cta">
        <p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p>
        <h2>Ready to launch your<br /><span>mini PC product line?</span></h2>
        <a href={inquiry} target="_blank" rel="noreferrer">Ask for {productCode} specifications on WhatsApp <b>↗</b></a>
      </section>
    </main>
    </>
  );
}
