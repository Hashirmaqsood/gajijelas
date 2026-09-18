import type { Metadata } from "next";
import GlossaryList from "./GlossaryList";

export const metadata: Metadata = {
  title: "Glossary — EPF, SOCSO, EIS, PCB Explained",
  description: "Plain-language definitions of Malaysian payroll and tax terms: EPF, SOCSO, EIS, PCB, gross vs net pay, chargeable income, tax relief and more.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  return <GlossaryList />;
}
