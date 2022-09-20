import { limpiar,limpiarInput } from "./script-carrusel.js";
let botonCalcularPrimoFibonacci = document.getElementById("boton-calcular-primo-fibonacci");
botonCalcularPrimoFibonacci.addEventListener("click",()=>{
    let valorInputPrimoFibonacci = document.getElementById("input-primo-fibonacci");
    let mostrarPrimoFibonacci = document.getElementById("mostrar-primo-fibonacci");
    let formula1 = Math.sqrt(5*Math.pow(valorInputPrimoFibonacci.value,2)+4);
    let formula2 = Math.sqrt(5*Math.pow(valorInputPrimoFibonacci.value,2)-4);
    let contador = 0;
    if(valorInputPrimoFibonacci.value == "" || valorInputPrimoFibonacci.value < 1){ 
        alert("entrada no válida");
    }else{
        for (let index = 1; index <= valorInputPrimoFibonacci.value; index++) {
            if(valorInputPrimoFibonacci.value % index == 0){ contador += 1;}
        }
        if(contador == 2){
            mostrarPrimoFibonacci.innerHTML = '<p class="contenedor-parrafos">El número&nbsp;'+`${valorInputPrimoFibonacci.value}`+ '<strong>&nbsp;es primo</strong></p>';
        }else{
            mostrarPrimoFibonacci.innerHTML = '<p class="contenedor-parrafos">El número&nbsp;'+`${valorInputPrimoFibonacci.value}`+ '<strong>&nbsp;no es primo</strong></p>';
        }
        if(Number.isInteger(formula1) || Number.isInteger(formula2)){
            mostrarPrimoFibonacci.innerHTML += '<p class="contenedor-parrafos">El número' + `${valorInputPrimoFibonacci.value}`+'<strong>&nbsp;es un número de fibonacci</strong></p>';
        }
        else{
            mostrarPrimoFibonacci.innerHTML += '<p class="contenedor-parrafos">El número' + `${valorInputPrimoFibonacci.value}`+ '<strong>&nbsp;no es un número de fibonacci</strong></p>';
        }
    }
    valorInputPrimoFibonacci.addEventListener("mousedown", () => { limpiarInput("input-primo-fibonacci"); limpiar("mostrar-primo-fibonacci");});
});
