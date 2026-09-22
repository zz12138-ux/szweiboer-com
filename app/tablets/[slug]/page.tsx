import { notFound } from "next/navigation";
import TabletDetail from "../TabletDetail";
import { tabletProducts } from "../tablet-data";

export function generateStaticParams() { return Object.keys(tabletProducts).map((slug) => ({ slug })); }
export default async function TabletPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = tabletProducts[slug];
  if (!product) notFound();
  return <TabletDetail product={product} slug={slug} />;
}
