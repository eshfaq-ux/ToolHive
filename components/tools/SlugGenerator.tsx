"use client";
import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const slug = input.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "").replace(/[\s_]+/g, "-").replace(/^-+|-+$/g, "");

  const copy = () => { navigator.clipboard.writeText(slug); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>Input Text</label>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="My Awesome Blog Post Title!"
          className="input" />
      </div>
      {slug && (
        <div className="card flex items-center gap-3">
          <span className="font-mono text-green-400 flex-1 break-all">{slug}</span>
          <button onClick={copy} className="btn-ghost text-xs px-3 py-1 shrink-0">{copied ? "✓" : "Copy"}</button>
        </div>
      )}
    </div>
  );
}
