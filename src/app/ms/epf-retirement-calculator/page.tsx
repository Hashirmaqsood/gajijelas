import type { Metadata } from "next";
import EpfRetirementClient from "@/app/epf-retirement-calculator/EpfRetirementClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Sasaran Persaraan EPF Malaysia";
const DESCRIPTION = "Unjurkan bagaimana simpanan EPF anda berkembang dari sekarang hingga persaraan, mengambil kira kenaikan gaji dan dividen tahunan berkompaun.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/epf-retirement-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/epf-retirement-calculator",
      "ms-MY": "https://gajijelas.com/ms/epf-retirement-calculator",
      "x-default": "https://gajijelas.com/epf-retirement-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/epf-retirement-calculator"))} />
      <EpfRetirementClient />
    </>
  );
}
