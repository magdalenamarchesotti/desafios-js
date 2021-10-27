let button = document.getElementById('button');
let carrito = document.getElementById('carrito');

button.addEventListener('click', loQuiero);

function loQuiero () {
let frase = document.createElement ('p');
frase.innerHTML = `Se agregó este producto al carrito`
carrito.appendChild(frase);
}

