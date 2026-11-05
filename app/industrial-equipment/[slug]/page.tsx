import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustrialDetail from "../IndustrialDetail";
import { industrialProductBySlug, industrialProductSlugs } from "../product-data";

export function generateStaticParams() { return industrialProductSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = industrialProductBySlug[slug];
  if (!product) return {};
  return {
    title: `${product.name} | Industrial Equipment OEM | Weiboer`,
    description: `${product.summary} Confirm exact configuration and availability with Weiboer before sampling.`,
    alternates: { canonical: `/industrial-equipment/${slug}/` },
  };
}

export default async function IndustrialProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = industrialProductBySlug[slug];
  if (!product) notFound();
  return <IndustrialDetail product={product} />;
}
