import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import ImageResizer from "@/components/tools/ImageResizer";

const url = "https://tool-hive-sigma.vercel.app/tools/image-resizer";

export const metadata: Metadata = {
  title: "Free Image Resizer Online",
  description: "Resize images to any dimension online for free. Maintain aspect ratio or set custom width and height. No upload required.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Image Resizer"
      description="Resize any image to exact dimensions. Lock aspect ratio or set custom width & height. Runs entirely in your browser."
      canonical={url}
      faqs={[
        { q: "Does resizing reduce image quality?", a: "Resizing to smaller dimensions may slightly reduce sharpness. Enlarging beyond original size will reduce quality." },
        { q: "What is the output format?", a: "The resized image is downloaded as PNG." },
        { q: "Is there a size limit?", a: "No server-side limit since everything runs in your browser. Very large images may be slow depending on your device." },
      ]}
    >
      <ImageResizer />
    </ToolPage>
  );
}
