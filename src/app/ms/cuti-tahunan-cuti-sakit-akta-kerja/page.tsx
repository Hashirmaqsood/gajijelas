import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/cuti-tahunan-cuti-sakit-akta-kerja";
const EN_PATH = "/guides/annual-leave-sick-leave-entitlement-malaysia";
const TITLE = "Cuti Tahunan & Cuti Sakit Pekerja Swasta 2026";
const DESCRIPTION =
  "Cuti tahunan pekerja swasta ialah 8, 12 atau 16 hari mengikut tempoh khidmat, dan cuti sakit 14, 18 atau 22 hari. Lihat jadual dan pengiraan tahun pertama.";

const BODY = [
  "Akta Kerja 1955 menetapkan cuti tahunan dan cuti sakit bergaji minimum berdasarkan tempoh anda bekerja dengan majikan. Kontrak atau dasar syarikat boleh memberi lebih daripada ini, tetapi tidak boleh kurang.",
  "## Cuti tahunan dan cuti sakit mengikut tempoh khidmat",
  "Jadual menunjukkan hari bergaji minimum setahun. Pekerja yang dimasukkan ke hospital boleh mengambil sehingga 60 hari cuti sakit bergaji setahun menggantikan elaun cuti sakit yang lebih pendek.",
  "## Cuti tahunan pro-rata pada tahun pertama",
  "Jika anda bekerja kurang 12 bulan pada tahun pertama, cuti tahunan dikira pro-rata: kelayakan setahun dibahagi 12, didarab dengan bilangan bulan perkhidmatan yang lengkap, dibundarkan kepada setengah hari terdekat. Contohnya, 8 hari dengan 6 bulan lengkap menjadi 4 hari.",
  "## Sijil cuti sakit",
  "Cuti sakit bergaji biasanya memerlukan sijil cuti sakit daripada pengamal perubatan berdaftar, jadi simpan sijil itu dan serahkan kepada majikan dengan segera.",
  "## Cuti umum",
  "Selain cuti, pekerja berhak mendapat 11 hari cuti umum bergaji setahun, termasuk 5 yang tetap: Hari Kebangsaan, Hari Pekerja, Hari Malaysia, Hari Keputeraan Agong dan Hari Keputeraan Sultan atau Yang di-Pertua Negeri.",
  "## Halaman ini meliputi siapa",
  "Ini ringkasan umum Akta Kerja bagi pekerja sektor swasta. Sabah dan Sarawak mempunyai Ordinan Buruh sendiri, dan penjawat awam mengikut peraturan perkhidmatan yang berasingan.",
  "## Kira cuti anda sendiri",
  "Masukkan tempoh khidmat dan bulan bekerja anda dalam kalkulator cuti tahunan untuk mendapatkan bilangan hari anda sendiri.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Cuti bergaji minimum setahun di bawah Akta Kerja 1955",
  headers: ["Tempoh khidmat", "Cuti tahunan", "Cuti sakit (tanpa hospital)", "Cuti sakit (dimasukkan ke hospital)"],
  rows: [
    ["Bawah 2 tahun", "8 hari", "14 hari", "Sehingga 60 hari"],
    ["2 tahun hingga bawah 5 tahun", "12 hari", "18 hari", "Sehingga 60 hari"],
    ["5 tahun atau lebih", "16 hari", "22 hari", "Sehingga 60 hari"],
  ],
};

const FAQ = [
  {
    q: "Berapa hari cuti tahunan pekerja swasta di Malaysia?",
    a: "Sekurang-kurangnya 8 hari jika bekerja bawah 2 tahun, 12 hari bagi 2 tahun hingga bawah 5 tahun, dan 16 hari bagi 5 tahun atau lebih, di bawah Akta Kerja 1955.",
  },
  {
    q: "Berapa hari cuti sakit pekerja swasta di Malaysia?",
    a: "14 hari bawah 2 tahun khidmat, 18 hari bagi 2 hingga bawah 5 tahun, dan 22 hari bagi 5 tahun atau lebih. Jika dimasukkan ke hospital, anda boleh mengambil sehingga 60 hari setahun.",
  },
  {
    q: "Bagaimana cuti tahunan dikira pada tahun pertama?",
    a: "Secara pro-rata: kelayakan setahun dibahagi 12, didarab dengan bulan perkhidmatan yang lengkap, dibundarkan kepada setengah hari terdekat.",
  },
  {
    q: "Berapa hari cuti umum bergaji di Malaysia?",
    a: "Pekerja berhak mendapat 11 hari cuti umum bergaji setahun, termasuk 5 yang tetap: Hari Kebangsaan, Hari Pekerja, Hari Malaysia, Hari Keputeraan Agong dan Hari Keputeraan Sultan atau Yang di-Pertua Negeri.",
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
      breadcrumbName="Cuti Tahunan & Cuti Sakit"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/annual-leave-calculator", label: "Kalkulator Cuti Tahunan" },
        { href: "/ms/akta-kerja-1955-hak-pekerja", label: "Akta Kerja 1955: Hak Pekerja" },
        { href: "/ms/cuti-tanpa-gaji-potongan-gaji", label: "Cuti Tanpa Gaji: Potongan Gaji" },
        { href: "/ms/prorated-salary-calculator", label: "Kalkulator Gaji Pro-rata" },
      ]}
    />
  );
}
