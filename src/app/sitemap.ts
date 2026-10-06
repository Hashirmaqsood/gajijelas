import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/content/guides";
import { SITE } from "@/lib/site";

// lastModified reflects each route's actual last content change (from git
// history), not build time — an always-"now" lastmod is a freshness signal
// Google explicitly says it learns to distrust and ignore.
const staticRoutes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-10-06" },
  { path: "/compare", lastModified: "2026-09-18" },
  { path: "/epf-calculator", lastModified: "2026-10-06" },
  { path: "/epf-retirement-calculator", lastModified: "2026-09-24" },
  { path: "/epf-account-split-calculator", lastModified: "2026-09-24" },
  { path: "/socso-calculator", lastModified: "2026-10-06" },
  { path: "/pcb-calculator", lastModified: "2026-10-06" },
  { path: "/hourly-rate-calculator", lastModified: "2026-09-20" },
  { path: "/overtime-calculator", lastModified: "2026-10-06" },
  { path: "/annual-leave-calculator", lastModified: "2026-09-20" },
  { path: "/mortgage-calculator", lastModified: "2026-09-28" },
  { path: "/zakat-calculator", lastModified: "2026-09-23" },
  { path: "/bonus-calculator", lastModified: "2026-09-24" },
  { path: "/payslip-generator", lastModified: "2026-09-24" },
  { path: "/prorated-salary-calculator", lastModified: "2026-10-06" },
  { path: "/salary-increment-calculator", lastModified: "2026-09-27" },
  { path: "/income-tax-calculator", lastModified: "2026-10-06" },
  { path: "/rate-changes", lastModified: "2026-09-24" },
  { path: "/glossary", lastModified: "2026-09-26" },
  { path: "/faq", lastModified: "2026-09-18" },
  { path: "/guides", lastModified: "2026-10-06" },
  { path: "/about", lastModified: "2026-09-18" },
  { path: "/privacy-policy", lastModified: "2026-09-18" },
  // Malay versions (Phase 1: homepage + calculators only — guides aren't
  // translated yet).
  { path: "/ms", lastModified: "2026-10-06" },
  { path: "/ms/epf-calculator", lastModified: "2026-10-06" },
  { path: "/ms/epf-retirement-calculator", lastModified: "2026-09-24" },
  { path: "/ms/epf-account-split-calculator", lastModified: "2026-09-24" },
  { path: "/ms/socso-calculator", lastModified: "2026-10-06" },
  { path: "/ms/pcb-calculator", lastModified: "2026-10-06" },
  { path: "/ms/hourly-rate-calculator", lastModified: "2026-09-24" },
  { path: "/ms/overtime-calculator", lastModified: "2026-10-06" },
  { path: "/ms/annual-leave-calculator", lastModified: "2026-09-24" },
  { path: "/ms/mortgage-calculator", lastModified: "2026-09-28" },
  { path: "/ms/zakat-calculator", lastModified: "2026-09-24" },
  { path: "/ms/bonus-calculator", lastModified: "2026-09-24" },
  { path: "/ms/payslip-generator", lastModified: "2026-10-06" },
  { path: "/ms/prorated-salary-calculator", lastModified: "2026-10-06" },
  { path: "/ms/salary-increment-calculator", lastModified: "2026-09-27" },
  { path: "/ms/income-tax-calculator", lastModified: "2026-10-06" },
  { path: "/ms/dividen-kwsp-2025", lastModified: "2026-10-06" },
  { path: "/ms/pelepasan-cukai-2026", lastModified: "2026-10-06" },
  { path: "/ms/notis-berhenti-kerja", lastModified: "2026-10-06" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map(({ path, lastModified }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const guideEntries = GUIDES.map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    lastModified: new Date(g.publishedDate),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...guideEntries];
}
