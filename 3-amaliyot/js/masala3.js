function kvadratlar(n) {
  const natija = [];
  for (let i = 1; i <= n; i++) {
    natija.push(i * i);
  }
  return natija;
}

console.log(kvadratlar(5)); 
console.log(kvadratlar(1)); 