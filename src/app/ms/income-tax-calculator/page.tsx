import type { Metadata } from "next";
import IncomeTaxClient from "@/app/income-tax-calculator/IncomeTaxClient";
import { calculatorJsonLd, faqPageJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import ms from "@/lib/i18n/ms";

const TITLE = "Kalkulator Cukai Pendapatan Malaysia TA 2025 | Pelepasan";
const DESCRIPTION =
  "Kalkulator cukai pendapatan Malaysia percuma — lihat pendapatan bercukai, cukai setiap jalur dan cukai kena dibayar selepas pelepasan. Kadar LHDN TA 2025.";

const FAQ = [
  { q: ms.incomeTaxPage.faqQ1, a: ms.incomeTaxPage.faqA1 },
  { q: ms.incomeTaxPage.faqQ2, a: ms.incomeTaxPage.faqA2 },
  { q: ms.incomeTaxPage.faqQ3, a: ms.incomeTaxPage.faqA3 },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/income-tax-calculator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/income-tax-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Utama", path: "/ms" }, { name: "Kalkulator Cukai Pendapatan", path: "/ms/income-tax-calculator" }]))} />
      <IncomeTaxClient />
    </>
  );
}
