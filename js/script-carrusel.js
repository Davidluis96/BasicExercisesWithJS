const buttons = document.querySelectorAll("[data-carousel-button]");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

                const activeSlide = slides.querySelector("[data-active]")
                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                if (newIndex < 0) newIndex = slides.children.length - 1
                if (newIndex >= slides.children.length) newIndex = 0

                slides.children[newIndex].dataset.active = true
                delete activeSlide.dataset.active

                limpiar("contenedor-tabla-primos");
                limpiarInput("input-numero-primo");

                limpiarInput("input-primo-fibonacci"); 
                limpiar("mostrar-primo-fibonacci");
                
                limpiar("contenedor-tabla-tiempos-prueba");
                limpiar("contenedor-resultado-prueba");
                document.getElementById("contenedor-boton-agregar-tiempo").removeAttribute("hidden");
                
                document.getElementById("boton-comprobar-estado").style.display = 'none';

                limpiar("mostrar-operacion");
                document.getElementById("myProgress").hidden = true;
                document.getElementById("leyendaBarraProgreso").hidden = true;

                limpiarInput("input-cantidad-grupos");
                limpiar("contenedor-alumnos-por-grupo");
                limpiar("contenedor-cantidad-materias");
                document.getElementById("boton-enviar-cantidad-alumnos").hidden = true;
                document.getElementById("boton-enviar-materias").hidden = true;
                limpiar("contenedor-notas-materias");
                document.getElementById("boton-enviar-notas-estudiantes").hidden = true;
                limpiar("mostrar-promedios-escuela")

                limpiarInput("input-cantidad-notas");
                limpiar("mostrar-celdas-notas"); 
                limpiar("contenedor-boton-calcular-promedio"); 
                limpiar("contenedor-resultado-promedio");
                
                
                limpiarInput("input-seccion-votacion")
                limpiar("mostrar-resultado-votaciones");
                limpiarInput("numero1");
                limpiarInput("numero2");
                limpiar("mostrar-orden");
            });
        });
function limpiar(valor){
    document.getElementById(valor).innerHTML = "";
}
function NoMostrarTablero(valor){
    document.getElementById(valor).style = "display:none";
}
function limpiarInput(valor){
    document.getElementById(valor).value = "";
}
function scrollVentana(alturaElemento){
    window.scrollTo({
        top: (492+alturaElemento.clientHeight),
        left: 0,
        behavior: 'smooth'
    });
}
export {scrollVentana,limpiar,NoMostrarTablero,limpiarInput};
