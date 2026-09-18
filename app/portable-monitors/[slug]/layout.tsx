import type { Metadata } from "next";
import { monitorProducts } from "../monitor-data";
import { JsonLd, productJsonLd } from "../../components/StructuredData";
export function generateStaticParams(){return Object.keys(monitorProducts).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=monitorProducts[slug];return {title:p.title,description:p.description,alternates:{canonical:`/portable-monitors/${slug}`},openGraph:{title:p.h1,description:p.description,url:`/portable-monitors/${slug}`,type:"article"}};}
export default async function MonitorSlugLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const {slug}=await params;return <>{children}<JsonLd data={productJsonLd(monitorProducts[slug],"portable-monitors",slug)}/></>;}
