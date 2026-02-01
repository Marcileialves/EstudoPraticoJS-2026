let contador = 0;

  const btnMais = document.getElementById("mais");
  const btnMenos = document.getElementById("menos");
  const valor = document.getElementById("valor");

  btnMais.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
  });

  btnMenos.addEventListener("click", () => {
    contador--;
    valor.textContent = contador;
  });