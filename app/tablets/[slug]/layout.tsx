import type { Metadata } from "next";
import { tabletProducts } from "../tablet-data";
import { JsonLd, productJsonLd } from "../../components/StructuredData";

export function generateStaticParams() { return Object.keys(tabletProducts).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = tabletProducts[slug];
  return { title: product.title, description: product.description, alternates: { canonical: `/tablets/${slug}` }, openGraph: { title: product.h1, description: product.description, url: `/tablets/${slug}`, type: "article" } };
}
export default async function TabletSlugLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ slug: string }> }>) { const { slug } = await params; return <>{children}<JsonLd data={productJsonLd(tabletProducts[slug], "tablets", slug)} /></>; }
