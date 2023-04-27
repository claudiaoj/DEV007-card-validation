import validator from './validator.js';

const numeroDeTarjeta = document.getElementById("pago")
numeroDeTarjeta.addEventListener("click", (e) => obtenerNumeroTarjeta(e)) //Al hacer click, se llama a la funcion obtenerNumeroTarjeta.

function obtenerNumeroTarjeta(e) {
  e.preventDefault();                                                   //Previene la accion por defecto del evento click, que es recargar la página. 

  const numeroIngresado = document.getElementById("numTarjeta").value;    //Obtener el valor del input donde el usuario ingresa el número de tarjeta.
  
  if (numeroIngresado.trim() === '') {                       //Validar que el input no este vacio. 
    alert("Ingrese un número de tarjeta de crédito");        //Trim() elimina espacios en blanco y compara el resultado con una cadena vacía ('') usando (===).
    return;                                                     

  }
  
  if (validator.isValid(numeroIngresado)) {                // Validar si el número de tarjeta es válido usando la función isValid del módulo validator.
    alert("La tarjeta de crédito es válida");
  } else {
    alert("La tarjeta de crédito no es válida");
    return;
  }
  
  const numFinal = validator.maskify(numeroIngresado, { mostrarUltimosNumeros: 4 });   //Enmascarar el número de tarjeta utilizando la función maskify del módulo validator y muestra solo los últimos 4 dígitos
  alert("Número de tarjeta: " + numFinal);

}




