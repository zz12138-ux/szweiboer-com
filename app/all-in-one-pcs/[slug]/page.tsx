import { notFound } from "next/navigation";
import AioDetail from "../AioDetail";
import { aioProducts, publishedAioSlugs } from "../aio-data";

export function generateStaticParams() { return publishedAioSlugs.map((slug) => ({ slug })); }

export default async function AioSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = aioProducts[slug];
  if (!product) notFound();
  return <AioDetail product={product} slug={slug} />;
}
