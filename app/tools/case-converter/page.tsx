import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import CaseConverter from "@/components/tools/CaseConverter";

const url = "https://tool-hive-sigma.vercel.app/tools/case-converter";

export const metadata: Metadata = {
  title: "Case Converter — UPPER, lower, Title, camelCase & more",
  description: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, or kebab-case instantly.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage title="Case Converter" canonical={url}
      description="Convert text between uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and more."
      faqs={[
        { q: "What is camelCase?", a: "camelCase joins words without spaces, capitalizing each word after the first. Used in programming variable names." },
        { q: "What is snake_case?", a: "snake_case uses underscores between words in lowercase. Common in Python and database column names." },
        { q: "What is kebab-case?", a: "kebab-case uses hyphens between lowercase words. Commonly used in URLs and CSS class names." },
      ]}>
      <CaseConverter />
    </ToolPage>
  );
}
