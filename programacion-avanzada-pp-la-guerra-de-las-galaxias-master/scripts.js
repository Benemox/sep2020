
const escribe = msg => {
  const $body = document.querySelector('body')
  const $message = document.createElement('p')
  $message.innerHTML = msg
  $body.appendChild($message)
}

let a = []
function printString (string) {
  z=string
  return new Promise((z)=>{
        setTimeout(
            () =>{escribe(z)},Math.floor(Math.random() * 100) + 10)
  }).then()
}

let z=(string) => new Promise((success)=>setTimeout(() =>{escribe(string);success()},Math.floor(Math.random() * 100) + 10))
z('Episodio I: la amenaza fantasma')
.then(()=> z('Episodio II: el ataque de los clones'))
.then(()=> z('Episodio II: el ataque de los clones'))
.then(()=> z('Episodio III: la venganza de los sith'))
.then(()=> z('Han Solo: una historia de Star Wars'))


let Cronologia = ['Episodio I: la amenaza fantasma','Episodio II: el ataque de los clones','Episodio III: la venganza de los sith'];

z = ["a", "b", "c"]

function pintar(str) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(str)
            res();
        }, Math.random() * 100 + 10);
    });
}
 function pintar_array(arr){
   	 arr.map(async (el) => await pintar(el) )

    return 1;
 }
    
                            
pintar_array(z);







// function printPrecuela () {
//   printString('Episodio I: la amenaza fantasma')
//   printString('Episodio II: el ataque de los clones')
//   printString('Episodio III: la venganza de los sith')
// }

// function printParalelas () {
//   printString('Han Solo: una historia de Star Wars')
//   printString('Rogue One: una historia de Star Wars')
// }

// function printOriginal () {
//   printString('Episodio IV: una nueva esperanza')
//   printString('Episodio V: el imperio contraataca')
//   printString('Episodio VI: el regreso del jedi')
// }

// function printSecuelas () {
//   printString('Episodio VII: el despertar de la fuerza')
//   printString('Episodio VIII: el último jedi')
//   printString('Episodio IX: el ascenso de Skywalker')
// }

// function printAll () {
//   printPrecuela()
//   printParalelas()
//   printOriginal()
//   printSecuelas()
// }

// printAll()

// let myPromise = new promise()
//     .then()