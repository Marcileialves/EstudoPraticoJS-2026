let numeros = [1, 2, 3, 2, 4, 2];

let quantidade = numeros.reduce((cont, n) => {
  return n === 2 ? cont + 1 : cont;
}, 0);

console.log(quantidade); // 3
