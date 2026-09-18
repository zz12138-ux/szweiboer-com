"use client";

import { useState } from "react";
import "./laptops.css";
import "./nav.css";
import "../product-nav.css";
import "./product-grid.css";
import "./product-typography.css";
import "./logo.css";
import "./mobile.css";
import "../category-seo.css";
import CategorySeoContent from "../CategorySeoContent";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

const models = [
  {
    code: "NUC GR180",
    displayName: "15.6-inch Intel Business Laptop",
    title: "15.6 Inch Intel Core i5 / i7 Business Laptop with WiFi 6, Fingerprint and 64GB DDR4",
    main: "/laptops/wb-lt-02/gallery/01-hero.webp",
    specs: "/laptop-model-02-specs.png",
    tone: "nucTone",
    tags: ["15.6-inch business notebook", "Intel i5-1235U / i7-13620H", "Up to 64GB DDR4 & 4TB SSD", "Wi-Fi 6 + fingerprint"],
    detail: "/laptops/wb-lt-02",
  },
  {
    code: "GX50",
    displayName: "Intel Core i9 Business Laptop",
    title: "15.6 Inch Intel Core i9 Business Laptop with RJ45, 64GB DDR4 and Fingerprint Unlock",
    main: "/laptops/wb-lt-03/gallery/01-hero.webp",
    specs: "/laptop-model-03-specs.png",
    tone: "directTone",
    tags: ["15.6-inch Intel Core i9 platform", "i9-11900H / i9-12900HK", "RJ45 + Type-C", "Up to 64GB DDR4"],
    detail: "/laptops/wb-lt-03",
  },
  {
    code: "DS15",
    displayName: "15.6-inch Dual-Screen Touch Laptop",
    title: "15.6 Inch + 7 Inch Dual-Screen Laptop with Intel N100 / N150, RGB Keyboard and Fingerprint",
    main: "/laptops/wb-lt-04/gallery/01-main.webp",
    specs: "/laptop-model-04-specs.png",
    tone: "gamingTone",
    tags: ["15.6\" + 7\" touch dual screen", "Intel N100 / N150", "RGB backlit keyboard", "Pluggable 2MP camera"],
    detail: "/laptops/wb-lt-04",
  },
  {
    code: "FD16", displayName: "16-inch Dual-Screen i5 Laptop", title: "16-inch Dual-Screen Laptop OEM with Intel Core i5-12450H", main: "/laptops/wb-lt-09/gallery/01-main.webp", tone: "dualTone", tags: ["Dual 16-inch touch displays", "Intel Core i5-12450H", "DDR4 up to 64GB"], detail: "/laptops/dual-screen/wb-lt-09",
  },
  {
    code: "DS16", displayName: "16-inch + 14-inch Dual-Screen Laptop", title: "16-inch + 14-inch Dual-Screen Laptop OEM / ODM Platform", main: "/laptops/wb-lt-10/gallery/01-main.webp", tone: "dualTone", tags: ["16-inch + 14-inch display platform", "IPS touchscreen", "OEM / ODM ready"], detail: "/laptops/dual-screen/wb-lt-10",
  },
  {
    code: "FD14", displayName: "14.1-inch Dual-Screen Touch Laptop", title: "14.1-inch Dual-Screen Touch Laptop OEM with Intel N100 and 2K IPS Displays", main: "/laptops/fd14/gallery/01-main.jpg", tone: "dualTone", tags: ["Dual 14.1-inch 2K touch displays", "Intel Alder Lake-N N100", "360° Yoga hinge"], detail: "/laptops/dual-screen/fd14",
  },
  {
    code: "YG11", displayName: "11.6-inch Folding Touch Laptop", title: "11.6-inch Folding Touch Laptop OEM with Intel Celeron N4020", main: "/laptops/yg11/gallery/01-product.jpg", tone: "directTone", tags: ["11.6-inch touch display", "Intel Celeron N4020", "Compact Yoga platform"], detail: "/laptops/yg11",
  },
  {
    code: "N16", displayName: "16-inch Intel N5095 Business Laptop", title: "16-inch Intel N5095 Business Laptop OEM with 12GB RAM", main: "/laptops/n16/gallery/01-product.jpg", tone: "nucTone", tags: ["16-inch IPS display", "Intel Celeron N5095", "Backlit keyboard"], detail: "/laptops/n16",
  },
];

export default function LaptopsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="laptopsPage">
    <header className={`laptopHeader${menuOpen ? " menuOpen" : ""}`}><a href="/" className="laptopBrand" aria-label="Weiboer home" onClick={() => setMenuOpen(false)}><img src="/weiboer-logo.png" alt="Weiboer" /></a><button className="laptopMenuToggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="laptop-navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button><nav id="laptop-navigation" className="laptopNav"><a href="/" onClick={() => setMenuOpen(false)}>Home</a><div className="productMenu"><button className="productMenuTrigger" type="button">Products</button><div className="productMenuList"><a href="/laptops" onClick={() => setMenuOpen(false)}>Laptops</a><a href="/gaming-laptops" onClick={() => setMenuOpen(false)}>Gaming Laptops</a><a href="/mini-pcs" onClick={() => setMenuOpen(false)}>Mini PCs</a><a href="/tablets" onClick={() => setMenuOpen(false)}>Android Tablets</a><a href="/projectors" onClick={() => setMenuOpen(false)}>Projectors</a><a href="/portable-monitors" onClick={() => setMenuOpen(false)}>Portable Monitors</a><a href="/phones" onClick={() => setMenuOpen(false)}>Phones</a><a href="/all-in-one-pcs" onClick={() => setMenuOpen(false)}>All-in-One PCs</a><a href="/blog" onClick={() => setMenuOpen(false)}>Buyer Guides</a></div></div><a href="/#about" onClick={() => setMenuOpen(false)}>OEM / ODM</a><a href="/#factory" onClick={() => setMenuOpen(false)}>Factory</a><a className="laptopMobileQuote" href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a laptop quotation.")}`} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a></nav><a href="/" className="backHome">← Back to home</a></header>
    <section className="laptopHero"><p>LAPTOPS / B2B PRODUCT CATALOG</p><h1>Choose a platform.<br/><em>Make it your brand.</em></h1><span>Low-MOQ laptop solutions for distributors, retailers and private-label programs. All models support OEM / ODM customization.</span></section>
    <section className="customBar"><b>LOW MOQ</b><b>LOGO &amp; BOOT LOGO</b><b>HARDWARE CONFIGURATION</b><b>KEYBOARD &amp; PACKAGING</b></section>
    <section className="laptopCatalog"><div className="catalogHeading"><p>AVAILABLE MODELS</p><h2>Choose your next<br/><span>laptop platform.</span></h2><span className="catalogIntro">Low-MOQ laptop platforms for distributors, retailers and private-label brands. Add future models to this product wall without changing the layout.</span></div>      <div className="laptopProductGrid">{models.map((model, index) => { const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${model.code}.`)}`; const detailUrl = model.detail; return <article className={`modelCard${detailUrl ? " modelCardClickable" : ""}`} key={model.code} role={detailUrl ? "link" : undefined} tabIndex={detailUrl ? 0 : undefined} onClick={() => { if (detailUrl) window.location.href = detailUrl; }} onKeyDown={(event) => { if (detailUrl && (event.key === "Enter" || event.key === " ")) window.location.href = detailUrl; }}>
      <div className="modelImage"><img src={model.main} alt={model.title} loading="lazy" decoding="async"/><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="modelInfo" data-track-scope="laptops-model"><p className="modelCode">{model.code} · OEM / ODM READY</p><h2>{model.displayName}</h2><p className="productSummary">{model.tags.slice(0, 3).join(" · ")}. Built for custom branding and global B2B supply.</p>{detailUrl && <a className="viewDetails" href={detailUrl} onClick={(event) => event.stopPropagation()}>View product details ↗</a>}<div className="productFacts"><span><b>MOQ</b>1 pc</span><span><b>LEAD TIME</b>7 days</span></div><a className="modelWhatsApp" href={inquiry} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Quote This Product on WhatsApp <b>↗</b></a></div>
    </article>; })}</div></section>
    <CategorySeoContent category="laptops" />
    <section className="catalogCta" data-track-scope="laptops-catalog"><p>CAN&apos;T FIND THE EXACT CONFIGURATION?</p><h2>Tell us your target.<br/><span>We will match the platform.</span></h2><a href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I need help choosing a laptop platform.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a></section>
  </main>;
}
