import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import CharacterCounter from "@/components/tools/CharacterCounter";

const url = "https://toolhive.vercel.app/tools/character-counter";

export const metadata: Metadata = {
  title: "Character Counter — Word & Sentence Count Online",
  description: "Count characters, words, sentences, paragraphs, and estimated reading time. Free online character and word counter tool.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Character Counter"
      description="Paste or type text to instantly count characters, words, sentences, paragraphs, and estimated reading time."
      canonical={url}
      faqs={[
        { q: "How is reading time calculated?", a: "Based on an average reading speed of 200 words per minute." },
        { q: "Does it count spaces as characters?", a: "Yes, the Characters count includes spaces. 'No Spaces' shows the count without whitespace." },
        { q: "Is there a character limit?", a: "No limit. The tool handles large documents without any issues." },
      ]}
    >
      <CharacterCounter />
    </ToolPage>
  );
}
