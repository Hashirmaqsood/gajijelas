import Link from "next/link";

export default function RelatedGuides({ links }: { links: { href: string; label: string }[] }) {
  if (links.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Related guides</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
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
  );
}
