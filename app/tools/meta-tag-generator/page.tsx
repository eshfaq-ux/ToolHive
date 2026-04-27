import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import MetaTagGenerator from "@/components/tools/MetaTagGenerator";

const url = "https://tool-hive-sigma.vercel.app/tools/meta-tag-generator";

export const metadata: Metadata = {
  title: "Meta Tag Generator — Free SEO Tool",
  description: "Generate complete HTML meta tags for SEO, Open Graph, and Twitter Cards. Free online meta tag generator — no signup required.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Meta Tag Generator"
      description="Generate all essential HTML meta tags including Open Graph and Twitter Card tags. Copy and paste into your page's <head>."
      canonical={url}
      faqs={[
        { q: "What is a meta description?", a: "A short summary of your page shown in search engine results. Keep it under 160 characters for best results." },
        { q: "What are Open Graph tags?", a: "OG tags control how your page appears when shared on social media like Facebook and LinkedIn." },
        { q: "How long should a page title be?", a: "Keep titles under 60 characters so they display fully in Google search results." },
      ]}
    >
      <MetaTagGenerator />
    </ToolPage>
  );
}
