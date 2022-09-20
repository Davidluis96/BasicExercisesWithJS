import { scrollVentana, limpiar,limpiarInput } from "./script-carrusel.js";
const contenedorTablaPrimos = document.getElementById("contenedor-tabla-primos");

document.getElementById("boton-calcular-primos").addEventListener('click', ()=> {
  let CantidadPrimos = document.getElementById("input-numero-primo").value;
  let numeroEvaluado = 3, contador = 0, divisor;

  if(CantidadPrimos >= 1){ 
    contenedorTablaPrimos.innerHTML = '<table id="tabla-numeros-primos"><caption>Tabla Números Primos</caption><tbody id="cuerpo-tabla-primos"><tr><td>2</td>';
    const cuerpoTablaPrimos = document.getElementById("cuerpo-tabla-primos");
    for(contador = 2; contador <= CantidadPrimos; numeroEvaluado++){
      for(divisor = 2; divisor < numeroEvaluado; divisor++){
          if(numeroEvaluado % divisor == 0){ break;}
      }
      if(divisor == numeroEvaluado){
        cuerpoTablaPrimos.innerHTML += '<td>'+`${numeroEvaluado}`+'</td></tr></tbody></table>';
        contador++;
      }
      scrollVentana(contenedorTablaPrimos)
    }
  }else{
    alert("Entrada inválida");
  }
});
document.getElementById("input-numero-primo").addEventListener("mousedown",()=>{ 
  limpiarInput("input-numero-primo");
  contenedorTablaPrimos.childElementCount < 1 ? null : limpiar("tabla-numeros-primos")});