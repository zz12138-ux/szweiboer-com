"use client";

import { useState } from "react";
import "../fd16/product-detail.css";
import "../product-spec.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const title = "15.6-inch Intel Business Laptop — OEM / ODM Ready";
const productCode = "NUC GR180";
const gallery = [
  { image: "/laptops/wb-lt-02/gallery/01-hero.webp", thumb: "/laptops/wb-lt-02/gallery/01-hero.webp" },
  { image: "/laptops/wb-lt-02/gallery/02-main.webp", thumb: "/laptops/wb-lt-02/gallery/02-main.webp" },
  { image: "/laptops/wb-lt-02/gallery/03-front-view.webp", thumb: "/laptops/wb-lt-02/gallery/03-front-view.webp" },
  { image: "/laptops/wb-lt-02/gallery/04-keyboard.webp", thumb: "/laptops/wb-lt-02/gallery/04-keyboard.webp" },
  { image: "/laptops/wb-lt-02/gallery/05-left-side.webp", thumb: "/laptops/wb-lt-02/gallery/05-left-side.webp" },
  { image: "/laptops/wb-lt-02/gallery/06-right-side.webp", thumb: "/laptops/wb-lt-02/gallery/06-right-side.webp" },
];
const details = [
  "/laptops/wb-lt-02/detail/01-factory-ready.webp",
  "/laptops/wb-lt-02/detail/02-business-scenarios.webp",
  "/laptops/wb-lt-02/detail/03-slim-design.webp",
  "/laptops/wb-lt-02/detail/04-flexible-config.webp",
  "/laptops/wb-lt-02/detail/05-communication.webp",
  "/laptops/wb-lt-02/detail/06-mobility.webp",
  "/laptops/wb-lt-02/detail/07-why-weiboer.webp",
  "/laptops/wb-lt-02/detail/08-spec-summary.webp",
];
const specs: Array<[string, string]> = [
  ["Display", "15.6\" IPS 1920 × 1080 anti-glare"],
  ["CPU", "Intel Core i5-1235U / Core i7-13620H"],
  ["Graphics", "Intel UHD Graphics (integrated)"],
  ["Operating System", "Windows 10 / Windows 11 / Linux"],
  ["Memory", "DDR4 8 GB / 16 GB / 32 GB / 64 GB (2 SO-DIMM slots)"],
  ["Storage", "M.2 SSD 128 GB / 256 GB / 512 GB / 1 TB / 2 TB / 4 TB (2 slots)"],
  ["Wireless", "Wi-Fi 6 (Intel AX201 / AX210) + Bluetooth 5.3, dual antenna"],
  ["Keyboard", "Backlit full-size keyboard with numeric keypad"],
  ["Camera", "1.0 MP HD webcam"],
  ["Security", "Capacitive fingerprint unlock"],
  ["Battery", "11.4 V / 5000 mAh Li-polymer"],
  ["I/O Ports", "USB-C ×2, USB 3.2 ×3, USB 3.1 ×1, HDMI, RJ45, 3.5 mm audio"],
  ["Adapter", "19 V / 90 W"],
  ["Body", "Aluminum-alloy A cover, polycarbonate B/C/D"],
  ["Dimensions", "357.5 × 229.5 × 19.5 mm"],
  ["Weight", "≈ 1.6 kg (3.5 lbs)"],
  ["MOQ", "1 pc for samples · 100 pcs for bulk pricing"],
  ["Lead Time", "7-15 days depending on configuration"],
];
const faqs: Array<[string, string]> = [
  [
    "Can I add my own brand logo to the laptop body and boot screen?",
    "Yes. Weiboer offers factory-level branding including etched or printed body logo, custom boot logo, personalised BIOS strings, retail packaging design and manuals in your language.",
  ],
  [
    "What is the minimum order quantity for the NUC GR180?",
    "Sample orders start at 1 unit. Bulk pricing kicks in from 100 units, and we regularly ship batches of 500 - 3000 units for corporate deployment, e-commerce brands and system integrators.",
  ],
  [
    "Which CPU option should I choose?",
    "Core i5-1235U covers everyday office, remote-work and education workloads with excellent battery life. Core i7-13620H is recommended when clients need heavier multitasking, virtualization or light content creation.",
  ],
  [
    "Do you support custom keyboard layouts and languages?",
    "Yes. English, Spanish, Portuguese, French, German, Arabic, Russian, Thai and other layouts are supported. Send your target market and we will confirm feasibility.",
  ],
  [
    "How is quality controlled before shipment?",
    "Every NUC GR180 unit goes through Weiboer's 8-step process: incoming material inspection, mold verification, assembly, functional testing, aging test, visual QC, packaging and final shipment audit.",
  ],
];

export default function WBLT02Page() {
  const [active, setActive] = useState(0);
  const inquiryText = `Hello Weiboer, I would like a quotation for the ${productCode} 15.6-inch Intel business laptop.`;
  const inquiry = `${whatsapp}${encodeURIComponent(inquiryText)}`;
  return (
    <main className="detailPage">
      <header className="detailHeader">
        <a className="detailLogo" href="/"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav>
          <a href="/">Home</a>
          <a href="/laptops">Products</a>
          <a href="/#about">OEM / ODM</a>
          <a href="/#factory">Factory</a>
        </nav>
        <a className="detailQuote" href={inquiry} target="_blank" rel="noreferrer">Get a Quotation</a>
      </header>

      <section className="productOverview" data-track-event="whatsapp-wb-lt-02">
        <div className="galleryWrap">
          <div className="mainProductImage">
            <img
              src={gallery[active].image}
              alt={`${productCode} 15.6-inch Intel business laptop view ${active + 1}`}
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
          <p className="detailEyebrow">WEIBOER / {productCode} · 15.6-INCH INTEL BUSINESS PLATFORM</p>
          <h1>{title}</h1>
          <p className="detailLead">
            A fully customizable 15.6-inch Intel business laptop for global distributors, corporate buyers and private-label brands. Choose CPU, memory, storage, keyboard language and packaging — Weiboer handles the manufacturing.
          </p>
          <div className="detailHighlights">
            <span>Intel Core i5-1235U / i7-13620H</span>
            <span>DDR4 up to 64 GB</span>
            <span>Dual M.2 SSD up to 4 TB</span>
            <span>Wi-Fi 6 + BT 5.3</span>
          </div>
          <div className="detailFacts">
            <div><b>MOQ</b><strong>1 pc</strong></div>
            <div><b>LEAD TIME</b><strong>7-15 days</strong></div>
          </div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · Hardware configuration · Keyboard language · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Business-ready hardware.<br /><span>Ready for your brand.</span></h2></section>
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
          <p>FAQ · NUC GR180 OEM / ODM</p>
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

      <section className="detailBottomCta" data-track-event="whatsapp-wb-lt-02-cta">
        <p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p>
        <h2>Ready to launch your<br /><span>15.6-inch business laptop line?</span></h2>
        <a href={inquiry} target="_blank" rel="noreferrer">Ask for {productCode} specifications on WhatsApp <b>↗</b></a>
      </section>
    </main>
  );
}
