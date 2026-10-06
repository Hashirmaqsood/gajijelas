import Link from "next/link";
import ArticleBody from "@/components/content/ArticleBody";
import PageFaq from "@/components/content/PageFaq";
import type { GuideTable } from "@/lib/content/guides";
import { articleJsonLd, faqPageJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

interface Props {
  path: string;
  title: string;
  description: string;
  publishedDate: string;
  dateLabel: string;
  breadcrumbName: string;
  body: string[];
  table?: GuideTable;
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
}

export default function MsArticlePage({ path, title, description, publishedDate, dateLabel, breadcrumbName, body, table, faq, related }: Props) {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <script {...jsonLdScriptProps(articleJsonLd({ title, description, path, publishedDate }))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(faq))} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Utama", path: "/ms" }, { name: breadcrumbName, path }]))} />
      <Link href="/guides" className="text-sm text-brand hover:underline">← Kembali ke panduan</Link>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">{dateLabel}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="mt-3 text-base text-muted">{description}</p>
      <p className="mt-3 text-sm text-muted">
        Alat percuma:{" "}
        <Link href={related[0].href} className="font-medium text-brand underline">{related[0].label} →</Link>
      </p>

      <ArticleBody body={body} table={table} />

      <PageFaq title="Soalan lazim" items={faq} />

      <div className="mt-10 border-t border-border pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Kalkulator berkaitan</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {related.map((link) => (
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
    </article>
  );
}
