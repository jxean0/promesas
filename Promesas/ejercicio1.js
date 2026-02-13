function saludar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre === "pepe") {
        resolve(`Hola ${nombre}, bienvenido`);
      } else {
        reject("No te conozco");
      }
    }, 2000);
  });
}

saludar("Jean")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });