import type { Metadata } from "next";
import "./page.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";

export const metadata: Metadata = {
  title: "Dual-Screen Laptop OEM Manufacturer | Sample, Branding & Configuration | Weiboer",
  description: "Source dual-screen laptop OEM platforms from Weiboer. Compare FD16 and DS16, confirm sample configuration, display behavior, branding, keyboard language and packaging before bulk production.",
  alternates: { canonical: "/dual-screen-laptop-oem" },
  openGraph: {
    title: "Dual-Screen Laptop OEM Manufacturer | Weiboer",
    description: "A B2B sourcing page for dual-screen laptop samples, configuration, branding and production planning.",
    url: "/dual-screen-laptop-oem",
    type: "website",
  },
};

const inquiry = `${whatsapp}${encodeURIComponent("Hello Weiboer, I need a dual-screen laptop OEM quote.\n\nTarget market: \nEstimated quantity: \nPreferred platform: FD16 / DS16 / Need recommendation\nNeed logo, keyboard language or packaging: ")}`;

const steps = [
  ["1", "Share the buyer brief", "Tell us the target market, quantity, use case, required Windows workflow and preferred display arrangement."],
  ["2", "Confirm the sample", "Lock the CPU, memory, storage, display behavior, ports, keyboard language, logo and packaging before sampling."],
  ["3", "Approve for production", "Use the approved sample, configuration sheet and branding proof as the reference for the bulk order."],
];

const faqs: Array<[string, string]> = [
  ["What should I confirm before ordering a dual-screen laptop sample?", "Confirm the display layout, Windows extended-display behavior, touch behavior if selected, hinge operation, CPU, memory, storage, ports, keyboard language, branding and packaging."],
  ["Can a dual-screen laptop be private labeled?", "The current platforms support OEM and ODM discussions for product logo, boot logo, configuration, keyboard language and retail packaging. Confirm the final scope before sampling."],
  ["What is the minimum order quantity?", "Catalog samples can begin from 1 pc. Confirm the final bulk MOQ, configuration and production lead time for the selected platform before placing an order."],
  ["How should buyers compare FD16 and DS16?", "FD16 is a dual 16-inch touch platform with an Intel Core i5-12450H listing. DS16 is a 16-inch plus 14-inch dual-screen platform. Confirm the final CPU, panel behavior and configuration on the production sample."],
];

export default function DualScreenLaptopOemPage() {
  return (
    <main className="dualOemPage">
      <header className="dualOemHeader">
        <a className="dualOemLogo" href="/" aria-label="Weiboer home"><img src="/weiboer-logo.png" alt="Weiboer" /></a>
        <nav>
          <a href="/">Home</a>
          <a href="/laptops/">Laptops</a>
          <a href="/blog/">Buyer Guides</a>
          <a href="/#about">OEM / ODM</a>
        </nav>
        <a className="dualOemHeaderCta" href={inquiry} target="_blank" rel="noreferrer">Request OEM Quote</a>
      </header>

      <section className="dualOemHero" data-track-event="whatsapp-dual-screen-oem">
        <div>
          <p className="dualOemEyebrow">DUAL-SCREEN LAPTOP OEM MANUFACTURER</p>
          <h1>Build a differentiated<br /><span>dual-screen laptop line.</span></h1>
          <p className="dualOemLead">Compare current dual-screen platforms, confirm the sample configuration and turn a two-screen workflow into a branded product program for your market.</p>
          <div className="dualOemActions">
            <a className="dualOemPrimary" href={inquiry} target="_blank" rel="noreferrer">Get Specs &amp; OEM Quote <b>↗</b></a>
            <a className="dualOemSecondary" href="#platforms">Compare platforms</a>
          </div>
        </div>
        <aside className="dualOemHeroAside">
          <p>BUYER START POINT</p>
          <h2>Approve the sample,<br /><span>not just the image.</span></h2>
          <ul>
            <li>Display arrangement and Windows behavior</li>
            <li>Hinge, thermals, ports and accessories</li>
            <li>Logo, keyboard language and packaging</li>
            <li>MOQ, sample timing and warranty process</li>
          </ul>
        </aside>
      </section>

      <section className="dualOemBar"><b>SAMPLE FROM 1 PC</b><b>OEM / ODM PROGRAMS</b><b>CONFIGURATION CONFIRMATION</b><b>PRIVATE-LABEL PACKAGING</b></section>

      <section className="dualOemSection" id="platforms">
        <p className="dualOemEyebrow">CURRENT DUAL-SCREEN PLATFORMS</p>
        <h2>Start with a platform.<br /><span>Confirm the final build.</span></h2>
        <div className="dualOemCards">
          <article>
            <p>FD16 · DUAL 16-INCH TOUCH</p>
            <h3>16-inch Dual-Screen Touch Laptop</h3>
            <ul>
              <li>Intel Core i5-12450H listed</li>
              <li>Dual 16-inch touch displays</li>
              <li>DDR4 up to 64GB listed</li>
              <li>Windows 10 / 11 Pro listed</li>
            </ul>
            <a href="/laptops/dual-screen/">Compare all dual-screen platforms ↗</a>
            <a href="/laptops/dual-screen/wb-lt-09/">View FD16 platform ↗</a>
          </article>
          <article>
            <p>DS16 · 16-INCH + 14-INCH</p>
            <h3>Large-Format Dual-Screen Laptop</h3>
            <ul>
              <li>16-inch main and 14-inch secondary display</li>
              <li>IPS touch platform</li>
              <li>Intel platform options listed</li>
              <li>Windows 10 / 11 references listed</li>
            </ul>
            <a href="/laptops/dual-screen/wb-lt-10/">View DS16 platform ↗</a>
          </article>
        </div>
        <p className="dualOemNote">Final CPU, panel, memory, storage, display behavior and accessory configuration should be confirmed on the selected sample before production.</p>
      </section>

      <section className="dualOemSection dualOemProcess">
        <p className="dualOemEyebrow">OEM SAMPLE PROCESS</p>
        <h2>Move from requirement<br /><span>to approved configuration.</span></h2>
        <div className="dualOemSteps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="dualOemSection dualOemChecklist">
        <div>
          <p className="dualOemEyebrow">WHAT BUYERS SHOULD CONFIRM</p>
          <h2>Use a written checklist<br /><span>before bulk production.</span></h2>
          <p>Two-screen laptops combine notebook, display, mechanical and software decisions. A written sample checklist makes the final platform easier to reproduce and support.</p>
        </div>
        <ul>
          <li>Primary and secondary display size, resolution and touch behavior</li>
          <li>Windows extended-display, sleep, restart and driver behavior</li>
          <li>CPU, memory, storage, ports, wireless and power adapter</li>
          <li>Hinge operation, cooling, fan behavior and physical ergonomics</li>
          <li>Logo, boot logo, keyboard language, carton and retail packaging</li>
          <li>Sample approval, inspection, warranty and RMA workflow</li>
        </ul>
      </section>

      <section className="dualOemGuides">
        <p className="dualOemEyebrow">BUYER GUIDES</p>
        <h2>Plan the program before<br /><span>you request the quote.</span></h2>
        <div>
          <a href="/blog/choose-dual-screen-laptop-oem-manufacturer/"><b>OEM manufacturer guide</b><span>Compare display, hinge, cooling, software and branding questions. ↗</span></a>
          <a href="/blog/dual-screen-laptop-oem-sampling-checklist/"><b>12-point sampling checklist</b><span>Use a practical sign-off process before the bulk order. ↗</span></a>
          <a href="/blog/dual-screen-laptop-productivity-buyer-guide/"><b>Productivity buyer guide</b><span>Match the second screen layout to the target workflow. ↗</span></a>
        </div>
      </section>

      <section className="dualOemFaq">
        <p className="dualOemEyebrow">FAQ</p>
        <h2>Questions before<br /><span>you sample.</span></h2>
        <div>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <section id="quote" className="dualOemCta" data-track-event="whatsapp-dual-screen-oem-cta">
        <p>OEM / ODM · SAMPLE FROM 1 PC · FACTORY DIRECT</p>
        <h2>Ready to define your<br /><span>dual-screen platform?</span></h2>
        <a href={inquiry} target="_blank" rel="noreferrer">Request a Dual-Screen OEM Quote <b>↗</b></a>
      </section>
    </main>
  );
}
