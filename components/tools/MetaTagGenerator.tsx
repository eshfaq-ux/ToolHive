"use client";
import { useState } from "react";

export default function MetaTagGenerator() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const tags = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
${keywords ? `<meta name="keywords" content="${keywords}">` : ""}
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
${url ? `<meta property="og:url" content="${url}">` : ""}
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">`.trim();

  const copy = () => { navigator.clipboard.writeText(tags); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      {[
        { label: "Page Title", value: title, set: setTitle, max: 60, placeholder: "My Awesome Page" },
        { label: "Meta Description", value: desc, set: setDesc, max: 160, placeholder: "A brief description..." },
        { label: "Keywords (comma separated)", value: keywords, set: setKeywords, max: 0, placeholder: "seo, tools, free" },
        { label: "Page URL", value: url, set: setUrl, max: 0, placeholder: "https://example.com/page" },
      ].map(({ label, value, set, max, placeholder }) => (
        <div key={label}>
          <div className="flex justify-between mb-1">
            <label className="text-xs" style={{ color: "#9da3c8" }}>{label}</label>
            {max > 0 && <span className="text-xs" style={{ color: value.length > max ? "#f87171" : "#9da3c8" }}>{value.length}/{max}</span>}
          </div>
          <input value={value} onChange={(e) => set(e.target.value)} placeholder={placeholder} className="input"
            style={{ "::placeholder": { color: "#9da3c8" } } as React.CSSProperties} />
        </div>
      ))}
      {title && (
        <div className="relative">
          <pre className="card text-xs overflow-x-auto whitespace-pre-wrap" style={{ color: "#a5b4fc" }}>{tags}</pre>
          <button onClick={copy} className="btn-ghost absolute top-3 right-3 text-xs px-3 py-1">
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
