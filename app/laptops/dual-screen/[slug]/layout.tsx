import type { Metadata } from "next";
import { dualProducts } from "../../dual-data";
import { JsonLd, productJsonLd } from "../../../components/StructuredData";

export function generateStaticParams() {
  return Object.keys(dualProducts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = dualProducts[slug];
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/laptops/dual-screen/${slug}` },
    openGraph: { title: product.h1, description: product.description, url: `/laptops/dual-screen/${slug}`, type: "article" },
  };
}

export default async function DualScreenLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = dualProducts[slug];
  return <>{children}<JsonLd data={productJsonLd(product, "dual-screen laptops", slug, {
    urlPath: `/laptops/dual-screen/${slug}`,
    imagePath: product.galleryImages?.[0] || `/laptops/${slug}/gallery/01-main.webp`,
    breadcrumbItems: [{ name: "Home", path: "/" }, { name: "Laptops", path: "/laptops" }, { name: "Dual-Screen Laptops", path: "/dual-screen-laptop-oem" }, { name: product.code, path: `/laptops/dual-screen/${slug}` }],
    includeProduct: false,
  })} /></>;
}
