import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GajiJelas handles your data: what we collect, what we never see, and your rights under Malaysia's PDPA 2010.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
