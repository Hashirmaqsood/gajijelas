import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES } from "@/lib/content/guides";
import GuideMeta from "./GuideMeta";
import ArticleBody from "@/components/content/ArticleBody";
import PageFaq from "@/components/content/PageFaq";
import { articleJsonLd, faqPageJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";
import { getAlternatePath } from "@/lib/i18n/routes";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return {};
  const alternate = getAlternatePath(`/guides/${guide.slug}`);
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
      ...(alternate
        ? {
            languages: {
              "en-MY": `${SITE.url}/guides/${guide.slug}`,
              "ms-MY": `${SITE.url}${alternate}`,
              "x-default": `${SITE.url}/guides/${guide.slug}`,
            },
          }
        : {}),
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <script
        {...jsonLdScriptProps(
          articleJsonLd({
            title: guide.title,
            description: guide.description,
            path: `/guides/${guide.slug}`,
            publishedDate: guide.publishedDate,
          })
        )}
      />
      {guide.faq && <script {...jsonLdScriptProps(faqPageJsonLd(guide.faq))} />}
      <GuideMeta />
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
        {new Date(guide.publishedDate).toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{guide.title}</h1>
      <p className="mt-3 text-base text-muted">{guide.description}</p>
      {guide.relatedLinks && guide.relatedLinks.length > 0 && (
        <p className="mt-3 text-sm text-muted">
          Free tool:{" "}
          <Link href={guide.relatedLinks[0].href} className="font-medium text-brand underline">
            {guide.relatedLinks[0].label} →
          </Link>
        </p>
      )}

      <ArticleBody body={guide.body} table={guide.table} />

      {guide.faq && <PageFaq title="Frequently asked questions" items={guide.faq} />}

      {guide.relatedLinks && guide.relatedLinks.length > 0 && (
        <div className="mt-10 border-t border-border pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Related calculators</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {guide.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-brand-dark hover:border-brand hover:bg-brand-light"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
