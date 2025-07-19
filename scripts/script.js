document.addEventListener('DOMContentLoaded', function() {
  const perguntarBtn = document.getElementById('perguntar-btn');
  perguntarBtn.addEventListener('click', responderPergunta);
});

async function responderPergunta() {
  const pergunta = document.getElementById("pergunta").value;
  const respostaDiv = document.getElementById("resposta");
  const gif = document.getElementById("gif");

  respostaDiv.style.opacity = 0;
  gif.style.display = "none";

  if (!pergunta.trim().endsWith("?")) {
    respostaDiv.innerText = "A pergunta precisa terminar com '?' 🤨";
    respostaDiv.style.opacity = 1;
    return;
  }

  respostaDiv.innerText = "Pensando...";
  respostaDiv.style.opacity = 1;

  try {
    const response = await fetch("https://yesno.wtf/api");
    const data = await response.json();

    setTimeout(() => {
      respostaDiv.innerText = data.answer.toUpperCase();
      respostaDiv.style.opacity = 1;
      gif.src = data.image;
      gif.style.display = "block";
    }, 600);
  } catch (error) {
    respostaDiv.innerText = "Erro ao buscar resposta 😓";
    respostaDiv.style.opacity = 1;
    gif.style.display = "none";
  }
}