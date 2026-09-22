import { notFound } from "next/navigation";
import Link from "next/link";
import "../blog.css";
import "../blog-shell.css";
import BlogShell from "../BlogShell";
import { blogPosts } from "../blog-data";

export function generateStaticParams() { return Object.keys(blogPosts).map((slug) => ({ slug })); }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();
  const dualScreenSlugs = ["dual-screen-laptop-vs-portable-monitor", "dual-screen-laptop-productivity-buyer-guide", "choose-dual-screen-laptop-oem-manufacturer", "dual-screen-laptop-oem-sampling-checklist", "dual-16-inch-vs-16-plus-14-dual-screen-laptop", "dual-screen-laptop-display-modes-oem-testing"];
  const relatedLinks = dualScreenSlugs.includes(slug) ? [
    ["Dual-Screen Laptop OEM Manufacturer", "/dual-screen-laptop-oem/"],
    ["Dual-Screen Laptop OEM Guide", "/blog/choose-dual-screen-laptop-oem-manufacturer/"],
    ["Dual-Screen Productivity Guide", "/blog/dual-screen-laptop-productivity-buyer-guide/"],
    ["Dual-Screen Laptop vs Portable Monitor", "/blog/dual-screen-laptop-vs-portable-monitor/"],
    ["Dual-Screen Sampling Checklist", "/blog/dual-screen-laptop-oem-sampling-checklist/"],
    ["FD14 Foldable Dual 14.1-inch Platform", "/laptops/dual-screen/fd14/"],
    ["FD16 Dual-Screen Platform", "/laptops/dual-screen/wb-lt-09/"],
    ["DS16 Dual-Screen Platform", "/laptops/dual-screen/wb-lt-10/"],
  ] : [];
  const currentBlogPath = `/blog/${slug}/`;
  const navigationLinks = [...relatedLinks, ...post.links].filter(([label, href], index, links) => href !== currentBlogPath && links.findIndex(([, candidate]) => candidate === href) === index);
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: post.title, description: post.description, datePublished: post.published, dateModified: post.updated, author: { "@type": "Organization", name: "Weiboer" }, publisher: { "@type": "Organization", name: "Shenzhen Weiboer Digital Co., Ltd.", logo: { "@type": "ImageObject", url: "https://www.szweiboer.com/weiboer-logo.png" } }, mainEntityOfPage: `https://www.szweiboer.com/blog/${post.slug}` }, { "@type": "FAQPage", mainEntity: post.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] };
  return <BlogShell><main className="blogPage"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><article className="blogArticle"><header className="blogArticleHeader"><p className="blogEyebrow">WEIBOER / B2B BUYER GUIDE</p><h1>{post.title}</h1><p className="blogArticleLead">{post.intro}</p><p className="blogArticleDate">Published {post.published} · Updated {post.updated}</p></header>{post.sections.map((section) => <section className="blogArticleSection" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section className="blogFaq"><h2>Frequently asked questions</h2>{post.faq.map(([question, answer]) => <article className="blogFaqItem" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</section><section className="blogCta"><h2>Need a platform shortlist?</h2><p>Tell Weiboer your target market, volume and configuration. We will confirm suitable OEM/ODM options.</p><a href="/#quote">Request a quotation ↗</a></section><section className="blogSources"><h2>Sources and further reading</h2><ul>{post.sources.map(([label, url]) => <li key={url}><a href={url} rel="noreferrer">{label}</a></li>)}</ul></section><nav className="categorySeoLinks"><Link href="/blog">← Back to buyer guides</Link>{navigationLinks.map(([label, href]) => <Link key={href} href={href}>{label} ↗</Link>)}</nav></article></main></BlogShell>;
}
