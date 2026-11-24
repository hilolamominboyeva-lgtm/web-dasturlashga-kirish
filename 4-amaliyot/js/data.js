// js/data.js
const taomlar = [
  {
    id: 1,
    nom: "Shivit oshi",
    kategoriya: "birinchi",
    narx: 38000,
    mavjud: true,
    rasm: "rasmlar/shivitosh.jfif",
    teglar: ["xorazm", "ko'katli", "mashhur"],
    tavsif: "Ko'katli yashil xamirdan tayyorlangan, qatiq va go'sht qiymasi bilan beriladigan an'anaviy Xorazm taomi."
  },
  {
    id: 2,
    nom: "Mastava",
    kategoriya: "birinchi",
    narx: 28000,
    mavjud: true,
    rasm: "rasmlar/palov.jfif",
    teglar: ["suyuq", "guruchli", "issiq"],
    tavsif: "Guruch, sabzavotlar va go'sht solib qaynatilgan, qatiq hamda ko'kat qo'shib tortiladigan milliy sho'rva."
  },
  {
    id: 3,
    nom: "Xorazm palovi",
    kategoriya: "ikkinchi",
    narx: 45000,
    mavjud: true,
    rasm: "rasmlar/palov.jfif",
    teglar: ["palov", "go'shtli", "bayramona"],
    tavsif: "Mayda to'g'ralgan sabzi, saralangan go'sht va guruch bilan qozonda dimlab pishiriladigan to'yimli taom."
  },
  {
    id: 4,
    nom: "Tuxum barak",
    kategoriya: "ikkinchi",
    narx: 36000,
    mavjud: true,
    rasm: "rasmlar/tuxum-barak.jpg",
    teglar: ["xamirli", "tuxumli", "an'anaviy"],
    tavsif: "Tuxum, sut va ko'kat aralashmasi yupqa xamirga o'ralib, qaynoq suvda pishiriladigan o'ziga xos taom."
  },
  {
    id: 5,
    nom: "Dimlama",
    kategoriya: "ikkinchi",
    narx: 42000,
    mavjud: false,
    rasm: "rasmlar/palov.jfif",
    teglar: ["dimlangan", "sabzavotli", "to'yimli"],
    tavsif: "Go'sht, kartoshka, karam, piyoz va pomidor qatlam-qatlam terilib, o'z suvida dimlab pishiriladi."
  },
  {
    id: 6,
    nom: "Ko'k choy",
    kategoriya: "ichimlik",
    narx: 10000,
    mavjud: true,
    rasm: "rasmlar/shivitosh.jfif",
    teglar: ["choy", "tetiklashtiruvchi", "issiq"],
    tavsif: "Choynakda damlangan xushbo'y ko'k choy — dasturxonning ajralmas hamrohi."
  },
  {
    id: 7,
    nom: "Qora choy (limonli)",
    kategoriya: "ichimlik",
    narx: 12000,
    mavjud: true,
    rasm: "rasmlar/tuxum-barak.jpg",
    teglar: ["choy", "limonli", "klassik"],
    tavsif: "Yangi limon tilimlari bilan damlangan issiq qora choy."
  },
  {
    id: 8,
    nom: "Qatlama",
    kategoriya: "shirinlik",
    narx: 18000,
    mavjud: true,
    rasm: "rasmlar/tuxum-barak.jpg",
    teglar: ["shirinlik", "qarsildoq", "choyga"],
    tavsif: "Qatlamali xamirdan yog'da qovurilib, ustiga shakar sepa tortiladigan milliy shirinlik."
  },
  {
    id: 9,
    nom: "Chak-chak",
    kategoriya: "shirinlik",
    narx: 22000,
    mavjud: true,
    rasm: "rasmlar/palov.jfif",
    teglar: ["asal", "shirinlik", "bayram"],
    tavsif: "Mayda xamir bo'laklari qovurilib, tabiiy asal qiyomi bilan birlashtirilgan shirinlik."
  },
  {
    id: 10,
    nom: "Qovurdoq",
    kategoriya: "ikkinchi",
    narx: 48000,
    mavjud: true,
    rasm: "rasmlar/shivitosh.jfif",
    teglar: ["go'shtli", "qovurilgan", "maxsus"],
    tavsif: "Mayin qo'y go'shti, piyoz va ziravorlar bilan qovurib tayyorlanadigan Xorazmcha taom."
  },
  {
    id: 11,
    nom: "Ayron (salqin)",
    kategoriya: "ichimlik",
    narx: 9000,
    mavjud: true,
    rasm: "rasmlar/shivitosh.jfif",
    teglar: ["salqin", "qatiqli", "yozgi"],
    tavsif: "Sovutilgan qatiq, ozgina tuz va ko'kat bilan tayyorlangan tetiklantiruvchi ichimlik."
  },
  {
    id: 12,
    nom: "Xorazm patir va qaymoq",
    kategoriya: "shirinlik",
    narx: 25000,
    mavjud: false,
    rasm: "rasmlar/tuxum-barak.jpg",
    teglar: ["patir", "qaymoq", "nonushta"],
    tavsif: "Tandirda yopilgan xushbo'y patir va quyuq qaymoq bilan tortiladigan nonushta taomi."
  }
];

// Massiv metodlarini amalda qo'llash (kamida 1 martadan: map, filter, reduce, sort, find)
const taomNomlari = taomlar.map((t) => t.nom);
const mavjudTaomlar = taomlar.filter((t) => t.mavjud === true);
const jamiNarx = taomlar.reduce((yigindi, t) => yigindi + t.narx, 0);
const ortachaNarx = Math.round(jamiNarx / taomlar.length);

const engQimmatTaom = [...taomlar].sort((a, b) => b.narx - a.narx)[0];
const qidirilganPalov = taomlar.find((t) => t.id === 3);

function hisoblaStatistika(royxat = taomlar) {
  const jamiSoni = royxat.reduce((saniq) => saniq + 1, 0);
  const umumiySumma = royxat.reduce((sum, item) => sum + item.narx, 0);
  const ortacha = jamiSoni > 0 ? Math.round(umumiySumma / jamiSoni) : 0;

  const engQimmat = royxat.length > 0
    ? [...royxat].sort((a, b) => b.narx - a.narx).find((item) => Boolean(item.nom))
    : null;

  return {
    jamiSoni,
    ortacha,
    engQimmatNomi: engQimmat ? engQimmat.nom : "Ma'lumot yo'q",
    engQimmatNarx: engQimmat ? engQimmat.narx : 0
  };
}

function narxFormatla(summa) {
  return `${Number(summa).toLocaleString("uz-UZ")} so'm`;
}