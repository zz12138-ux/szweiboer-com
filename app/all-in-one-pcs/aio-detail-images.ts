// Explicitly reviewed product-only images; do not render the source directory wholesale.
const reviewed: Record<string, { files: number[]; extension: "webp" | "mixed" }> = {
  uw30: { files: [4, 5, 6, 7, 8, 9, 10], extension: "webp" },
  k2: { files: [1, 2, 3, 4, 5, 6, 7, 8, 9], extension: "webp" },
  k4: { files: [1, 2, 3, 4, 5, 6, 7], extension: "webp" },
  z5: { files: [1, 2, 3, 4, 5, 6, 7], extension: "webp" },
  k7: { files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], extension: "webp" },
  "f1-y": { files: [1, 2, 3, 4, 5, 6, 7, 8], extension: "mixed" },
  "uw-2": { files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], extension: "mixed" },
  "f6-st": { files: [1, 2, 3, 4, 5, 6, 7, 8, 9], extension: "mixed" },
  t3: { files: [1, 2, 3, 4, 5, 6, 7, 8, 9], extension: "mixed" },
  "t1-s": { files: [1, 2, 3, 4, 5, 6, 7, 8, 9], extension: "mixed" },
  "n-s": { files: [1, 2, 3, 4, 5, 6, 7, 8, 9], extension: "webp" },
  d3: { files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], extension: "webp" },
  d4: { files: [1, 3, 9, 11], extension: "webp" },
  d1: { files: [1, 5, 6, 9, 10], extension: "webp" },
  hwc: { files: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], extension: "webp" },
};

export function aioDetailImages(slug: string): string[] {
  const entry = reviewed[slug];
  if (!entry) return [];
  return entry.files.map((index) => {
    const suffix = entry.extension === "mixed" ? (slug === "t1-s" ? "png" : index === 1 ? "jpg" : "png") : "webp";
    return `/all-in-one-pcs/${slug}/detail/${String(index).padStart(2, "0")}-detail.${suffix}`;
  });
}
