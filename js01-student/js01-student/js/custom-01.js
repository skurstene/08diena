/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = "Gabrielė"
 let pavard = "Vereškaitė" 
 let gimimo =  1997
let dabar = new Date().getFullYear()
console.log( `Aš esu ${vardas} ${pavard}. Man yra ${dabar- gimimo} metai`)


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let g = Math.round(Math.random()*4)
console.log(g)
let f = Math.round(Math.random()*4)
console.log(f)
if (g==0 || f==0 ) {
    console.log("error")
} else if (g>=f ){
    console.log((g / f ).toPrecision(3))
}
else {
   console.log((f / g).toPrecision(3))
}


/*console.log(.toFixed(4))

/*kaip apvalinti?*/

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let q =Math.floor(Math.random()*(25 - 0 + 1) + 0 )
console.log(q)
let e =Math.floor(Math.random()*(25 - 0 + 1) + 0 )
console.log(e)
let t =Math.floor(Math.random()*(25 - 0 + 1) + 0 )
console.log(t)
/* jeigu q vidurinis*/
if(e>q && q>t || t>q && q>e)
{
    console.log("vidurinis skaicius yra q")
}
/*jeigu e vidurinis*/
else if(q>e && e>t || t>e && e>q)
{
    console.log("vidurinis skaicius yra e")
}
/* jeigu t vidurinis*/
else if(q>t && t>e || e>t && t>q)
{
    console.log("vidurinis skaicius yra t")
}
else {
    console.log("vidurinis skaicius neimanomas")
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 =Math.floor(Math.random()*(10 - 1 + 1) + 1 )
console.log(kr1)
let kr2 =Math.floor(Math.random()*(10 - 1 + 1) + 1 )
console.log(kr2)
let kr3 =Math.floor(Math.random()*(10 - 1 + 1) + 1 )
console.log(kr3)

if ((kr1 + kr2 > kr3) && (kr1 + kr3 > kr2)
&& (kr2 + kr3 > kr1)){
    console.log("trikampis imanomas")
} else {
    console.log("trikampis neimanomas")
}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let k =Math.round(Math.random()*2 )
console.log(k)
let y =Math.round(Math.random()*2 )
console.log(y)
let u =Math.round(Math.random()*2 )
console.log(u)
let o =Math.round(Math.random()*2 )
console.log(o)

let nulis = 0
let vienas = 0 
let du = 0
if ( k == 0){
    nulis = nulis + 1
}
if ( y == 0 ){
    nulis = nulis + 1
}
if ( u == 0 ) {
    nulis = nulis + 1
}
if (o == 0){
    nulis = nulis + 1
}
console.log(nulis)
if( k == 1){
    vienas = vienas +1
}
if( y == 1){
    vienas = vienas +1
}
if( u == 1){
    vienas = vienas +1
}
if( o == 1){
    vienas = vienas +1
}
console.log(vienas)
if ( k == 2 ){
    du = du +1
}
if ( y == 2 ){
    du = du +1
}
if ( u == 2 ){
    du = du +1
}
if ( o == 2 ){
    du = du +1
}
console.log(du)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let s =Math.floor(Math.random()*(10 + 10 ) - 10 )
console.log(s)
let d =Math.floor(Math.random()*(10 + 10 ) - 10 )
console.log(d)
let m =Math.floor(Math.random()*(10 + 10 ) - 10 )
console.log(m)


if (  s == 0){
    console.log ("(" + s  + ")")
}
   else if ( s  > 0){
        console.log ("{" + s  + "}")
}
else if ( s < 0){
    console.log ("[" + s  + "]")

}
if (  d == 0){
    console.log ("(" + d + ")")
}
   else if ( d > 0){
        console.log ("{" + d + "}")
}
else if (  d  < 0){
    console.log ("[" + d + "]")
}
if ( m == 0){
    console.log ("(" +  m  + ")")
}
   else if ( m  > 0){
        console.log ("{" + m  + "}")
}
else if (  m  < 0){
    console.log ("[" + m  + "]")
}
/* neradau sprendimo budo, kad nereiketu tiek kartu rasyti*/

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let kaina = 1
let kiekis = Math.floor(Math.random()*(3000 - 5 + 1) + 5)
console.log(kiekis)

if(kiekis>2000){
    kaina = kiekis *0.96
    console.log(`kiekis: ${kiekis}, kaina: ${kaina.toFixed(2) }`)
}
else if( kiekis>1000){
    kaina = kiekis * 0.97
    console.log(`kiekis: ${kiekis}, kaina: ${kaina.toFixed(2)}`)
}
else{
    kaina = kiekis
    console.log(`kiekis: ${kiekis}, kaina: ${kaina.toFixed(2)}`)
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let zi =Math.round(Math.random()*100 )
console.log(zi)
let iz =Math.round(Math.random()*100 )
console.log(iz)
let oz =Math.round(Math.random()*100 )
console.log(oz)
let arit = (zi + iz + oz )/3
console.log((arit).toFixed(0))

let ix =Math.floor(Math.random()* (90-10+1) + 10 )
console.log(ix)
let xi =Math.floor(Math.random()*(90-10+1) + 10 )
console.log(xi)
let ox =Math.floor(Math.random()*(90-10+1) + 10 )
console.log(ox)
let asum = ( ix + xi + ox)/3
console.log((asum).toFixed(0))
/*
if(zi,iz, oz)

.toPrecision(1)

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let val =Math.floor(Math.random()* (12 - 1 + 1) + 1)
console.log(val)
let min =Math.floor(Math.random()*(59 - 1 + 1)+ 1)
console.log(min)
let sec =Math.floor(Math.random()*(59 - 1 + 1) + 1)
console.log(sec)
console.log(`${val}:${min}:${sec}`)

/*sugeneruoti kiek sekundziu yra paroje,jas daliti is minutciu ir valandu, */

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let b=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(b)
let n=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(n)
let x=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(x)
let c=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(c)
let v=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(v)
let i=Math.floor(Math.random()*(9999 - 1000 +1 ) + 1000)
console.log(i)
