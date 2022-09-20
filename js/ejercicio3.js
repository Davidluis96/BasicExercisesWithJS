const contenedorTablaTiempos = document.getElementById("contenedor-tabla-tiempos-prueba");
const botonAgregarTiempo = document.getElementById("boton-agregar-tiempo");
const botonComprobarEstado = document.getElementById("boton-comprobar-estado");
const contenedorResultadoPrueba = document.getElementById("contenedor-resultado-prueba");
let promedioTiempos,sumatoriaTiempos = 0, contadorAgregarTiempo = 0, contadorTiempoMayor = 0;

const crearTablaTiempos = document.createElement("table");
const crearTituloTablaTiempos = document.createElement("caption");
crearTituloTablaTiempos.textContent = "Tiempo Usado en la prueba (En Minutos)";
const encabezadoTablaTiempos = document.createElement("thead");
const filaTablaTiempos = document.createElement("tr");
const celdaEncabezadoDia = document.createElement("td");
const celdaEncabezadoTiempo = document.createElement("td");
celdaEncabezadoDia.textContent = "Día";
celdaEncabezadoTiempo.textContent = "Tiempo";
const cuerpoTablaTiempos = document.createElement("tbody");

botonAgregarTiempo.addEventListener('click', () => {
    contadorAgregarTiempo += 1;

    contenedorTablaTiempos.appendChild(crearTablaTiempos);
    crearTablaTiempos.appendChild(crearTituloTablaTiempos);
    crearTablaTiempos.appendChild(encabezadoTablaTiempos);
    encabezadoTablaTiempos.appendChild(filaTablaTiempos);
    filaTablaTiempos.appendChild(celdaEncabezadoDia);
    filaTablaTiempos.appendChild(celdaEncabezadoTiempo);
    crearTablaTiempos.appendChild(cuerpoTablaTiempos);

    const filaCuerpoTablaTiempos = document.createElement("tr");
    cuerpoTablaTiempos.appendChild(filaCuerpoTablaTiempos);
    const celda1CuerpoTabla = document.createElement("td");
    const celda2CuerpoTabla = document.createElement("td");
    filaCuerpoTablaTiempos.appendChild(celda1CuerpoTabla);
    celda1CuerpoTabla.textContent = `${contadorAgregarTiempo}`;
    filaCuerpoTablaTiempos.appendChild(celda2CuerpoTabla);
    const inputCelda2 = document.createElement("input");
    celda2CuerpoTabla.appendChild(inputCelda2);
    inputCelda2.setAttribute("type","number");
    inputCelda2.classList.add("input-tiempo-prueba");
    inputCelda2.classList.add("input-predeterminado");
    if(contadorAgregarTiempo >= 10){
        botonAgregarTiempo.disabled = true;
        botonComprobarEstado.disabled = false;
        botonComprobarEstado.style.display = 'block';
    }else{
        botonComprobarEstado.style.display = 'none';
        botonComprobarEstado.disabled = true;
    }
});
const mostrarResultadoPrueba = document.createElement("div");
botonComprobarEstado.addEventListener('click', () => {
    contadorAgregarTiempo = 0;
    let contadorInputVacio = 0;
    const inputTiempoPrueba = document.querySelectorAll(".input-tiempo-prueba");
    for (let index = 0; index < 10; index++) {
        if(inputTiempoPrueba[index].value != ""){
            sumatoriaTiempos += parseFloat(inputTiempoPrueba[index].value);
            if(parseFloat(inputTiempoPrueba[index].value) > 16){
                contadorTiempoMayor = 1;
            }
        }else{
            alert("Completa los 10 tiempos correctamente");
            contadorInputVacio += 1;
            break;
        }
    }
    mostrarResultadoPrueba.setAttribute("id","mostrar-resultado-prueba");
    contenedorResultadoPrueba.appendChild(mostrarResultadoPrueba);
    promedioTiempos = sumatoriaTiempos / 10;
    if((contadorInputVacio == 0 && promedioTiempos <= 15) || (contadorInputVacio == 0 && contadorTiempoMayor == 1)){
        mostrarResultadoPrueba.innerHTML = '<p class="contenedor-parrafos">El atleta <strong>es apto</strong> para la competencia<p>';  
    }
    if(contadorInputVacio == 0 && promedioTiempos > 15){
        mostrarResultadoPrueba.innerHTML = '<p class="contenedor-parrafos">El atleta <strong>no es apto</strong> para la competencia</strong>&nbsp;tiempo promedio&nbsp;|'+`${promedioTiempos}`+'&nbsp;minutos|&#8594;&nbsp;mayor al esperado&nbsp; máximo 15 minutos<p>';  
    }
    sumatoriaTiempos = 0;
});
