import type { Metadata } from "next";
import ZakatClient from "@/app/zakat-calculator/ZakatClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Zakat Pendapatan Malaysia";
const DESCRIPTION = "Anggarkan zakat pendapatan anda — 2.5% daripada pendapatan tahunan sebaik mencapai paras nisab, menggunakan kaedah rasmi seperti PPZ-MAIWP.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/zakat-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/zakat-calculator",
      "ms-MY": "https://gajijelas.com/ms/zakat-calculator",
      "x-default": "https://gajijelas.com/zakat-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/zakat-calculator"))} />
      <ZakatClient />
    </>
  );
}
