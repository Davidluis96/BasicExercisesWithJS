import { scrollVentana, limpiar,limpiarInput } from "./script-carrusel.js";
const inputSeccionVotacion = document.getElementById("input-seccion-votacion");
let mayorVotacion,contadorSeccionNorte = 0, contadorSeccionCentro = 0, contadorSeccionSur = 0;

document.getElementById("boton-enviar-seccion-votacion").addEventListener('click', () => {

    if(inputSeccionVotacion.value.toLowerCase() != "norte" && inputSeccionVotacion.value.toLowerCase() != "centro" && inputSeccionVotacion.value.toLowerCase() != "sur"){
        alert("Sección Inválida");
    }else{
        if(inputSeccionVotacion.value.toLowerCase() == "norte"){
            contadorSeccionNorte += 1;

        }else if(inputSeccionVotacion.value.toLowerCase() == "centro"){
            contadorSeccionCentro += 1;
        }else if(inputSeccionVotacion.value.toLowerCase() == "sur"){
            contadorSeccionSur += 1;
        }
        if(contadorSeccionNorte > contadorSeccionCentro && contadorSeccionNorte > contadorSeccionSur){
            mayorVotacion = "Sección Norte";
        }else if(contadorSeccionCentro > contadorSeccionNorte && contadorSeccionCentro > contadorSeccionSur){
            mayorVotacion = "Sección Centro";
        }else if(contadorSeccionSur > contadorSeccionNorte && contadorSeccionSur > contadorSeccionNorte){
            mayorVotacion = "Sección Sur";
        }else{
            mayorVotacion = "Ninguna"
        }
        document.getElementById("mostrar-resultado-votaciones").innerHTML = '<table id="tabla-votaciones"><caption>Resumen Votaciones</caption><thead><tr><th>Zona</th><th>N° Votantes</th></tr></thead><tbody><tr><td>Sección Norte</td><td>'+`${contadorSeccionNorte}`+'</td></tr><tr><td>Sección Centro</td><td>'+`${contadorSeccionCentro}`+'</td></tr><td>Sección Sur&nbsp;</td><td>'+`${contadorSeccionSur}`+'</td></tr></tbody><tfoot><tr><td>Votación Mayor</td><td>'+`${mayorVotacion}`+'</td></tr></tfoot></table>';
        
        let alturaTabla = document.getElementById("tabla-votaciones");
        scrollVentana(alturaTabla);

    }
});
inputSeccionVotacion.addEventListener('mousedown', ()=>{
    limpiarInput("input-seccion-votacion")
});