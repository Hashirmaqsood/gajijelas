import type { Metadata } from "next";
import OvertimeClient from "@/app/overtime-calculator/OvertimeClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Kalkulator Gaji Lebih Masa Malaysia";
const DESCRIPTION = "Kira gaji lebih masa di bawah Jadual Kedua Akta Kerja 1955, meliputi hari bekerja biasa, hari rehat dan cuti umum.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ms/overtime-calculator",
    languages: {
      "en-MY": "https://gajijelas.com/overtime-calculator",
      "ms-MY": "https://gajijelas.com/ms/overtime-calculator",
      "x-default": "https://gajijelas.com/overtime-calculator",
    },
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/ms/overtime-calculator"))} />
      <OvertimeClient />
    </>
  );
}
