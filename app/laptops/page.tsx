"use client";

import { useState } from "react";
import "./laptops.css";
import "./nav.css";
import "./product-grid.css";
import "./product-typography.css";
import "./logo.css";
import "./mobile.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

const models = [
  {
    code: "WB-LT-01",
    displayName: "16-inch Dual-Screen Touch Laptop",
    title: "New 16 Inch Intel Core I5 12450H Two Screen Business Laptop Win11 Pro 1TB/2TB/4TB DDR4 Dual Screen Touch Laptop",
    main: "/laptop-model-01-main.webp",
    specs: "/laptop-model-01-specs.png",
    tone: "dualTone",
    tags: ["16-inch dual touch display", "Intel Core i5-12450H", "DDR4 up to 64GB", "Windows 11 Pro"],
  },
  {
    code: "WB-LT-02",
    displayName: "16-inch Intel Business Notebook",
    title: "New 16 Inch Intel Core I5 12450H Two Screen Business Laptop Win11 Pro 1TB/2TB/4TB DDR4 Dual Screen Touch Laptop",
    main: "/laptop-model-02-main.webp",
    specs: "/laptop-model-02-specs.png",
    tone: "nucTone",
    tags: ["Business notebook platform", "Intel configuration options", "Windows support", "OEM / ODM ready"],
  },
  {
    code: "WB-LT-03",
    displayName: "Intel Core i9 Business Laptop",
    title: "2026 Brand Custom Nuevo Intel Core I9 11th 12th Gen Generation 32GB 64GB Windows 11 RJ45 Gaming Business Laptop Office Computer",
    main: "/laptop-model-03-main.webp",
    specs: "/laptop-model-03-specs.png",
    tone: "directTone",
    tags: ["Intel Core i9 options", "RJ45 port", "Windows 11", "Custom logo available"],
  },
  {
    code: "WB-LT-04",
    displayName: "Colorful P16 Pro Gaming Laptop",
    title: "Colorful 16 Inch I7 I9 13th Gen RTX 5050 5070 5070Ti Brand New 64GB 2TB PCIE Gamer Notebook Gaming Laptop with Graphics Card",
    main: "/laptop-model-04-main.webp",
    specs: "/laptop-model-04-specs.png",
    tone: "gamingTone",
    tags: ["16-inch gaming laptop", "Intel i7 / i9 13th Gen", "RTX 5050 / 5070 / 5070 Ti", "Up to 64GB + 2TB PCIe"],
  },
];

export default function LaptopsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main className="laptopsPage">
    <header className={`laptopHeader${menuOpen ? " menuOpen" : ""}`}><a href="/" className="laptopBrand" aria-label="Weiboer home" onClick={() => setMenuOpen(false)}><img src="/weiboer-logo.png" alt="Weiboer" /></a><button className="laptopMenuToggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="laptop-navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button><nav id="laptop-navigation" className="laptopNav"><a href="/" onClick={() => setMenuOpen(false)}>Home</a><a className="active" href="/laptops" onClick={() => setMenuOpen(false)}>Products</a><a href="/#about" onClick={() => setMenuOpen(false)}>OEM / ODM</a><a href="/#factory" onClick={() => setMenuOpen(false)}>Factory</a><a className="laptopMobileQuote" href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a laptop quotation.")}`} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a></nav><a href="/" className="backHome">← Back to home</a></header>
    <section className="laptopHero"><p>LAPTOPS / B2B PRODUCT CATALOG</p><h1>Choose a platform.<br/><em>Make it your brand.</em></h1><span>Low-MOQ laptop solutions for distributors, retailers and private-label programs. All models support OEM / ODM customization.</span></section>
    <section className="customBar"><b>LOW MOQ</b><b>LOGO &amp; BOOT LOGO</b><b>HARDWARE CONFIGURATION</b><b>KEYBOARD &amp; PACKAGING</b></section>
    <section className="laptopCatalog"><div className="catalogHeading"><p>AVAILABLE MODELS</p><h2>Choose your next<br/><span>laptop platform.</span></h2><span className="catalogIntro">Low-MOQ laptop platforms for distributors, retailers and private-label brands. Add future models to this product wall without changing the layout.</span></div><div className="laptopProductGrid">{models.map((model, index) => { const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${model.code}.`)}`; const detailUrl = index === 0 ? "/laptops/fd16" : undefined; return <article className={`modelCard${detailUrl ? " modelCardClickable" : ""}`} key={model.code} role={detailUrl ? "link" : undefined} tabIndex={detailUrl ? 0 : undefined} onClick={() => { if (detailUrl) window.location.href = detailUrl; }} onKeyDown={(event) => { if (detailUrl && (event.key === "Enter" || event.key === " ")) window.location.href = detailUrl; }}>
      <div className="modelImage"><img src={model.main} alt={model.title} loading="lazy" decoding="async"/><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="modelInfo"><p className="modelCode">{model.code} · OEM / ODM READY</p><h2>{model.displayName}</h2><p className="productSummary">{model.tags.slice(0, 3).join(" · ")}. Built for custom branding and global B2B supply.</p>{detailUrl && <span className="viewDetails">View product details ↗</span>}<div className="productFacts"><span><b>MOQ</b>1 pc</span><span><b>LEAD TIME</b>7 days</span></div><a className="modelWhatsApp" href={inquiry} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Quote This Product on WhatsApp <b>↗</b></a></div>
    </article>; })}</div></section>
    <section className="catalogCta"><p>CAN&apos;T FIND THE EXACT CONFIGURATION?</p><h2>Tell us your target.<br/><span>We will match the platform.</span></h2><a href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I need help choosing a laptop platform.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a></section>
  </main>;
}
