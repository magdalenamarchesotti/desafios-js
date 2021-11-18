const basket = document.getElementById('basket');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card button');

const basketObject = {}

const addBasket = (e) => {
console.log(e.target.dataset.fruit);

const product = {
    title: e.target.dataset.fruit,
    id: e.target.dataset.fruit,
    quantity: 1,
};

if(basketObject.hasOwnProperty(product.title)){
    product.quantity = basketObject[product.title].quantity + 1;
}

basketObject [product.title] = product
printBasket()
};

const printBasket = () => {
    basket.textContent = "";
Object.values(basketObject).forEach ((item) => {
const clone = template.content.firstElementChild.cloneNode(true)
clone.querySelector(".lead").textContent = item.title;
clone.querySelector(".badge").textContent = item.quantity;

fragment.appendChild(clone);
});

basket.appendChild(fragment);

};

btnesBotones.forEach((btn) => btn.addEventListener("click", addBasket));

// con e.target nos traemos la informacion de, en este caso, el boton que nos trajimos de html