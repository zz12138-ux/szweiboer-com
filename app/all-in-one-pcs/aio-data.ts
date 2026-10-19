export type AioProduct = {
  code: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  galleryCount: number;
  galleryUrls?: string[];
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
  "f1-y": {
    code: "F1-Y",
    title: "F1-Y 22 / 24-inch Intel All-in-One PC OEM | Full HD IPS | Weiboer",
    h1: "F1-Y 22 / 24-inch All-in-One PC — OEM / ODM Ready",
    eyebrow: "F1-Y · 22 / 24-INCH · FULL HD IPS",
    description: "A configurable 22- or 24-inch all-in-one PC platform with Intel Core i3/i5/i7 options, selectable DDR4 memory and SSD storage. Confirm touch support, wireless charging stand and the final component list on the approved sample.",
    highlights: ["22-inch non-touch / 24-inch touch option", "1920 × 1080 LED / IPS", "Intel Core i3 / i5 / i7 options", "DDR4 up to 32GB and SSD up to 2TB listed", "Stand with wireless phone charging"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/f1-y/gallery/01-gallery.png", "/all-in-one-pcs/f1-y/gallery/02-gallery.png", "/all-in-one-pcs/f1-y/gallery/03-gallery.png", "/all-in-one-pcs/f1-y/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "F1-Y"], ["Display", "22-inch non-touch or 24-inch touch option; 1920 × 1080, 16:9, LED / IPS"], ["CPU", "Intel Core i3 / i5 / i7 options listed"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "Wi-Fi and Bluetooth options listed"], ["Interfaces", "HDMI, VGA, COM, LAN and 6 × USB listed; confirm final I/O"], ["Stand", "Aluminum stand with wireless phone charging"], ["Customization", "Touch, screen size, CPU, RAM, SSD, color, OS, logo and packaging"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-in-One-PC-22-24_1601960945550.html",
  },
  "uw-2": {
    code: "UW-2",
    title: "UW-2 30-inch Ultrawide All-in-One PC OEM | 2560 × 1080 | Weiboer",
    h1: "UW-2 30-inch Ultrawide All-in-One PC — OEM / ODM Ready",
    eyebrow: "UW-2 · 30-INCH · 21:9 · 2560 × 1080",
    description: "A 30-inch ultrawide all-in-one platform for gaming and workstation programs, with Intel Core CPU options, selectable DDR4 memory and SSD storage. Confirm the graphics configuration, power, cooling and panel details on the approved sample.",
    highlights: ["30-inch 21:9 ultrawide display", "2560 × 1080 LED / IPS", "Intel Core i3 / i5 / i7 options", "DDR4 up to 32GB and SSD up to 2TB listed", "Optional GTX 1650 mentioned in supplier details; confirm availability"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/uw-2/gallery/01-gallery.png", "/all-in-one-pcs/uw-2/gallery/02-gallery.png", "/all-in-one-pcs/uw-2/gallery/03-gallery.png", "/all-in-one-pcs/uw-2/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "UW-2"], ["Display", "30-inch ultrawide, 21:9, 2560 × 1080, LED / IPS"], ["Response / Contrast", "5 ms / 1000:1 listed"], ["CPU", "Intel Core i3 / i5 / i7 options; i5 highlighted in listing"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics; GTX 1650 4GB mentioned as an option in listing text; verify exact SKU"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "Bluetooth 4.2 + Wi-Fi; optional Bluetooth 5.2 + Wi-Fi 6 listed"], ["Interfaces", "HDMI, VGA, COM, LAN, 6 × USB and audio listed; confirm final I/O"], ["Customization", "CPU, graphics, memory, SSD, wireless, camera, color, OS, logo and packaging"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/30-Inch-Ultrawide-LED-Gaming-All_1601962208526.html",
  },
  "f6-st": {
    code: "F6-ST",
    title: "F6-ST 24 / 27-inch Expandable All-in-One PC OEM | Weiboer",
    h1: "F6-ST 24 / 27-inch Expandable All-in-One PC — OEM / ODM Ready",
    eyebrow: "F6-ST · 24 / 27-INCH · 2.5-INCH DRIVE BAY",
    description: "A 24- or 27-inch all-in-one PC platform with an internal 2.5-inch drive bay, selectable Intel Core CPU, memory and SSD configurations. Confirm touch, storage expansion and the exact I/O mix on the approved sample.",
    highlights: ["24-inch / 27-inch Full HD display", "Touch option listed", "Intel Core i3 / i5 / i7 options", "2.5-inch drive bay for storage expansion", "USB-C and card reader listed"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/f6-st/gallery/01-gallery.png", "/all-in-one-pcs/f6-st/gallery/02-gallery.png", "/all-in-one-pcs/f6-st/gallery/03-gallery.png", "/all-in-one-pcs/f6-st/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "F6-ST"], ["Display", "24 / 27-inch, 1920 × 1080, 16:9, LED / IPS; touch optional"], ["CPU", "Intel Core i3 / i5 / i7 options; i7 emphasized in listing title"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB; 2.5-inch drive bay"], ["Graphics", "Integrated graphics"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "Bluetooth 4.2 + Wi-Fi; optional Bluetooth 5.2 + Wi-Fi 6 listed"], ["Interfaces", "HDMI, VGA / COM, LAN, USB, Type-C and SD card reader listed"], ["Customization", "Screen size, touch, CPU, RAM, SSD/HDD, camera, fingerprint, wireless and branding"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-in-One-PC-with-2_1601961031614.html",
  },
  t3: {
    code: "T3",
    title: "T3 22 / 24 / 27-inch Intel All-in-One PC OEM | Weiboer",
    h1: "T3 22 / 24 / 27-inch All-in-One PC — OEM / ODM Ready",
    eyebrow: "T3 · 22 / 24 / 27-INCH · VESA OPTION",
    description: "A configurable flat-screen all-in-one PC family with 22-, 24- and 27-inch options, selectable Intel Core configurations and fixed or adjustable stands. Confirm touch availability by size and the final stand before sampling.",
    highlights: ["22 / 24 / 27-inch size options", "1920 × 1080 LED / IPS", "Intel Core i3 / i5 / i7 options", "DDR4 up to 32GB and SSD up to 2TB listed", "VESA-compatible stand options listed"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/t3/gallery/01-gallery.png", "/all-in-one-pcs/t3/gallery/02-gallery.png", "/all-in-one-pcs/t3/gallery/03-gallery.png", "/all-in-one-pcs/t3/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "T3"], ["Display", "22 / 24 / 27-inch, 1920 × 1080, 16:9, LED / IPS"], ["Touch", "24-inch touch option listed; confirm per size"], ["CPU", "Intel Core i3 / i5 / i7 options; 2.0–3.9GHz options listed"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics"], ["Operating System", "Windows 10 / Windows 11"], ["Stand", "Fixed or height-adjustable rotating stand; VESA mounting listed"], ["Interfaces", "HDMI, VGA / COM, LAN and 6 × USB listed"], ["Customization", "Size, touch, CPU, RAM, SSD, stand, VESA, keyboard, boot logo and packaging"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-In-One-Computers-T3-22_1601973261400.html",
  },
  "t1-s": {
    code: "T1-S",
    title: "T1-S 24 / 27-inch Intel All-in-One PC OEM | Weiboer",
    h1: "T1-S 24 / 27-inch All-in-One PC — OEM / ODM Ready",
    eyebrow: "T1-S · 24 / 27-INCH · PRIVACY CAMERA OPTION",
    description: "A 24- or 27-inch all-in-one PC platform with selectable Intel Core CPU, memory and storage. A pop-up privacy camera is listed, with optional face recognition; confirm the final panel, camera and configuration on the sample.",
    highlights: ["24-inch / 27-inch Full HD display", "Touch option listed", "Intel Core i3 / i5 / i7 options", "Pop-up privacy camera; face unlock optional", "DDR4 up to 32GB and SSD up to 2TB listed"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/t1-s/gallery/01-gallery.png", "/all-in-one-pcs/t1-s/gallery/02-gallery.png", "/all-in-one-pcs/t1-s/gallery/03-gallery.png", "/all-in-one-pcs/t1-s/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "T1-S"], ["Display", "24 / 27-inch, 1920 × 1080, 16:9, LED / IPS; touch optional"], ["CPU", "Intel Core i3 / i5 / i7 options"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "Bluetooth 4.2 + Wi-Fi; optional Bluetooth 5.2 + Wi-Fi 6 listed"], ["Camera", "Pop-up privacy camera; face recognition optional"], ["Interfaces", "VGA, COM, HDMI, LAN, Type-C and 6 × USB listed"], ["Customization", "Size, touch, CPU, RAM, SSD, camera, face recognition, color and branding"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-in-One-PC-LED-24_1601961077023.html",
  },
  "n-s": {
    code: "N-S",
    title: "N-S 22 / 24-inch Intel All-in-One PC OEM | Weiboer",
    h1: "N-S 22 / 24-inch All-in-One PC — OEM / ODM Ready",
    eyebrow: "N-S · 22 / 24-INCH · ROTATING STAND",
    description: "A flat-screen 22- or 24-inch all-in-one PC platform with Intel Core options, selectable DDR4 memory and SSD storage. Confirm touch availability and stand movement on the approved sample.",
    highlights: ["22-inch non-touch / 24-inch touch option", "1920 × 1080 LED / IPS", "Intel Core i3 / i5 / i7 options", "DDR4 up to 32GB and SSD up to 2TB listed", "Stand supports 90-degree rotation listed"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/n-s/gallery/01-gallery.png", "/all-in-one-pcs/n-s/gallery/02-gallery.png", "/all-in-one-pcs/n-s/gallery/03-gallery.png", "/all-in-one-pcs/n-s/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "N-S"], ["Display", "22-inch non-touch or 24-inch touch option; 1920 × 1080, 16:9, LED / IPS"], ["CPU", "Intel Core i3 / i5 / i7 options; i7 highlighted in listing"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "Bluetooth 4.2 + Wi-Fi; optional Bluetooth 5.2 + Wi-Fi 6 listed"], ["Stand", "90-degree left/right rotation listed"], ["Interfaces", "6 × USB listed; confirm full port configuration"], ["Customization", "Size, touch, CPU, RAM, SSD, wireless, color, stand, logo and packaging"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-in-One-LED-IPS-Desktop_1601960870959.html",
  },
  d3: {
    code: "D3",
    title: "D3 24 / 27-inch Intel All-in-One PC OEM | Optional Discrete Graphics | Weiboer",
    h1: "D3 24 / 27-inch All-in-One PC — OEM / ODM Ready",
    eyebrow: "D3 · 24 / 27-INCH · PRIVACY CAMERA OPTION",
    description: "A configurable 24- or 27-inch all-in-one PC platform with Intel Core CPU options, privacy camera and optional discrete graphics listed. The supplier page shows multiple display-resolution and GPU configurations; verify the selected SKU and thermal design before approving a sample.",
    highlights: ["24-inch touch / 27-inch non-touch options", "1920 × 1080; 2560 × 1440 also mentioned", "Intel Core i3 / i5 / i7 options", "Optional GTX 1650 / RTX 3060 mentioned; verify exact SKU", "Pop-up privacy camera and dual microphones listed"],
    galleryCount: 4, galleryUrls: ["/all-in-one-pcs/d3/gallery/01-gallery.png", "/all-in-one-pcs/d3/gallery/02-gallery.png", "/all-in-one-pcs/d3/gallery/03-gallery.png", "/all-in-one-pcs/d3/gallery/04-gallery.png"], detailCount: 0,
    specs: [["Model", "D3"], ["Display", "24-inch touch option / 27-inch non-touch; 16:9 LED / IPS"], ["Resolution", "1920 × 1080 in title; 2560 × 1440 also appears in description; confirm exact panel"], ["CPU", "Intel Core i3 / i5 / i7 options"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "SSD 128GB / 256GB / 512GB / 1TB / 2TB"], ["Graphics", "Integrated graphics; GTX 1650 4GB / RTX 3060 12GB options mentioned in listing; verify exact SKU, power and cooling"], ["Operating System", "Windows 10 / Windows 11"], ["Camera", "Pop-up privacy camera and dual microphones listed"], ["Wireless", "Bluetooth 4.2 + Wi-Fi; optional Bluetooth 5.2 + Wi-Fi 6 listed"], ["Interfaces", "HDMI, VGA / COM, LAN and 6 × USB listed"], ["Customization", "Size, touch, resolution, CPU, GPU, RAM, SSD, camera, wireless, color and branding"], ["MOQ", "1 piece listed on supplier page"]],
    faqs: baseFaqs, moq: "1 pc", sourceUrl: "https://www.alibaba.com/product-detail/All-In-One-Computers-D3-24_1601971676965.html",
  },
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

export const publishedAioSlugs = ["uw30", "k2", "k4", "z5", "k7", "f1-y", "uw-2", "f6-st", "t3", "t1-s", "n-s", "d3"] as const;
