// 3-masala. Massivlar  ·  oson
// Funksiya: kvadratlar(n)
// Musbat butun son n berilgan. 1 dan n gacha sonlarning kvadratlaridan iborat massiv qaytaring.
// kvadratlar(5)                   // → [1, 4, 9, 16, 25]  
// kvadratlar(1)                     // → [1]
function kvadratlar(n) {
  const natija = [];
  for (let i = 1; i <= n; i++) {
    natija.push(i * i);
  }
  return natija;
}

console.log(kvadratlar(5)); 
console.log(kvadratlar(1)); 