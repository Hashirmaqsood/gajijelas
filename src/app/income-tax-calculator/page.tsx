import type { Metadata } from "next";
import IncomeTaxClient from "./IncomeTaxClient";
import { calculatorJsonLd, faqPageJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import en from "@/lib/i18n/en";

const TITLE = "Income Tax Calculator Malaysia YA 2025 | Reliefs & Rates";
const DESCRIPTION =
  "Free Malaysia income tax calculator — enter your annual income and reliefs to see chargeable income, tax by band and tax payable. LHDN resident rates, YA 2025.";

const FAQ = [
  { q: en.incomeTaxPage.faqQ1, a: en.incomeTaxPage.faqA1 },
  { q: en.incomeTaxPage.faqQ2, a: en.incomeTaxPage.faqA2 },
  { q: en.incomeTaxPage.faqQ3, a: en.incomeTaxPage.faqA3 },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/income-tax-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/income-tax-calculator",
      "ms-MY": "https://gajijelas.com/ms/income-tax-calculator",
      "x-default": "https://gajijelas.com/income-tax-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/income-tax-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Income Tax Calculator", path: "/income-tax-calculator" }]))} />
      <IncomeTaxClient />
    </>
  );
}
