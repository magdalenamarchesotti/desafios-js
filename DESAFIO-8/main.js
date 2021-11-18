let button = document.getElementById('button');
let carrito = document.getElementById('carrito');

button.addEventListener('click', loQuiero);

function loQuiero () {
let frase = document.createElement ('p');
frase.innerHTML = `Se agregó este producto al carrito`;
carrito.appendChild(frase);
}


// APUNTES 

//  Con DOM
​//  cuando haces en DOM getElementsByClassName por parametro solo pasas el nombre de la clase. El punto es para jquery. 

//a partir del bton donde haces click ...pedimos su padre directo...y a su padre los hijos que tiene (entre ellos el boton que creaste)
//let hijos = botonCarrito[i].parentNode.children;
            
////Nos quedamos con el primer hijo que es la componente donde esta el titulo
//let titulo=hijos[0].text;
​
//et frase = document.createElement('li'); 
//frase.innerHTML = `You added "${titulo}" to Basket`;  
                    
////frase carrito es un coleccion de elementos por lo tanto necesitas acceder a las posiciones para poder hacer un appendChild 
//fraseCarrito[0].appendChild(frase);          
​
//})
//}
​
​
//Con jquery 
​
//$(document).ready(()=>{
    //A todos aquellos botones que pertenecen a la clase "boton-frase" (fijate qeu aca si utilizo el punto en el selector) 
   // $('.boton-carrito').click((e)=>{
​
​
        //guardo en frase el titulo del elemento para agragar al carrito.
        // Desde donde surge el click obtengo su padre luego sus hijos y me quedo con el primero de ellos que es el titulo de el elemento
       // let titulo = $(e.target).parent().children().first().text();
       // $('.boton-frase').append(`
                                  //  <li>
                                   //     You added "${titulo}" to Basket
                                  //  </li>
        
                               // `) ;
​
​
  //  }) 
​
// })


let contenedorCards = document.getElementById('contenedor-cards');

for (const product of productos) {
  $('#contenedor-cards').append(`<img class="foto-producto" src=${product.imagen} alt="">
                                 <div class="info-producto">
                                     <a class="titulo-producto" href="#">${product.nombre}</a>
                                     <p class="precio-producto">£${product.precio}</p>
                                     <p class="stock-producto">Only ${product.stock} in stock</p>
                                     <button class="boton-carrito">Add to Basket</button>
                                 </div>`)
}




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





​

