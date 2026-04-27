import JsonLd from "@/components/JsonLd";

interface FAQ { q: string; a: string }

export default function ToolPage({
  title, description, canonical, children, faqs,
}: {
  title: string; description: string; canonical: string;
  children: React.ReactNode; faqs?: FAQ[];
}) {
  const webAppSchema = {
    "@context": "https://schema.org", "@type": "WebApplication",
    name: title, description, url: canonical,
    applicationCategory: "UtilitiesApplication", operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema = faqs?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  } : null;

  return (
    <div className="space-y-8">
      <JsonLd data={webAppSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
        <p style={{ color: "#9da3c8" }}>{description}</p>
      </div>

      {/* AdSense top */}
      <div className="w-full h-14 rounded-xl flex items-center justify-center text-xs"
        style={{ background: "#1c1f2e", border: "1.5px dashed #4a4e6a", color: "#4a4e6a" }}>
        Ad slot — 728×90
      </div>

      <div className="p-6 rounded-2xl" style={{ background: "#1c1f2e", border: "1.5px solid #353849" }}>
        {children}
      </div>

      {/* AdSense bottom */}
      <div className="w-full h-14 rounded-xl flex items-center justify-center text-xs"
        style={{ background: "#1c1f2e", border: "1.5px dashed #4a4e6a", color: "#4a4e6a" }}>
        Ad slot — 728×90
      </div>

      {faqs && faqs.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-4 rounded-xl" style={{ border: "1.5px solid #353849" }}>
                <div className="font-medium mb-1">{q}</div>
                <div className="text-sm" style={{ color: "#9da3c8" }}>{a}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
