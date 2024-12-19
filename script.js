// Seleciona todos os elementos com a classe "duvida"
let elementosDuvida = document.querySelectorAll(".duvida");

// Adiciona um evento de clique a cada elemento
elementosDuvida.forEach((duvida) => {
  duvida.addEventListener("click", () => {
    // Fecha todas as outras perguntas
    elementosDuvida.forEach((item) => {
      if (item !== duvida) {
        item.classList.remove("ativa"); // Remove a classe "ativa" dos itens não clicados
      }
    });

    // Alterna a classe "ativa" no item clicado
    duvida.classList.toggle("ativa");
  });
});
z