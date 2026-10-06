import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { houseSalaryRows } from "@/lib/content/rateTables";

const PATH = "/ms/berapa-gaji-untuk-beli-rumah";
const TITLE = "Berapa Gaji Diperlukan untuk Beli Rumah? Jadual & Kiraan";
const DESCRIPTION =
  "Berapa gaji untuk beli rumah RM300,000 hingga RM1 juta? Lihat ansuran bulanan dan gaji bawa balik yang menjadikan DSR selesa.";

const BODY = [
  "Gaji yang diperlukan bergantung pada harga rumah, jumlah pinjaman dan hutang anda yang lain. Cara perancangan yang praktikal ialah memastikan ansuran bulanan berada dalam lingkungan 30% hingga 40% gaji bawa balik anda.",
  "## Gaji diperlukan mengikut harga hartanah",
  "Jadual mengandaikan bayaran pendahuluan 10% dan pinjaman 30 tahun pada kadar 4% setahun. Ia menunjukkan ansuran bulanan dan gaji bawa balik yang diperlukan supaya ansuran itu kekal dalam 40% dan dalam 30% gaji anda.",
  "## Kenapa 30% hingga 40%?",
  "Pemberi pinjaman melihat Nisbah Khidmat Hutang (DSR) anda, yang membandingkan semua bayaran hutang bulanan anda dengan pendapatan. Tiada had undang-undang tunggal dan setiap bank menentukannya sendiri, tetapi DSR di bawah 30% hingga 40% biasanya dianggap selesa, manakala melebihi 60% hingga 70% lazimnya memerlukan profil pendapatan yang kukuh atau cagaran.",
  "## Bank menggunakan pendapatan kasar dan semua hutang anda",
  "Bank menilai pendapatan kasar anda dan mengambil kira komitmen lain seperti pinjaman kereta dan kad kredit. Jadual menggunakan gaji bawa balik sebagai panduan perancangan yang mudah, jadi kelulusan sebenar boleh berbeza.",
  "## Kos lain yang perlu dibajetkan",
  "Yuran guaman, duti setem dan yuran penilaian adalah berasingan daripada ansuran dan tidak termasuk dalam angka ini.",
  "## Cuba angka anda sendiri",
  "Masukkan harga, bayaran pendahuluan, kadar faedah dan gaji bawa balik anda dalam kalkulator gadai janji untuk melihat ansuran dan DSR anda.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Gaji diperlukan mengikut harga hartanah (10% pendahuluan, 30 tahun, 4%)",
  headers: ["Harga hartanah", "Pinjaman", "Ansuran bulanan", "Gaji bawa balik untuk 40%", "Gaji bawa balik untuk 30%"],
  rows: houseSalaryRows(),
};

const FAQ = [
  {
    q: "Berapa gaji diperlukan untuk beli rumah RM300,000?",
    a: "Dengan bayaran pendahuluan 10% dan pinjaman 30 tahun pada 4%, ansuran ialah kira-kira RM1,289 sebulan. Untuk mengekalkannya dalam 40% gaji bawa balik, anda memerlukan kira-kira RM3,250 sebulan, dan dalam 30% kira-kira RM4,300. Keputusan bank anda boleh berbeza.",
  },
  {
    q: "Adakah bank di Malaysia menggunakan gaji kasar atau bersih untuk pinjaman rumah?",
    a: "Bank mengira DSR anda menggunakan pendapatan kasar dan semua hutang sedia ada anda digabungkan, bukan gaji bawa balik.",
  },
  {
    q: "Berapakah DSR yang dianggap selesa untuk pinjaman rumah?",
    a: "Tiada had undang-undang tunggal. Sebagai corak umum, DSR di bawah 30% hingga 40% dianggap selesa, dan melebihi 60% hingga 70% lazimnya memerlukan profil pendapatan yang kukuh atau cagaran.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/how-much-salary-to-buy-a-house-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/how-much-salary-to-buy-a-house-malaysia",
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
      breadcrumbName="Berapa Gaji untuk Beli Rumah"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/mortgage-calculator", label: "Kalkulator Gadai Janji & DSR" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
        { href: "/ms/gaji-berapa-kena-cukai-pendapatan", label: "Gaji Berapa Kena Cukai?" },
      ]}
    />
  );
}
