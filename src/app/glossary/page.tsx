import type { Metadata } from "next";
import GlossaryList from "./GlossaryList";
import { glossaryJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import { GLOSSARY } from "@/lib/content/glossary";

export const metadata: Metadata = {
  title: "Malaysia Payroll & Tax Glossary — EPF, SOCSO, PCB Terms",
  description:
    "Simple definitions for every Malaysian payroll and tax term — basic salary, gross vs net pay, EPF, SOCSO, EIS, PCB, chargeable income, tax relief and more.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  return (
    <>
      <script {...jsonLdScriptProps(glossaryJsonLd(GLOSSARY, "/glossary"))} />
      <GlossaryList />
    </>
  );
}
