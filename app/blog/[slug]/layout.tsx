import type { Metadata } from "next";
import { blogPosts } from "../blog-data";
export function generateStaticParams() { return Object.keys(blogPosts).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = blogPosts[slug]; return { title: post.title, description: post.description, alternates: { canonical: `/blog/${slug}` }, openGraph: { title: post.title, description: post.description, url: `/blog/${slug}`, type: "article" } }; }
export default function BlogPostLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
