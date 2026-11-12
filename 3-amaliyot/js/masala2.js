function satrniTeskari(s) {
  let natija = "";
  for (let i = s.length - 1; i >= 0; i--) {
    natija += s[i];
  }
  return natija;
}

console.log(satrniTeskari("salom"));     
console.log(satrniTeskari("JavaScript")); 