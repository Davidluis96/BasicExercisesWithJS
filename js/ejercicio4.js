import {limpiar,limpiarInput } from "./script-carrusel.js";
let botonEnviarNotas = document.getElementById("boton-enviar-notas"); 
let contadorNotaInvalida = 0;
botonEnviarNotas.addEventListener('click',() => {
    let cantidadNotas = document.getElementById("input-cantidad-notas").value;
    let mostrarCeldasNotas = document.getElementById("mostrar-celdas-notas");
    let contenedorBotonCalcularPromedio = document.getElementById("contenedor-boton-calcular-promedio");
    
    if(cantidadNotas == "" || cantidadNotas < 0){
      alert("Entrada inválida")
    }else{
      for (let index = 1; index <= cantidadNotas; index++) {
        const crearContenedorCeldas = document.createElement("div")
        const crearTituloCelda = document.createElement("label");
        const crearInputCelda = document.createElement("input");
        crearInputCelda.classList.add("input-predeterminado");
        crearInputCelda.classList.add("inputs-notas");
        crearInputCelda.setAttribute("type","number");
        crearTituloCelda.innerHTML = "<strong>Nota<strong>&nbsp;" + `${index}`+ " : ";
        crearContenedorCeldas.setAttribute("id","contenedor-celdas");
        mostrarCeldasNotas.appendChild(crearContenedorCeldas);
        crearContenedorCeldas.appendChild(crearTituloCelda);
        crearContenedorCeldas.appendChild(crearInputCelda);
      }
      botonEnviarNotas.disabled = true;
      const crearBotonCalcularPromedio = document.createElement("button");
      crearBotonCalcularPromedio.setAttribute("id","boton-calcular-promedio")
      crearBotonCalcularPromedio.classList.add("boton-calcular");
      crearBotonCalcularPromedio.innerHTML = "Calcular Promedio";
      contenedorBotonCalcularPromedio.appendChild(crearBotonCalcularPromedio);
  
      document.getElementById("boton-calcular-promedio").addEventListener('click', () => {
        const inputsNotas = document.querySelectorAll(".inputs-notas");
        let sumatoriaNotas = 0;
        let promedio = 0;
    
          for (let index = 0; index < inputsNotas.length; index++) {
            if(inputsNotas[index].value == "" || inputsNotas[index].value < 0){
              alert("Entrada inválida");
              contadorNotaInvalida = 1;
              break;
            } 
            sumatoriaNotas += parseFloat(inputsNotas[index].value);
          }
          promedio = sumatoriaNotas / inputsNotas.length;
          if(contadorNotaInvalida == 0){
            let contenedorPromedio = document.getElementById("contenedor-resultado-promedio");
            contenedorPromedio.style.display = "block";
            contenedorPromedio.innerHTML = '<p class="contenedor-parrafos">El promedio de las notas es : <strong>' +`${promedio}` + '</strong></p>';
          }
          contadorNotaInvalida = 0;
      });
    }  
      for (let index = 0; index < cantidadNotas; index++) {
          document.querySelectorAll(".inputs-notas")[index].addEventListener('mousedown', () =>{
            document.querySelectorAll(".inputs-notas")[index].value = "";
          });
      }
  });
  document.getElementById("input-cantidad-notas").addEventListener('mousedown',()=>{ 
    limpiarInput("input-cantidad-notas");
    limpiar("mostrar-celdas-notas"); 
    limpiar("contenedor-boton-calcular-promedio"); 
    limpiar("contenedor-resultado-promedio");
    document.getElementById("boton-enviar-notas").disabled = false
  });
  document.getElementById("input-cantidad-notas").addEventListener('mousedown',()=>{ 
    limpiarInput("input-cantidad-notas");
    limpiar("mostrar-celdas-notas"); 
    limpiar("contenedor-boton-calcular-promedio"); 
    limpiar("contenedor-resultado-promedio");
  });
  