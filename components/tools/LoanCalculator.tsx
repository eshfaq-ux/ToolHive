"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{ monthly: number; total: number; interest: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(principal), r = parseFloat(rate) / 100 / 12, n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult({ monthly, total: monthly * n, interest: monthly * n - p });
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Loan Amount ($)", value: principal, set: setPrincipal },
          { label: "Annual Interest Rate (%)", value: rate, set: setRate },
          { label: "Loan Term (years)", value: years, set: setYears },
        ].map(({ label, value, set }) => (
          <div key={label}>
            <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>{label}</label>
            <input type="number" value={value} onChange={(e) => set(e.target.value)} className="input" />
          </div>
        ))}
      </div>
      <button className="btn" onClick={calculate}>Calculate</button>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Monthly Payment", value: fmt(result.monthly), color: "#f0f2ff" },
            { label: "Total Payment", value: fmt(result.total), color: "#f0f2ff" },
            { label: "Total Interest", value: fmt(result.interest), color: "#f87171" },
          ].map(({ label, value, color }) => (
            <div key={label} className="card text-center">
              <div className="text-xs mb-1" style={{ color: "#9da3c8" }}>{label}</div>
              <div className="text-xl font-bold" style={{ color }}>{value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
