import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import UnitConverter from "@/components/tools/UnitConverter";

const url = "https://tool-hive-sigma.vercel.app/tools/unit-converter";

export const metadata: Metadata = {
  title: "Unit Converter — Length, Weight, Temperature",
  description: "Free online unit converter. Convert length, weight, and temperature units instantly. Meters to feet, kg to lbs, Celsius to Fahrenheit and more.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Unit Converter"
      description="Convert between length, weight, and temperature units instantly. Select a category, pick your units, and type a value."
      canonical={url}
      faqs={[
        { q: "How do I convert Celsius to Fahrenheit?", a: "Select Temperature, set From to Celsius and To to Fahrenheit, then enter your value. Formula: (°C × 9/5) + 32." },
        { q: "How many feet in a meter?", a: "1 meter = 3.28084 feet." },
        { q: "How many kg in a pound?", a: "1 pound = 0.453592 kilograms." },
      ]}
    >
      <UnitConverter />
    </ToolPage>
  );
}
