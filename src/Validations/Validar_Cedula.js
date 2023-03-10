function validar_cedula(cedula) {
    if (typeof cedula != "string") return false;

    //cleanup
    cedula = cedula.replace(/-/g, "");

    // La cédula debe tener 11 dígitos
    if (cedula.length != 11) return false;

    // Validar serie
    if (
      parseInt(cedula.substring(0, 3)) != 402 &&
      parseInt(cedula.substring(0, 3)) > 121 &&
      parseInt(cedula.substring(0, 3)) < 1
    )
      return false;

    var suma = 0;
    var verificador = 0;

    for (var i = 0; i < cedula.length; i++) {
      let n = cedula.charAt(i);
      //No ejecutar el ultimo digito
      if (i == cedula.length - 1) break;

      // Los dígitos pares valen 2 y los impares 1
      let multiplicador = parseInt(i) % 2 == 0 ? 1 : 2;

      // Se multiplica cada dígito por su paridad
      let digito = parseInt(n) * parseInt(multiplicador);

      // Si la multiplicación da de dos dígitos, se suman entre sí
      digito =
        digito > 9
          ? [...digito.toString()]
              .map((e) => parseInt(e))
              .reduce((a, b) => a + b)
          : digito;

      // Se va haciendo la acumulación de esa suma
      suma = suma + digito;
    }
    // Al final se obtiene el verificador con la siguiente fórmula
    verificador = (10 - (suma % 10)) % 10;

    // Se comprueba el verificador
    return verificador == parseInt(cedula.slice(-1));
  }