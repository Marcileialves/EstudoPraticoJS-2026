// função que retorna os números pares de um array
function filtrarPares(array) {
  return array.filter(numero => numero % 2 === 0);
}

// Aqui estámos usando o filtro para pegar esses números
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]

