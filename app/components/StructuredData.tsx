type ProductLike = {
  code: string;
  title: string;
  h1?: string;
  description: string;
  highlights?: string[];
  imagePath?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ProductJsonLdOptions = {
  urlPath?: string;
  imagePath?: string;
  breadcrumbItems?: BreadcrumbItem[];
  includeProduct?: boolean;
};

const origin = "https://www.szweiboer.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${origin}/#organization`, name: "Weiboer", url: origin, logo: `${origin}/weiboer-logo.png` },
      { "@type": "WebSite", "@id": `${origin}/#website`, name: "Weiboer", url: origin, publisher: { "@id": `${origin}/#organization` } },
    ],
  };
}

export function productJsonLd(product: ProductLike, category: string, slug: string, options: ProductJsonLdOptions = {}) {
  const urlPath = options.urlPath || `/${category}/${slug}`;
  const url = `${origin}${urlPath}`;
  const imagePath = options.imagePath || product.imagePath || `/${category}/${slug}/gallery/01-main.webp`;
  const breadcrumbItems = options.breadcrumbItems || [
    { name: "Home", path: "/" },
    { name: category.replaceAll("-", " "), path: `/${category}` },
    { name: product.code, path: urlPath },
  ];
  const breadcrumb = { "@type": "BreadcrumbList", itemListElement: breadcrumbItems.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${origin}${item.path}` })) };
  const productEntity = { "@type": "Product", "@id": `${url}#product`, name: product.h1 || product.title, sku: product.code, brand: { "@type": "Brand", name: "Weiboer" }, description: product.description, image: [`${origin}${imagePath}`], url, category, additionalProperty: (product.highlights || []).map((value) => ({ "@type": "PropertyValue", name: "Feature", value })) };
  return { "@context": "https://schema.org", "@graph": options.includeProduct === false ? [breadcrumb] : [productEntity, breadcrumb] };
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function GlobalStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: "Weiboer",
        url: origin,
        logo: `${origin}/weiboer-logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: "Weiboer",
        url: origin,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProductStructuredData({ product, category, slug }: { product: ProductLike; category: string; slug: string }) {
  const url = `${origin}/${category}/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.h1 || product.title,
        sku: product.code,
        brand: { "@type": "Brand", name: "Weiboer" },
        description: product.description,
        image: [`${url}/gallery/01-main.webp`],
        url,
        category,
        additionalProperty: (product.highlights || []).map((value) => ({
          "@type": "PropertyValue",
          name: "Feature",
          value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: category.replaceAll("-", " "), item: `${origin}/${category}` },
          { "@type": "ListItem", position: 3, name: product.code, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
