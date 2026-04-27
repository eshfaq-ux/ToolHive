import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: { default: "ToolHive — Free Online Tools", template: "%s | ToolHive" },
  description: "Free online tools for images, math, finance, and SEO. Fast, private, no signup required.",
  metadataBase: new URL("https://toolhive.vercel.app"),
  openGraph: { siteName: "ToolHive", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: "var(--bg)", color: "var(--fg)" }}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
