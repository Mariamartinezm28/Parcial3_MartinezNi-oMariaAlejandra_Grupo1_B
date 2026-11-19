/* 
Maria Alejandra Martínez Niño
Grupo 1
Problema B Simulador de compra en cuotas con tarjeta de crédito
*/


//CONSTANTES
const cuotasPermitidas 
const tasaMensual_1cuota = 0;   // %
const tasaMensual_2_12cuotas = 1.9; // %
const tasaMensual_13_24cuotas = 2.9; // %

// VARIABLES 

let valorCompra =  Number(prompt("Ingrese el valor de la compra:"));
let cuotas =  Number(prompt("A cuantas cuotas lo desea:"));
let cupo = 5000000;

//PROCESO DE CALCULO

if (valorCompra <= 0 || cupo <= 0) {
    alert("Error de la compra , el valor de compra o el cupo no son válidos");
}

else if (cuotas < 1 || cuotas > 36) {
    alert("El numero de cuotas no es valido");
}


