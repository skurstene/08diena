/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for(let i = 0; i < 10; i++){
    console.log("labas")
}
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for(let i = 0; i <10; i++ ) {
    console.log(i)
}
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai = ["roze", "tulpe", "gvazdikas", "gele", "zole", "samana", "medis", "saulte", "naslaite", "sultene" ] 
/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
for(let i = 0; i< augalai.length; i++){
console.log(augalai[i])
}  
/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for(let i = augalai.length - 1; i >= 0; i--){
    console.log(augalai[i])
}
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for (let i=0; i<=50; i++) {
    if (i % 2 == 0) {
            console.log(i );
    }
}
/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let i=0; i<50; i++) {
    if (i % 2 == 0) {
        i++
    } else{
        i=undefined
    }
    console.log(i)
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
lyginiuKiekis=0
for (let i = 0; i < 20; i++ ){
    if (i % 2 == 0){
    lyginiuKiekis++
    } 
}
console.log(lyginiuKiekis)
/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
/*kas desimt zvaigzduciu luzi darom*/