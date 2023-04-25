const validator = {          //objeto, contiene 2 metodos isvalid e maskify.

  isValid: function (creditCardNumber) { // Función que verifica si una tarjeta de crédito es válida o no. Recibe como parámetro(crediCardNumber) el número de la tarjeta.

    // algoritmo de Luhn
    let sum = 0;                                                  //var sum en 0, para almacenar la suma de los digitos de la tarjeta.
    
    for (let i = creditCardNumber.length - 2; i >= 0; i = i - 2) {   // El primer ciclo, recorre los dígitos de la tarjeta de crédito en posiciones pares, de derecha a izquierda.
      const dobleNum = parseInt(creditCardNumber[i]) * 2;         // Multiplica el dígito actual por dos.
      
      if (dobleNum >= 10) {
        sum += dobleNum - 9;
      } else {
        sum += dobleNum;
      }
    }

    for (let i = creditCardNumber.length - 1; i >= 0; i = i - 2) { // El segundo bucle recorre los dígitos de la tarjeta de crédito en posiciones impares, de derecha a izquierda.
      sum += parseInt(creditCardNumber[i]);                     // Agrega el dígito actual a la variable 'sum'.
    }

    if (sum % 10 === 0) {                        
      return true;           // la tarjeta es válida
    } else
      return false;            // la tarjeta no es válida         
  },
    

  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber
    }
    const ultimosCuatroNum = creditCardNumber.slice(-4);
    const numeroEnmascarado = "#".repeat(creditCardNumber.length - 4) + ultimosCuatroNum;
    return numeroEnmascarado;
  }

};

export default validator;












