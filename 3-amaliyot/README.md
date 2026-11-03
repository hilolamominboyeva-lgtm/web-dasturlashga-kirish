10-variant
Talaba: Mo‘minboyeva Hilola Zafarbek qizi     Guruh: 941-24
1-masala. Sonlar  ·  oson
Funksiya: engKattaRaqam(n)
Musbat butun son berilgan. Uning eng katta raqamini qaytaring. Satrga aylantirmasdan yeching.
engKattaRaqam(58193)              // → 9
engKattaRaqam(4440)               // → 4
2-masala. Satrlar  ·  oson
Funksiya: satrniTeskari(s)
Satr berilgan. Uni teskari tartibda qaytaring. reverse() metodini ishlatmang, sikl bilan yeching.
satrniTeskari("salom")            // → "molas"
satrniTeskari("JavaScript")       // → "tpircSavaJ"
3-masala. Massivlar  ·  oson
Funksiya: kvadratlar(n)
Musbat butun son n berilgan. 1 dan n gacha sonlarning kvadratlaridan iborat massiv qaytaring.
kvadratlar(5)                   // → [1, 4, 9, 16, 25]  
kvadratlar(1)                     // → [1]
4-masala. Satrlar va sonlar  ·  o‘rtacha
Funksiya: parolKuchi(parol)
Parol berilgan. 4 ta shartni tekshiring: uzunligi kamida 8; raqam bor; katta harf bor; maxsus belgi (!@#$
%&*) bor. 0–1 shart bajarilsa "kuchsiz", 2–3 ta bo‘lsa "o‘rtacha", 4 tasi bo‘lsa "kuchli" qaytaring.
parolKuchi("Salom2026!")          // → "kuchli"
parolKuchi("parol123")            // → "o‘rtacha"
parolKuchi("abc")                 // → "kuchsiz"
5-masala. Massivlar va obyektlar  ·  o‘rtacha
Funksiya: saralanganlarniBirlashtir(a, b)
O‘sish tartibida saralangan ikki massiv berilgan. Ularni bitta saralangan massivga birlashtiring. sort() 
ishlatmang — ikki ko‘rsatkich usulidan foydalaning.
saralanganlarniBirlashtir([1, 4, 7], [2, 3, 8])  // → [1, 2, 3, 4, 7, 8]
saralanganlarniBirlashtir([], [5])  // → [5]