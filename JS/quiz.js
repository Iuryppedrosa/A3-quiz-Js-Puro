window.onload = function () {
  fetch("http://localhost:8080/perguntas")
    .then((response) => response.json())
    .then((data) => {
      let quizDiv = document.getElementById("quiz");
      data.forEach((pergunta) => {
        let perguntaDiv = document.createElement("div");
        perguntaDiv.className = "pergunta";
        let perguntaTexto = document.createElement("p");
        perguntaTexto.textContent = pergunta.textoDaPergunta;
        perguntaDiv.appendChild(perguntaTexto);

        pergunta.respostas.forEach((resposta) => {
          let respostaBotao = document.createElement("button");
          respostaBotao.textContent = resposta.textoDaResposta;
          respostaBotao.onclick = function () {
            if (resposta.id === pergunta.respostaCorreta.id) {
              alert("Resposta correta!");
            } else {
              alert("Resposta errada!");
            }
          };
          perguntaDiv.appendChild(respostaBotao);
        });

        quizDiv.appendChild(perguntaDiv);
      });
    });
};
