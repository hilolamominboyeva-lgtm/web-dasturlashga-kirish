// 1-masala. Sonlar  ·  oson
// Funksiya: engKattaRaqam(n)
// Musbat butun son berilgan. Uning eng katta raqamini qaytaring. Satrga aylantirmasdan yeching.
// engKattaRaqam(58193)              // → 9
// engKattaRaqam(4440)               // → 4
function engKattaRaqam(n) {
  let eng = 0;
  while (n > 0) {
    const raqam = n % 10;
    if (raqam > eng) {
      eng = raqam;
    }
    n = Math.floor(n / 10);
  }
  return eng;
}

console.log(engKattaRaqam(58193)); 
console.log(engKattaRaqam(4440));  