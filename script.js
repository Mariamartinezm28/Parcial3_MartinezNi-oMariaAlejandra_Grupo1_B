/* 
Maria Alejandra Martínez Niño
Grupo 1
Problema B Simulador de compra en cuotas con tarjeta de crédito
*/


//CONSTANTES
const cuotasPermitidas 
const tasaMensual_1cuota = 0;   // %
const tasaMensual_2_12cuotas = 1.9; // %
const tasaMensual_13_36cuotas = 2.9; // %

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

if (valorCompra > cupo) {
    alert ("Compra rechazada por cupo insuficiente")
}
else (valorCompra <= cupo)
    alert ("Compra aprobada, puede continuar:")
    


switch (cuotas) {

     case (cuotas == 1):
            tasa = tasaMensual_1cuota;
            break;

        case (cuotas >= 2 && cuotas <= 12):
            tasa = tasaMensual_2_12cuotas;
            break;

        case (cuotas >= 13 && cuotas <= 36):
            tasa = tasaMensual_13_36cuotas;
            break;

        default:("Cantidad de cuotas no vlaida")
}

    let interesTotal = valorCompra * tasa * (cuotas + 1) / 2;
    let totalPagar = valorCompra + interesTotal;
    let cuotaMensual = totalPagar / cuotas;





       