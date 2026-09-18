import { notFound } from "next/navigation";
import ProjectorDetail from "../ProjectorDetail";
import { projectorProducts } from "../projector-data";
export function generateStaticParams(){return Object.keys(projectorProducts).filter((slug)=>slug!=="wb-pj-02"&&slug!=="wb-pj-06").map(slug=>({slug}));}
export default async function ProjectorPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=projectorProducts[slug];if(!product)notFound();return <ProjectorDetail product={product} slug={slug}/>;}
