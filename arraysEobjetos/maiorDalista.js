// Primeira forma de achar usando sem lógica.
function maiorValor(array) {
  return array.reduce((maior, atual) => {
    return atual > maior ? atual : maior;
  });
}

// segunda forma de achar o maior, usando lógica pura.
function maiorValor(array) {
  let maior = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}
