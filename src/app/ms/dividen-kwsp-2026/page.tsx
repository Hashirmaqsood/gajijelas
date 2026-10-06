import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/dividen-kwsp-2026";
const TITLE = "Dividen KWSP 2026: Bila Diumumkan & Masuk Akaun?";
const DESCRIPTION =
  "Dividen KWSP 2026 belum diumumkan. Ketahui bila ia diumumkan dan masuk akaun, kadar 2025 (6.15%) dan cara kira dividen anda.";

const BODY = [
  "Dividen KWSP 2026 belum diumumkan. KWSP mengumumkan dividen setiap tahun pada bulan Februari tahun berikutnya, jadi dividen bagi tahun 2026 dijangka diumumkan sekitar akhir Februari 2027 dan dikreditkan ke akaun ahli pada atau sekitar 1 Mac 2027.",
  "## Bila dividen KWSP 2026 diumumkan dan masuk akaun?",
  "Berdasarkan corak sebelum ini, dividen 2025 diumumkan pada 28 Februari 2026 dan dikreditkan pada 1 Mac 2026. Dividen 2026 dijangka mengikut jadual yang sama, iaitu diumumkan pada minggu terakhir Februari 2027. Tarikh sebenar hanya disahkan oleh KWSP apabila pengumuman dibuat.",
  "## Berapa dividen KWSP 2026?",
  "Belum ada kadar rasmi bagi 2026. Pada 28 Februari 2026, ahli ekonomi yang dipetik oleh RTM menjangkakan KWSP akan mengekalkan dividen yang berdaya saing pada 2026, tanpa menyebut sebarang kadar. Itu hanyalah jangkaan pakar. Kadar akhir bergantung pada prestasi pelaburan KWSP sepanjang tahun, jadi sebarang peratusan khusus yang anda lihat sebelum pengumuman rasmi hanyalah andaian.",
  "## Kadar dividen KWSP lima tahun terakhir",
  "Sebagai perbandingan, jadual di bawah menunjukkan kadar yang telah diumumkan. Dividen 2025 ialah 6.15% dan dividen 2024 ialah 6.30% bagi kedua-dua jenis simpanan.",
  "## Cara kira dividen KWSP (anggaran)",
  "Anggaran mudah ialah baki simpanan anda didarab kadar dividen. Contohnya, simpanan RM50,000 sepanjang tahun pada 6.15% memberi kira-kira RM3,075. Dividen sebenar bergantung pada bila caruman masuk dan sebarang pengeluaran sepanjang tahun, jadi ini hanyalah panduan. Gunakan kalkulator persaraan EPF untuk melihat unjuran dividen terkumpul selama bertahun-tahun.",
  "## Kenapa kadar dividen tidak dijamin",
  "Dividen KWSP diisytiharkan setiap tahun berdasarkan prestasi pelaburan sebenar dana itu. Kadar minimum yang dijamin ialah 2.50% setahun bagi Simpanan Konvensional, manakala kadar yang melebihi itu tidak dijanjikan lebih awal.",
  "## Cara semak dividen apabila diumumkan",
  "Log masuk ke i-Akaun (aplikasi atau laman web) atau gunakan terminal layan diri KWSP untuk melihat penyata anda. Lihat juga panduan cara semak penyata dan baki KWSP.",
];

const TABLE: GuideTable = {
  afterIndex: 6,
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
    q: "Bila dividen KWSP 2026 masuk?",
    a: "Belum diumumkan. Mengikut corak biasa, dividen 2026 dijangka diumumkan pada minggu terakhir Februari 2027 dan dikreditkan sekitar 1 Mac 2027.",
  },
  {
    q: "Berapa dividen KWSP 2026?",
    a: "Belum ada kadar rasmi. KWSP hanya mengumumkan kadar selepas tahun berakhir, jadi sebarang peratusan bagi 2026 sebelum itu hanyalah jangkaan.",
  },
  {
    q: "Berapa dividen KWSP 2025?",
    a: "6.15% bagi kedua-dua Simpanan Konvensional dan Simpanan Shariah, diumumkan pada 28 Februari 2026 dan dikreditkan pada 1 Mac 2026.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/epf-dividend-2026-what-we-know",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/epf-dividend-2026-what-we-know",
    },
  },
};

export default function Page() {
  return (
    <MsArticlePage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      publishedDate="2026-10-06"
      dateLabel="6 Oktober 2026"
      breadcrumbName="Dividen KWSP 2026"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/epf-retirement-calculator", label: "Kalkulator Persaraan & Dividen EPF" },
        { href: "/ms/dividen-kwsp-2025", label: "Dividen KWSP 2025: Kadar 6.15%" },
        { href: "/ms/semak-penyata-kwsp", label: "Cara Semak Penyata KWSP" },
      ]}
    />
  );
}
