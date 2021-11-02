const productos = [{ nombre: Brownie, precio: 2.50, stock: 10, imagen: hola},
                   { nombre: Birthday, precio: 2.50, stock: 5, imagen: hola},
                   { nombre: Lilac, precio: 3.50, stock: 20, imagen: hola},
                   { nombre: Pink, precio: 3.50, stock: 3, imagen: hola},
                   { nombre: Sprinkles, precio: 3.50, stock: 10, imagen: hola},
                   { nombre: Jam, precio: 2.50, stock: 5, imagen: hola},
                   { nombre: Kinder, precio: 2.50, stock: 20, imagen: hola},
                   { nombre: Orange, precio: 2.50, stock: 3, imagen: hola},
                   { nombre: Rose, precio: 3.50, stock: 10, imagen: hola}];


let contenedorCards = document.getElementById('contenedor-cards');

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;

    contenedorCards.appendChild(contenedor);
}