import { ReactNode } from "react";

export default function ToolPageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="mt-2 max-w-2xl text-base text-muted">{intro}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}
