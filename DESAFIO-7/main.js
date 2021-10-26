let parrafo = document.createElement("p");
parrafo.innerHTML = "Estoy sufriendo un montón con JS"; 
document.body.appendChild(parrafo);


let padre = document.getElementById("familia");
let integrantes = ["Eduardo", "Silvia", "Ramiro", "Magdalena", "Josefina", "Atilio"];

for (const integrante of integrantes) {
    let li = document.createElement("li");
    li.innerHTML = integrante;
    padre.appendChild(li);
}


const productos = [{ codigo: 3445,  nombre: "Remera", precio: 1245},
                   {  codigo: 2234,  nombre: "Jogging", precio: 2550},
                   {  codigo: 5467,  nombre: "Vestido", precio: 3450},
                   {  codigo: 1432,  nombre: "Campera", precio: 4520}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div>
                                <p><i>Código: ${producto.codigo}</i></p>
                                <p>Producto: ${producto.nombre}</p>
                                <p><strong>$${producto.precio}</strong></p>
                            </div>
                            `;

    document.body.appendChild(contenedor);
}