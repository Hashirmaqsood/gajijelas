import { Fragment } from "react";
import type { GuideTable } from "@/lib/content/guides";

function ArticleTable({ table }: { table: GuideTable }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full whitespace-nowrap text-sm tabular-nums">
        <caption className="border-b border-border px-4 py-2 text-left text-sm font-semibold text-foreground">{table.caption}</caption>
        <thead>
          <tr className="border-b border-border text-left text-muted">
            {table.headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, c) => (
                c === 0 ? (
                  <th key={c} scope="row" className="px-4 py-2 text-left font-semibold text-foreground">{cell}</th>
                ) : (
                  <td key={c} className="px-4 py-2">{cell}</td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleBody({ body, table, extraTables }: { body: string[]; table?: GuideTable; extraTables?: GuideTable[] }) {
  const tables = [...(table ? [table] : []), ...(extraTables ?? [])];
  return (
    <div className="prose-content mt-8 space-y-4">
      {body.map((paragraph, i) => (
        <Fragment key={i}>
          {paragraph.startsWith("## ") ? (
            <h2 className="pt-2 text-xl font-semibold text-foreground">{paragraph.replace("## ", "")}</h2>
          ) : (
            <p className="text-[15px] leading-relaxed text-foreground/90">{paragraph}</p>
          )}
          {tables.filter((t) => t.afterIndex === i).map((t) => (
            <ArticleTable key={t.caption} table={t} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
