import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import Base64Tool from "@/components/tools/Base64Tool";

const url = "https://tool-hive-sigma.vercel.app/tools/base64-encoder-decoder";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder — Free Online Tool",
  description: "Encode text to Base64 or decode Base64 strings instantly. Free online Base64 encoder and decoder.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage title="Base64 Encoder / Decoder" canonical={url}
      description="Encode any text to Base64 or decode a Base64 string back to plain text."
      faqs={[
        { q: "What is Base64?", a: "Base64 is an encoding scheme that converts binary data into ASCII text, commonly used in emails and data URLs." },
        { q: "Is my data safe?", a: "Yes. All encoding and decoding happens in your browser — nothing is sent to a server." },
      ]}>
      <Base64Tool />
    </ToolPage>
  );
}
