import type { Metadata } from "next";
import SalaryIncrementClient from "@/app/salary-increment-calculator/SalaryIncrementClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Kenaikan Gaji Malaysia";
const DESCRIPTION =
  "Kalkulator kenaikan gaji percuma — lihat gaji baharu anda selepas kenaikan mengikut peratusan atau jumlah tetap, berserta unjuran berbilang tahun.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/salary-increment-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/salary-increment-calculator",
      "ms-MY": "https://gajijelas.com/ms/salary-increment-calculator",
      "x-default": "https://gajijelas.com/salary-increment-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/salary-increment-calculator"))} />
      <SalaryIncrementClient />
    </>
  );
}
