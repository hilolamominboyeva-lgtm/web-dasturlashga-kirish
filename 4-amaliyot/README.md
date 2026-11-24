# Xorazm Dasturxoni — 4-Amaliy Ish (`amaliy-04`)

## Loyiha mavzusi
«Xorazm Dasturxoni» choyxonasi menyusi, katalogi va stol band qilish sahifalari JavaScript yordamida jonlantirilgan veb-ilova.

## Qo'shilgan imkoniyatlar
- **A qism (`js/data.js`)**: 12 ta taom obyektidan iborat massiv (`id`, `nom`, `kategoriya`, `narx`, `mavjud`, `rasm`, `teglar`, `tavsif`) va statistika bloki (jami soni, o'rtacha narx, eng qimmat taom).
- **B qism (`js/katalog.js`, `katalog.html`)**: Kartalarni `document.createElement` va `textContent` orqali dinamik chiqarish, qidiruv (`input`), kategoriya filtri (`select`), mavjudlik filtri (`checkbox`), saralash (`narx` o'sish/kamayish, `nom` A–Z/Z–A) va topilmaganda `Hech narsa topilmadi` xabari.
- **C qism (`js/ui.js`, `js/katalog.js`, `aloqa.html`)**:
  - Modal oyna («Batafsil» tugmasi, `×` tugmasi, fon ustiga bosish va `Escape` tugmasi bilan yopish).
  - Karta tugmalari uchun ota konteynerda event delegation (`e.target.closest`).
  - `aloqa.html` formasida `preventDefault()` bilan maydonlarni tekshirish (ism, email, `+998XXXXXXXXX` telefon, sana, izoh uzunligi) va muvaffaqiyat xabari chiqarish.
  - Mobil menyu (`burger-btn`), tungi rejim (`localStorage` da saqlanadi) va savat hisoblagichi (`localStorage` da saqlanadi).

## Ishlatilgan massiv metodlari qayerda ishlatilgan
- `map`: `js/data.js` (`taomNomlari`) — taom nomlari massivini olish.
- `filter`: `js/data.js` (`mavjudTaomlar`) va `js/katalog.js` (`yangila` funksiyasida qidiruv, kategoriya va mavjudlik bo'yicha filtrlash).
- `reduce`: `js/data.js` (`jamiNarx`, `ortachaNarx` va `hisoblaStatistika` ichida jami soni hamda umumiy summani hisoblash).
- `sort`: `js/data.js` (`engQimmatTaom`, `hisoblaStatistika`) va `js/katalog.js` (`saralashRoyxati` funksiyasida narx va nom bo'yicha saralash).
- `find`: `js/data.js` (`qidirilganPalov`, `hisoblaStatistika`) va `js/katalog.js` (`modalOchish` funksiyasida `id` bo'yicha taomni topish).