let nombreIngresado = prompt("Ingresá tu nombre");

if((nombreIngresado !="") && ((nombreIngresado == "MAGUI") || (nombreIngresado == "magui") || (nombreIngresado == "Magui"))){
    alert("Hola, " + nombreIngresado + "!");
}
else {
    alert("Error: Ingresá el nombre de la mejor programadora de UK");
}