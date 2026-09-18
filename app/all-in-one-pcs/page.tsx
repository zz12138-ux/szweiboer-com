"use client";

import "../laptops/laptops.css";
import "../laptops/nav.css";
import "../product-nav.css";
import "../laptops/product-grid.css";
import "../laptops/product-typography.css";
import "../laptops/logo.css";
import "../laptops/mobile.css";
import "../category-seo.css";
import CategorySeoContent from "../CategorySeoContent";
import { aioProducts, publishedAioSlugs } from "./aio-data";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const models = publishedAioSlugs.map((slug) => ({ slug, ...aioProducts[slug], main: `/all-in-one-pcs/${slug}/gallery/01-gallery.webp` }));

export default function AllInOnePcsPage() {
  return <main className="laptopsPage">
    <header className="laptopHeader"><a href="/" className="laptopBrand" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a><nav className="laptopNav"><a href="/">Home</a><div className="productMenu"><button className="productMenuTrigger" type="button">Products</button><div className="productMenuList"><a href="/laptops/">Laptops</a><a href="/phones/">Phones</a><a href="/all-in-one-pcs/">All-in-One PCs</a><a href="/gaming-laptops/">Gaming Laptops</a><a href="/mini-pcs/">Mini PCs</a><a href="/tablets/">Android Tablets</a><a href="/projectors/">Projectors</a><a href="/portable-monitors/">Portable Monitors</a><a href="/blog/">Buyer Guides</a></div></div><a href="/#about">OEM / ODM</a><a href="/#factory">Factory</a></nav><a href="/" className="backHome">← Back to home</a></header>
    <section className="laptopHero"><p>ALL-IN-ONE PCS / B2B PRODUCT CATALOG</p><h1>Choose a platform.<br/><em>Make it your brand.</em></h1><span>Low-MOQ all-in-one PC platforms for office, business, retail and private-label programs. Confirm the display, processor, memory, storage and chassis configuration on the approved sample.</span></section>
    <section className="customBar"><b>LOW MOQ</b><b>INTEL CONFIGURATION</b><b>LOGO &amp; PACKAGING</b><b>DISPLAY OPTIONS</b></section>
    <section className="laptopCatalog"><div className="catalogHeading"><p>AVAILABLE MODELS</p><h2>Choose your next<br/><span>desktop platform.</span></h2><span className="catalogIntro">Five all-in-one PC platforms extracted from supplier listings, with gallery images and product details prepared for B2B sampling.</span></div><div className="laptopProductGrid">{models.map((model, index) => { const inquiry = `${whatsapp}${encodeURIComponent(`Hello Weiboer, I would like a quotation for ${model.code}.`)}`; return <article className="modelCard modelCardClickable" key={model.slug} role="link" tabIndex={0} onClick={() => { window.location.href = `/all-in-one-pcs/${model.slug}/`; }} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") window.location.href = `/all-in-one-pcs/${model.slug}/`; }}><div className="modelImage"><img src={model.main} alt={model.title} loading="lazy" decoding="async"/><span>{String(index + 1).padStart(2, "0")}</span></div><div className="modelInfo" data-track-scope="aio-model"><p className="modelCode">{model.code} · OEM / ODM READY</p><h2>{model.eyebrow}</h2><p className="productSummary">{model.highlights.slice(0, 3).join(" · ")}. Built for custom branding and global B2B supply.</p><a className="viewDetails" href={`/all-in-one-pcs/${model.slug}/`} onClick={(event) => event.stopPropagation()}>View product details ↗</a><div className="productFacts"><span><b>MOQ</b>{model.moq}</span><span><b>MODEL</b>{model.code}</span></div><a className="modelWhatsApp" href={inquiry} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Quote This Product on WhatsApp <b>↗</b></a></div></article>; })}</div></section>
    <CategorySeoContent category="all-in-one-pcs" />
    <section className="catalogCta" data-track-scope="aio-catalog"><p>CAN&apos;T FIND THE EXACT CONFIGURATION?</p><h2>Tell us your target.<br/><span>We will match the platform.</span></h2><a href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I need help choosing an all-in-one PC platform.")}`} target="_blank" rel="noreferrer">Chat on WhatsApp <b>↗</b></a></section>
  </main>;
}
