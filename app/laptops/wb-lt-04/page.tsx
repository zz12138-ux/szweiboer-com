"use client";

import { useState } from "react";
import "../fd16/product-detail.css";
import "../product-spec.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const title = "15.6-inch Dual-Screen Touch Laptop — OEM / ODM Ready";
const productCode = "DS15";
const gallery = [
  { image: "/laptops/wb-lt-04/gallery/01-main.webp", thumb: "/laptops/wb-lt-04/gallery/01-main.webp" },
  { image: "/laptops/wb-lt-04/gallery/02-front-view.webp", thumb: "/laptops/wb-lt-04/gallery/02-front-view.webp" },
  { image: "/laptops/wb-lt-04/gallery/03-keyboard.webp", thumb: "/laptops/wb-lt-04/gallery/03-keyboard.webp" },
  { image: "/laptops/wb-lt-04/gallery/04-left-side.webp", thumb: "/laptops/wb-lt-04/gallery/04-left-side.webp" },
  { image: "/laptops/wb-lt-04/gallery/05-right-side.webp", thumb: "/laptops/wb-lt-04/gallery/05-right-side.webp" },
  { image: "/laptops/wb-lt-04/gallery/06-back.webp", thumb: "/laptops/wb-lt-04/gallery/06-back.webp" },
];
const details = [
  "/laptops/wb-lt-04/detail/01-process-flow.webp",
  "/laptops/wb-lt-04/detail/02-brand-service.webp",
  "/laptops/wb-lt-04/detail/03-why-weiboer.webp",
  "/laptops/wb-lt-04/detail/04-oem-solutions.webp",
  "/laptops/wb-lt-04/detail/05-spec-summary.webp",
  "/laptops/wb-lt-04/detail/06-dual-screen.webp",
  "/laptops/wb-lt-04/detail/07-config-specs.webp",
  "/laptops/wb-lt-04/detail/08-memory-storage.webp",
  "/laptops/wb-lt-04/detail/09-interfaces.webp",
  "/laptops/wb-lt-04/detail/10-n150-cpu.webp",
];
const specs: Array<[string, string]> = [
  ["Display", "15.6\" IPS 1920 × 1080 main + 7\" touch secondary (1200 × 1080, 10-point touch)"],
  ["CPU", "Intel Alder Lake-N N100 (2.0-3.4 GHz) or Twin Lake N150 (2.0-3.6 GHz), 4C/4T"],
  ["Graphics", "Intel UHD Graphics (integrated)"],
  ["Operating System", "Windows 10 / Windows 11"],
  ["Memory", "DDR4 8 GB / 12 GB / 16 GB / 32 GB"],
  ["Storage", "M.2 2280 SSD 128 GB / 256 GB / 512 GB / 1 TB / 2 TB"],
  ["Wireless", "Wi-Fi 5 (802.11ac dual-band 2.4G / 5G) + Bluetooth 4.2"],
  ["Keyboard", "RGB backlit full-size keyboard with numeric keypad"],
  ["Camera", "Pluggable magnetic 2 MP webcam (privacy design)"],
  ["Security", "Capacitive fingerprint unlock (0.5 s)"],
  ["Special Feature", "180° open & close · dual-screen productivity · fingerprint unlock"],
  ["Battery", "7.4 V / 5000 mAh Li-polymer"],
  ["Adapter", "12 V / 2.5 A · 100 - 240 V AC"],
  ["I/O Ports", "USB 3.0 ×2, Type-C, Mini-HDMI, TF card reader, 3.5 mm audio, DC-in"],
  ["Body", "Metal A cover, polycarbonate B/C/D"],
  ["Reference Model", "DS15 (internal engineering code)"],
  ["Dimensions", "335 × 218 × 17 mm"],
  ["Weight", "1.7 kg (net) · packaging 470 × 285 × 65 mm"],
  ["MOQ", "1 pc for samples · 100 pcs for bulk pricing"],
  ["Lead Time", "7-15 days depending on configuration"],
];
const faqs: Array<[string, string]> = [
  [
    "What is the difference between the Intel N100 and N150 options?",
    "Both CPUs are 4-core 4-thread Intel Alder Lake-N / Twin Lake chips designed for low-power business notebooks. N100 is the 2023 model with a 3.4 GHz turbo; N150 is the 2025 refresh with a 3.6 GHz turbo and slightly better efficiency. Both share the same platform and can be interchanged in the DS15 during production planning.",
  ],
  [
    "How can the 7-inch second screen be used?",
    "The 7\" touch panel behaves as an extended Windows display. Buyers commonly use it for chat windows, dashboards, meeting notes, handwritten input, live-streaming controls or education scenarios.",
  ],
  [
    "Is the RGB keyboard configurable for branding?",
    "Yes. The RGB backlight is programmable, and Weiboer supports custom keyboard printing, boot logos and BIOS strings so the laptop can ship with your brand from day one.",
  ],
  [
    "What is the minimum order quantity for DS15?",
    "Samples start at 1 unit. Bulk pricing kicks in from 100 units, with fast lead times for 500-3000 unit projects.",
  ],
  [
    "How is quality controlled before shipment?",
    "Every DS15 unit runs through Weiboer's 8-step process: incoming inspection, mold verification, assembly, functional test, aging test, visual QC, packaging and final shipment audit.",
  ],
];

export default function WBLT04Page() {
  const [active, setActive] = useState(0);
  const inquiryText = `Hello Weiboer, I would like a quotation for the ${productCode} 15.6-inch dual-screen laptop (Intel N100 / N150).`;
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

      <section className="productOverview" data-track-event="whatsapp-wb-lt-04">
        <div className="galleryWrap">
          <div className="mainProductImage">
            <img
              src={gallery[active].image}
              alt={`${productCode} 15.6-inch dual-screen touch laptop view ${active + 1}`}
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
          <p className="detailEyebrow">WEIBOER / {productCode} · DUAL-SCREEN INTEL N-SERIES PLATFORM</p>
          <h1>{title}</h1>
          <p className="detailLead">
            A 15.6" + 7" dual-screen touch laptop for private-label brands, e-commerce operators and productivity buyers. Two displays, RGB keyboard, fingerprint and a pluggable webcam make it distinctive on the retail shelf.
          </p>
          <div className="detailHighlights">
            <span>Intel N100 / N150</span>
            <span>DDR4 up to 32 GB</span>
            <span>SSD up to 2 TB</span>
            <span>15.6\" + 7\" touch</span>
            <span>RGB backlit keyboard</span>
          </div>
          <div className="detailFacts">
            <div><b>MOQ</b><strong>1 pc</strong></div>
            <div><b>LEAD TIME</b><strong>7-15 days</strong></div>
          </div>
          <a className="detailWhatsapp" href={inquiry} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
          <p className="customizationNote">Product logo · Boot logo · Hardware configuration · Keyboard language · Retail packaging</p>
        </div>
      </section>

      <section className="detailIntro"><p>PRODUCT DETAILS</p><h2>Two screens, one workflow.<br /><span>Ready for your brand.</span></h2></section>
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
          <h2>A configurable dual-screen<br /><span>platform for global buyers.</span></h2>
        </div>
        <div className="specGrid">
          {specs.map(([label, value]) => (
            <dl key={label}><dt>{label}</dt><dd>{value}</dd></dl>
          ))}
        </div>
      </section>

      <section className="detailFaq">
        <div className="faqHead">
          <p>FAQ · DS15 OEM / ODM</p>
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

      <section className="detailBottomCta" data-track-event="whatsapp-wb-lt-04-cta">
        <p>LOW MOQ · OEM / ODM · FACTORY DIRECT</p>
        <h2>Ready to launch your<br /><span>dual-screen laptop line?</span></h2>
        <a href={inquiry} target="_blank" rel="noreferrer">Ask for {productCode} specifications on WhatsApp <b>↗</b></a>
      </section>
    </main>
  );
}
