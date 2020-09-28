//Tabata 28-09-2020
/*
//1- Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor;

//2Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1, booleano2;

booleano1 = true;
booleano2 = false;

//3Crear variable tipo const de nombre PI declarada con valor 3.14

const PI = 3.14;

//4Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const tau = 2*PI;

//5- Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

let booleanoAnd = booleano1 && booleano2;

//Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1

let booleanoNot = booleano1 !== booleano2;

//Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)

let booleanoMix0 = booleano1 === booleano2 && booleano1 !== booleano2;


//Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp

let incrementarDesp = 2
let resultadoDesp = incrementarDesp++

//Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes

let incrementarAntes = 2;
let resultadoAntes  = ++incrementarAntes;

// Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10

let contarHasta10_2 = 0;
for(i=0; i< 10 ; i++){
    contarHasta10_2++;
  //  console.log(` numero ${contarHasta10_2 } `);
};

//Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++

let postI = 0;
let postJ = 0;

for(postJ; postJ < 10 ; postJ++){
    postI = postI + postJ;
  //console.log(  postI )
}
// Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar a sumaPares el número de la iteración actual (i)

let sumaPares = 0;

for( i = 0; i < 10; i++){
   if(
       i % 2 === 0
   ){
       sumaPares+=i;
       i++
   }
   //console.log( sumaPares)
    
}
//Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera

let variableValorNumerico = 2;

//Crear variable tipo const de nombre MiNombre declarada con valor tu nombre

const Minombre = "abel";

//Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico

const MiNumeroFav = 1;
// 16.- Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2

const booleanoOr = booleano1 || booleano2;

// 17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
const booleanoMix1 = (booleano1 && (tau/2 === PI))||(variableValorNumerico<=MiNumeroFav)
//console.log(booleanoMix1)
 //18.- Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9
 let booleano6 = 7
 let seisNoEsNueve = booleano6 !==  9

// 19.- Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
booleanomix2 = (variableValorNumerico>0) || (variableValorNumerico>(MiNumeroFav*tau))

//20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico 
let valorSuma = MiNumeroFav + variableValorNumerico
//console.log(valorSuma)
// 21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico

 //22.- Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico
 let valorMultiplicación = MiNumeroFav * variableValorNumerico

 //23.- Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3

 let valorDivisión = MiNumeroFav/3

// 24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10
var n = 0;
var contarHasta10 = 0;

while (n < 11) {
  n++;
  if(contarHasta10 ==10){
     // console.log( "conseguido de una maldita vez")
  }else{
      contarHasta10++
    //console.log(contarHasta10)
  }
  
}
//console.log(n)
// //25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ
let preI = 0
 let preJ = 0
for(preJ; preJ < 11 ; preJ++){
    preI = preI + preJ;
    //console.log(preI)
}
// 26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)

 let sumarImpares = 0;
 for(i=1;i<=10;i++){
     if(i % 2 !== 0 ){
         sumarImpares= sumarImpares + i
         console.log(sumarImpares)
     }else{
         console.log("no suma")
     }
 }
*/
