import validator from './validator.js';

//Se obtiene al id pago y al hacer click, se llama a la funcion obtenerNumeroTarjeta.
const numeroDeTarjeta = document.getElementById("pago")
numeroDeTarjeta.addEventListener("click", (e) => obtenerNumeroTarjeta(e)) 

function obtenerNumeroTarjeta(e) {
  //Previene la accion por defecto del evento click.
  e.preventDefault();   
  
  //Obtener el valor del input donde el usuario ingresa el número de tarjeta.
  const numeroIngresado = document.getElementById("numTarjeta").value;    
  
  //Trim() elimina espacios en blanco y compara el resultado con una cadena vacía ('').
  if (numeroIngresado.trim() === '') {                     
    alert("Ingrese un número de tarjeta de crédito");       
    return;                                                     

  }

  // Validar si el número de tarjeta es válido usando la función isValid de validator.
  if (validator.isValid(numeroIngresado)) {                
    alert("La tarjeta de crédito es válida");
  } else {
    alert("La tarjeta de crédito no es válida");
    return;
  }
  
  //Enmascarar el número de tarjeta utilizando la función maskify y muestra solo los últimos 4 dígitos.
  const numFinal = validator.maskify(numeroIngresado, { mostrarUltimosNumeros: 4 });   
  alert("Número de tarjeta: " + numFinal);

}




