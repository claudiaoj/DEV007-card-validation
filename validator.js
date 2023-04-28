const validator = {          //objeto: contiene 2 metodos isvalid e maskify.

  // Función que verifica si una tarjeta de crédito es válida o no. Recibe como parámetro(crediCardNumber).
  isValid: function (creditCardNumber) { 

    // algoritmo de Luhn
    //var sum en 0, para almacenar la suma de los digitos de la tarjeta.
    let sum = 0;                                                
    
    // El primer ciclo, recorre los dígitos de la tarjeta de crédito en posiciones pares, de derecha a izquierda.
    for (let i = creditCardNumber.length - 2; i >= 0; i = i - 2) {   

      // Multiplica el dígito actual por dos.
      const dobleNum = parseInt(creditCardNumber[i]) * 2;       

      //Condicion
      if (dobleNum >= 10) {
        sum += dobleNum - 9;
      } else {
        sum += dobleNum;
      }
    }
    // El segundo bucle recorre los dígitos de la tarjeta de crédito en posiciones impares, de derecha a izquierda.
    for (let i = creditCardNumber.length - 1; i >= 0; i = i - 2) { 

      // Agrega el dígito actual a la variable 'sum'. += oper. asignacion
      sum += parseInt(creditCardNumber[i]);                     
    }

    //Condición.
    if (sum % 10 === 0) {     
      return true;           // la tarjeta es válida
    } else
      return false;          // la tarjeta no es válida         
  },
  

  // Función que enmascara los números de la TC.
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber
    }
    //Se obtiene los últimos 4 numeros de la TC y se almacena en la variable.
    const ultimosCuatroNum = creditCardNumber.slice(-4);
  
    // El "#" se repite con una longitud igual a la cantidad de caracteres del número de tarjeta menos los últimos 4.
    const numeroEnmascarado = "#".repeat(creditCardNumber.length - 4) + ultimosCuatroNum; 
    return numeroEnmascarado;
  }

};

export default validator;












