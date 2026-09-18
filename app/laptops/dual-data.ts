export type DualScreenLaptop = {
  code: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  specs: [string, string][];
  faqs: [string, string][];
  detailCount: number;
  sourceId: string;
  galleryImages?: string[];
  detailImages?: string[];
  warranty?: string;
};

const commonFaqs: [string, string][] = [
  ["Can I customize the laptop with my brand?", "Yes. Logo printing, boot logo, keyboard language, hardware configuration and private-label packaging can be discussed for the selected OEM/ODM platform."],
  ["What is the MOQ?", "Sample orders can start from 1 pc on the catalog platform. Confirm the final bulk MOQ, configuration and lead time before production."],
  ["Can the secondary display work as an extended Windows screen?", "Confirm the final display mode, touch behavior, driver support and wake-from-sleep behavior on a production sample before bulk ordering."],
  ["What should I confirm before sampling?", "Confirm the final CPU, memory, storage, display resolution, ports, wireless module, keyboard language, packaging and written warranty terms."],
];

export const dualProducts: Record<string, DualScreenLaptop> = {
  "wb-lt-09": {
    code: "FD16",
    sourceId: "1601118332357",
    title: "16-inch Dual-Screen Laptop OEM | Intel Core i5-12450H, Touch Displays | Weiboer",
    h1: "16-inch Dual-Screen Touch Laptop — OEM / ODM Ready",
    eyebrow: "DUAL 16-INCH · INTEL CORE I5-12450H · TOUCH",
    description: "A dual 16-inch touch laptop platform for distributors, private-label brands and productivity programs that need a distinctive two-screen notebook format.",
    highlights: ["Dual 16-inch touch displays", "Intel Core i5-12450H", "DDR4 up to 64GB", "Windows 10 / 11 Pro", "IPS · 1920 × 1200 · 65Hz"],
    specs: [["Display", "Dual 16-inch touch displays, IPS, 1920 × 1200, 65Hz listed"], ["CPU", "Intel Core i5-12450H, 12 cores listed, 2.0-4.4GHz"], ["Graphics", "Integrated Intel UHD Graphics"], ["Memory", "DDR4 8GB / 16GB / 32GB / 64GB"], ["Storage", "M.2 SSD; capacity options require final confirmation"], ["OS", "Windows 10 / Windows 11 Pro"], ["Wireless", "Wi-Fi and Bluetooth 4.2 listed"], ["Ports", "USB 3.0 ×3, Type-C and HDMI listed"], ["Battery", "7.4V / 3800mAh"], ["Keyboard", "English keyboard"], ["Warranty", "1 year listed"], ["OEM options", "Logo, boot logo, hardware configuration and packaging"]],
    faqs: commonFaqs,
    detailCount: 11,
  },
  "wb-lt-10": {
    code: "DS16",
    sourceId: "1601214316710",
    title: "16-inch + 14-inch Dual-Screen Laptop OEM | IPS Touch Platform | Weiboer",
    h1: "16-inch + 14-inch Dual-Screen Laptop — OEM / ODM Ready",
    eyebrow: "16-INCH + 14-INCH · DUAL IPS TOUCH · OEM PLATFORM",
    description: "A large-format dual-screen notebook platform for buyers looking for an integrated main display and secondary display for mobile workstations, dashboards and private-label programs.",
    highlights: ["16.1-inch main display", "14-inch secondary display", "IPS touch platform", "DDR4 memory options", "Windows platform options"],
    specs: [["Main Display", "16.1-inch IPS, 1920 × 1200"], ["Secondary Display", "14-inch integrated secondary display"], ["Panel", "IPS touchscreen platform"], ["Memory", "DDR4 8GB / 16GB / 32GB / 64GB"], ["Operating System", "Windows platform options"], ["Warranty", "1 year"], ["OEM Options", "Logo, configuration, keyboard language and packaging"], ["Sample Confirmation", "Confirm final CPU, graphics, storage, wireless module and display behavior on the approved sample before bulk production"]],
    faqs: commonFaqs,
    detailCount: 16,
  },
  "fd14": {
    code: "FD14",
    sourceId: "1601014739516",
    title: "FD14 Foldable Dual-Screen Laptop OEM | 14.1-inch 2K Touch | Weiboer",
    h1: "14.1-inch Dual-Screen Touch Laptop — OEM / ODM Ready",
    eyebrow: "DUAL 14.1-INCH · INTEL N100 · 360° YOGA TOUCH",
    description: "Source the FD14 foldable dual-screen laptop for OEM/ODM programs: dual 14.1-inch 2K touch displays, Intel N100, 360° Yoga hinge and DDR4 up to 32GB. Confirm the final configuration before production.",
    highlights: ["Dual 14.1-inch 2K touch displays", "Intel Alder Lake-N N100", "360° Yoga hinge", "DDR4 up to 32GB", "Windows 10 / 11"],
    specs: [["Display", "Dual 14.1-inch IPS touch displays, 2240 × 1440, 16:10"], ["CPU", "Intel Alder Lake-N N100, quad core, 2.0–3.4GHz"], ["Graphics", "Intel UHD Graphics"], ["Memory", "DDR4 8GB / 16GB / 32GB"], ["Storage", "M.2 SSD, 128GB to 2TB options"], ["Operating System", "Windows 10 / Windows 11"], ["Wireless", "2.4G / 5G Wi-Fi 802.11ac and Bluetooth 4.2"], ["Ports", "Full-function Type-C ×1, USB 3.0 ×2, HDMI ×1, DC and audio"], ["Battery", "7.4V / 5000mAh"], ["Camera", "1MP"], ["Weight", "1.5kg listed"], ["Warranty", "2 years listed"], ["OEM Options", "Logo, configuration, multi-language keyboard and packaging"]],
    faqs: commonFaqs,
    detailCount: 10,
    warranty: "2 years",
    galleryImages: ["/laptops/fd14/gallery/01-main.jpg", "/laptops/fd14/gallery/02-product.jpg", "/laptops/dual-screen-common/01-low-moq-oem-odm.webp", "/laptops/dual-screen-common/02-build-your-own-brand.webp", "/laptops/dual-screen-common/03-why-choose-weiboer.webp", "/laptops/dual-screen-common/04-process-flow.webp"],
    detailImages: ["/laptops/fd14/detail/01-spec-overview.jpg", "/laptops/fd14/detail/02-modes.jpg", "/laptops/fd14/detail/03-feature.jpg", "/laptops/fd14/detail/04-feature.jpg", "/laptops/fd14/detail/05-feature.jpg", "/laptops/fd14/detail/06-feature.jpg", "/laptops/fd14/detail/07-feature.jpg", "/laptops/fd14/detail/08-folding.jpg", "/laptops/fd14/detail/09-dual-screen.jpg", "/laptops/fd14/detail/10-keyboard.jpg"],
  },
};
