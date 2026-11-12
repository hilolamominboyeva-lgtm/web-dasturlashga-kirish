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