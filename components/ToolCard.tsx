"use client";
import Link from "next/link";

export default function ToolCard({ name, href, desc }: { name: string; href: string; desc: string }) {
  return (
    <Link href={href} className="block p-4 rounded-xl transition-all"
      style={{ border: "1.5px solid #4a4e6a", background: "#1c1f2e" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7c6af7"; e.currentTarget.style.background = "#252839"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#4a4e6a"; e.currentTarget.style.background = "#1c1f2e"; }}>
      <div className="font-medium mb-1" style={{ color: "#f0f2ff" }}>{name}</div>
      <div className="text-sm" style={{ color: "#9da3c8" }}>{desc}</div>
    </Link>
  );
}
