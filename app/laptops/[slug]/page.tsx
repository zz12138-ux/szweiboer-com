import { notFound } from "next/navigation";
import BusinessDetail from "../BusinessDetail";
import GamingDetail from "../GamingDetail";
import { gamingProducts } from "../gaming-data";
export function generateStaticParams(){return Object.keys(gamingProducts).map(slug=>({slug}));}
export default async function GamingPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=gamingProducts[slug];if(!product)notFound();return product.segment==="business"?<BusinessDetail product={product} slug={slug}/>:<GamingDetail product={product} slug={slug}/>;}
