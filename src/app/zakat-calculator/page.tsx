import type { Metadata } from "next";
import ZakatClient from "./ZakatClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Zakat Pendapatan Calculator Malaysia 2026 | Income Zakat";
const DESCRIPTION =
  "Free zakat pendapatan (income zakat) calculator for Malaysia — 2.5% of annual income once it meets your state's nisab threshold, which you can adjust.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/zakat-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/zakat-calculator"))} />
      <ZakatClient />
    </>
  );
}
