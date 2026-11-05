export type IndustrialProduct = {
  slug: string;
  code: string;
  name: string;
  segment: string;
  summary: string;
  highlights: string[];
  specs: [string, string][];
  detailCount: number;
  note: string;
};

export const industrialProducts: IndustrialProduct[] = [
  {
    slug: "ks-20", code: "KS-20", name: "KS-20 Rugged Smartphone", segment: "RUGGED PHONE",
    summary: "A 6.8-inch rugged smartphone family offered with separate 4G and 5G configurations. Confirm the exact processor, camera and software configuration for the selected batch.",
    highlights: ["6.8-inch display", "4G / 5G variants", "9600mAh listed", "NFC listed"],
    specs: [["Display", "6.8 inch, 2048 x 1020 listed"], ["Processor", "4G and 5G variants listed; processor codes conflict between listing fields. Confirm per order."], ["Memory", "6GB RAM + 128GB storage listed"], ["System", "Android 12 / 13 varies by version"], ["Battery", "9600mAh and 66W charging listed"], ["Protection", "IP68 listed; request model-specific test documentation"], ["Camera", "Camera values conflict between listing sections; confirm on final sample."]],
    detailCount: 1, note: "Two supplier listings share the KS20 model name. Gallery artwork retains the supplier's original brand and claims; final configuration and branding require confirmation.",
  },
  {
    slug: "kp-68", code: "KP-68", name: "KP-68 Rugged Mobile Computer", segment: "RUGGED HANDHELD",
    summary: "A 6.5-inch rugged mobile computer listing with scanner, NFC and variable memory configurations for field and inventory workflows.",
    highlights: ["6.5-inch display", "Scanner option listed", "NFC listed", "5500mAh listed"],
    specs: [["Display", "6.5 inch, 720 x 1600 listed"], ["Processor", "MT6877 / 7863 variants listed; confirm selected chipset"], ["Memory", "4GB / 6GB / 8GB RAM options listed"], ["Storage", "64GB / 128GB / 256GB options listed"], ["System", "Android 13 / 14 listed; confirm version"], ["Battery", "5500mAh and 66W charging listed"], ["Scanner", "CM60 listed in supplier title; verify selected scanner module"]],
    detailCount: 1, note: "The original gallery includes promotional copy and configurable accessories. Confirm exact hardware, software and supplier branding before production.",
  },
  {
    slug: "kp-58", code: "KP-58", name: "KP-58 Rugged Handheld", segment: "RUGGED HANDHELD",
    summary: "A compact rugged Android handheld listing featuring a dock, physical controls and an NFC-marked rear panel.",
    highlights: ["5.5-inch display", "Android 14 listed", "Dock shown", "NFC shown"],
    specs: [["Display", "5.5 inch listed"], ["System", "Android 14 listed"], ["Network", "4G / 5G mentioned in listing title; confirm actual version"], ["Battery", "5000mAh mentioned in supplier title"], ["Scanner", "T20 mentioned in supplier title; confirm selected configuration"], ["Processor / memory", "Not confirmed in the accessible supplier specifications"]],
    detailCount: 1, note: "The original supplier artwork shows a dock and NFC zone. Dock inclusion, radio version and other options must be confirmed for the quoted configuration.",
  },
  {
    slug: "kp-26", code: "KP-26", name: "KP-26 Industrial Handheld", segment: "INDUSTRIAL PDA",
    summary: "An industrial handheld listing with a physical scan key and a scanner-equipped configuration for mobile workflows.",
    highlights: ["6.2-inch display listed", "Scanner option listed", "Android 12 listed", "Physical scan key"],
    specs: [["Display", "6.2-inch IPS, 720 x 1520 listed"], ["System", "Android 12 listed"], ["Processor", "MT6762 and MT6877 appear without a reliable variant mapping. Confirm before order."], ["Memory", "4GB / 6GB RAM options listed"], ["Storage", "64GB / 128GB / 256GB options listed"], ["Scanner", "CM60 listed in supplier title; confirm module"], ["Protection", "IP67 mentioned in supplier title; request test documentation"]],
    detailCount: 2, note: "Supplier pages disagree on processor variant. Original artwork may display configuration-specific claims that should be confirmed against a sample.",
  },
  {
    slug: "kp-36", code: "KP-36", name: "KP-36 Keypad Industrial PDA", segment: "KEYPAD PDA",
    summary: "A keypad-based industrial PDA listing for mobile data entry, scanning and delivery workflows.",
    highlights: ["Physical keypad", "Android 14 listed", "4G listed", "Removable battery listed"],
    specs: [["System", "Android 14 listed"], ["Network", "4G mentioned in supplier title"], ["Battery", "Removable 5000mAh mentioned in supplier title"], ["Scanner", "Configuration-dependent scanner options shown in source artwork"], ["Processor", "MTK family indicated; exact processor not confirmed"], ["Display / memory", "Confirm the chosen configuration before quoting"]],
    detailCount: 2, note: "Scanner modules and memory differ by configuration. Product pictures include a docking illustration, which is not a promise that a dock is supplied.",
  },
  {
    slug: "kp-18", code: "KP-18", name: "KP-18 Rugged Mobile Computer", segment: "MOBILE COMPUTER",
    summary: "A rugged handheld computer listing for mobile field tasks. The source highlights 4G connectivity and an Android interface.",
    highlights: ["Android 12 listed", "4G LTE shown", "NFC mentioned", "Handheld format"],
    specs: [["System", "Android 12 listed"], ["Network", "Supplier title mentions 4G / 5G; product artwork shows 4G LTE. Confirm selected version."], ["NFC / scanner", "Mentioned in supplier title; exact module and implementation require confirmation"], ["Processor / memory", "Not confirmed in accessible supplier specifications"], ["Battery / protection", "Not confirmed in accessible supplier specifications"]],
    detailCount: 1, note: "Supplier images for this listing also include graphics of other product families; those cross-model images have been excluded from this page.",
  },
  {
    slug: "ks-10", code: "KS-10", name: "KS-10 Rugged Smartphone", segment: "RUGGED PHONE",
    summary: "A 6.8-inch rugged smartphone family offered in separate 4G and 5G configurations, with battery capacity varying by version.",
    highlights: ["6.8-inch display", "4G / 5G variants", "NFC listed", "Battery varies by version"],
    specs: [["Display", "6.8 inch, 2048 x 1020 listed"], ["Processor", "5G MT6877 / 4G MT6789 listed; confirm final version"], ["Memory", "6GB RAM + 128GB storage listed"], ["System", "Android 13 (5G) / Android 12 (4G) listed"], ["Battery", "6200mAh (5G) / 9600mAh (4G) listed, both with 66W charging"], ["Protection", "IP68 listed; request model-specific test documentation"], ["Camera", "Camera values conflict between listing sections; confirm on final sample."]],
    detailCount: 1, note: "One alternate image has certification logos removed by cropping. Other source artwork retains the supplier's original feature claims; confirm the final specification.",
  },
];

export const industrialProductBySlug: Record<string, IndustrialProduct> = Object.fromEntries(
  industrialProducts.map((product) => [product.slug, product]),
);
export const industrialProductSlugs = industrialProducts.map((product) => product.slug);
export const industrialCommonImages = [1, 2, 3, 4].map((number) => `/assets/images/industrial-equipment/common-${String(number).padStart(2, "0")}.webp`);
