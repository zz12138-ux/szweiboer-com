"use client";

import { useState } from "react";
import "../laptops/laptops.css";
import "../laptops/nav.css";
import "../product-nav.css";
import "../laptops/product-grid.css";
import "../laptops/product-typography.css";
import "../laptops/logo.css";
import "../laptops/mobile.css";
import "../category-seo.css";
import CategorySeoContent from "../CategorySeoContent";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

const models = [
    {
    code: "EXR1",
    displayName: "AMD Ryzen Mini PC",
    title: "High-Performance AMD Ryzen Mini Desktop with DDR5, WiFi 6 and 2.5G LAN",
    main: "/mini-pcs/wb-mc-01/gallery/01-main.webp",
    tags: ["AMD Ryzen 5 7640HS / Ryzen 7 8745HS", "DDR5 up to 64GB", "WiFi 6 + 2.5G LAN", "Dual M.2 NVMe storage"],
    detail: "/mini-pcs/wb-mc-01",
  },
  {
    code: "N5",
    displayName: "Intel N-Series Mini PC",
    title: "Intel N95 / N100 / N150 Mini PC with DDR5, WiFi 6 and Dual LAN",
    main: "/mini-pcs/wb-mc-02/gallery/01-main.webp",
    tags: ["Intel N95 / N100 / N150", "12GB LPDDR5", "WiFi 6 + dual RJ45", "Triple-screen 4K output"],
    detail: "/mini-pcs/wb-mc-02",
  },
  {
    code: "N1",
    displayName: "Intel N150 Mini PC",
    title: "Compact Intel N150 Mini PC with DDR4, WiFi 6 and Dual HDMI",
    main: "/mini-pcs/wb-mc-03/gallery/01-main.webp",
    tags: ["Intel N150 4C/4T", "DDR4 up to 64GB", "WiFi 6 + dual HDMI", "M.2 up to 2TB"],
    detail: "/mini-pcs/wb-mc-03",
  },
  {
    code: "Mini Desktop",
    displayName: "RTX 5070 Mini Gaming PC",
    title: "Intel Core i5 / i7 / i9 Mini PC with RTX 4060 Ti / RTX 5070",
    main: "/mini-pcs/wb-mc-04/gallery/01-main.webp",
    tags: ["Core i5 / i7 / i9", "RTX 4060 Ti / RTX 5070", "DDR5 up to 64GB", "Dual LAN"],
    detail: "/mini-pcs/wb-mc-04",
  },
];

export default function MiniPcsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="laptopsPage">
      <header className={`laptopHeader${menuOpen ? " menuOpen" : ""}`}>
        <a href="/" className="laptopBrand" aria-label="Weiboer home" onClick={() => setMenuOpen(false)}>
          <img src="/weiboer-logo.png" alt="Weiboer" />
        </a>
        <button className="laptopMenuToggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="minipc-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
        </button>
        <nav id="minipc-navigation" className="laptopNav">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <div className="productMenu">
            <button className="productMenuTrigger" type="button">Products</button>
            <div className="productMenuList">
              <a href="/laptops" onClick={() => setMenuOpen(false)}>Laptops</a>
              <a href="/gaming-laptops" onClick={() => setMenuOpen(false)}>Gaming Laptops</a>
              <a href="/mini-pcs" onClick={() => setMenuOpen(false)}>Mini PCs</a>
              <a href="/tablets" onClick={() => setMenuOpen(false)}>Android Tablets</a>
              <a href="/projectors" onClick={() => setMenuOpen(false)}>Projectors</a>
              <a href="/portable-monitors" onClick={() => setMenuOpen(false)}>Portable Monitors</a>
              <a href="/phones" onClick={() => setMenuOpen(false)}>Phones</a>
              <a href="/all-in-one-pcs" onClick={() => setMenuOpen(false)}>All-in-One PCs</a>
              <a href="/blog" onClick={() => setMenuOpen(false)}>Buyer Guides</a>
            </div>
          </div>
          <a href="/#about" onClick={() => setMenuOpen(false)}>OEM / ODM</a>
          <a href="/#factory" onClick={() => setMenuOpen(false)}>Factory</a>
          <a className="laptopMobileQuote" href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a mini PC quotation.")}`} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a>
        </nav>
        <a href="/" className="backHome">← Back to home</a>
      </header>

      <section className="laptopHero">
        <p>MINI PCS / B2B PRODUCT CATALOG</p>
        <h1>Compact power.<br /><em>Built for your brand.</em></h1>
        <span>Low-MOQ AMD Ryzen mini PC platforms for distributors, retailers and private-label programs. All models support OEM / ODM customization.</span>
      </section>

      <section className="customBar">
        <b>LOW MOQ</b>
        <b>LOGO &amp; BOOT LOGO</b>
        <b>HARDWARE CONFIGURATION</b>
        <b>PACKAGING</b>
      </section>

      <section className="laptopCatalog">
        <div className="catalogHeading">
          <p>AVAILABLE MODELS</p>
          <h2>Choose your next<br /><span>mini PC platform.</span></h2>
          <span className="catalogIntro">Low-MOQ mini PC platforms for distributors, retailers and private-label brands. More configurations added regularly.</span>
        </div>
        <div className="laptopProductGrid">
          {models.map((model, index) => {
            const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${model.code}.`)}`;
            const detailUrl = model.detail;
            return (
              <article
                className={`modelCard${detailUrl ? " modelCardClickable" : ""}`}
                key={model.code}
                role={detailUrl ? "link" : undefined}
                tabIndex={detailUrl ? 0 : undefined}
                onClick={() => { if (detailUrl) window.location.href = detailUrl; }}
                onKeyDown={(event) => { if (detailUrl && (event.key === "Enter" || event.key === " ")) window.location.href = detailUrl; }}
              >
                <div className="modelImage">
                  <img src={model.main} alt={model.title} loading="lazy" decoding="async" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="modelInfo" data-track-scope="minipc-model">
                  <p className="modelCode">{model.code} · OEM / ODM READY</p>
                  <h2>{model.displayName}</h2>
                  <p className="productSummary">{model.tags.slice(0, 3).join(" · ")}. Built for custom branding and global B2B supply.</p>
                  {detailUrl && <a className="viewDetails" href={detailUrl} onClick={(event) => event.stopPropagation()}>View product details ↗</a>}
                  <div className="productFacts"><span><b>MOQ</b>1 pc</span><span><b>LEAD TIME</b>7 days</span></div>
                  <a className="modelWhatsApp" href={inquiry} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Quote This Product on WhatsApp <b>↗</b></a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CategorySeoContent category="mini-pcs" />
      <section className="catalogCta" data-track-scope="minipc-catalog">
        <p>CAN&apos;T FIND THE EXACT CONFIGURATION?</p>
        <h2>Tell us your target.<br /><span>We will match the platform.</span></h2>
        <a href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I need help choosing a mini PC platform.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a>
      </section>
    </main>
  );
}
