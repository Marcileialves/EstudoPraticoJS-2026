const form = document.getElementById("formulario");
const erro = document.getElementById("erro");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede envio automático

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (nome === "" || email === "" || senha === "") {
    erro.textContent = "Preencha todos os campos";
    return;
  }

  if (senha.length < 6) {
    erro.textContent = "A senha deve ter no mínimo 6 caracteres";
    return;
  }

  erro.textContent = "Formulário válido ✅";
});
