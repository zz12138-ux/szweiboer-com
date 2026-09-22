import type { Metadata } from "next";
import { aioProducts, publishedAioSlugs } from "../aio-data";

export function generateStaticParams() { return publishedAioSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = aioProducts[slug];
  return { title: product.title, description: product.description, alternates: { canonical: `/all-in-one-pcs/${slug}` }, openGraph: { title: product.title, description: product.description, url: `/all-in-one-pcs/${slug}`, type: "website" } };
}

export default function AioProductLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
