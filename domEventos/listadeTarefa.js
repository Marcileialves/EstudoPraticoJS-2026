 const input = document.getElementById("tarefa");
  const botao = document.getElementById("adicionar");
  const lista = document.getElementById("lista");

  botao.addEventListener("click", () => {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "❌";

    btnRemover.addEventListener("click", () => {
      lista.removeChild(li);
    });

    li.appendChild(btnRemover);
    lista.appendChild(li);

    input.value = "";
  });