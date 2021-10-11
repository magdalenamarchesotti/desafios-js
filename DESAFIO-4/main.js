// DESAFIO COMPLEMENTARIO
const suma = (a,b) => a + b;
const iva = x => x * 0.21;

let precioProducto  = 4500;

let PrecioIva = suma(precioProducto,iva(precioProducto));
console.log(PrecioIva);


// DESAFIO OBLIGATORIO
let total = 0;

function agregarAlCarrito() {

    do {
        let producto = prompt("¿Querés comprar remerones, hoodies o ambos?", "Ej: ambos");
        let cantidad = parseInt(prompt("¿Cuántos querés comprar?", 0));

let precio = 0;

        switch (producto) {
            case "remerones" :
                precio = 1350;
                break;
            case "hoddies" :
                precio = 2100;
                break;
            case "ambos" :
                precio = 3450;
                break;
            default:
                alert("Alguno de los datos ingresados es incorrecto");
                precio = 0;
                cantidad = 0;
        }

        total = total + precio * cantidad;
        otroProducto = confirm("¿Querés agregar otro producto?");
    } 
    while (otroProducto);
    alert("El total de tu compra es $"+total);
}

agregarAlCarrito();

