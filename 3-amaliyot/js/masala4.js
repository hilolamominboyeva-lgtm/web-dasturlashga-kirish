// 4-masala. Satrlar va sonlar  ·  o‘rtacha
// Funksiya: parolKuchi(parol)
// Parol berilgan. 4 ta shartni tekshiring: uzunligi kamida 8; raqam bor; katta harf bor; maxsus belgi (!@#$
// %&*) bor. 0–1 shart bajarilsa "kuchsiz", 2–3 ta bo‘lsa "o‘rtacha", 4 tasi bo‘lsa "kuchli" qaytaring.
// parolKuchi("Salom2026!")          // → "kuchli"
// parolKuchi("parol123")            // → "o‘rtacha"
// parolKuchi("abc")                 // → "kuchsiz"
function parolKuchi(parol) {
  let shart = 0;

  if (parol.length >= 8) shart++;
  if (/[0-9]/.test(parol)) shart++;   
  if (/[A-Z]/.test(parol)) shart++; 
  if (/[!@#$%&*]/.test(parol)) shart++;

  if (shart === 4) return "kuchli";
  if (shart >= 2) return "o'rtacha";
  return "kuchsiz";
}

console.log(parolKuchi("Salom2026!")); 
console.log(parolKuchi("parol123"));   
console.log(parolKuchi("abc"));   