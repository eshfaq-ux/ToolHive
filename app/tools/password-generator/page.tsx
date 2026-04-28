import { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

const url = "https://tool-hive-sigma.vercel.app/tools/password-generator";

export const metadata: Metadata = {
  title: "Password Generator — Strong Random Passwords",
  description: "Generate strong, random passwords instantly. Customize length and character types. Free online password generator.",
  alternates: { canonical: url },
};

export default function Page() {
  return (
    <ToolPage title="Password Generator" canonical={url}
      description="Generate strong, random passwords with custom length and character options."
      faqs={[
        { q: "Are generated passwords stored?", a: "No. Passwords are generated entirely in your browser and never sent to any server." },
        { q: "What makes a strong password?", a: "At least 16 characters with uppercase, lowercase, numbers, and symbols." },
      ]}>
      <PasswordGenerator />
    </ToolPage>
  );
}
