import type { Metadata } from "next";
import OvertimeClient from "./OvertimeClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Overtime Pay Calculator Malaysia";
const DESCRIPTION = "Calculate overtime pay for normal working days, rest days and public holidays under the Employment Act 1955.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/overtime-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/overtime-calculator"))} />
      <OvertimeClient />
    </>
  );
}
