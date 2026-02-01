let listaDeCompras = [];

function adicionarItem(item) {
  listaDeCompras.push(item);
}
adicionarItem("Arroz");
adicionarItem("Feijão");
adicionarItem("Carne");

console.log(listaDeCompras);
// ["Arroz", "Feijão", "Carne"]

function removerItem(item) {
  const index = listaDeCompras.indexOf(item);

  if (index !== -1) {
    listaDeCompras.splice(index, 1);
  } else {
    console.log("Item não encontrado");
  }
}

removerItem("Feijão");

console.log(listaDeCompras);
// ["Arroz", "Carne"]

function mostrarLista() {
  console.log("Lista de Compras:");
  for (let item of listaDeCompras) {
    console.log("- " + item);
  }
}
