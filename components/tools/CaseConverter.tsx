"use client";
import { useState } from "react";

const cases = [
  { label: "UPPER CASE", fn: (t: string) => t.toUpperCase() },
  { label: "lower case", fn: (t: string) => t.toLowerCase() },
  { label: "Title Case", fn: (t: string) => t.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) },
  { label: "Sentence case", fn: (t: string) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() },
  { label: "camelCase", fn: (t: string) => t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()) },
  { label: "snake_case", fn: (t: string) => t.toLowerCase().replace(/\s+/g, "_") },
  { label: "kebab-case", fn: (t: string) => t.toLowerCase().replace(/\s+/g, "-") },
];

export default function CaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (fn: (t: string) => string) => { setOutput(fn(input)); setCopied(false); };
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text here…" rows={5}
        className="input resize-y w-full" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {cases.map(({ label, fn }) => (
          <button key={label} onClick={() => convert(fn)}
            className="py-2 px-3 rounded-xl text-sm font-medium transition-colors"
            style={{ background: "#353849", color: "#f0f2ff" }}>{label}</button>
        ))}
      </div>
      {output && (
        <div className="relative">
          <textarea readOnly value={output} rows={5}
            className="input resize-y w-full" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
          <button onClick={copy} className="absolute top-2 right-2 px-3 py-1 rounded-lg text-xs"
            style={{ background: "#1c1f2e", border: "1px solid #4a4e6a", color: "#9da3c8" }}>{copied ? "Copied!" : "Copy"}</button>
        </div>
      )}
    </div>
  );
}
