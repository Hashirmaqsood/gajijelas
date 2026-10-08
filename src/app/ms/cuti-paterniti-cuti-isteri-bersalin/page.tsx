import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/cuti-paterniti-cuti-isteri-bersalin";
const EN_PATH = "/guides/paternity-leave-malaysia-employment-act";
const TITLE = "Cuti Paterniti: 7 Hari Cuti Isteri Bersalin";
const DESCRIPTION =
  "Pekerja lelaki berkahwin di Malaysia boleh mengambil 7 hari berturut-turut cuti paterniti. Siapa yang layak, notis yang perlu diberi dan bagaimana ia dibayar.";

const BODY = [
  "Sejak 1 Januari 2023, Akta Kerja 1955 memberi pekerja lelaki berkahwin yang layak 7 hari berturut-turut cuti paterniti bergaji bagi setiap kelahiran isteri. Ia diperkenalkan oleh Akta Kerja (Pindaan) 2022.",
  "## Peraturan cuti paterniti sepintas lalu",
  "Jadual meringkaskan syaratnya. Kontrak anda boleh menawarkan lebih daripada Akta, tetapi tidak boleh kurang.",
  "## Gaji semasa cuti paterniti",
  "Cuti paterniti dibayar pada kadar gaji biasa anda, jadi anda tidak sepatutnya kehilangan gaji untuk 7 hari itu.",
  "## Syarat 12 bulan perkhidmatan",
  "Anda mesti telah bekerja dengan majikan yang sama sekurang-kurangnya 12 bulan sebelum cuti paterniti bermula. Jika anda baru menyertai syarikat, semak sama ada dasar syarikat memberi cuti paterniti lebih awal daripada yang dikehendaki Akta.",
  "## Notis kepada majikan",
  "Anda mesti memberitahu majikan tentang kehamilan isteri sekurang-kurangnya 30 hari sebelum tarikh jangkaan bersalin, atau secepat mungkin selepas kelahiran jika bayi lahir awal.",
  "## Halaman ini meliputi siapa",
  "Ini ringkasan umum bagi pekerja sektor swasta di bawah Akta Kerja. Sabah dan Sarawak mempunyai Ordinan Buruh sendiri, dan penjawat awam mengikut pekeliling perkhidmatan awam, jadi peraturan mereka boleh berbeza.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Cuti paterniti di bawah Akta Kerja 1955",
  headers: ["Perkara", "Peruntukan Akta"],
  rows: [
    ["Tempoh", "7 hari berturut-turut bagi setiap kelahiran"],
    ["Siapa yang layak", "Pekerja lelaki yang berkahwin"],
    ["Syarat perkhidmatan", "Sekurang-kurangnya 12 bulan dengan majikan yang sama sebelum cuti bermula"],
    ["Notis", "Sekurang-kurangnya 30 hari sebelum tarikh jangkaan bersalin, atau secepat mungkin selepas kelahiran jika awal"],
    ["Gaji", "Kadar gaji biasa"],
    ["Had", "Sehingga lima kelahiran, tanpa mengira bilangan isteri"],
  ],
};

const FAQ = [
  {
    q: "Berapa hari cuti paterniti di Malaysia?",
    a: "7 hari berturut-turut bagi setiap kelahiran isteri anda, di bawah Akta Kerja 1955 seperti dipinda pada 2022.",
  },
  {
    q: "Adakah cuti paterniti bergaji di Malaysia?",
    a: "Ya, ia dibayar pada kadar gaji biasa anda.",
  },
  {
    q: "Siapa yang layak mendapat cuti isteri bersalin?",
    a: "Pekerja lelaki berkahwin yang telah bekerja dengan majikan yang sama sekurang-kurangnya 12 bulan sebelum cuti bermula dan telah memberi notis yang dikehendaki.",
  },
  {
    q: "Berapa notis perlu diberi untuk cuti paterniti?",
    a: "Sekurang-kurangnya 30 hari sebelum tarikh jangkaan bersalin, atau secepat mungkin selepas kelahiran jika bayi lahir awal.",
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
      breadcrumbName="Cuti Paterniti"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/annual-leave-calculator", label: "Kalkulator Cuti Tahunan" },
        { href: "/ms/cuti-bersalin-swasta-akta-kerja", label: "Cuti Bersalin Swasta: 98 Hari" },
        { href: "/ms/akta-kerja-1955-hak-pekerja", label: "Akta Kerja 1955: Hak Pekerja" },
      ]}
    />
  );
}
