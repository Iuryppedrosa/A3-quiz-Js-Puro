function enviarPergunta() {
  const pergunta = document.getElementById("perguntaInput").value;

  const data = { textoDaPergunta: pergunta };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:8080/perguntas", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar pergunta");
      }
      console.log("Pergunta enviada com sucesso!");
      alert("Pergunta enviada com sucesso!");
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao enviar pergunta");
    });
}
