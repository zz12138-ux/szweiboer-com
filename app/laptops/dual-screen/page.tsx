import Link from "next/link";
import "./page.css";

const whatsapp = "https://api.whatsapp.com/send/?phone=8613556351212&text=";
const inquiry = `${whatsapp}${encodeURIComponent("Hello Weiboer, I would like a quotation for your dual-screen laptop platforms.")}`;

const platforms = [
  {
    code: "FD14",
    title: "14.1-inch Foldable Dual-Screen Touch Laptop",
    description: "A compact dual 14.1-inch 2K touch platform with a 360° Yoga hinge for mobile productivity and private-label programs.",
    specs: ["Dual 14.1-inch 2240 × 1440 touch displays", "Intel Alder Lake-N N100", "360° Yoga hinge"],
    href: "/laptops/dual-screen/fd14/",
  },
  {
    code: "FD16",
    title: "Dual 16-inch Touch Laptop",
    description: "A larger dual 16-inch touch platform for buyers who need two equal work surfaces and a distinctive notebook format.",
    specs: ["Dual 16-inch IPS touch displays", "Intel Core i5-12450H listed", "DDR4 up to 64GB listed"],
    href: "/laptops/dual-screen/wb-lt-09/",
  },
  {
    code: "DS16",
    title: "16-inch + 14-inch Dual-Screen Laptop",
    description: "A large-format integrated dual-screen notebook with a primary 16.1-inch display and a 14-inch secondary panel.",
    specs: ["16.1-inch main display", "14-inch secondary display", "IPS touchscreen platform"],
    href: "/laptops/dual-screen/wb-lt-10/",
  },
];

export default function DualScreenCatalogPage() {
  return (
    <main className="dualCatalogPage">
      <header className="dualCatalogHeader">
        <Link href="/" className="dualCatalogLogo"><img src="/weiboer-logo.png" alt="Weiboer" /></Link>
        <nav><Link href="/laptops/">Laptops</Link><Link href="/dual-screen-laptop-oem/">OEM / ODM</Link><Link href="/blog/">Buyer Guides</Link></nav>
        <a href={inquiry} className="dualCatalogQuote" target="_blank" rel="noreferrer">WhatsApp Quote ↗</a>
      </header>
      <section className="dualCatalogHero">
        <p>WEIBOER / DUAL-SCREEN LAPTOPS</p>
        <h1>Compare the platform<br /><span>before you sample.</span></h1>
        <p className="dualCatalogLead">Explore integrated dual-screen laptop platforms for private-label brands, distributors and mobile workstation programs. Confirm display behavior, touch mapping, hinge operation and the final configuration on an approved sample.</p>
        <div className="dualCatalogActions"><a href="#platforms">Compare platforms</a><Link href="/dual-screen-laptop-oem/">Read the OEM process ↗</Link></div>
      </section>
      <section className="dualCatalogStrip"><b>FD14 · FOLDABLE 14.1-INCH</b><b>FD16 · DUAL 16-INCH</b><b>DS16 · 16 + 14-INCH</b><b>OEM / ODM · SAMPLE FIRST</b></section>
      <section className="dualCatalogSection" id="platforms">
        <p className="dualCatalogEyebrow">CURRENT PLATFORMS</p>
        <h2>Choose a display layout.<br /><span>Confirm the working behavior.</span></h2>
        <div className="dualCatalogGrid">{platforms.map((platform) => <article key={platform.code}>
          <p className="dualCatalogCode">{platform.code} · OEM / ODM READY</p>
          <h3>{platform.title}</h3>
          <p>{platform.description}</p>
          <ul>{platform.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
          <Link href={platform.href}>View {platform.code} platform ↗</Link>
        </article>)}</div>
      </section>
      <section className="dualCatalogSection dualCatalogGuide">
        <div><p className="dualCatalogEyebrow">BUYER CHECKPOINTS</p><h2>Do not approve<br /><span>from images alone.</span></h2><p>For each sample, record Windows extended or mirrored mode, touch mapping, sleep and restart behavior, display scaling, hinge position, keyboard language and branding approvals.</p></div>
        <ul><li>Display size, resolution and primary-screen order</li><li>Touch mapping, scaling and driver behavior</li><li>Sleep, wake, restart and external-display tests</li><li>CPU, memory, storage, ports and wireless</li><li>Logo, keyboard language and packaging</li></ul>
      </section>
      <section className="dualCatalogGuides"><p className="dualCatalogEyebrow">RELATED BUYER GUIDES</p><div><Link href="/blog/dual-screen-laptop-display-modes-oem-testing/"><b>Display Modes OEM Testing</b><span>Extended vs mirrored behavior, touch mapping and sample sign-off ↗</span></Link><Link href="/blog/dual-screen-laptop-oem-sampling-checklist/"><b>12-Point Sampling Checklist</b><span>Confirm the physical, software and branding details before bulk production ↗</span></Link><Link href="/blog/dual-16-inch-vs-16-plus-14-dual-screen-laptop/"><b>Layout Comparison</b><span>Compare dual 16-inch and 16-inch plus 14-inch formats ↗</span></Link></div></section>
      <section className="dualCatalogCta"><p>OEM / ODM · SAMPLE FROM 1 PC · FACTORY DIRECT</p><h2>Need help choosing<br /><span>the right platform?</span></h2><Link href="/dual-screen-laptop-oem/#quote">Request a Dual-Screen OEM Quote ↗</Link></section>
    </main>
  );
}
