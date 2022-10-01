let arreglo = ["gato", "perro","dinosaurio","cotorro", "leon"];
let palabra = "lkgtmo"
let resultado =[];
let li = document.getElementById("li")



function mayorQue(arreglo) {
    return  arreglo.length > palabra.length;
  }
  let filtrados = arreglo.filter(mayorQue);
 
 console.log(filtrados);
 
 

 filtrados.forEach(filtrados => {
    li.innerHTML +=`<li>${ filtrados}</li>`
});

