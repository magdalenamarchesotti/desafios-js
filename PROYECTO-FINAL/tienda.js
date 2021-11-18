const productos = [{ nombre: "Brownie", precio: 2.50, stock: 10, imagen: 'imagenes/dona-sabor-brownie.jpeg'},
                   { nombre: "Birthday", precio: 2.50, stock: 5, imagen: 'imagenes/dona-sabor-cumple.jpeg'},
                   { nombre: "Lilac", precio: 3.50, stock: 20, imagen: 'imagenes/dona-sabor-glase-lila.jpeg'},
                   { nombre: "Pink", precio: 3.50, stock: 3, imagen: 'imagenes/dona-sabor-glase-rosa.jpeg'},
                   { nombre: "Sprinkles", precio: 3.50, stock: 10, imagen: 'imagenes/dona-sabor-granas.jpeg'},
                   { nombre: "Jam", precio: 2.50, stock: 5, imagen: 'imagenes/dona-sabor-jam.jpeg'},
                   { nombre: "Kinder", precio: 2.50, stock: 20, imagen: 'imagenes/dona-sabor-kinder.jpeg'},
                   { nombre: "Orange", precio: 2.50, stock: 3, imagen: 'imagenes/dona-sabor-naranja.jpeg'},
                   { nombre: "Rose", precio: 3.50, stock: 10, imagen: 'imagenes/dona-sabor-toda-rosa.jpeg'}];


let contenedorCards = document.getElementById('contenedor-cards');

for (let i = 0; i < productos.length; i++) {

     let cardsProducto = document.createElement('div');  
     cardsProducto.classList = 'cards-producto';                      
     cardsProducto.innerHTML = `<img class="foto-producto" src=${productos[i].imagen} alt="">
                                 <div class="info-producto">
                                     <a class="titulo-producto" href="#">${productos[i].nombre}</a>
                                     <p class="precio-producto">£${productos[i].precio}</p>
                                     <p class="stock-producto">Only ${productos[i].stock} in stock</p>
                                     <button class="boton-carrito">Add to Basket</button>
                                 </div>`;
    contenedorCards.appendChild(cardsProducto);
 }

 let botonCarrito = document.getElementsByClassName('boton-carrito'); 
 let fraseCarrito = document.getElementsByClassName('boton-frase');                                          

 for (let i = 0; i < botonCarrito.length; i++) {

     botonCarrito[i].addEventListener('click', () => { 
         
        let frase = document.createElement('li'); 
        frase.innerHTML = `You added "${productos[i].name}" to Basket`;          
         fraseCarrito.appendChild(frase);          

     })
     }

