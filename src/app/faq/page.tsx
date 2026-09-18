import type { Metadata } from "next";
import { FAQ } from "@/lib/content/faq";
import FaqList from "./FaqList";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Accuracy, privacy, foreigner and non-resident rules, why PCB shows RM0, SOCSO's ceiling, and more — answered plainly.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqList />
    </>
  );
}
