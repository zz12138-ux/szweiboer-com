"use client";

import { useState } from "react";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

export default function BlogShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="blogShell">
      <header className={`blogSiteHeader${menuOpen ? " menuOpen" : ""}`}>
        <a className="blogSiteBrand" href="/" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <button className="blogMenuToggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className="blogSiteNav">
          <a href="/">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#about">Capabilities</a>
          <div className="blogProductMenu">
            <button type="button">Products</button>
              <div className="blogProductDropdown">
                <a href="/laptops">Laptops</a>
                <a href="/gaming-laptops">Gaming Laptops</a>
                <a href="/mini-pcs">Mini PCs</a>
                <a href="/tablets">Android Tablets</a>
                <a href="/projectors">Projectors</a>
                <a href="/portable-monitors">Portable Monitors</a>
                <a href="/phones">Phones</a>
                <a href="/all-in-one-pcs">All-in-One PCs</a>
              </div>
          </div>
          <a href="/#factory">Factory</a>
          <a href="/#quality">Quality</a>
          <a href="/#faq">FAQ</a>
          <a className="active" href="/blog">Buyer Guides</a>
          <a href="/#quote">Contact Us</a>
          <a className="blogMobileQuote" href={`${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a quotation.")}`} target="_blank" rel="noreferrer">Get a Quotation ↗</a>
        </nav>
        <a className="blogHeaderQuote" href="/#quote">Get a Quotation</a>
      </header>
      {children}
      <footer className="blogFooter">
        <a href="/" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <p>Factory-direct consumer electronics with flexible OEM and ODM customization for global buyers.</p>
        <div className="blogFooterLinks"><a href="/">Home</a><a href="/laptops">Laptops</a><a href="/phones">Phones</a><a href="/all-in-one-pcs">All-in-One PCs</a><a href="/blog">Buyer Guides</a><a href="/#quote">Contact Us</a></div>
        <small>© 2026 Weiboer · Shenzhen Weiboer Digital Co., Ltd.</small>
      </footer>
    </div>
  );
}
