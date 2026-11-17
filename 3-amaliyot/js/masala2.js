// 2-masala. Satrlar  ·  oson
// Funksiya: satrniTeskari(s)
// Satr berilgan. Uni teskari tartibda qaytaring. reverse() metodini ishlatmang, sikl bilan yeching.
// satrniTeskari("salom")            // → "molas"
// satrniTeskari("JavaScript")       // → "tpircSavaJ"
function satrniTeskari(s) {
  let natija = "";
  for (let i = s.length - 1; i >= 0; i--) {
    natija += s[i];
  }
  return natija;
}

console.log(satrniTeskari("salom"));     
console.log(satrniTeskari("JavaScript")); 