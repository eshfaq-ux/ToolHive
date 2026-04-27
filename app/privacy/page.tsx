import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ToolHive — how we handle your data.",
  alternates: { canonical: "https://tool-hive-sigma.vercel.app/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="prose max-w-3xl space-y-6" style={{ color: "#f0f2ff" }}>
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p style={{ color: "#9da3c8" }}>Last updated: April 27, 2026</p>

      {[
        {
          title: "Overview",
          body: "ToolHive ('we', 'us', 'our') operates the website tool-hive-sigma.vercel.app. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.",
        },
        {
          title: "Data We Collect",
          body: "We do not collect any personal information. All tools on ToolHive run entirely in your browser. No files, text, or inputs you enter are ever sent to our servers.",
        },
        {
          title: "Cookies & Advertising",
          body: "We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings at adssettings.google.com.",
        },
        {
          title: "Analytics",
          body: "We may use anonymized analytics (such as Vercel Analytics) to understand aggregate traffic patterns. This data does not identify individual users.",
        },
        {
          title: "Third-Party Links",
          body: "Our website may contain links to third-party sites. We have no control over the content and privacy practices of those sites and are not responsible for their privacy policies.",
        },
        {
          title: "Children's Privacy",
          body: "Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children.",
        },
        {
          title: "Changes to This Policy",
          body: "We may update this Privacy Policy from time to time. Changes are effective when posted on this page. We encourage you to review this page periodically.",
        },
        {
          title: "Contact Us",
          body: "If you have any questions about this Privacy Policy, please contact us at: privacy@tool-hive-sigma.vercel.app",
        },
      ].map(({ title, body }) => (
        <section key={title}>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p style={{ color: "#9da3c8" }}>{body}</p>
        </section>
      ))}
    </div>
  );
}
