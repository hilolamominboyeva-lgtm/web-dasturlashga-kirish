// js/katalog.js
document.addEventListener("DOMContentLoaded", () => {
  const konteyner = document.getElementById("katalog-konteyner");
  const qidiruvInput = document.getElementById("qidiruv-input");
  const kategoriyaSelect = document.getElementById("kategoriya-select");
  const saralashSelect = document.getElementById("saralash-select");
  const faqatMavjudCheckbox = document.getElementById("faqat-mavjud");
  const natijaSoniEl = document.getElementById("natija-soni");
  const boshXabarEl = document.getElementById("bosh-xabar");

  // Statistika elementlari
  const statJamiEl = document.getElementById("stat-jami");
  const statOrtachaEl = document.getElementById("stat-ortacha");
  const statEngQimmatEl = document.getElementById("stat-eng-qimmat");

  // Modal elementlari
  const modalBackdrop = document.getElementById("taom-modal");
  const modalYopishBtn = document.getElementById("modal-yopish");
  const modalRasm = document.getElementById("modal-rasm");
  const modalNom = document.getElementById("modal-nom");
  const modalKategoriya = document.getElementById("modal-kategoriya");
  const modalNarx = document.getElementById("modal-narx");
  const modalHolat = document.getElementById("modal-holat");
  const modalTavsif = document.getElementById("modal-tavsif");
  const modalTeglar = document.getElementById("modal-teglar");
  const modalSavatBtn = document.getElementById("modal-savat-btn");

  if (!konteyner || typeof taomlar === "undefined") {
    return;
  }

  let aktivModalTaomId = null;

  function statistikaniChiqar() {
    const stat = hisoblaStatistika(taomlar);
    if (statJamiEl) statJamiEl.textContent = String(stat.jamiSoni);
    if (statOrtachaEl) statOrtachaEl.textContent = narxFormatla(stat.ortacha);
    if (statEngQimmatEl) {
      statEngQimmatEl.textContent = `${stat.engQimmatNomi} (${narxFormatla(stat.engQimmatNarx)})`;
    }
  }

  function kategoriyaMatni(kod) {
    const lugat = {
      birinchi: "Birinchi taomlar",
      ikkinchi: "Ikkinchi taomlar",
      ichimlik: "Ichimliklar",
      shirinlik: "Shirinliklar"
    };
    return lugat[kod] || kod;
  }

  function kartaYaratish(taom) {
    const karta = document.createElement("article");
    karta.className = "karta taom-karta";
    karta.dataset.id = String(taom.id);

    const rasm = document.createElement("img");
    rasm.src = taom.rasm;
    rasm.alt = taom.nom;
    rasm.className = "taom-rasm";

    const body = document.createElement("div");
    body.className = "taom-body";

    const sarlavha = document.createElement("h3");
    sarlavha.textContent = taom.nom;

    const katBadge = document.createElement("span");
    katBadge.className = "taom-kategoriya";
    katBadge.textContent = kategoriyaMatni(taom.kategoriya);

    const tavsif = document.createElement("p");
    tavsif.className = "taom-tavsif";
    tavsif.textContent = taom.tavsif;

    const teglarWrap = document.createElement("div");
    teglarWrap.className = "teglar";
    taom.teglar.forEach((teg) => {
      const span = document.createElement("span");
      span.className = "teg";
      span.textContent = `#${teg}`;
      teglarWrap.append(span);
    });

    const narx = document.createElement("p");
    narx.className = "narx";
    narx.textContent = narxFormatla(taom.narx);

    const holat = document.createElement("p");
    holat.className = taom.mavjud ? "holat mavjud" : "holat tugagan";
    holat.textContent = taom.mavjud ? "Mavjud" : "Bugun tugagan";

    const amallar = document.createElement("div");
    amallar.className = "karta-amallar";

    const batafsilBtn = document.createElement("button");
    batafsilBtn.type = "button";
    batafsilBtn.className = "btn btn-ikkinchi batafsil-btn";
    batafsilBtn.dataset.action = "batafsil";
    batafsilBtn.dataset.id = String(taom.id);
    batafsilBtn.textContent = "Batafsil";

    const savatBtn = document.createElement("button");
    savatBtn.type = "button";
    savatBtn.className = "btn btn-asosiy savat-btn";
    savatBtn.dataset.action = "savat";
    savatBtn.dataset.id = String(taom.id);
    savatBtn.disabled = !taom.mavjud;

    const savatdaBormi = window.UIKomponentlar
      ? window.UIKomponentlar.savatdaBormi(taom.id)
      : false;
    savatBtn.textContent = !taom.mavjud
      ? "Mavjud emas"
      : savatdaBormi
        ? "Savatda bor ✓"
        : "Savatga";

    amallar.append(batafsilBtn, savatBtn);
    body.append(sarlavha, katBadge, tavsif, teglarWrap, narx, holat, amallar);
    karta.append(rasm, body);

    return karta;
  }

  function chiqar(royxat) {
    konteyner.innerHTML = "";

    if (natijaSoniEl) {
      natijaSoniEl.textContent = String(royxat.length);
    }

    if (royxat.length === 0) {
      if (boshXabarEl) {
        boshXabarEl.textContent = "Hech narsa topilmadi";
        boshXabarEl.hidden = false;
      }
      return;
    }

    if (boshXabarEl) {
      boshXabarEl.textContent = "";
      boshXabarEl.hidden = true;
    }

    const fragment = document.createDocumentFragment();
    royxat.forEach((taom) => {
      fragment.append(kartaYaratish(taom));
    });
    konteyner.append(fragment);
  }

  function saralashRoyxati(royxat, tartib) {
    const nusxa = [...royxat];
    switch (tartib) {
      case "narx-osish":
        return nusxa.sort((a, b) => a.narx - b.narx);
      case "narx-kamayish":
        return nusxa.sort((a, b) => b.narx - a.narx);
      case "nom-az":
        return nusxa.sort((a, b) => a.nom.localeCompare(b.nom, "uz"));
      case "nom-za":
        return nusxa.sort((a, b) => b.nom.localeCompare(a.nom, "uz")).reverse();
      default:
        return nusxa;
    }
  }

  function yangila() {
    const soz = (qidiruvInput ? qidiruvInput.value : "").trim().toLowerCase();
    const tanlanganKat = kategoriyaSelect ? kategoriyaSelect.value : "barchasi";
    const saralashTuri = saralashSelect ? saralashSelect.value : "standart";
    const faqatMavjud = faqatMavjudCheckbox ? faqatMavjudCheckbox.checked : false;

    const filtrlangan = taomlar.filter((taom) => {
      const nomMos = taom.nom.toLowerCase().includes(soz);
      const tegMos = taom.teglar.some((teg) => teg.toLowerCase().includes(soz));
      const qidiruvMos = soz === "" || nomMos || tegMos;

      const katMos = tanlanganKat === "barchasi" || taom.kategoriya === tanlanganKat;
      const mavjudMos = !faqatMavjud || taom.mavjud === true;

      return qidiruvMos && katMos && mavjudMos;
    });

    const yakuniy = saralashRoyxati(filtrlangan, saralashTuri);
    chiqar(yakuniy);
  }

  function modalOchish(taomId) {
    const topilgan = taomlar.find((item) => item.id === Number(taomId));
    if (!topilgan || !modalBackdrop) return;

    aktivModalTaomId = topilgan.id;
    modalRasm.src = topilgan.rasm;
    modalRasm.alt = topilgan.nom;
    modalNom.textContent = topilgan.nom;
    modalKategoriya.textContent = kategoriyaMatni(topilgan.kategoriya);
    modalNarx.textContent = narxFormatla(topilgan.narx);
    modalHolat.textContent = topilgan.mavjud ? "Mavjud" : "Vaqtincha mavjud emas";
    modalTavsif.textContent = topilgan.tavsif;

    modalTeglar.innerHTML = "";
    topilgan.teglar.forEach((teg) => {
      const span = document.createElement("span");
      span.className = "teg";
      span.textContent = `#${teg}`;
      modalTeglar.append(span);
    });

    if (modalSavatBtn) {
      modalSavatBtn.disabled = !topilgan.mavjud;
      const bor = window.UIKomponentlar
        ? window.UIKomponentlar.savatdaBormi(topilgan.id)
        : false;
      modalSavatBtn.textContent = !topilgan.mavjud
        ? "Mavjud emas"
        : bor
          ? "Savatdan olib tashlash"
          : "Savatga qo'shish";
    }

    modalBackdrop.classList.add("ochiq");
    modalBackdrop.setAttribute("aria-hidden", "false");
  }

  function modalYopish() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("ochiq");
    modalBackdrop.setAttribute("aria-hidden", "true");
    aktivModalTaomId = null;
  }

  // Event delegation bitta ota konteynerda
  konteyner.addEventListener("click", (e) => {
    const tugma = e.target.closest("button[data-action]");
    if (!tugma) return;

    const action = tugma.dataset.action;
    const id = Number(tugma.dataset.id);

    if (action === "batafsil") {
      modalOchish(id);
    } else if (action === "savat") {
      if (window.UIKomponentlar) {
        window.UIKomponentlar.savatniOzgar(id);
        yangila();
      }
    }
  });

  if (modalYopishBtn) {
    modalYopishBtn.addEventListener("click", modalYopish);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        modalYopish();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("ochiq")) {
      modalYopish();
    }
  });

  if (modalSavatBtn) {
    modalSavatBtn.addEventListener("click", () => {
      if (aktivModalTaomId !== null && window.UIKomponentlar) {
        window.UIKomponentlar.savatniOzgar(aktivModalTaomId);
        modalOchish(aktivModalTaomId);
        yangila();
      }
    });
  }

  if (qidiruvInput) qidiruvInput.addEventListener("input", yangila);
  if (kategoriyaSelect) kategoriyaSelect.addEventListener("change", yangila);
  if (saralashSelect) saralashSelect.addEventListener("change", yangila);
  if (faqatMavjudCheckbox) faqatMavjudCheckbox.addEventListener("change", yangila);

  statistikaniChiqar();
  yangila();
});