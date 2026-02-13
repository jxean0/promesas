obtenerNumero()
  .then((num) => {
    multiplicarPorDos(num);
  })
  .then((resultado) => {
    console.log(resultado);
  });

// Que imprime?
//R El codigo imprime que la funcion no esta definida
//R porque no se esta retornando la promesa de multiplicarpordos, como el primer .then no retorna nada, el segundo recibe un no definido
//R falto el return antes de multiplicarpordos
//R retornaria el numero 20