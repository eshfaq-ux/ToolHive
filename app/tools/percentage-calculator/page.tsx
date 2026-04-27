import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

const url = "https://tool-hive-sigma.vercel.app/tools/percentage-calculator";

export const metadata: Metadata = {
  title: "Percentage Calculator — Free Online",
  description: "Calculate percentages instantly. Find X% of Y, what percent X is of Y, or percentage change between two values.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Percentage Calculator"
      description="Three modes: find a percentage of a number, calculate what percent one number is of another, or find percentage change."
      canonical={url}
      faqs={[
        { q: "How do I calculate 20% of 150?", a: "Select 'X% of Y', enter 20 and 150. Result: 30." },
        { q: "How do I find percentage increase?", a: "Select '% Change', enter the original value in From and the new value in To." },
        { q: "What is percentage change formula?", a: "((New - Old) / Old) × 100. A positive result is an increase, negative is a decrease." },
      ]}
    >
      <PercentageCalculator />
    </ToolPage>
  );
}
