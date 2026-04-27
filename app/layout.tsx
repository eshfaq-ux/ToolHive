import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: { default: "ToolHive — Free Online Tools", template: "%s | ToolHive" },
  description: "Free online tools for images, math, finance, and SEO. Fast, private, no signup required.",
  metadataBase: new URL("https://tool-hive-sigma.vercel.app"),
  openGraph: { siteName: "ToolHive", type: "website" },
  verification: { google: "QO40eNs8PCdWyLoNYVN5wSRil9NVnqsVjW1v-FAdfqk" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: "#0f1117", color: "#f0f2ff" }}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
