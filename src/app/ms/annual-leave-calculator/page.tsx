import type { Metadata } from "next";
import AnnualLeaveClient from "@/app/annual-leave-calculator/AnnualLeaveClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Kelayakan Cuti Tahunan Malaysia";
const DESCRIPTION = "Kira berapa hari cuti tahunan bergaji yang anda layak terima di bawah Akta Kerja 1955, termasuk pro-rata untuk tahun pertama yang tidak lengkap.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/annual-leave-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/annual-leave-calculator",
      "ms-MY": "https://gajijelas.com/ms/annual-leave-calculator",
      "x-default": "https://gajijelas.com/annual-leave-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/annual-leave-calculator"))} />
      <AnnualLeaveClient />
    </>
  );
}
