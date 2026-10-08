import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/cuti-bersalin-swasta-akta-kerja";
const EN_PATH = "/guides/maternity-leave-malaysia-employment-act";
const TITLE = "Cuti Bersalin Swasta: 98 Hari & Syarat Layak";
const DESCRIPTION =
  "Cuti bersalin swasta ialah 98 hari berturut-turut di bawah Akta Kerja. Siapa yang layak, bagaimana elaun dibayar dan apa perlu diberitahu majikan.";

const BODY = [
  "Di bawah Akta Kerja 1955, pekerja wanita berhak mendapat 98 hari berturut-turut cuti bersalin bagi setiap kelahiran. Ia dilanjutkan daripada 60 hari oleh Akta Kerja (Pindaan) 2022, berkuat kuasa 1 Januari 2023.",
  "## Peraturan cuti bersalin sepintas lalu",
  "Jadual meringkaskan peraturan utama dalam Akta. Kontrak anda boleh memberi lebih daripada ini, tetapi tidak boleh kurang.",
  "## Gaji semasa cuti bersalin",
  "Semasa cuti bersalin anda menerima elaun bersalin pada kadar gaji biasa anda, selagi anda memenuhi syarat perkhidmatan dalam jadual. Oleh kerana 98 hari itu berturut-turut, hujung minggu dan cuti umum dalam tempoh itu dikira dalam 98 hari.",
  "## Apa lagi yang disemak oleh Akta",
  "Akta mengandungi syarat tambahan yang berkaitan dengan bilangan anak yang masih hidup, jadi semak teks semasa seksyen 37 atau tanya Jabatan Tenaga Kerja jika ini terpakai kepada anda.",
  "## Halaman ini meliputi siapa",
  "Ini ringkasan umum Akta Kerja bagi pekerja sektor swasta di Semenanjung Malaysia dan Labuan. Sabah dan Sarawak mempunyai Ordinan Buruh sendiri, dan penjawat awam mengikut pekeliling perkhidmatan awam, jadi peraturan mereka boleh berbeza.",
  "## Memaklumkan majikan",
  "Beritahu majikan butiran perubatan dan tarikh jangkaan bersalin anda lebih awal supaya tarikh mula dan serah tugas dapat dirancang. Jika suami anda bekerja dengan majikan swasta, beliau mungkin juga layak mendapat cuti paterniti.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Cuti bersalin di bawah Akta Kerja 1955",
  headers: ["Perkara", "Peruntukan Akta"],
  rows: [
    ["Tempoh", "98 hari berturut-turut bagi setiap kelahiran"],
    ["Gaji", "Elaun bersalin pada kadar gaji biasa anda"],
    ["Syarat perkhidmatan", "Bekerja sekurang-kurangnya 90 hari dalam 9 bulan sebelum bersalin, dan bekerja pada bila-bila masa dalam 4 bulan sebelumnya"],
    ["Apa yang dikira bersalin", "Kelahiran selepas kandungan sekurang-kurangnya 22 minggu, sama ada bayi lahir hidup atau tidak"],
    ["Bila bermula", "Tidak lebih awal daripada 30 hari sebelum tarikh jangkaan bersalin dan tidak lewat daripada hari selepas bersalin"],
    ["Kembali bekerja awal", "Boleh dengan persetujuan majikan dan sijil doktor bahawa anda sihat untuk bekerja"],
  ],
};

const FAQ = [
  {
    q: "Berapa hari cuti bersalin di Malaysia?",
    a: "98 hari berturut-turut bagi setiap kelahiran di bawah Akta Kerja 1955, sejak pindaan 2022 berkuat kuasa pada 1 Januari 2023. Peraturan lama memberi 60 hari.",
  },
  {
    q: "Adakah cuti bersalin bergaji di Malaysia?",
    a: "Ya, anda menerima elaun bersalin pada kadar gaji biasa jika anda memenuhi syarat perkhidmatan, termasuk sekurang-kurangnya 90 hari bekerja dalam 9 bulan sebelum bersalin.",
  },
  {
    q: "Adakah hujung minggu dan cuti umum dikira dalam 98 hari?",
    a: "Ya. 98 hari itu berturut-turut, jadi hujung minggu dan cuti umum dalam tempoh itu turut dikira.",
  },
  {
    q: "Bolehkah suami mengambil cuti apabila isteri bersalin?",
    a: "Pekerja lelaki berkahwin yang layak boleh mengambil 7 hari berturut-turut cuti paterniti. Lihat panduan cuti paterniti kami untuk syaratnya.",
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
      breadcrumbName="Cuti Bersalin Swasta"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/annual-leave-calculator", label: "Kalkulator Cuti Tahunan" },
        { href: "/ms/cuti-paterniti-cuti-isteri-bersalin", label: "Cuti Paterniti & Cuti Isteri Bersalin" },
        { href: "/ms/akta-kerja-1955-hak-pekerja", label: "Akta Kerja 1955: Hak Pekerja" },
        { href: "/ms/cuti-tahunan-cuti-sakit-akta-kerja", label: "Cuti Tahunan & Cuti Sakit" },
      ]}
    />
  );
}
