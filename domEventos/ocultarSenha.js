const senha = document.getElementById("senha");
const botao = document.getElementById("toggle");

botao.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    botao.textContent = "Ocultar";
  } else {
    senha.type = "password";
    botao.textContent = "Mostrar";
  }
});
