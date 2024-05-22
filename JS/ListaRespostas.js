window.onload = function () {
  getRespostas();
};

function getRespostas() {
  fetch("http://localhost:8080/respostas")
    .then((response) => response.json())
    .then((respostas) => {
      const listaRespostas = document.getElementById("listaRespostas");
      listaRespostas.innerHTML = "";

      respostas.forEach((resposta) => {
        const listItem = document.createElement("li");
        listItem.textContent = resposta.textoDaResposta;
        listaRespostas.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter respostas:", error);
    });
}
