// js/ui.js
(function () {
  const THEME_KEY = "xorazm_dasturxoni_theme";
  const CART_KEY = "xorazm_dasturxoni_savat";

  function savatniOqish() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function savatniSaqlash(ids) {
    localStorage.setItem(CART_KEY, JSON.stringify(ids));
    savatHisoblagichniYangila();
  }

  function savatdaBormi(id) {
    return savatniOqish().includes(Number(id));
  }

  function savatniOzgar(id) {
    const numId = Number(id);
    const hozirgi = savatniOqish();
    const yangi = hozirgi.includes(numId)
      ? hozirgi.filter((item) => item !== numId)
      : [...hozirgi, numId];
    savatniSaqlash(yangi);
    return yangi;
  }

  function savatHisoblagichniYangila() {
    const hisoblagichlar = document.querySelectorAll(".savat-hisoblagich");
    const soni = savatniOqish().length;
    hisoblagichlar.forEach((el) => {
      el.textContent = String(soni);
    });
  }

  function tungiRejimniQollash(tungi) {
    document.body.classList.toggle("tungi-rejim", Boolean(tungi));
    const tugmalar = document.querySelectorAll(".tungi-rejim-btn");
    tugmalar.forEach((btn) => {
      btn.textContent = tungi ? "Kunduzgi rejim" : "Tungi rejim";
      btn.setAttribute("aria-pressed", String(Boolean(tungi)));
    });
  }

  function tungiRejimniSozlash() {
    const saqlangan = localStorage.getItem(THEME_KEY) === "dark";
    tungiRejimniQollash(saqlangan);

    document.querySelectorAll(".tungi-rejim-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const hozirTungi = document.body.classList.contains("tungi-rejim");
        const keyingiHolat = !hozirTungi;
        localStorage.setItem(THEME_KEY, keyingiHolat ? "dark" : "light");
        tungiRejimniQollash(keyingiHolat);
      });
    });
  }

  function mobilMenyuniSozlash() {
    const burgerBtn = document.getElementById("burger-btn");
    const navMenu = document.getElementById("asosiy-nav");

    if (!burgerBtn || !navMenu) return;

    burgerBtn.addEventListener("click", () => {
      const ochiq = navMenu.classList.toggle("ochiq");
      burgerBtn.setAttribute("aria-expanded", String(ochiq));
    });

    navMenu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        navMenu.classList.remove("ochiq");
        burgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  function xatoKorsat(inputEl, xabar) {
    if (!inputEl) return;
    const maydon = inputEl.closest(".maydon") || inputEl.parentElement;
    const xatoEl = maydon ? maydon.querySelector(".xato-matn") : null;
    inputEl.classList.add("xato-input");
    if (xatoEl) {
      xatoEl.textContent = xabar;
    }
  }

  function xatoniTozala(inputEl) {
    if (!inputEl) return;
    const maydon = inputEl.closest(".maydon") || inputEl.parentElement;
    const xatoEl = maydon ? maydon.querySelector(".xato-matn") : null;
    inputEl.classList.remove("xato-input");
    if (xatoEl) {
      xatoEl.textContent = "";
    }
  }

  function formaniTekshirishSozlash() {
    const forma = document.getElementById("aloqa-forma");
    if (!forma) return;

    const ismInput = document.getElementById("ism");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");
    const sanaInput = document.getElementById("sana");
    const izohInput = document.getElementById("izoh");
    const muvaffaqiyatEl = document.getElementById("forma-muvaffaqiyat");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\+998\d{9}$/;

    function maydonniTekshir(inputEl) {
      if (!inputEl) return true;
      const qiymat = inputEl.value.trim();

      if (inputEl === ismInput) {
        if (qiymat.length < 2) {
          xatoKorsat(inputEl, "Ism kamida 2 ta belgidan iborat bo'lishi kerak.");
          return false;
        }
        xatoniTozala(inputEl);
        return true;
      }

      if (inputEl === emailInput) {
        if (!qiymat) {
          xatoKorsat(inputEl, "Email manzilini kiriting.");
          return false;
        }
        if (!emailRegex.test(qiymat)) {
          xatoKorsat(inputEl, "To'g'ri email formatini kiriting (masalan: ism@mail.uz).");
          return false;
        }
        xatoniTozala(inputEl);
        return true;
      }

      if (inputEl === telInput) {
        const tozalanganTel = qiymat.replace(/\s+/g, "");
        if (!telRegex.test(tozalanganTel)) {
          xatoKorsat(inputEl, "Telefon +998XXXXXXXXX formatida bo'lishi kerak (masalan: +998901234567).");
          return false;
        }
        xatoniTozala(inputEl);
        return true;
      }

      if (inputEl === sanaInput) {
        if (!qiymat) {
          xatoKorsat(inputEl, "Sana tanlanishi shart.");
          return false;
        }
        xatoniTozala(inputEl);
        return true;
      }

      if (inputEl === izohInput) {
        if (qiymat.length > 0 && qiymat.length < 10) {
          xatoKorsat(inputEl, "Izoh kiritilsa, kamida 10 ta belgidan iborat bo'lsin.");
          return false;
        }
        if (qiymat.length > 300) {
          xatoKorsat(inputEl, "Izoh 300 ta belgidan oshmasligi kerak.");
          return false;
        }
        xatoniTozala(inputEl);
        return true;
      }

      return true;
    }

    [ismInput, emailInput, telInput, sanaInput, izohInput].forEach((el) => {
      if (!el) return;
      el.addEventListener("input", () => {
        maydonniTekshir(el);
        if (muvaffaqiyatEl) muvaffaqiyatEl.textContent = "";
      });
      el.addEventListener("blur", () => maydonniTekshir(el));
    });

    forma.addEventListener("submit", (e) => {
      e.preventDefault();

      const tekshiruvlar = [
        maydonniTekshir(ismInput),
        maydonniTekshir(emailInput),
        maydonniTekshir(telInput),
        maydonniTekshir(sanaInput),
        maydonniTekshir(izohInput)
      ];

      const barchasiTogri = tekshiruvlar.every(Boolean);

      if (!barchasiTogri) {
        if (muvaffaqiyatEl) {
          muvaffaqiyatEl.textContent = "";
        }
        return;
      }

      forma.reset();
      [ismInput, emailInput, telInput, sanaInput, izohInput].forEach(xatoniTozala);

      if (muvaffaqiyatEl) {
        muvaffaqiyatEl.textContent = "Buyurtmangiz muvaffaqiyatli qabul qilindi! Tez orada bog'lanamiz.";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    tungiRejimniSozlash();
    mobilMenyuniSozlash();
    savatHisoblagichniYangila();
    formaniTekshirishSozlash();
  });

  window.UIKomponentlar = {
    savatdaBormi,
    savatniOzgar,
    savatHisoblagichniYangila
  };
})();