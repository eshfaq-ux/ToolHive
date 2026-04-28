import { MetadataRoute } from "next";

const tools = [
  "/tools/image-compressor",
  "/tools/image-resizer",
  "/tools/percentage-calculator",
  "/tools/loan-calculator",
  "/tools/unit-converter",
  "/tools/meta-tag-generator",
  "/tools/slug-generator",
  "/tools/character-counter",
  "/tools/bmi-calculator",
  "/tools/case-converter",
  "/tools/base64-encoder-decoder",
  "/tools/url-encoder-decoder",
  "/tools/password-generator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tool-hive-sigma.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...tools.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
