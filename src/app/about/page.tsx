import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { CONTACT_EMAIL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who builds GajiJelas, how we source and verify EPF/SOCSO/EIS/PCB rates, and why nothing you type ever leaves your browser.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: CONTACT_EMAIL,
    areaServed: "MY",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutContent />
    </>
  );
}
