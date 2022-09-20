import { scrollVentana } from "./script-carrusel.js";
let contadorOperacionSumatoria = 0;
let botonCalcularOperacionSumatoria = document.getElementById("calcular-operacion-sumatoria");
let barraProgreso = document.getElementById("myProgress")
let leyendaBarra = document.getElementById("leyendaBarraProgreso")
let nodoReferencia= document.getElementById("nodo-referencia")
let tituloBarraProgreso = document.createElement("h4");
tituloBarraProgreso.textContent = "Calculando...";
let mostrarOperacion = document.getElementById("mostrar-operacion");

botonCalcularOperacionSumatoria.addEventListener("click", () =>{
  leyendaBarra.hidden = false;
  barraProgreso.removeAttribute("hidden");
  move();
  leyendaBarra.insertBefore(tituloBarraProgreso,nodoReferencia)
  contadorOperacionSumatoria += 1;
  let sumatoria = 0;
  for (let numero = 100; numero >= 0; numero -= 2) {
      var intervalo = setTimeout(() => {
        scrollVentana(mostrarOperacion)
        mostrarOperacion.innerHTML += "<span>+</span>"+"<span>"+`${100-numero}`+"</span>";
      }, numero*120);
    sumatoria += numero;
  }
  setTimeout(() => {
    mostrarOperacion.innerHTML += "<span> = </span>" + "<span>"+`${sumatoria}`+"</span>";
    tituloBarraProgreso.textContent = "Completado!";
  }, 12120);
  if(contadorOperacionSumatoria == 1){
    clearInterval(intervalo)
    botonCalcularOperacionSumatoria.disabled = true;
  }
});
function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 123);
  function frame() {
      if (width >= 100) {
          clearInterval(id);
      } else {
          width++;
          elem.style.width = width + '%';
      }
  }
}