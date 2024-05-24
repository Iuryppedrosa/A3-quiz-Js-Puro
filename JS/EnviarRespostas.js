JavaScript;

function enviarResposta() {
  const resposta = document.getElementById("respostaInput").value;
  const perguntaId = document.getElementById("perguntaIdInput").value;

  const data = {
    textoDaResposta: resposta,
    pergunta: {
      id: perguntaId,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:8080/respostas", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar resposta");
      }
      console.log("Resposta enviada com sucesso!");
      alert("Resposta enviada com sucesso!");
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao enviar resposta");
    });
}
