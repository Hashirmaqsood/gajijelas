import type { Metadata } from "next";
import SalaryIncrementClient from "./SalaryIncrementClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Salary Increment Calculator Malaysia";
const DESCRIPTION =
  "Free salary increment calculator — see your new salary after a raise by percentage or fixed amount, plus a multi-year projection if it repeats.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/salary-increment-calculator",
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
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/salary-increment-calculator"))} />
      <SalaryIncrementClient />
    </>
  );
}
