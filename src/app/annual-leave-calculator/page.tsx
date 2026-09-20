import type { Metadata } from "next";
import AnnualLeaveClient from "./AnnualLeaveClient";
import { calculatorJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const TITLE = "Annual Leave Entitlement Calculator Malaysia";
const DESCRIPTION = "Work out your statutory annual leave entitlement and pro-rate it for a partial year of service under the Employment Act 1955.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/annual-leave-calculator" },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(calculatorJsonLd(TITLE, DESCRIPTION, "/annual-leave-calculator"))} />
      <AnnualLeaveClient />
    </>
  );
}
