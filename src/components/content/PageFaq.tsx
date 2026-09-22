import { Card } from "@/components/ui/Field";

export default function PageFaq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  if (items.length === 0) return null;

  return (
    <Card className="mt-6">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3">
        {items.map((item) => (
          <details key={item.q} className="group border-t border-border py-3 first:border-t-0 first:pt-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground marker:content-none">
              {item.q}
              <span className="shrink-0 text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Card>
  );
}
