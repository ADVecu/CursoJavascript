
var nombreIngresado = prompt ("Hola, Ingresa tu nombre");
var numeroIngresado = parseInt(prompt("Ingrese un numero que se encuentre entre 100 y 200"));



if(numeroIngresado >=100 && numeroIngresado <=200)
{
    alert("Gracias " + nombreIngresado + ", tu respuesta es correcta");
}
else{

    alert("Lo siento " + nombreIngresado + ", tu respuesta es incorrecta");
}