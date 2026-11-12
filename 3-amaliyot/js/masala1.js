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