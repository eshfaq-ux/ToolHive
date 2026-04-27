import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import ImageCompressor from "@/components/tools/ImageCompressor";

const url = "https://tool-hive-sigma.vercel.app/tools/image-compressor";

export const metadata: Metadata = {
  title: "Free Image Compressor Online",
  description: "Compress JPG, PNG, and WebP images online for free. Reduce file size without losing quality. No upload needed — runs in your browser.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Image Compressor"
      description="Compress images instantly in your browser. No upload, no server, 100% private."
      canonical={url}
      faqs={[
        { q: "Is my image uploaded to a server?", a: "No. Compression happens entirely in your browser using JavaScript. Your images never leave your device." },
        { q: "What formats are supported?", a: "JPG, PNG, WebP, and most common image formats are supported." },
        { q: "How much can I compress an image?", a: "Typically 40–80% size reduction with minimal visible quality loss at 70% quality setting." },
      ]}
    >
      <ImageCompressor />
    </ToolPage>
  );
}
