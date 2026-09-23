import { SITE } from "@/lib/site";

export function calculatorJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: `${SITE.url}${path}`,
    description,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
  };
}

export function articleJsonLd(opts: { title: string; description: string; path: string; publishedDate: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    datePublished: opts.publishedDate,
    dateModified: opts.publishedDate,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${opts.path}` },
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdScriptProps(data: object) {
  return { type: "application/ld+json" as const, dangerouslySetInnerHTML: { __html: JSON.stringify(data) } };
}
