"use client";

import { FormEvent, useState } from "react";
import "./product-section.css";
import "./oem-section.css";
import "./navigation.css";
import "./hero-scale.css";
import "./premium-type.css";
import "./factory-showcase.css";
import "./quality-delivery.css";
import "./section-rhythm.css";
import "./process-section.css";
import "./quote-section.css";
import "./brand-logo.css";
import "./white-shell.css";
import "./faq-section.css";
import "./mobile-adaptation.css";
import "./footer-v99.css";
import "./quality-assurance-v103.css";
import "./exhibition-section.css";
import "./production-line-section.css";
import "./hero-video-v136.css";
import "./factory-tour-v137.css";
import "./headline-spacing-v142.css";
import "./hero-copy-v145.css";
import SpecTable from "./components/SpecTable";

const whatsapp = "https://wa.me/8613556351212?text=Hello%20Weiboer%2C%20I%20would%20like%20a%20quotation.";

const products = [
  { number: "01", name: "Laptops", title: "Fully customizable laptop solutions", text: "Logo, CPU, memory, storage, keyboard layout, ports, OS and packaging.", image: "/category-laptop-v94.webp", visual: "seriesProduct", link: "/laptops" },
  { number: "02", name: "Android Tablets", title: "Flexible tablets for your market", text: "Display, memory, connectivity, software, color and private-label packaging.", image: "/category-tablet-v94.webp", visual: "seriesProduct tabletSeries", link: "#quote" },
  { number: "03", name: "LED Projectors", title: "Projectors made to your brief", text: "Brightness, interfaces, system, accessories, logo and retail-ready packaging.", image: "/category-projector-v94.webp", visual: "seriesProduct projectorSeries", link: "#quote" },
  { number: "04", name: "Portable Monitors", title: "Built for flexible workspaces", text: "Screen options, ports, custom logo and retail-ready packaging for your project.", image: "/category-portable-monitor-v94.webp", visual: "seriesProduct monitorSeries", link: "#quote" },
  { number: "05", name: "Gaming Laptops", title: "Performance platforms for gaming brands", text: "CPU, dedicated graphics, cooling, display, memory, storage, keyboard and private-label packaging.", image: "/category-gaming-laptop-v94.webp", visual: "seriesProduct gamingSeries", link: "#quote" },
  { number: "06", name: "Mini PCs", title: "Compact computing for every market", text: "Processor, memory, storage, connectivity, enclosure color, logo and retail-ready packaging.", image: "/category-mini-pc-v94.webp", visual: "seriesProduct miniPcSeries", link: "#quote" },
];

const faqs = [
  {
    number: "01",
    label: "ORDER",
    question: "What is your minimum order quantity?",
    answer: "We support low-MOQ projects and sample orders. Final quantity depends on the product platform and the level of customization required.",
  },
  {
    number: "02",
    label: "CUSTOMIZATION",
    question: "Do you support OEM and ODM projects?",
    answer: "Yes. Weiboer supports OEM and ODM programs for global distributors, retailers, e-commerce brands, project buyers and private-label partners.",
  },
  {
    number: "03",
    label: "BRANDING",
    question: "Can you customize logo, packaging and specifications?",
    answer: "Yes. Available options include product logo, boot logo, packaging, processor, memory, storage, display, ports, keyboard language, operating system and accessories.",
  },
  {
    number: "04",
    label: "LEAD TIME",
    question: "How long does sampling and production take?",
    answer: "Standard projects can be prepared quickly, with selected models supporting a seven-day lead time. The final schedule depends on quantity and customization scope.",
  },
  {
    number: "05",
    label: "SAMPLE",
    question: "Can I order a sample before a bulk order?",
    answer: "Yes. A sample can be arranged for product evaluation and specification confirmation before mass production.",
  },
  {
    number: "06",
    label: "PRODUCTS",
    question: "Which electronics can Weiboer supply?",
    answer: "Our main categories include laptops, Android tablets, LED projectors and portable monitors, with flexible configurations for different markets.",
  },
  {
    number: "07",
    label: "QUOTATION",
    question: "What information should I send for an accurate quotation?",
    answer: "Please share the product category, target specifications, estimated quantity, destination market, branding requirements and any reference images or documents.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [factoryVideoActive, setFactoryVideoActive] = useState(false);
  const submitEmailQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Weiboer quotation request - ${data.get("company") || "New buyer"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Product: ${data.get("product") || ""}`,
      `Estimated quantity: ${data.get("quantity") || ""}`,
      "",
      "Project requirements:",
      `${data.get("requirements") || ""}`,
    ].join("\n");
    window.location.href = `mailto:l474419569@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <main className="homeMain">
    <header className={`header${menuOpen ? " menuOpen" : ""}`}>
      <a className="brand heroBrand brandLogoWrap" href="#top" aria-label="Weiboer home" onClick={() => setMenuOpen(false)}><img className="siteLogo siteLogoHeader" src="/weiboer-logo.png" alt="Weiboer" /></a>
      <button className="mobileMenuToggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="home-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav id="home-navigation"><a href="/" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a><a href="#about" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="/laptops" onClick={() => setMenuOpen(false)}>Products</a><a href="#factory" onClick={() => setMenuOpen(false)}>Factory</a><a href="#quality" onClick={() => setMenuOpen(false)}>Quality</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#quote" onClick={() => setMenuOpen(false)}>Contact Us</a><a className="mobileNavQuote" href="#email-quote" onClick={() => setMenuOpen(false)}>Get a Quotation <b>↗</b></a></nav>
      <a className="headerQuote" href="#email-quote">Get a Quotation</a>
    </header>

    <section id="top" className="hero heroVideoHero">
      <div className="heroPhoto heroVideoMedia" aria-label="Weiboer factory and electronics production">
        <video className="heroVideo" autoPlay muted loop playsInline preload="metadata" poster="/weiboer-hero-video-poster-v136.webp" aria-hidden="true" tabIndex={-1}>
          <source src="/weiboer-hero-video-v136.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="heroPanel">
        <p className="eyebrow">WEIBOER · SHENZHEN, CHINA</p>
        <h1 className="heroTitleV145">Low-MOQ OEM/ODM<br />Consumer Electronics<br /><span>Built for Your Brand.</span></h1>
        <p className="heroLead">Weiboer is a trusted electronics manufacturing partner delivering reliable quality, flexible solutions, and on-time delivery to help your business grow.</p>
        <div className="heroActions"><a href="#email-quote" className="primary">Get factory quotation <b>↗</b></a><a href={whatsapp} target="_blank" rel="noreferrer" className="whatsapp">Chat on WhatsApp <b>↗</b></a></div>
        <div className="heroStats" aria-label="Weiboer capabilities"><div><strong>15+</strong><span>Years manufacturing experience</span></div><div><strong>20,000+ m²</strong><span>Modern production base</span></div><div><strong>500+</strong><span>Skilled employees</span></div><div><strong>ISO 9001</strong><span>Quality management certified</span></div></div>
      </div>
    </section>

    <section className="factoryTourV137" aria-labelledby="factory-tour-title">
      <div className="factoryTourShade" aria-hidden="true" />
      <div className="factoryTourInner">
        <div className="factoryTourCopy">
          <p className="factoryTourKicker">FACTORY-BACKED TRADING PARTNER · SHENZHEN, CHINA</p>
          <h2 id="factory-tour-title">Direct from our factory.<br /><span>Built for your brand.</span></h2>
          <p className="factoryTourLead">Weiboer combines manufacturing capability with export-trade experience, giving global buyers one reliable partner from product selection to final delivery. With our own factory and flexible production lines, we accept extremely low minimum order quantities and support growing brands, distributors, retailers and project buyers.</p>
          <p className="factoryTourDetail">Choose the platform and specifications that fit your market. We can customize product logos, boot screens, hardware configurations, operating systems, keyboard languages, accessories, manuals and retail packaging—then manage quality inspection, production, packing and export shipment for you.</p>
          <div className="factoryTourServices" aria-label="Weiboer customization services">
            <span>OEM / ODM development</span><span>Low-MOQ orders</span><span>Logo &amp; packaging</span><span>Hardware configuration</span>
          </div>
          <div className="factoryTourActions">
            <button type="button" onClick={() => setFactoryVideoActive(true)}>▶ Watch factory tour</button>
            <a href={whatsapp} target="_blank" rel="noreferrer">Discuss your project <b>↗</b></a>
          </div>
        </div>
        <div className={`factoryTourVideo${factoryVideoActive ? " isPlaying" : ""}`}>
          {factoryVideoActive ? (
            <video controls autoPlay playsInline preload="none" poster="/factory-tour-poster-v137.webp">
              <source src="/factory-tour-v137.mp4" type="video/mp4" />
            </video>
          ) : (
            <button className="factoryTourPoster" type="button" onClick={() => setFactoryVideoActive(true)} aria-label="Play the Weiboer factory tour video">
              <img src="/factory-tour-poster-v137.webp" alt="Preview of the Weiboer factory tour" width="960" height="540" loading="lazy" decoding="async" />
              <span className="factoryTourPlay" aria-hidden="true">▶</span>
              <strong>WATCH OUR FACTORY TOUR</strong>
            </button>
          )}
          <span className="factoryTourLocation">● SHENZHEN, CHINA · OUR FACTORY</span>
        </div>
      </div>
    </section>

    <section id="products" className="products">
      <div className="sectionHead"><div><p className="eyebrow ink">PRODUCT CATEGORIES</p><h2>Start with a platform.<br /><span>Make it your own.</span></h2></div><a href="#quote" className="textLink">Need a custom shortlist <b>↗</b></a></div>
      <div className="productGrid">{products.map(p => <article className="productCard" key={p.name}><div className={`productImage ${p.visual}`}><img src={p.image} alt={p.name} width="1000" height="1000" loading="lazy" decoding="async" /></div><div className="productInfo"><p>{p.number} / PRODUCT CATEGORY</p><h3>{p.name}</h3><h4>{p.title}</h4><span>{p.text}</span><em>OEM / ODM customization available</em><a href={p.link}>{p.link === "/laptops" ? "Explore laptops" : "Request specifications"} <b>↗</b></a></div></article>)}</div>
      <SpecTable />
    </section>

    <section id="about" className="factory factoryShowcase" aria-label="About Weiboer and factory capabilities">
      <span id="factory" className="factoryAnchor" aria-hidden="true" />
      <div className="factoryArtwork">
        <img src="/weiboer-about-production-v115.webp" width="1610" height="874" alt="Weiboer production line and assembly capabilities, including skilled staff, standardized workflow, scalable production and stable output" loading="lazy" decoding="async" />
      </div>
      <div className="factoryCtaRow"><p>Discuss your OEM / ODM production plan with Weiboer.</p><a className="factoryWhatsAppButton" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Weiboer on WhatsApp about production and assembly">Chat on WhatsApp <b>↗</b></a></div>
    </section>

    <section id="quality" className="qualityAssuranceV103" aria-label="Weiboer quality assurance and certifications">
      <div className="qualityAssuranceArtwork">
        <div className="qualityAssuranceGallery" aria-label="Weiboer manufacturing and quality facilities">
          <img className="qualityAssuranceFullCollage" src="/weiboer-quality-factory-collage-v121.webp" width="1909" height="2048" alt="Weiboer laptop testing, showroom, warehouse, production and assembly facilities" loading="lazy" decoding="async" />
        </div>
        <div className="qualityAssuranceCopy">
          <p className="qualityKicker">WEIBOER QUALITY SYSTEM</p>
          <h2>Quality<br />assurance.</h2>
          <h3>Every unit tested before shipment.</h3>
          <p>From incoming materials to final inspection, every Weiboer product follows a controlled quality process.</p>
          <div className="qualityCerts" aria-label="Compliance support"><span>ISO 9001</span><span>CE</span><span>FCC</span><span>RoHS</span><span>UKCA</span><span>REACH</span><span>ERP</span><span>EN 62368-1</span></div>
          <p className="qualityComplianceNote">Market-specific compliance documentation can be prepared for your project.</p>
          <a className="qualityAssuranceWhatsApp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Weiboer on WhatsApp about quality assurance">Chat on WhatsApp <b>↗</b></a>
        </div>
      </div>
    </section>

    <section className="qualityDelivery">
      <div className="qualityDeliveryArtwork">
        <img src="/quality-delivery-process-v133.webp" alt="Weiboer quality and delivery process from incoming material inspection through production, testing, packaging and shipment" loading="lazy" decoding="async" />
        <a className="qualityWhatsAppHit" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Weiboer on WhatsApp about quality control"><span>Chat on WhatsApp</span></a>
        <div className="qualitySrOnly"><h2>Every unit. Checked at every stage.</h2><ol><li>Incoming inspection</li><li>Mold manufacturing</li><li>Product assembly</li><li>Product testing</li><li>Aging test</li><li>Visual inspection</li><li>Product packaging</li><li>Confirm shipment</li></ol><p>100% quality-control checks. ISO 9001. OEM and ODM supported. Seven-day lead time.</p></div>
      </div>
    </section>

    <section className="exhibitionSection" aria-label="Weiboer global exhibitions and international partners">
      <div className="exhibitionArtwork">
        <img src="/weiboer-global-exhibitions-v113.webp" width="1536" height="1024" alt="Weiboer Global Presence: exhibition booths, international buyers, product demonstrations and global partners" loading="lazy" decoding="async" />
        <a className="exhibitionMeetingHit" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Plan a meeting with Weiboer on WhatsApp"><span>Plan a meeting</span></a>
        <a className="exhibitionWhatsAppHit" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Talk to the Weiboer team on WhatsApp"><span>Talk to our team</span></a>
      </div>
    </section>

    <section id="quote" className="quote quoteArtworkSection" aria-label="Contact Weiboer for an OEM or ODM quotation">
      <div className="emailQuote" id="email-quote">
        <div className="emailQuoteIntro">
          <p className="eyebrow ink">EMAIL QUOTATION</p>
          <h2>Tell us what you need.<br /><span>Get a tailored quote.</span></h2>
          <p>Share your target product, quantity and customization requirements. Our B2B team will reply by email with suitable configurations and quotation details.</p>
          <div className="emailQuoteBenefits"><span>Low MOQ</span><span>OEM / ODM</span><span>Factory direct</span></div>
          <a href="mailto:l474419569@gmail.com">l474419569@gmail.com <b>↗</b></a>
        </div>
        <form className="emailQuoteForm" onSubmit={submitEmailQuote}>
          <label><span>Your name</span><input name="name" type="text" autoComplete="name" required placeholder="John Smith" /></label>
          <label><span>Company</span><input name="company" type="text" autoComplete="organization" required placeholder="Company name" /></label>
          <label><span>Business email</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
          <label><span>Product category</span><select name="product" defaultValue="Laptops"><option>Laptops</option><option>Android Tablets</option><option>LED Projectors</option><option>Portable Monitors</option><option>Gaming Laptops</option><option>Mini PCs</option><option>Other electronics</option></select></label>
          <label><span>Estimated quantity</span><input name="quantity" type="text" inputMode="numeric" placeholder="e.g. 100 pcs" /></label>
          <label className="full"><span>Customization &amp; project requirements</span><textarea name="requirements" rows={5} required placeholder="Specifications, logo, packaging, destination market and any other requirements..." /></label>
          <button type="submit">Get a Quote by Email <b>↗</b></button>
          <p className="emailQuoteNote">Submitting opens your email app with the inquiry ready to send.</p>
        </form>
      </div>
    </section>

    <section id="faq" className="faqPremium" aria-labelledby="faq-title">
      <div className="faqPremiumHead">
        <div className="faqPremiumTitle">
          <p className="faqPremiumEyebrow">FAQ · OEM / ODM SUPPORT</p>
          <h2 id="faq-title">Questions answered.<br /><span>Projects move faster.</span></h2>
        </div>
        <div className="faqPremiumIntro">
          <p>Clear answers before sampling, customization and production—so your team can make decisions with confidence.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="faqWhatsApp">
            <span aria-hidden="true">◔</span> Ask us on WhatsApp <b>↗</b>
          </a>
        </div>
      </div>
      <div className="faqPremiumGrid">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return <article className={`faqPremiumItem${isOpen ? " isOpen" : ""}${index === faqs.length - 1 ? " isWide" : ""}`} key={faq.question}>
            <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
              <span className="faqPremiumMeta">{faq.number} / {faq.label}</span>
              <strong>{faq.question}</strong>
              <span className="faqPremiumToggle" aria-hidden="true">{isOpen ? "×" : "+"}</span>
            </button>
            <div id={`faq-answer-${index}`} className="faqPremiumAnswer" hidden={!isOpen}>
              <p>{faq.answer}</p>
            </div>
          </article>;
        })}
      </div>
      <p className="faqPremiumFootnote">WEIBOER · FACTORY-DIRECT CONSUMER ELECTRONICS · SHENZHEN, CHINA</p>
    </section>

    <footer className="siteFooter">
      <div className="footerLead">
        <a className="brand footerLogoWrap" href="#top" aria-label="Weiboer home"><img className="siteLogo siteLogoFooter" src="/weiboer-logo.png" alt="Weiboer" /></a>
        <h2>One factory partner.<br /><span>Your next product line.</span></h2>
        <p>Factory-direct consumer electronics with flexible OEM and ODM customization for global distributors, retailers and private-label brands.</p>
      </div>
      <div className="footerColumns">
        <div><p className="footerLabel">EXPLORE</p><a href="#top">Home</a><a href="#about">About Weiboer</a><a href="/laptops">Products</a><a href="#quality">Quality control</a></div>
        <div><p className="footerLabel">PRODUCTS</p><a href="/laptops">Laptops</a><a href="#products">Android tablets</a><a href="#products">LED projectors</a><a href="#products">Portable monitors</a></div>
        <div><p className="footerLabel">CONTACT</p><a className="footerWhatsApp" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a><a href="mailto:l474419569@gmail.com">l474419569@gmail.com</a><a href="#email-quote">Get a quotation</a><span>Shenzhen, Guangdong, China</span></div>
      </div>
      <div className="footerActionRow"><a className="footerWaButton" href={whatsapp} target="_blank" rel="noreferrer"><span>Chat on WhatsApp</span><b>↗</b></a><a className="footerQuoteButton" href="#email-quote"><span>Get a Quote by Email</span><b>↗</b></a></div>
      <div className="footerBottom"><small>© 2026 Weiboer · Shenzhen Weiboer Digital Co., Ltd.</small><a href="#top">Back to top ↑</a></div>
    </footer>
  </main>;
}
