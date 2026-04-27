"use client";
import { useState } from "react";

type Mode = "percent-of" | "what-percent" | "percent-change";
const modes = [
  { id: "percent-of" as Mode, label: "X% of Y", aLabel: "Percentage (%)", bLabel: "Value" },
  { id: "what-percent" as Mode, label: "X is what % of Y", aLabel: "Value X", bLabel: "Value Y" },
  { id: "percent-change" as Mode, label: "% Change", aLabel: "From", bLabel: "To" },
];

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("percent-of");
  const [a, setA] = useState(""); const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const x = parseFloat(a), y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) return setResult("Enter valid numbers");
    if (mode === "percent-of") setResult(`${x}% of ${y} = ${(x / 100 * y).toFixed(4)}`);
    else if (mode === "what-percent") setResult(`${x} is ${((x / y) * 100).toFixed(4)}% of ${y}`);
    else setResult(`Change from ${x} to ${y}: ${(((y - x) / x) * 100).toFixed(4)}%`);
  };

  const current = modes.find((m) => m.id === mode)!;

  return (
    <div className="space-y-5">
      <div className="flex gap-2 flex-wrap">
        {modes.map((m) => (
          <button key={m.id} onClick={() => { setMode(m.id); setResult(null); }} className={`tag ${mode === m.id ? "active" : ""}`}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {[{ label: current.aLabel, val: a, set: setA }, { label: current.bLabel, val: b, set: setB }].map(({ label, val, set }) => (
          <div key={label}>
            <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} className="input w-36" />
          </div>
        ))}
      </div>
      <button className="btn" onClick={calculate}>Calculate</button>
      {result && <div className="card font-mono text-green-400">{result}</div>}
    </div>
  );
}
