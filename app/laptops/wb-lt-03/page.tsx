"use client";

import { useState } from "react";
import "../fd16/product-detail.css";
import "../product-spec.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const title = "15.6-inch Intel Core i9 Business Laptop — OEM / ODM Ready";
const productCode = "GX50";
const gallery = [
  { image: "/laptops/wb-lt-03/gallery/01-hero.webp", thumb: "/laptops/wb-lt-03/gallery/01-hero.webp" },
  { image: "/laptops/wb-lt-03/gallery/02-main.webp", thumb: "/laptops/wb-lt-03/gallery/02-main.webp" },
  { image: "/laptops/wb-lt-03/gallery/03-front-view.webp", thumb: "/laptops/wb-lt-03/gallery/03-front-view.webp" },
  { image: "/laptops/wb-lt-03/gallery/04-keyboard.webp", thumb: "/laptops/wb-lt-03/gallery/04-keyboard.webp" },
  { image: "/laptops/wb-lt-03/gallery/05-left-side.webp", thumb: "/laptops/wb-lt-03/gallery/05-left-side.webp" },
  { image: "/laptops/wb-lt-03/gallery/06-right-side.webp", thumb: "/laptops/wb-lt-03/gallery/06-right-side.webp" },
];
const details = [
  "/laptops/wb-lt-03/detail/01-process-flow.webp",
  "/laptops/wb-lt-03/detail/02-brand-service.webp",
  "/laptops/wb-lt-03/detail/03-oem-solutions.webp",
  "/laptops/wb-lt-03/detail/04-why-weiboer.webp",
  "/laptops/wb-lt-03/detail/05-spec-summary.webp",
  "/laptops/wb-lt-03/detail/06-i9-core.webp",
  "/laptops/wb-lt-03/detail/07-core-i9-hero.webp",
  "/laptops/wb-lt-03/detail/08-ips-display.webp",
  "/laptops/wb-lt-03/detail/09-core-h-series.webp",
  "/laptops/wb-lt-03/detail/10-gaming-graphics.webp",
];
const specs: Array<[string, string]> = [
  ["Display", "15.6\" IPS 1920 × 1080 anti-glare"],
  ["CPU", "Intel Core i9-11900H (8C/16T, up to 4.9 GHz) or i9-12900HK (14C/20T, up to 5.0 GHz)"],
  ["Graphics", "Intel UHD Graphics 630 (integrated)"],
  ["Operating System", "Windows 10 / Windows 11 / Linux"],
  ["Memory", "DDR4 8 GB / 16 GB / 32 GB / 64 GB"],
  ["Storage", "M.2 SSD 128 GB / 256 GB / 512 GB / 1 TB / 2 TB"],
  ["Wireless", "Intel dual-band Wi-Fi 5 (802.11ac 2.4G/5G) + Bluetooth 4.0"],
  ["Keyboard", "Backlit full-size keyboard with numeric keypad + fingerprint unlock"],
  ["Camera", "1.0 MP HD webcam"],
  ["Battery", "11.55 V / 5000 mAh Li-polymer"],
  ["I/O Ports", "RJ45, Type-C (full-function), USB 3.0, USB 2.0 ×2, HDMI, 3.5 mm audio"],
  ["Body", "Metal A cover"],
  ["Reference Model", "GX50 (internal engineering code)"],
  ["Net Weight", "≈ 1.3 kg"],
  ["Package Weight", "≈ 2.7 kg"],
  ["MOQ", "1 pc for samples · 100 pcs for bulk pricing"],
  ["Lead Time", "7-15 days depending on configuration"],
];
const faqs: Array<[string, string]> = [
  [
    "What is the difference between i9-11900H and i9-12900HK?",
    "The 11th-gen i9-11900H is an 8-core 16-thread Tiger Lake H CPU with strong single-thread performance and lower cost, ideal for corporate deployment. The 12th-gen i9-12900HK is a hybrid 14-core 20-thread Alder Lake H CPU that delivers noticeably higher multi-thread performance for content creation and virtualization.",
  ],
  [
    "Is the RJ45 Ethernet port suitable for enterprise networks?",
    "Yes. GX50 keeps a full-size RJ45 gigabit port so IT teams can rely on wired networking for offices, hospitality and public deployments without USB dongles.",
  ],
  [
    "Can you customize the fingerprint and keyboard layout?",
    "Yes. The capacitive fingerprint reader is standard, and we support multi-language keyboard printing (EN / ES / PT / DE / FR / AR / RU / TH etc.).",
  ],
  [
    "What is the minimum order quantity for the GX50?",
    "Sample orders start at 1 unit. Bulk pricing starts from 100 units; we regularly deliver 500-3000 unit batches for corporate rollouts and B2B resellers.",
  ],
  [
    "How is quality controlled before shipment?",
    "Every GX50 unit runs through Weiboer's 8-step process: incoming inspection, mold verification, assembly, functional test, aging test, visual QC, packaging and final shipment audit.",
  ],
];

export default function WBLT03Page() {
  const [active, setActive] = useState(0);
  const inquiryText = `Hello Weiboer, I would like a quotation for the ${productCode} Intel Core i9 business laptop.`;
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

      <section className="productOverview" data-track-event="whatsapp-wb-lt-03">
        <div className="galleryWrap">
          <div className="mainProductImage">
            <img
              src={gallery[active].image}
              alt={`${productCode} 15.6-inch Intel Core i9 business laptop view ${active + 1}`}
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
          <p className="detailEyebrow">WEIBOER / {productCode} · 15.6-INCH INTEL CORE I9 PLATFORM</p>
          <h1>{title}</h1>
          <p className="detailLead">
            A high-performance 15.6-inch Intel Core i9 laptop built for corporate procurement, project deployment and OEM brands that need reliable multi-thread horsepower. Custom logo, packaging, keyboard layout and configuration on request.
          </p>
          <div className="detailHighlights">
            <span>Intel Core i9-11900H / i9-12900HK</span>
            <span>DDR4 up to 64 GB</span>
            <span>SSD up to 2 TB</span>
            <span>RJ45 + Type-C</span>
          </div>
          <div className="detailFacts">
            <div><b>MOQ</b><strong>1 pc</strong></div>
            <div><b>LEAD TIME</b><strong>7-15 days</strong></div>
          </div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · CPU / memory / storage · Keyboard language · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Enterprise-class performance.<br /><span>Built for your brand.</span></h2></section>
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
          <h2>Configurations tuned for<br /><span>high-performance work.</span></h2>
        </div>
        <div className="specGrid">
          {specs.map(([label, value]) => (
            <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>
          ))}
        </div>
      </section>

      <section className="detailFaq">
        <div className="faqHead">
          <p>FAQ · GX50 OEM / ODM</p>
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

      <section className="detailBottomCta" data-track-event="whatsapp-wb-lt-03-cta">
        <p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p>
        <h2>Ready to build your<br /><span>Intel Core i9 laptop line?</span></h2>
        <a href={inquiry} target="_blank" rel="noreferrer">Ask for {productCode} specifications on WhatsApp <b>↗</b></a>
      </section>
    </main>
  );
}
