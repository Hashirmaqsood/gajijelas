import type { Metadata } from "next";
import ProratedSalaryClient from "@/app/prorated-salary-calculator/ProratedSalaryClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Gaji Pro-rata Malaysia";
const DESCRIPTION =
  "Kalkulator gaji pro-rata percuma untuk Malaysia — gaji bulan tidak lengkap untuk mula kerja pertengahan bulan, peletakan jawatan atau cuti tanpa gaji.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/prorated-salary-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/prorated-salary-calculator",
      "ms-MY": "https://gajijelas.com/ms/prorated-salary-calculator",
      "x-default": "https://gajijelas.com/prorated-salary-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/prorated-salary-calculator"))} />
      <ProratedSalaryClient />
    </>
  );
}
