let contenedorPrincipalProductos = document.getElementById("contenedor-productos");
let contadorProducto = 0;

document.getElementById("boton-agregar-producto").addEventListener('click', () => {
    contadorProducto += 1;
    const crearContenedorProductos = document.createElement("div");
    contenedorPrincipalProductos.appendChild(crearContenedorProductos);
    const leyendaNumeroProducto = document.createElement("label");
    crearContenedorProductos.appendChild(leyendaNumeroProducto);
    leyendaNumeroProducto.innerHTML = "Producto N°&nbsp;" + `${contadorProducto}`+"&nbsp;";
    const inputPrecioProducto = document.createElement("input");
    crearContenedorProductos.appendChild(inputPrecioProducto);
    inputPrecioProducto.classList.add("input-precio-producto");
    inputPrecioProducto.classList.add("input-predeterminado");
    inputPrecioProducto.setAttribute("placeholder","Ingresa el precio")
    const leyendaEtiquetaProducto = document.createElement("label");
    crearContenedorProductos.appendChild(leyendaEtiquetaProducto);
    leyendaEtiquetaProducto.innerHTML = "¿Etiqueta Roja?";
    const checkboxEtiquetaRoja = document.createElement("input");
    checkboxEtiquetaRoja.setAttribute("type","checkbox");
    checkboxEtiquetaRoja.setAttribute("value",`${contadorProducto}`)
    checkboxEtiquetaRoja.classList.add("checkboxEtiqueta");
    crearContenedorProductos.appendChild(checkboxEtiquetaRoja);
});

document.getElementById("boton-total-pagar").addEventListener('click', () =>{
    const valorInputPrecio = document.querySelectorAll(".input-precio-producto");
    let sumatoriaPrecioProductos = 0;
    let productoConDescuento;
    let productoSinDescuento;
    let bandera;
    for (let index = 0; index < valorInputPrecio.length; index++) {
        if(valorInputPrecio[index].value == "" || valorInputPrecio[index].value < 1){
            alert("Precio Inválido");
            bandera = false;
        }else{
            bandera = true;
        }
    }
    if(bandera == true){
        let inputCheckboxSeleccionado = document.querySelectorAll('input[type="checkbox"]');
        for (let index = 0; index < valorInputPrecio.length; index++) {
            if(inputCheckboxSeleccionado[index].checked == true){
                productoConDescuento = (parseFloat(valorInputPrecio[index].value) - parseFloat(valorInputPrecio[index].value*0.2));
                sumatoriaPrecioProductos += productoConDescuento;
            }
            if(inputCheckboxSeleccionado[index].checked == false){
                productoSinDescuento = parseFloat(valorInputPrecio[index].value);
                sumatoriaPrecioProductos += productoSinDescuento;
            }
        }
        document.getElementById("pago-total").innerHTML = '<p class="enunciado">'+'Total de la Compra:&nbsp;&#36;&nbsp;<strong>'+`${sumatoriaPrecioProductos}`+'</strong>&nbsp;pesos</p>';
    }
});



