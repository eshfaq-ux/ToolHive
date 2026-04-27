import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import LoanCalculator from "@/components/tools/LoanCalculator";

const url = "https://tool-hive-sigma.vercel.app/tools/loan-calculator";

export const metadata: Metadata = {
  title: "Loan Calculator — Monthly Payment & Interest",
  description: "Calculate monthly loan payments, total repayment, and total interest for any loan. Free online mortgage and loan calculator.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage
      title="Loan Calculator"
      description="Enter your loan amount, interest rate, and term to instantly see monthly payments, total cost, and total interest paid."
      canonical={url}
      faqs={[
        { q: "What formula is used?", a: "Standard amortization formula: M = P[r(1+r)^n] / [(1+r)^n - 1], where P = principal, r = monthly rate, n = number of payments." },
        { q: "Does this work for mortgages?", a: "Yes. Enter the home loan amount, annual interest rate, and term in years." },
        { q: "Is this calculator accurate?", a: "It calculates standard fixed-rate amortization. It does not account for taxes, insurance, or variable rates." },
      ]}
    >
      <LoanCalculator />
    </ToolPage>
  );
}
