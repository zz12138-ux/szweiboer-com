export type PhoneProduct = {
  code: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  galleryCount: number;
  detailCount: number;
  galleryExt: "jpg";
  detailExt: "jpg" | "png";
  specs: [string, string][];
  faqs: [string, string][];
  moq: string;
  sourceUrl: string;
  modelNote?: string;
};

const baseFaqs: [string, string][] = [
  ["Can I customize the phone with my brand?", "The supplier lists light customization, artwork customization, sample-based customization and on-demand customization. Confirm the final logo, packaging and configuration on the approved sample."],
  ["What should I confirm before production?", "Confirm the chipset, memory, storage, display, camera, network bands, battery, accessories, language and final packaging before bulk production."],
  ["Can I order a sample?", "Confirm the sample arrangement, final configuration and lead time with Weiboer before production."],
];

export const phoneProducts: Record<string, PhoneProduct> = {
  "phone-1601928829240": {
    code: "A56",
    title: "A56 6.65-inch Android 12 4G Dual-SIM Phone OEM | 4GB + 64GB | Weiboer",
    h1: "A56 6.65-inch Android 12 Phone — OEM / ODM Ready",
    eyebrow: "A56 · 6.65-INCH · ANDROID 12 · 4G DUAL-SIM",
    description: "A 6.65-inch Incell punch-hole Android phone platform with Android 12, 4GB RAM, 64GB storage, 4G dual-SIM support and a 4500mAh battery. The supplier page does not specify a formal model number; confirm the final branding and configuration on the sample.",
    highlights: ["6.65-inch Incell display", "Android 12", "4GB RAM + 64GB storage", "4G dual-SIM", "4500mAh battery"],
    galleryCount: 6,
    detailCount: 18,
    galleryExt: "jpg",
    detailExt: "png",
    specs: [["Display", "6.65-inch Incell punch-hole display, 720 × 1600"], ["CPU", "Octa-core processor listed"], ["Memory", "4GB RAM"], ["Storage", "64GB; hybrid TF card expansion up to 128GB listed"], ["Operating System", "Android 12"], ["Network", "4G LTE dual-SIM; bands B1/B2/B3/B4/B5/B7/B8/B12/B17/B20/B28A/B28B listed"], ["Camera", "5MP front autofocus and 16MP rear autofocus listed"], ["Battery", "4500mAh"], ["Wireless", "Bluetooth, GPS and G-sensor listed"], ["Temperature", "-10°C to 60°C listed"], ["MOQ", "10 pieces listed; confirm final quotation and lead time"]],
    faqs: [["Does this phone have a formal model number?", "The supplied Alibaba page does not display a formal model/model number field. Confirm the seller's final internal model before production."], ...baseFaqs],
    moq: "10 pcs",
    sourceUrl: "https://www.alibaba.com/product-detail/6-65-Inch-Cell-Phone-Android_1601928829240.html",
  },
  "phone-1601928846599": {
    code: "CAMON50 PRO",
    title: "Camon50 Pro 6.85-inch Curved Android 10 Phone OEM | 3GB + 16GB | Weiboer",
    h1: "Camon50 Pro 6.85-inch Curved Android Phone — OEM / ODM Ready",
    eyebrow: "CAMON50 PRO · 6.85-INCH · ANDROID 10",
    description: "A Camon50 Pro curved-display Android phone platform with a 6.85-inch Incell punch-hole display, Android 10, MTK6739 quad-core processor, 3GB RAM, 16GB storage, 4G dual-SIM support and a 4500mAh battery. The product image has been rebuilt to match the supplied specification table.",
    highlights: ["6.85-inch curved Incell display", "Android 10", "MTK6739 quad-core", "3GB RAM + 16GB storage", "4G dual-SIM", "4500mAh battery"],
    galleryCount: 6,
    detailCount: 16,
    galleryExt: "jpg",
    detailExt: "png",
    specs: [["Model", "Camon50 Pro"], ["Display", "6.85-inch Incell punch-hole display, 720 × 1612"], ["CPU", "MTK6739 quad-core processor"], ["Memory", "3GB RAM"], ["Storage", "16GB; dedicated TF card expansion up to 128GB listed"], ["Operating System", "Android 10"], ["Network", "4G dual-SIM; bands 2G 850/900/1900 MHz, 3G 850/1900/2100 MHz, 4G B1/B2/B3/B4/B5/B7/B8/B12/B17/B20/B28A/B28B/B40/B66 listed"], ["Camera", "8MP front + 13MP rear autofocus camera listed"], ["Battery", "4500mAh"], ["Body", "Curved display and back, slim body, textured PC rear cover"], ["Dimensions / Weight", "170 × 78 × 7mm; 211g listed"], ["Colors", "Black, Blue, Orange and Green"], ["MOQ", "10 pieces listed; confirm final quotation and lead time"]],
    faqs: [["Which configuration is used on this page?", "This page follows the supplied specification table: Camon50 Pro, 6.85-inch display, Android 10, MTK6739, 3GB + 16GB, 4500mAh and 8MP + 13MP cameras."], ...baseFaqs],
    moq: "10 pcs",
    sourceUrl: "https://www.alibaba.com/product-detail/Curved-Display-Android-Cell-Phone-6_1601928846599.html",
  },
  x27: {
    code: "X27",
    title: "X27 Rugged Android 14 Phone OEM | G85 Octa-Core, 8GB + 128GB, IP68 | Weiboer",
    h1: "X27 Rugged Android 14 Phone — OEM / ODM Ready",
    eyebrow: "X27 · G85 OCTA-CORE · IP68 · 10000MAH",
    description: "An X27 rugged Android phone platform with a G85 octa-core processor, Android 14, 8GB + 128GB, IP68 water and dust resistance, dual-SIM support and a 10000mAh battery for outdoor and demanding mobile programs.",
    highlights: ["G85 octa-core processor", "Android 14", "8GB + 128GB", "IP68 rugged protection", "10000mAh battery", "32MP + 64MP cameras"],
    galleryCount: 6,
    detailCount: 10,
    galleryExt: "jpg",
    detailExt: "jpg",
    specs: [["Model", "X27"], ["Display", "6.8-inch, 1640 × 720"], ["CPU", "G85 octa-core"], ["Memory", "8GB RAM"], ["Storage", "128GB; TF card expansion up to 512GB listed"], ["Operating System", "Android 14.0"], ["Network", "4G LTE dual-SIM"], ["Camera", "32MP front and 64MP rear"], ["Protection", "IP68 water-resistant, shock-resistant and dust-resistant features listed"], ["Security", "Fingerprint and face unlock"], ["Battery", "10000mAh"], ["Other", "NFC, night vision camera and infrared remote listed"], ["MOQ", "1 piece listed"]],
    faqs: baseFaqs,
    moq: "1 pc",
    sourceUrl: "https://www.alibaba.com/product-detail/Android-14-0-Powered-Smart-Rugged_1600563072313.html",
  },
  x16: {
    code: "X16",
    title: "X16 Rugged Android 14 Phone OEM | G85 Octa-Core, 8GB + 128GB, IP68 | Weiboer",
    h1: "X16 Rugged Android 14 Phone — OEM / ODM Ready",
    eyebrow: "X16 · G85 OCTA-CORE · IP68 · 10000MAH",
    description: "An X16 rugged Android phone platform with a G85 octa-core processor, Android 14, 8GB + 128GB, IP68 water and dust resistance, dual-SIM support and a 10000mAh battery for outdoor and demanding mobile programs.",
    highlights: ["G85 octa-core processor", "Android 14", "8GB + 128GB", "IP68 rugged protection", "10000mAh battery", "32MP + 64MP cameras"],
    galleryCount: 6,
    detailCount: 10,
    galleryExt: "jpg",
    detailExt: "jpg",
    specs: [["Model", "X16"], ["Display", "6.8-inch, 1640 × 720"], ["CPU", "G85 octa-core"], ["Memory", "8GB RAM"], ["Storage", "128GB; TF card expansion up to 512GB listed"], ["Operating System", "Android 14.0"], ["Network", "4G LTE dual-SIM"], ["Camera", "32MP front and 64MP rear"], ["Protection", "IP68 water-resistant, shock-resistant and dust-resistant features listed"], ["Security", "Fingerprint and face unlock"], ["Battery", "10000mAh"], ["Other", "NFC listed"], ["MOQ", "1 piece listed"]],
    faqs: baseFaqs,
    moq: "1 pc",
    sourceUrl: "https://www.alibaba.com/product-detail/Smart-Rugged-Mobile-Call-Phone-G85_1600838903761.html",
  },
};

export const publishedPhoneSlugs = ["phone-1601928829240", "phone-1601928846599", "x27", "x16"] as const;
