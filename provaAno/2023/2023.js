   // Seleciona uma opção (destaca a selecionada e marca o input)
   function selectOption(element, groupName) {
    const radios = document.getElementsByName(groupName);
    radios.forEach(radio => {
      radio.parentElement.classList.remove("selected");
      radio.parentElement.classList.remove("wrong");
    });
    element.classList.add("selected");
    element.querySelector("input").checked = true;
    // O botão "Mostrar Solução" permanece desabilitado até que o quiz seja submetido.
  }

  // Alterna a exibição da solução de uma questão
  function toggleSolution(index, btn) {
    const sol = document.getElementById("solution-" + index);
    if (sol.style.display === "none" || sol.style.display === "") {
      sol.style.display = "block";
      btn.textContent = "Ocultar Solução";
    } else {
      sol.style.display = "none";
      btn.textContent = "Mostrar Solução";
    }
  }

  // Função para submeter o quiz, calcular o resultado e exibir o certificado
  function submitQuiz() {
    let score = 0;
    let unanswered = false;
    const questionElements = document.querySelectorAll('.question');
    
    questionElements.forEach((qEl, index) => {
      const correctOption = qEl.getAttribute('data-correct-option');
      const selectedRadio = qEl.querySelector('input[type="radio"]:checked');
      if (!selectedRadio) {
        unanswered = true;
      } else {
        if (selectedRadio.value === correctOption) {
          score++;
        } else {
          selectedRadio.parentElement.classList.add("wrong");
        }
      }
    });
    
    if (unanswered) {
      alert("Por favor, responda todas as questões antes de submeter.");
      return;
    }
    
    const percentage = (score / questionElements.length) * 100;
    const certificateMessage =
`Certificado de Conclusão
Este certificado atesta que você concluiu o exercício do EMA-137.

Não desanime! Revise o conteúdo e tente novamente para melhorar seu desempenho.

Você acertou ${score} de ${questionElements.length} questões (${percentage.toFixed(2)}%).`;
    
    const certificateContainer = document.getElementById("certificate");
    certificateContainer.innerHTML = `<pre>${certificateMessage}</pre>`;
    certificateContainer.classList.remove("hidden");
    
    // Após submeter, habilita todos os botões "Mostrar Solução"
    document.querySelectorAll(".show-solution-btn").forEach(btn => btn.disabled = false);
    
    // Desabilita o botão de submeter para evitar reenvio
    document.getElementById("submit-btn").disabled = true;
    
   
  }

   // Hahilita o botão mostrar solução quando o html é acionado
   document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".show-solution-btn").forEach(btn => btn.disabled = false);
  });