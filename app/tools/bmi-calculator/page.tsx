import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import BmiCalculator from "@/components/tools/BmiCalculator";

const url = "https://tool-hive-sigma.vercel.app/tools/bmi-calculator";

export const metadata: Metadata = {
  title: "BMI Calculator — Body Mass Index Online",
  description: "Calculate your Body Mass Index (BMI) instantly. Supports metric and imperial units. Free online BMI calculator.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage title="BMI Calculator" canonical={url}
      description="Calculate your Body Mass Index using metric (kg/cm) or imperial (lbs/ft) units."
      faqs={[
        { q: "What is BMI?", a: "Body Mass Index is a measure of body fat based on height and weight. It's used to screen for weight categories." },
        { q: "Is BMI accurate?", a: "BMI is a useful screening tool but doesn't directly measure body fat. Athletes may have high BMI due to muscle mass." },
        { q: "What is a healthy BMI?", a: "A BMI between 18.5 and 24.9 is considered normal weight for most adults." },
      ]}>
      <BmiCalculator />
    </ToolPage>
  );
}
