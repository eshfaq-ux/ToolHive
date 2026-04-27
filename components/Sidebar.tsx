"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "🖼️ Image Tools", items: [
    { name: "Image Compressor", href: "/tools/image-compressor" },
    { name: "Image Resizer", href: "/tools/image-resizer" },
  ]},
  { label: "🧮 Math & Finance", items: [
    { name: "Percentage Calc", href: "/tools/percentage-calculator" },
    { name: "Loan Calculator", href: "/tools/loan-calculator" },
    { name: "Unit Converter", href: "/tools/unit-converter" },
  ]},
  { label: "🔍 SEO Tools", items: [
    { name: "Meta Tag Generator", href: "/tools/meta-tag-generator" },
    { name: "Slug Generator", href: "/tools/slug-generator" },
    { name: "Character Counter", href: "/tools/character-counter" },
  ]},
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ background: "#1c1f2e", border: "1.5px solid #4a4e6a" }}>
        <span className="text-lg">{open ? "✕" : "☰"}</span>
      </button>

      <aside className={`fixed md:sticky top-0 h-screen w-60 flex flex-col p-5 overflow-y-auto z-40 transition-transform ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "#1c1f2e", borderRight: "1.5px solid #353849" }}>

        <Link href="/" className="text-base font-bold tracking-tight mb-8 mt-1 block" style={{ color: "#f0f2ff" }}>
          🐝 ToolHive
        </Link>

        <nav className="space-y-6 flex-1">
          {nav.map((group) => (
            <div key={group.label}>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>
                {group.label}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm transition-colors"
                      style={pathname === item.href
                        ? { background: "#7c6af733", color: "#a89cf8", fontWeight: 600 }
                        : { color: "#9da3c8" }}
                      onMouseEnter={(e) => { if (pathname !== item.href) e.currentTarget.style.color = "#f0f2ff"; }}
                      onMouseLeave={(e) => { if (pathname !== item.href) e.currentTarget.style.color = "#9da3c8"; }}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="text-xs mt-4 space-y-1" style={{ color: "#4a4e6a" }}>
          <div>© 2026 ToolHive</div>
          <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </aside>
    </>
  );
}
