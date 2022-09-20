import { limpiar,limpiarInput } from "./script-carrusel.js";
var ce = 0, cg = 0;
var arrayEstudiantes = [], arrayMaterias = [];
document.getElementById("boton-cantidad-grupos").addEventListener('click', () => {
    document.getElementById("boton-enviar-cantidad-alumnos").removeAttribute("hidden");
    const inputCantidadGrupos = document.getElementById("input-cantidad-grupos");
    cg = parseInt(inputCantidadGrupos.value);
    for (let i = 0; i < inputCantidadGrupos.value; i++) {
        document.getElementById("contenedor-alumnos-por-grupo").innerHTML += '<label><strong>Alumnos Grupo&nbsp;'+`${i+1}`+'</strong></label><input class="input-predeterminado input-cantidad-estudiantes"></input>';
    }
    document.getElementById("boton-enviar-cantidad-alumnos").addEventListener('click', () => {
        const inputCantidadEstudiantes = document.querySelectorAll(".input-cantidad-estudiantes");
        for (let j = 0; j < inputCantidadGrupos.value; j++) {
            document.getElementById("contenedor-cantidad-materias").innerHTML += '<h4>Grupo '+`${j+1}`+'</h4>';
            for (let k = 0; k < inputCantidadEstudiantes[j].value; k++) {
                ce += 1;
                document.getElementById("contenedor-cantidad-materias").innerHTML += '<label>Materias Estudiante' + `${k+1}`+ '</label><input class="input-materias-estudiantes input-predeterminado"></input>'
            }
            arrayEstudiantes.push(parseInt(inputCantidadEstudiantes[j].value))
        }
        document.getElementById("boton-enviar-materias").removeAttribute("hidden");

        document.getElementById("boton-enviar-materias").addEventListener('click', () => {
            document.getElementById("boton-enviar-notas-estudiantes").removeAttribute("hidden");
            for (let l = 0; l < ce; l++) {
                const inputCantidadMaterias = document.querySelectorAll(".input-materias-estudiantes");
                document.getElementById("contenedor-notas-materias").innerHTML += '<h3>Estudiante ' + `${l+1}`+'</h3>';
                for (let m = 0; m < inputCantidadMaterias[l].value; m++) {
                    document.getElementById("contenedor-notas-materias").innerHTML += '<label><strong>Notas Materia '+`${m+1}`+'</strong></label><input class="input-notas-estudiantes"/></label><input class="input-notas-estudiantes"/></label><input class="input-notas-estudiantes"/>';
                }   
                arrayMaterias.push(parseInt(inputCantidadMaterias[l].value)*3)
            }
            
        document.getElementById("boton-enviar-notas-estudiantes").addEventListener('click', ()=> {
            const notasEstudiantes = document.querySelectorAll(".input-notas-estudiantes");
            document.getElementById("mostrar-promedios-escuela").innerHTML = '<p class="contenedor-parrafos">En desarrollo</p>'
        })
        })     
    });
    document.getElementById("input-cantidad-grupos").addEventListener('mousedown', () => {
        limpiarInput("input-cantidad-grupos");
        limpiar("contenedor-alumnos-por-grupo");
        limpiar("contenedor-cantidad-materias");
        document.getElementById("boton-enviar-cantidad-alumnos").hidden = true;
        document.getElementById("boton-enviar-materias").hidden = true;
        limpiar("contenedor-notas-materias");
        document.getElementById("boton-enviar-notas-estudiantes").hidden = true;
        limpiar("mostrar-promedios-escuela")
    })  
});
