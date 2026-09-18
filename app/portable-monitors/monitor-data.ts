export type MonitorProduct = {
  code: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  detailCount: number;
  specs: [string, string][];
  faqs: [string, string][];
};

const commonSpecs: [string, string][] = [
  ["Display", "IPS LED panel, 1920 × 1200, 60Hz, 250 cd/m², 1000:1 contrast"],
  ["Response Time", "1ms listed"],
  ["Color", "sRGB / Rec.709 / BT.709 + Rec.2020 listed"],
  ["Speakers", "None listed"],
  ["Touch", "Not stated; confirm the final configuration"],
  ["Battery", "Not stated; confirm the final configuration"],
  ["OS Compatibility", "Not stated; USB-C laptop use is shown"],
  ["Customization", "Private mold / custom logo / packaging options depending on model"],
];

const commonFaqs: [string, string][] = [
  ["Which laptop sizes are supported?", "The multi-size platforms support selected 13.3, 14, 15.6 or 16-inch configurations. Confirm the exact size, bezel and hinge layout before production."],
  ["What is the native resolution?", "The listed native resolution is 1920 × 1200 with a 60Hz IPS panel."],
  ["Does it have built-in speakers?", "The product data lists no built-in speakers. External audio should be connected through the source laptop or another device."],
  ["Can I add my logo?", "Yes. The listings support OEM/private-label options such as custom logo, private mold and packaging, subject to the selected model."],
  ["What should I confirm before sampling?", "Confirm the exact display size, USB-C port layout, USB-A availability, touch/battery options, case finish and final packaging before production."],
];

export const monitorProducts: Record<string, MonitorProduct> = {
  "wb-mn-01": { code: "WB-MN-01", title: "Portable Monitor OEM | 14/15.6/16\" QHD USB-C IPS Display | Weiboer", h1: "Multi-Size Portable Monitor — OEM / ODM Ready", eyebrow: "14 / 15.6 / 16-INCH · USB-C PORTABLE MONITOR", description: "A slim IPS portable monitor platform for laptop extension, dual-screen and multi-screen workstation programs. Choose the display size, logo and packaging for your market.", highlights: ["14 / 15.6 / 16-inch options", "1920 × 1200 IPS", "60Hz · 250 cd/m²", "2 × USB-C"], detailCount: 8, specs: [["Available Sizes", "14 / 15.6 / 16 inches"], ["Ports", "2 × USB-C"], ["MOQ", "10 pieces"], ["Package", "46.5 × 34 × 12cm, gross 3.4kg"], ...commonSpecs], faqs: commonFaqs },
  "wb-mn-02": { code: "WB-MN-02", title: "USB-C Portable Monitor OEM | 13.3-16\" IPS, 1920×1200 | Weiboer", h1: "USB-C Multi-Size Portable Monitor — OEM / ODM Ready", eyebrow: "13.3 / 14 / 15.6 / 16-INCH · USB-C + USB 3.0", description: "A multi-size IPS portable display platform for laptop extension and mobile workstations. The platform supports USB-C plus USB 3.0 options and private-label programs.", highlights: ["13.3 / 14 / 15.6 / 16-inch options", "1920 × 1200 IPS", "2 × USB-C + USB 3.0", "MOQ 1 piece"], detailCount: 12, specs: [["Available Sizes", "13.3 / 14 / 15.6 / 16 inches"], ["Ports", "2 × USB-C + USB 3.0; USB-A option varies"], ["MOQ", "1 piece"], ["Price Reference", "US$352 for 1-9 pieces; bulk tiers listed"], ["Package", "36 × 23.3 × 10cm, gross 5kg"], ...commonSpecs], faqs: commonFaqs },
  "wb-mn-03": { code: "WB-MN-03", title: "Triple Laptop Portable Monitor OEM | 14/15.6/16\" Full HD IPS | Weiboer", h1: "Full HD Triple-Laptop Monitor — OEM / ODM Ready", eyebrow: "CUSTOM LOGO · FULL HD · TRIPLE-SCREEN EXTENSION", description: "A custom-logo portable display extender for dual, triple and four-screen laptop workstation setups. Designed for B2B distributors and private-label brands.", highlights: ["14 / 15.6 / 16-inch options", "1920 × 1200 IPS", "60Hz · 250 cd/m²", "Custom logo"], detailCount: 8, specs: [["Available Sizes", "14 / 15.6 / 16 inches"], ["Ports", "2 × USB-C"], ["MOQ", "10 pieces listed in price block"], ["Package", "46.5 × 34 × 12cm, gross 3.4kg"], ["Customization", "Custom logo and private mold listed"], ...commonSpecs], faqs: commonFaqs },
  "wb-mn-04": { code: "WB-MN-04", title: "OEM Portable Monitor Extender | 14/15.6/16\" USB-C IPS | Weiboer", h1: "OEM Portable Monitor Extender — OEM / ODM Ready", eyebrow: "OEM LOGO · DUAL / TRIPLE / FOUR-SCREEN", description: "A flexible USB-C portable monitor extender for laptop gaming, business and multi-screen workstation deployments. OEM logo and private mold options are available.", highlights: ["14 / 15.6 / 16-inch options", "1920 × 1200 IPS", "2 × USB-C", "OEM logo"], detailCount: 8, specs: [["Available Sizes", "14 / 15.6 / 16 inches"], ["Ports", "2 × USB-C"], ["MOQ", "10 pieces"], ["Package", "46.5 × 34 × 12cm, gross 3.4kg"], ["Customization", "OEM logo and private mold listed"], ...commonSpecs], faqs: commonFaqs },
  "wb-mn-05": { code: "WB-MN-05", title: "13.3\" Portable Monitor OEM | 1920×1200 IPS, USB-C + USB 3.0 | Weiboer", h1: "13.3-inch Full HD Portable Monitor — OEM / ODM Ready", eyebrow: "13.3-INCH · CUSTOM LOGO · USB-C + USB 3.0", description: "A compact 13.3-inch IPS portable monitor for laptop extension and mobile workstations. Custom logo, private mold and packaging options support private-label programs.", highlights: ["13.3-inch IPS", "1920 × 1200", "USB-C + USB 3.0", "MOQ 1 piece"], detailCount: 11, specs: [["Size", "13.3 inches"], ["Ports", "2 × USB-C + USB 3.0; 4 × USB 3.0 listed in product data"], ["Brand", "Intehill listed in source data"], ["MOQ", "1 piece"], ["Price Reference", "US$352 for 1-9 pieces; bulk tiers listed"], ["Package", "36 × 23.3 × 10cm, gross 5kg"], ["Aspect Ratio", "16:10 / 16:9 values both appear; confirm final panel"], ...commonSpecs], faqs: commonFaqs },
  "wb-mn-06": { code: "WB-MN-06", title: "13.3\" OEM Portable Monitor | USB-C, 1920×1200 IPS | Weiboer", h1: "13.3-inch OEM Portable Monitor — OEM / ODM Ready", eyebrow: "13.3-INCH · OEM LOGO · LAPTOP DISPLAY EXTENDER", description: "A 13.3-inch portable monitor platform for business, gaming and laptop multi-screen use. OEM logo and private-label packaging are available for global buyers.", highlights: ["13.3-inch IPS", "1920 × 1200", "USB-C + USB 3.0", "OEM logo"], detailCount: 11, specs: [["Size", "13.3 inches"], ["Ports", "2 × USB-C + USB 3.0; USB-A options vary"], ["Brand", "Intehill listed in source data"], ["MOQ", "1 piece"], ["Price Reference", "US$352 for 1-9 pieces; bulk tiers listed"], ["Package", "36 × 23.3 × 10cm, gross 5kg"], ["Aspect Ratio", "16:10 / 16:9 values both appear; confirm final panel"], ...commonSpecs], faqs: commonFaqs },
};
