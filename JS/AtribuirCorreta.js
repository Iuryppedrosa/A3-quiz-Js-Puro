function atribuirRespostaCorreta() {
  const perguntaId = document.getElementById("perguntaIdInput").value;
  const respostaId = document.getElementById("respostaIdInput").value;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    `http://localhost:8080/perguntas/${perguntaId}/resposta-correta/${respostaId}`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar resposta correta");
      }
      console.log("Resposta correta atribuída com sucesso!");
      alert("Resposta correta atribuída com sucesso!");
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao atualizar resposta correta");
    });
}
