import type { Metadata } from "next";
import { projectorProducts } from "../projector-data";
import { JsonLd, productJsonLd } from "../../components/StructuredData";
export function generateStaticParams(){return Object.keys(projectorProducts).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projectorProducts[slug];return {title:p.title,description:p.description,alternates:{canonical:`/projectors/${slug}`},openGraph:{title:p.h1,description:p.description,url:`/projectors/${slug}`,type:"article"}};}
export default async function ProjectorSlugLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const {slug}=await params;return <>{children}<JsonLd data={productJsonLd(projectorProducts[slug],"projectors",slug)}/></>;}
