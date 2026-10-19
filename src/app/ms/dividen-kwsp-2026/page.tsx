import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { dividendGrowthRows, dividendWhatIfRows } from "@/lib/content/rateTables";

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
  "## Apa maksud dividen ini kepada simpanan anda",
  "Jadual ialah ilustrasi, bukan ramalan. Ia menunjukkan dividen setahun bagi baki yang kekal dalam akaun anda sepanjang tahun, pada kadar 2025 iaitu 6.15% dan tiga kadar lain di sekelilingnya. Contohnya, baki RM100,000 memberi kira-kira RM6,150 pada 6.15% dan kira-kira RM5,500 pada 5.5%, iaitu beza RM650 setahun.",
  "## Kenapa dividen sebenar anda boleh berbeza daripada baki darab kadar",
  "Jadual mengandaikan wang berada dalam akaun anda sepanjang tahun. Sebenarnya, caruman yang masuk pada pertengahan tahun hanya mendapat dividen bagi tempoh ia berada dalam akaun, dan wang yang dikeluarkan berhenti menjana dividen mulai hari ia keluar. Orang yang menambah RM500 setiap bulan biasanya akan nampak angka lebih rendah daripada baki didarab kadar. Penyata i-Akaun anda menunjukkan jumlah tepat yang dikreditkan.",
  "## Bagaimana dividen berganda dari masa ke masa",
  "Dividen setiap tahun ditambah kepada simpanan anda dan menjana dividen pula pada tahun berikutnya, jadi beza kecil pada kadar menjadi beza besar selama beberapa dekad. Jadual meninggalkan RM50,000 tanpa disentuh dan tanpa caruman baharu: selepas 20 tahun ia mencapai kira-kira RM145,888 pada 5.5% tetapi kira-kira RM164,957 pada 6.15%, jurang kira-kira RM19,000 daripada beza kurang satu mata peratusan. Inilah sebabnya perancangan jangka panjang menggunakan julat dan bukan satu kadar.",
];

const WHAT_IF: GuideTable = {
  afterIndex: 14,
  caption: "Anggaran dividen KWSP setahun mengikut baki dan kadar (baki kekal sepanjang tahun)",
  headers: ["Baki KWSP", "Pada 5.5%", "Pada 6.0%", "Pada 6.15% (kadar 2025)", "Pada 6.5%"],
  rows: dividendWhatIfRows(),
};

const GROWTH: GuideTable = {
  afterIndex: 18,
  caption: "RM50,000 tanpa disentuh, dividen dilaburkan semula setiap tahun, tiada caruman baharu",
  headers: ["Selepas", "Pada 5.0%", "Pada 5.5%", "Pada 6.15%"],
  rows: dividendGrowthRows().map(([years, ...rest]) => [years.replace("years", "tahun"), ...rest]),
};

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
  {
    q: "Berapa dividen KWSP untuk simpanan RM100,000?",
    a: "Pada kadar 2025 iaitu 6.15%, baki RM100,000 yang kekal sepanjang tahun memberi kira-kira RM6,150. Kadar 2026 belum diumumkan, dan angka sebenar anda bergantung pada bila caruman masuk dan sebarang pengeluaran sepanjang tahun.",
  },
  {
    q: "Adakah kadar dividen KWSP dijamin?",
    a: "Tidak. Ia diisytiharkan setiap tahun berdasarkan prestasi pelaburan dana. Kadar minimum mengikut undang-undang ialah 2.50% setahun bagi Simpanan Konvensional, dan sebarang kadar lebih tinggi tidak dijanjikan lebih awal.",
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
      extraTables={[WHAT_IF, GROWTH]}
      updatedDate="2026-10-19"
      updatedLabel="19 Oktober 2026"
      faq={FAQ}
      related={[
        { href: "/ms/epf-retirement-calculator", label: "Kalkulator Persaraan & Dividen EPF" },
        { href: "/ms/dividen-kwsp-2025", label: "Dividen KWSP 2025: Kadar 6.15%" },
        { href: "/ms/semak-penyata-kwsp", label: "Cara Semak Penyata KWSP" },
      ]}
    />
  );
}
