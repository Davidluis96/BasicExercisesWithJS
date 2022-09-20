import { scrollVentana, limpiar,limpiarInput } from "./script-carrusel.js";
let botonAgregarCliente = document.getElementById("boton-agregar-cliente-tabla");
let botonResumenCompra = document.getElementById("boton-resumen-compra");
let cuerpoTablaClientes = document.getElementById("cuerpo-tabla-clientes");
let contenidoTablaClientes = document.getElementById("contenido-tabla-clientes");
let mostrarResumenCompra = document.getElementById("mostrar-resumen-compra");
let contadorNumeroCliente = 0;

const cabeceraDescripcionFactura = document.createElement("thead");
cuerpoTablaClientes.insertAdjacentElement("beforebegin",cabeceraDescripcionFactura);
const crearTituloTabla = document.createElement("caption");
const filaCabeceraDescripcion = document.createElement("tr");
const celdaNumeroCliente = document.createElement('th');
const celdaCompraTotal = document.createElement('th');

botonAgregarCliente.addEventListener('click', () => {
    contenidoTablaClientes.appendChild(crearTituloTabla);
    cabeceraDescripcionFactura.appendChild(filaCabeceraDescripcion);
    filaCabeceraDescripcion.appendChild(celdaNumeroCliente);
    filaCabeceraDescripcion.appendChild(celdaCompraTotal)

    contadorNumeroCliente += 1;
    crearTituloTabla.textContent = "Factura Clientes";
    celdaNumeroCliente.textContent = "N° Cliente";
    celdaCompraTotal.textContent = "Compra Total"
    const filaNuevaCliente = document.createElement("tr");
    const contenedorClienteNuevo = document.createElement("td");
    const contenedorValorFactura = document.createElement("td");
    const inputValorFactura = document.createElement("input")
    const numeroAsignadoCliente = document.createTextNode(`Cliente ${contadorNumeroCliente}`);

    cuerpoTablaClientes.appendChild (filaNuevaCliente);
    filaNuevaCliente.appendChild(contenedorClienteNuevo);
    filaNuevaCliente.appendChild(contenedorValorFactura);
    contenedorValorFactura.appendChild(inputValorFactura);
    inputValorFactura.classList.add("input-predeterminado");
    inputValorFactura.classList.add("valor-compra-total");
    inputValorFactura.setAttribute("placeholder","Ingresa un valor")
    contenedorClienteNuevo.appendChild(numeroAsignadoCliente);
});

botonResumenCompra.addEventListener('click', () => {
    let sumatoriaCompra = 0;
    let inputValorCompraTotal = document.querySelectorAll(".valor-compra-total");

    for (let index = 0; index < inputValorCompraTotal.length; index++) {
        var valorCompraTotal = parseFloat(inputValorCompraTotal[index].value);
        if(isNaN(valorCompraTotal) || valorCompraTotal < 1){
            alert("Compra Total Inválida");
            return;
        }else{
            sumatoriaCompra += valorCompraTotal;
        }
    }

    mostrarResumenCompra.innerHTML = "<table><thead><tr><th>Número de Clientes Atendidos</th>" + "<th>Cantidad Total de Ventas</th></tr></thead>" + "<tbody><tr><td>"+`${contadorNumeroCliente}` + "&nbsp;clientes</td>" 
     + "<td>&#36;&nbsp;" + `${sumatoriaCompra}` + "&nbsp;pesos</td></tr></tbody></table>"; 
    for (let index = 0; index < inputValorCompraTotal.length; index++) {
           inputValorCompraTotal[index].addEventListener('mousedown', () => {
            inputValorCompraTotal[index].value = ""; 
        });
        
    }
    
});

