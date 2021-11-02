let button = document.getElementById('psicodelic');
let carrito = document.getElementById('carrito');

button.addEventListener('click', loQuiero);

function loQuiero () {
let frase = document.createElement ('li');
frase.innerHTML = `Se agregó este producto al carrito`;
carrito.appendChild(frase);
}