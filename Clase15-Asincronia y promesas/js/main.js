// ! setTimeOut
// console.log('priemro');
// setTimeout(() => {
//   console.log("mitad")
// }, 3000); //aparece al final porqe estamos esperando 3 secs 

// console.log('tercero');

//! setInterval 
let contador = 0 ; 
let parrafoContador = document.querySelector("#contador");


const segundos = setInterval(() => {
  contador++; 
  parrafoContador.innerText = contador;

  if(contador===10){
    clearInterval(segundos)
    console.log("Borramos el intervalo")
  }
}, 1000); //para hacer contadores 

new Promise( (resolve, reject) => {

}
)


