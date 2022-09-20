import { scrollVentana, limpiar,limpiarInput } from "./script-carrusel.js";
let botonComprobarOrden = document.getElementById("boton-comprobar-orden");
botonComprobarOrden.addEventListener('click',() =>{
  let numero1 = document.getElementById("numero1");
  let numero2 = document.getElementById("numero2");
  let mostrarOrden = document.getElementById("mostrar-orden");
  if(numero1.value == "" || numero2.value == ""){
    alert("Entrada Inválida");
  }
  else if(numero1.value > numero2.value){
    mostrarOrden.innerHTML = "<p>Los números&nbsp;" + `${numero1.value}` + "&nbsp;y&nbsp;" + `${numero2.value}` + "&nbsp;están en <strong>orden decreciente</strong></p>";
  }else if(numero1.value < numero2.value){
    mostrarOrden.innerHTML = "<p>Los números&nbsp;" + `${numero1.value}`+ "&nbsp;y&nbsp;" + `${numero2.value}` + "&nbsp;están en <strong>orden creciente</strong></p>";
  }else{
    mostrarOrden.innerHTML = "<p>Los números son iguales</p>"
  }
  numero1.addEventListener('click', () => { limpiarInput("numero1"); limpiar("mostrar-orden")});
  numero2.addEventListener('click', () => { limpiarInput("numero2"); limpiar("mostrar-orden") });  
});
