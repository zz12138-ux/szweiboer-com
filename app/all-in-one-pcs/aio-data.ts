export type AioProduct = {
  code: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  galleryCount: number;
  detailCount: number;
  specs: [string, string][];
  faqs: [string, string][];
  moq: string;
  sourceUrl: string;
};

const baseFaqs: [string, string][] = [
  ["Can I customize the all-in-one PC with my brand?", "The supplier pages list logo, packaging and graphic customization. Confirm artwork, mold, boot logo and packaging details before sampling."],
  ["Are CPU, memory and storage fixed?", "No. The listed platforms provide selectable CPU, memory and storage options. Confirm the exact BOM and approved sample configuration before production."],
  ["Do these platforms have public pricing?", "This catalog intentionally does not publish supplier prices. Request a current quotation based on configuration, quantity and destination."],
];

export const aioProducts: Record<string, AioProduct> = {
  uw30: {
    code: "UW30",
    title: "UW30 34-inch Curved All-in-One PC OEM | Weiboer",
    h1: "UW30 34-inch Ultrawide Curved All-in-One PC — OEM / ODM Ready",
    eyebrow: "UW30 · 34-INCH · 21:9 · 3440 × 1440",
    description: "34-inch 21:9 curved all-in-one PC platform with Intel Core i3/i5/i7 options, selectable DDR4 memory and SSD storage. Confirm the final desktop BOM on the approved sample.",
    highlights: ["34-inch 3440 × 1440 ultrawide", "21:9 1500R curved display", "Intel Core i3 / i5 / i7 options", "DDR4 4GB / 8GB / 16GB", "SSD up to 2TB listed"],
    galleryCount: 6, detailCount: 33,
    specs: [["Model", "UW30"], ["Display", "34-inch ultrawide LED, 3440 × 1440, 21:9, 1500R curved"], ["CPU", "Intel Core i3 / i5 / i7 options"], ["Memory", "DDR4 4GB / 8GB / 16GB / 32GB options listed"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB; HDD options listed"], ["Operating System", "Windows 7 / Windows 10 / Windows 11 / Linux compatibility listed"], ["Graphics", "Integrated Intel graphics listed"], ["Wireless", "2.4G / 5G WiFi and Bluetooth 4.2 listed"], ["Interfaces", "Power, HDMI, VGA, LAN, USB, audio out and microphone in listed"], ["MOQ", "5 pieces listed for logo, packaging and graphic customization"]],
    faqs: baseFaqs, moq: "5 pcs", sourceUrl: "https://www.alibaba.com/product-detail/Hot-Selling-34-Inch-Ultrawide-Curve_1601048773668.html",
  },
  k2: {
    code: "K2",
    title: "K2 21.5-inch IPS All-in-One PC OEM | 1920 × 1080 | Weiboer",
    h1: "K2 21.5-inch IPS All-in-One PC — OEM / ODM Ready",
    eyebrow: "K2 · 21.5-INCH · IPS · 1920 × 1080",
    description: "A 21.5-inch IPS all-in-one PC platform for business, office and entry-level gaming programs, with Intel Core i3/i5/i7, J1900 or AMD A-series options, selectable RAM and SSD storage.",
    highlights: ["21.5-inch IPS display", "1920 × 1080 resolution", "Intel Core i3 / i5 / i7 options", "DDR3 4GB / 8GB / 16GB", "SSD and HDD options listed"],
    galleryCount: 6, detailCount: 32,
    specs: [["Model", "K2-21.5inch-7"], ["Display", "21.5-inch IPS LED, 1920 × 1080, 16:9"], ["CPU", "Intel Core i3/i5/i7, J1900 or AMD A6/A8/A10 options listed"], ["Memory", "4GB / 8GB / 16GB"], ["Storage", "SSD 128GB / 256GB / 512GB; HDD 500GB / 1TB / 2TB"], ["Operating System", "Windows 7 / Windows 8 / Windows 10 / Linux compatibility listed"], ["Graphics", "Integrated Intel graphics listed"], ["Interfaces", "Power, LAN, headphone, VGA, microphone and USB listed"], ["MOQ", "5 pieces listed for logo, packaging and graphic customization"]],
    faqs: baseFaqs, moq: "5 pcs", sourceUrl: "https://www.alibaba.com/product-detail/21-5-High-Quality-IPS-Core_1600593642130.html",
  },
  k4: {
    code: "K4",
    title: "K4 23.8-inch Business All-in-One PC OEM | 1920 × 1080 | Weiboer",
    h1: "K4 23.8-inch Business All-in-One PC — OEM / ODM Ready",
    eyebrow: "K4 · 23.8-INCH OPTION · IPS · 1920 × 1080",
    description: "A configurable K4 all-in-one PC platform with 21.5-inch or 23.8-inch display options, Intel Core i3/i5/i7, J1900 or AMD A-series options, and selectable memory and storage for business programs.",
    highlights: ["21.5-inch / 23.8-inch options", "1920 × 1080 IPS display", "Intel Core i3 / i5 / i7 options", "DDR3 4GB / 8GB / 16GB", "Business and office platform"],
    galleryCount: 6, detailCount: 30,
    specs: [["Model", "K4-21.5inch-1"], ["Display", "21.5-inch / 23.8-inch LED, 1920 × 1080, 16:9"], ["CPU", "Intel Core i3/i5/i7, J1900 or AMD A6/A8/A10 options listed"], ["Memory", "4GB / 8GB / 16GB"], ["Storage", "SSD 128GB / 256GB / 512GB; HDD 500GB / 1TB / 2TB"], ["Operating System", "Windows 7 / Windows 8 / Windows 10 / Linux compatibility listed"], ["Graphics", "Integrated Intel graphics listed"], ["Interfaces", "Power, LAN, headphone, VGA, microphone and USB listed"], ["MOQ", "5 pieces listed for logo, packaging and graphic customization"]],
    faqs: baseFaqs, moq: "5 pcs", sourceUrl: "https://www.alibaba.com/product-detail/New-Product-23-8-Computer-Laptops_1600593430114.html",
  },
  z5: {
    code: "Z5",
    title: "Z5 24 / 27-inch Intel All-in-One PC OEM | 1920 × 1080 | Weiboer",
    h1: "Z5 24 / 27-inch Intel All-in-One PC — OEM / ODM Ready",
    eyebrow: "Z5 · 24 / 27-INCH · INTEL CORE i5 / i7",
    description: "A 24-inch or 27-inch flat-screen all-in-one PC platform with Intel Core i5/i7 options, Windows 10 or Linux, selectable DDR3 memory and SSD storage for business and office programs.",
    highlights: ["24-inch / 27-inch options", "1920 × 1080 LED display", "Intel Core i5 / i7 options", "DDR3 4GB / 8GB / 16GB / 32GB", "Windows 10 / Linux"],
    galleryCount: 6, detailCount: 30,
    specs: [["Model", "Z5"], ["Display", "24-inch / 27-inch LED flat screen, 1920 × 1080, 16:9"], ["CPU", "Intel Core i5 / i7 options"], ["Memory", "DDR3 4GB / 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB options"], ["Operating System", "Windows 10 / Linux"], ["Graphics", "Integrated Intel graphics listed"], ["Interfaces", "USB, HDMI, RJ45, VGA, audio and microphone listed"], ["MOQ", "1 piece listed for logo, packaging and graphic customization"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/OEM-Brand-24-27-Inch-AIO_1600474989020.html",
  },
  k7: {
    code: "K7",
    title: "K7 24-inch Intel Core All-in-One PC OEM | 1920 × 1080 | Weiboer",
    h1: "K7 24-inch Intel Core All-in-One PC — OEM / ODM Ready",
    eyebrow: "K7 · 24-INCH · INTEL CORE i3 / i5 / i7 / i9",
    description: "A 24-inch all-in-one PC platform with Intel Core i3/i5/i7/i9 options, Windows 10, selectable DDR3 memory and SSD storage, plus USB, HDMI, VGA and LAN connectivity for office programs.",
    highlights: ["24-inch 1920 × 1080 display", "Intel Core i3 / i5 / i7 / i9 options", "DDR3 4GB / 8GB", "SSD up to 1TB listed", "USB, HDMI, VGA and LAN"],
    galleryCount: 6, detailCount: 33,
    specs: [["Model", "K7"], ["Display", "24-inch LED, 1920 × 1080, 16:9"], ["CPU", "Intel Core i3 / i5 / i7 / i9 options"], ["Memory", "DDR3 4GB / 8GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB"], ["Operating System", "Windows 10"], ["Graphics", "Integrated Intel graphics listed"], ["Interfaces", "USB, HDMI, DC, RJ45 and VGA listed"], ["MOQ", "1 piece listed for logo, packaging and graphic customization"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/Factory-Price-24-Inch-Core-I5_1600474892618.html",
  },
};

export const publishedAioSlugs = ["uw30", "k2", "k4", "z5", "k7"] as const;
