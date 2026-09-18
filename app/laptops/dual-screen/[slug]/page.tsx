import { notFound } from "next/navigation";
import DualDetail from "../../DualDetail";
import { dualProducts } from "../../dual-data";

export function generateStaticParams() {
  return Object.keys(dualProducts).map((slug) => ({ slug }));
}

export default async function DualScreenPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = dualProducts[slug];
  if (!product) notFound();
  return <DualDetail product={product} slug={slug} />;
}
