window.onload = function () {
  getPerguntas();
};

function getPerguntas() {
  fetch("http://localhost:8080/perguntas")
    .then((response) => response.json())
    .then((perguntas) => {
      const listaPerguntas = document.getElementById("listaPerguntas");
      listaPerguntas.innerHTML = "";

      perguntas.forEach((pergunta) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${pergunta.textoDaPergunta}</strong>`;

        const respostaCorreta = document.createElement("ul");
        if (pergunta.respostaCorreta) {
          const respostaItem = document.createElement("li");
          respostaItem.innerHTML = `<strong>Resposta Correta: ${pergunta.respostaCorreta.textoDaResposta}</strong>`;
          respostaCorreta.appendChild(respostaItem);
        }

        const respostasLista = document.createElement("ul");
        pergunta.respostas.forEach((resposta) => {
          const respostaItem = document.createElement("li");
          respostaItem.textContent = resposta.textoDaResposta;
          respostasLista.appendChild(respostaItem);
        });

        listItem.appendChild(respostaCorreta);
        listItem.appendChild(respostasLista);

        listaPerguntas.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter perguntas:", error);
    });
}
window.onload = function () {
  getPerguntas();
};

function getPerguntas() {
  fetch("http://localhost:8080/perguntas")
    .then((response) => response.json())
    .then((perguntas) => {
      const listaPerguntas = document.getElementById("listaPerguntas");
      listaPerguntas.innerHTML = "";

      perguntas.forEach((pergunta) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${pergunta.textoDaPergunta}</strong>`;

        const respostaCorreta = document.createElement("ul");
        if (pergunta.respostaCorreta) {
          const respostaItem = document.createElement("li");
          respostaItem.innerHTML = `<strong>Resposta Correta: ${pergunta.respostaCorreta.textoDaResposta}</strong>`;
          respostaCorreta.appendChild(respostaItem);
        }

        const respostasLista = document.createElement("ul");
        pergunta.respostas.forEach((resposta) => {
          const respostaItem = document.createElement("li");
          respostaItem.textContent = resposta.textoDaResposta;
          respostasLista.appendChild(respostaItem);
        });

        listItem.appendChild(respostaCorreta);
        listItem.appendChild(respostasLista);

        listaPerguntas.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao obter perguntas:", error);
    });
}
