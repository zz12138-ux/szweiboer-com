import { notFound } from "next/navigation";
import PhoneDetail from "../PhoneDetail";
import { phoneProducts, publishedPhoneSlugs } from "../phone-data";

export function generateStaticParams() { return publishedPhoneSlugs.map((slug) => ({ slug })); }

export default async function PhoneSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = phoneProducts[slug];
  if (!product) notFound();
  return <PhoneDetail product={product} slug={slug} />;
}
