import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/content/guides";
import { SITE } from "@/lib/site";

// lastModified reflects each route's actual last content change (from git
// history), not build time — an always-"now" lastmod is a freshness signal
// Google explicitly says it learns to distrust and ignore.
const staticRoutes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-24" },
  { path: "/compare", lastModified: "2026-09-18" },
  { path: "/epf-calculator", lastModified: "2026-09-24" },
  { path: "/epf-retirement-calculator", lastModified: "2026-09-24" },
  { path: "/epf-account-split-calculator", lastModified: "2026-09-24" },
  { path: "/socso-calculator", lastModified: "2026-09-24" },
  { path: "/pcb-calculator", lastModified: "2026-09-24" },
  { path: "/hourly-rate-calculator", lastModified: "2026-09-20" },
  { path: "/overtime-calculator", lastModified: "2026-09-20" },
  { path: "/annual-leave-calculator", lastModified: "2026-09-20" },
  { path: "/mortgage-calculator", lastModified: "2026-09-24" },
  { path: "/zakat-calculator", lastModified: "2026-09-23" },
  { path: "/bonus-calculator", lastModified: "2026-09-24" },
  { path: "/rate-changes", lastModified: "2026-09-24" },
  { path: "/glossary", lastModified: "2026-09-24" },
  { path: "/faq", lastModified: "2026-09-18" },
  { path: "/guides", lastModified: "2026-09-20" },
  { path: "/about", lastModified: "2026-09-18" },
  { path: "/privacy-policy", lastModified: "2026-09-18" },
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
