import ToolCard from "@/components/ToolCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolHive — Free Online Tools",
  description: "Free online tools for images, math, finance, SEO, and text. No signup, no cost, runs in your browser.",
  alternates: { canonical: "https://tool-hive-sigma.vercel.app" },
};

const categories = [
  {
    name: "Image Tools",
    emoji: "🖼️",
    tools: [
      { name: "Image Compressor", href: "/tools/image-compressor", desc: "Compress images without losing quality" },
      { name: "Image Resizer", href: "/tools/image-resizer", desc: "Resize images to any dimension" },
    ],
  },
  {
    name: "Math & Finance",
    emoji: "🧮",
    tools: [
      { name: "Percentage Calculator", href: "/tools/percentage-calculator", desc: "Calculate percentages instantly" },
      { name: "Loan Calculator", href: "/tools/loan-calculator", desc: "Monthly payments & total interest" },
      { name: "Unit Converter", href: "/tools/unit-converter", desc: "Convert length, weight, temperature & more" },
      { name: "BMI Calculator", href: "/tools/bmi-calculator", desc: "Calculate Body Mass Index instantly" },
    ],
  },
  {
    name: "SEO Tools",
    emoji: "🔍",
    tools: [
      { name: "Meta Tag Generator", href: "/tools/meta-tag-generator", desc: "Generate SEO meta tags instantly" },
      { name: "Slug Generator", href: "/tools/slug-generator", desc: "Convert text to URL-friendly slugs" },
      { name: "Character Counter", href: "/tools/character-counter", desc: "Count characters, words, and sentences" },
    ],
  },
  {
    name: "Text Tools",
    emoji: "✏️",
    tools: [
      { name: "Case Converter", href: "/tools/case-converter", desc: "Convert text to any case format" },
      { name: "Base64 Encoder / Decoder", href: "/tools/base64-encoder-decoder", desc: "Encode or decode Base64 strings" },
      { name: "URL Encoder / Decoder", href: "/tools/url-encoder-decoder", desc: "Encode or decode URLs instantly" },
    ],
  },
  {
    name: "Security",
    emoji: "🔐",
    tools: [
      { name: "Password Generator", href: "/tools/password-generator", desc: "Generate strong random passwords" },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Free Online Tools</h1>
        <p className="text-lg" style={{ color: "#9da3c8" }}>Fast, private, client-side tools. No signup. No cost. Ever.</p>
      </div>
      <div className="space-y-10">
        {categories.map((cat) => (
          <section key={cat.name}>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4a4e6a" }}>
              {cat.emoji} {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.tools.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
