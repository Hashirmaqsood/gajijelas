import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { epfContributionRows } from "@/lib/content/rateTables";

const PATH = "/ms/jadual-caruman-kwsp-2026";
const EN_PATH = "/guides/epf-contribution-table-2026-employee-employer";
const TITLE = "Jadual Caruman KWSP 2026: Kadar Pekerja & Majikan";
const DESCRIPTION =
  "Kadar caruman KWSP 2026 mengikut gaji: 11% pekerja, 13% atau 12% majikan, serta kadar umur 60 tahun ke atas dan pekerja asing. Jadual RM1,000 hingga RM10,000.";

const BODY = [
  "Caruman KWSP ialah peratusan daripada gaji bulanan anda. Kadarnya bergantung pada umur, sama ada anda warganegara atau pemastautin tetap Malaysia, dan sama ada gaji anda RM5,000 atau kurang.",
  "## Kadar caruman KWSP mengikut kategori",
  "Warganegara dan pemastautin tetap Malaysia bawah 60 tahun membayar 11% sebagai bahagian pekerja. Majikan membayar 13% jika gaji bulanan RM5,000 atau kurang, dan 12% jika melebihi RM5,000. Pekerja berumur 60 tahun ke atas tiada potongan pekerja yang diwajibkan dan majikan membayar 4%. Pekerja bukan warganegara mencarum 2% setiap seorang daripada pekerja dan majikan, yang menjadi wajib mulai Oktober 2025.",
  "## Jadual caruman KWSP mengikut gaji bulanan",
  "Jadual menunjukkan bahagian pekerja, bahagian majikan dan jumlah yang masuk ke akaun KWSP pekerja bagi pekerja Malaysia bawah 60 tahun. Gaji yang ditunjukkan ialah jumlah bulat, di mana peratusan tepat sama dengan jadual berjalur rasmi KWSP. Bagi gaji lain, Jadual Ketiga rasmi mengumpulkan gaji dalam jalur RM20 dan membundarkan ke atas, jadi slip gaji anda boleh berbeza satu dua ringgit.",
  "## Bagaimana dan bila caruman dibayar",
  "Majikan memotong bahagian pekerja daripada gaji dan membayar kedua-dua bahagian kepada KWSP selewat-lewatnya pada 15 haribulan berikutnya. Bonus, komisen dan kebanyakan elaun dikira sebagai gaji, jadi caruman turut dikenakan ke atasnya.",
  "## Kira caruman anda sendiri",
  "Masukkan gaji tepat anda dalam kalkulator KWSP untuk melihat caruman pekerja dan majikan serta pecahannya.",
];

const TABLE: GuideTable = {
  afterIndex: 4,
  caption: "Caruman KWSP mengikut gaji bulanan 2026 (pekerja Malaysia bawah 60 tahun)",
  headers: ["Gaji bulanan", "Pekerja (11%)", "Majikan (13% / 12%)", "Jumlah ke KWSP"],
  rows: epfContributionRows(),
};

const FAQ = [
  {
    q: "Berapa kadar caruman KWSP pada 2026?",
    a: "Bagi warganegara dan pemastautin tetap Malaysia bawah 60 tahun, pekerja membayar 11% dan majikan membayar 13% bagi gaji RM5,000 atau kurang, atau 12% bagi gaji melebihi RM5,000.",
  },
  {
    q: "Berapa caruman majikan kepada KWSP?",
    a: "13% daripada gaji bulanan jika pekerja bergaji RM5,000 atau kurang, 12% jika melebihi RM5,000, dan 4% bagi pekerja berumur 60 tahun ke atas.",
  },
  {
    q: "Adakah pekerja asing mencarum KWSP?",
    a: "Ya. Mulai Oktober 2025, KWSP wajib bagi pekerja bukan warganegara pada kadar 2% daripada pekerja dan 2% daripada majikan.",
  },
  {
    q: "Bila caruman KWSP mesti dibayar?",
    a: "Selewat-lewatnya pada 15 haribulan selepas gaji dibayar. Majikan membayar bahagian pekerja dan majikan bersama-sama.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": `https://gajijelas.com${EN_PATH}`,
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": `https://gajijelas.com${EN_PATH}`,
    },
  },
};

export default function Page() {
  return (
    <MsArticlePage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      publishedDate="2026-10-08"
      dateLabel="8 Oktober 2026"
      breadcrumbName="Jadual Caruman KWSP 2026"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/epf-calculator", label: "Kalkulator KWSP (EPF)" },
        { href: "/ms/socso-calculator", label: "Kalkulator PERKESO & EIS" },
        { href: "/ms/gaji-minimum-2026", label: "Gaji Minimum 2026" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}
