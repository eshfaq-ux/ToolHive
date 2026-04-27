import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import SlugGenerator from "@/components/tools/SlugGenerator";

const url = "https://tool-hive-sigma.vercel.app/tools/slug-generator";

export const metadata: Metadata = {
  title: "Slug Generator — URL-Friendly Text Converter",
  description: "Convert any text into a clean, URL-friendly slug. Free online slug generator for blog posts, pages, and SEO-friendly URLs.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Slug Generator"
      description="Convert any title or text into a clean URL slug. Removes special characters, replaces spaces with hyphens, and lowercases everything."
      canonical={url}
      faqs={[
        { q: "What is a URL slug?", a: "A slug is the part of a URL that identifies a page in a readable way, e.g. /my-blog-post-title." },
        { q: "Why are slugs important for SEO?", a: "Clean, keyword-rich slugs help search engines understand your page content and improve click-through rates." },
        { q: "Are special characters removed?", a: "Yes. All characters except letters, numbers, and hyphens are removed." },
      ]}
    >
      <SlugGenerator />
    </ToolPage>
  );
}
