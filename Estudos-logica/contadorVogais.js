function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouAEIOU";

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}
