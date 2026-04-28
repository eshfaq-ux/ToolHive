"use client";
import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => { try { setOutput(btoa(unescape(encodeURIComponent(input)))); } catch { setOutput("Error encoding"); } };
  const decode = () => { try { setOutput(decodeURIComponent(escape(atob(input)))); } catch { setOutput("Invalid Base64 input"); } };
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or Base64 string…" rows={5}
        className="input resize-y w-full" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
      <div className="flex gap-3">
        <button onClick={encode} className="flex-1 py-2 rounded-xl font-medium text-sm" style={{ background: "#7c6af7", color: "#fff" }}>Encode</button>
        <button onClick={decode} className="flex-1 py-2 rounded-xl font-medium text-sm" style={{ background: "#353849", color: "#f0f2ff" }}>Decode</button>
      </div>
      {output && (
        <div className="relative">
          <textarea readOnly value={output} rows={5}
            className="input resize-y w-full font-mono text-sm" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
          <button onClick={copy} className="absolute top-2 right-2 px-3 py-1 rounded-lg text-xs"
            style={{ background: "#1c1f2e", border: "1px solid #4a4e6a", color: "#9da3c8" }}>{copied ? "Copied!" : "Copy"}</button>
        </div>
      )}
    </div>
  );
}
