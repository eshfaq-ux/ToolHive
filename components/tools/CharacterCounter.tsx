"use client";
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.trim() === "" ? 0 : text.split(/\n+/).filter((p) => p.trim()).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const stats = [
    { label: "Characters", value: text.length },
    { label: "No Spaces", value: text.replace(/\s/g, "").length },
    { label: "Words", value: words },
    { label: "Sentences", value: sentences },
    { label: "Paragraphs", value: paragraphs },
    { label: "Read Time", value: `~${readTime} min` },
  ];

  return (
    <div className="space-y-4">
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here…" rows={8}
        className="input resize-y" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map(({ label, value }) => (
          <div key={label} className="card text-center">
            <div className="text-xl font-bold">{value}</div>
            <div className="text-xs mt-1" style={{ color: "#9da3c8" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
