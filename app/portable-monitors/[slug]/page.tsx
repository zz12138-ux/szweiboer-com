import { notFound } from "next/navigation";
import MonitorDetail from "../MonitorDetail";
import { monitorProducts } from "../monitor-data";
export function generateStaticParams(){return Object.keys(monitorProducts).map(slug=>({slug}));}
export default async function MonitorPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=monitorProducts[slug];if(!product)notFound();return <MonitorDetail product={product} slug={slug}/>;}
