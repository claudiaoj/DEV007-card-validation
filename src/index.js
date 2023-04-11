import validator from './validator.js';

//console.log(validator);

const numeroTarjeta = document.getElementById("pago");
numeroTarjeta.addEventListener("click", obtenerNumeroTarjeta)

function obtenerNumeroTarjeta() {
    let numeroIngresado = document.getElementById("numTarjeta").value;
    
    //console.log(numeroIngresado)

    let esValido = validator.isValid(numeroIngresado);
    console.log(esValido);
}




