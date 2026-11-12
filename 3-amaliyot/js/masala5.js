function saralanganlarniBirlashtir(a, b) {
  const natija = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      natija.push(a[i]);
      i++;
    } else {
      natija.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    natija.push(a[i]);
    i++;
  }
  while (j < b.length) {
    natija.push(b[j]);
    j++;
  }

  return natija;
}

console.log(saralanganlarniBirlashtir([1, 4, 7], [2, 3, 8])); 
console.log(saralanganlarniBirlashtir([], [5]));            