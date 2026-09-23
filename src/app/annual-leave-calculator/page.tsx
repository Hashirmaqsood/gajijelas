import type { Metadata } from "next";
import AnnualLeaveClient from "./AnnualLeaveClient";
import { calculatorJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Annual Leave Entitlement Calculator Malaysia";
const DESCRIPTION = "Work out your statutory annual leave entitlement and pro-rate it for a partial year of service under the Employment Act 1955.";

const FAQ = [
  {
    q: "Does unused annual leave carry over to the next year?",
    a: "The Employment Act doesn't require it — carry-over depends on your employment contract or company policy. Some employers allow a limited carry-over, others don't; check your own contract for the specific rule.",
  },
  {
    q: "Are public holidays counted as annual leave?",
    a: "No, they're separate. Public holidays are a distinct statutory entitlement under the Employment Act and shouldn't be deducted from your annual leave balance.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/annual-leave-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/annual-leave-calculator"))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <AnnualLeaveClient />
    </>
  );
}
