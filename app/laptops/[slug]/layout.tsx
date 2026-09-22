import type { Metadata } from "next";
import { gamingProducts } from "../gaming-data";
import { JsonLd, productJsonLd } from "../../components/StructuredData";
export function generateStaticParams(){return Object.keys(gamingProducts).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=gamingProducts[slug];return {title:p.title,description:p.description,alternates:{canonical:`/laptops/${slug}`},openGraph:{title:p.h1,description:p.description,url:`/laptops/${slug}`,type:"article"}};}
export default async function GamingSlugLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const {slug}=await params;const product=gamingProducts[slug];const suppressProduct=["yg11","n16","jz58"].includes(slug);return <>{children}<JsonLd data={productJsonLd(product,"laptops",slug,{imagePath:product.galleryImages?.[0],includeProduct:suppressProduct?false:undefined})}/></>;}
