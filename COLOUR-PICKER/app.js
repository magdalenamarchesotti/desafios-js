const inputColour = document.querySelector("#inputColour");
const btnView = document.querySelector("#btnView");
const parrafoHexa = document.querySelector("#parrafoHexa");
const cardColour = document.querySelector("#cardColour");

btnView.addEventListener ("click", () => {
parrafoHexa.textContent = inputColour.value;
cardColour.style.backgroundColor = inputColour.value;

navigator.clipboard
    .writeText(inputColour.value);
    then(() => console.log("Copied!"))
    .catch((e) => console.log(e));
});
