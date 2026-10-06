import type { Metadata } from "next";
import Link from "next/link";
import ArticleBody from "@/components/content/ArticleBody";
import PageFaq from "@/components/content/PageFaq";
import type { GuideTable } from "@/lib/content/guides";
import { articleJsonLd, faqPageJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const PATH = "/ms/dividen-kwsp-2025";
const TITLE = "Dividen KWSP 2025: Kadar 6.15%, Sejarah & Cara Semak";
const DESCRIPTION =
  "KWSP umum dividen 6.15% bagi 2025 (Konvensional & Shariah), dikreditkan 1 Mac 2026. Lihat kadar, sejarah dividen dan cara semak di i-Akaun.";

const BODY = [
  "KWSP mengumumkan dividen 6.15% bagi kedua-dua Simpanan Konvensional dan Simpanan Shariah untuk tahun 2025. Pengumuman dibuat pada 28 Februari 2026 dan dividen dikreditkan ke akaun ahli pada 1 Mac 2026, dengan jumlah agihan sebanyak RM79.6 bilion. Inilah kadar yang disahkan — jangkaan awal 6.3% hingga 6.5% hanyalah ramalan, bukan kadar yang diumumkan.",
  "## Berapa dividen KWSP 2025 dan sejarah kadar dividen?",
  "Kadar dividen KWSP 2025 ialah 6.15% bagi kedua-dua jenis simpanan. Jadual di bawah menunjukkan kadar lima tahun terakhir. Dividen setiap tahun diumumkan pada bulan Februari tahun berikutnya.",
  "## Bila dividen KWSP 2025 masuk?",
  "Dividen KWSP 2025 dikreditkan pada 1 Mac 2026. Penyata dividen boleh disemak melalui i-Akaun (laman web atau aplikasi) mulai 28 Februari 2026.",
  "## Cara semak dividen KWSP 2025",
  "Log masuk ke i-Akaun dan buka penyata anda, atau dapatkan penyata di Terminal Layan Diri (SST) KWSP. Dividen dikreditkan ke setiap akaun anda berdasarkan baki akaun tersebut.",
  "## Berapa anggaran dividen saya?",
  "Anggaran mudah ialah baki simpanan anda didarab kadar yang diumumkan. Contohnya, simpanan RM50,000 sepanjang tahun pada 6.15% memberi kira-kira RM3,075. Dividen sebenar boleh berbeza kerana bergantung pada bila caruman masuk dan sebarang pengeluaran sepanjang tahun, jadi anggarkan ini sebagai panduan sahaja. Untuk melihat kesan dividen terkumpul selama bertahun-tahun, gunakan kalkulator persaraan EPF.",
  "## Konvensional atau Shariah: adakah beza?",
  "Bagi 2025 dan 2024, kedua-dua jenis simpanan menerima kadar yang sama. Pada tahun-tahun sebelumnya kadarnya berbeza — contohnya pada 2022, kadar konvensional ialah 5.35% berbanding 4.75% bagi Shariah — jadi elok anda tahu jenis simpanan anda. Anda boleh menyemaknya dalam i-Akaun.",
  "## Bagaimana dengan dividen KWSP 2026?",
  "Dividen 2026 belum diumumkan. Mengikut corak biasa, pengumuman dijangka pada minggu terakhir Februari 2027. Sebarang peratusan khusus bagi 2026 yang dipetik sebelum itu hanyalah andaian.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Kadar dividen KWSP mengikut tahun",
  headers: ["Tahun", "Simpanan Konvensional", "Simpanan Shariah"],
  rows: [
    ["2025", "6.15%", "6.15%"],
    ["2024", "6.30%", "6.30%"],
    ["2023", "5.50%", "5.40%"],
    ["2022", "5.35%", "4.75%"],
    ["2021", "6.10%", "5.65%"],
  ],
};

const FAQ = [
  {
    q: "Berapa dividen KWSP 2025?",
    a: "6.15% bagi kedua-dua Simpanan Konvensional dan Simpanan Shariah. KWSP mengumumkannya pada 28 Februari 2026 dan mengkreditkannya ke akaun ahli pada 1 Mac 2026, dengan jumlah agihan RM79.6 bilion.",
  },
  {
    q: "Bila dividen KWSP 2025 masuk?",
    a: "Dividen KWSP 2025 dikreditkan pada 1 Mac 2026. Anda boleh menyemak penyata dividen di i-Akaun mulai 28 Februari 2026.",
  },
  {
    q: "Bila dividen KWSP 2026 akan diumumkan?",
    a: "Belum diumumkan. KWSP biasanya mengumumkan dividen tahun sebelumnya pada minggu terakhir Februari, jadi dividen 2026 dijangka sekitar akhir Februari 2027.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/epf-dividend-2025-rate-history",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/epf-dividend-2025-rate-history",
    },
  },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <script {...jsonLdScriptProps(articleJsonLd({ title: TITLE, description: DESCRIPTION, path: PATH, publishedDate: "2026-10-06" }))} />
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQ))} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Utama", path: "/ms" }, { name: "Dividen KWSP 2025", path: PATH }]))} />
      <Link href="/guides" className="text-sm text-brand hover:underline">← Kembali ke panduan</Link>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">6 Oktober 2026</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{TITLE}</h1>
      <p className="mt-3 text-base text-muted">{DESCRIPTION}</p>
      <p className="mt-3 text-sm text-muted">
        Alat percuma:{" "}
        <Link href="/ms/epf-retirement-calculator" className="font-medium text-brand underline">Kalkulator Persaraan &amp; Dividen EPF →</Link>
      </p>

      <ArticleBody body={BODY} table={TABLE} />

      <PageFaq title="Soalan lazim" items={FAQ} />

      <div className="mt-10 border-t border-border pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Kalkulator berkaitan</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[
            { href: "/ms/epf-retirement-calculator", label: "Kalkulator Persaraan & Dividen EPF" },
            { href: "/ms/epf-calculator", label: "Kalkulator EPF (KWSP)" },
            { href: "/ms/epf-account-split-calculator", label: "Pecahan Akaun EPF" },
          ].map((link) => (
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
