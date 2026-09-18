import type { Metadata } from "next";
import { phoneProducts, publishedPhoneSlugs } from "../phone-data";

export function generateStaticParams() { return publishedPhoneSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = phoneProducts[slug];
  return { title: product.title, description: product.description, alternates: { canonical: `/phones/${slug}` }, openGraph: { title: product.h1, description: product.description, url: `/phones/${slug}`, type: "article" } };
}

export default function PhoneSlugLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
