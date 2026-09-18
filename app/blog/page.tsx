import Link from "next/link";
import "./blog.css";
import "./blog-shell.css";
import BlogShell from "./BlogShell";
import { blogPosts } from "./blog-data";

export default function BlogIndex() {
  const posts = Object.values(blogPosts).sort((a, b) => b.updated.localeCompare(a.updated));
  return <BlogShell><main className="blogPage"><section className="blogHero"><div className="blogHeroInner"><p className="blogEyebrow">WEIBOER / BUYER GUIDES</p><h1>Make better product decisions.<br /><span>Build with confidence.</span></h1><p>Practical guides for distributors, retailers, system integrators and private-label brands sourcing consumer electronics.</p></div></section><section className="blogGrid">{posts.map((post) => <Link className="blogCard" key={post.slug} href={`/blog/${post.slug}`}><p className="blogCardLabel">B2B BUYER GUIDE</p><h2>{post.title}</h2><p>{post.description}</p><span className="blogCardMeta">Updated {post.updated} · Read guide ↗</span></Link>)}</section></main></BlogShell>;
}
