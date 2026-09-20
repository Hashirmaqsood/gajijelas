import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/content/guides";
import { SITE } from "@/lib/site";

const staticRoutes = [
  "",
  "/compare",
  "/epf-calculator",
  "/epf-retirement-calculator",
  "/epf-account-split-calculator",
  "/socso-calculator",
  "/pcb-calculator",
  "/hourly-rate-calculator",
  "/overtime-calculator",
  "/annual-leave-calculator",
  "/rate-changes",
  "/glossary",
  "/faq",
  "/guides",
  "/about",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
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
