import type { Metadata } from "next";
import GuidesListContent from "./GuidesListContent";

export const metadata: Metadata = {
  title: "Guides",
  description: "Original guides on Malaysian payroll: overtime rules, minimum wage, tax relief checklists, and how bonuses are taxed.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return <GuidesListContent />;
}
