import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/lib/content/guides";
import GuideMeta from "./GuideMeta";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <GuideMeta />
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
        {new Date(guide.publishedDate).toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{guide.title}</h1>
      <p className="mt-3 text-base text-muted">{guide.description}</p>

      <div className="prose-content mt-8 space-y-4">
        {guide.body.map((paragraph, i) =>
          paragraph.startsWith("## ") ? (
            <h2 key={i} className="pt-2 text-xl font-semibold text-foreground">
              {paragraph.replace("## ", "")}
            </h2>
          ) : (
            <p key={i} className="text-[15px] leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          )
        )}
      </div>
    </article>
  );
}
