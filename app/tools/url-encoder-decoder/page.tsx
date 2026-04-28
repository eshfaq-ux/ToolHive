import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import UrlEncoderDecoder from "@/components/tools/UrlEncoderDecoder";

const url = "https://tool-hive-sigma.vercel.app/tools/url-encoder-decoder";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder — Free Online Tool",
  description: "Encode or decode URLs instantly. Convert special characters to percent-encoded format and back. Free online URL encoder.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage title="URL Encoder / Decoder" canonical={url}
      description="Encode special characters in URLs or decode percent-encoded strings back to readable text."
      faqs={[
        { q: "When do I need to encode a URL?", a: "When a URL contains spaces or special characters like &, =, or # that need to be safely transmitted." },
        { q: "Is this the same as encodeURIComponent?", a: "Yes, this tool uses encodeURIComponent which encodes all special characters except letters, digits, and - _ . ! ~ * ' ( )." },
      ]}>
      <UrlEncoderDecoder />
    </ToolPage>
  );
}
