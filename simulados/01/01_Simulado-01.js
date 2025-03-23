// Lista de questões (exemplo com 2 questões)
const questions = [
  {
    question: "De acordo com o EMA-137, prevalece a autoridade advinda da responsabilidade atribuída à função, associada com aquela decorrente de seu posto ou graduação, à qual passaremos a definir, genericamente, como chefia. De qual papel estamos falando?",
    options: ["Chefe", "Condutor de homens", "Líder", "Mais antigo", "Comandante"],
    correctOption: "Chefe",
    detailedSolution: `A) Chefe<br>
(... No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais: o de “CHEFE” e o de “condutor de homens”. Em relação ao primeiro papel, prevalece a autoridade advinda da responsabilidade atribuída à função, associada com aquela decorrente de seu posto ou graduação, a qual definimos, genericamente, como chefia. ...)`
  },
  {
    question: `Segundo o EMA-137, marque a opção CORRETA quanto às afirmativas abaixo relacionadas.<br>
I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de chefe.<br>
II - Chefia e liderança não são processos alternativos e sim, simultâneos e complementares.<br>
III - Os melhores resultados no tocante à liderança ocorrem quando ela é desenvolvida, não sendo impositiva. O exercício da chefia é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.<br>
IV - A liderança deve ser entendida como um processo dinâmico e progressivo de aprendizado.<br>
V - O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pela instituição e, prioritariamente, por cada militar.<br>
VI - O exercício da liderança é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`,
    options: [
      "(A) As afirmativas I, II e IV estão corretas",
      "(B) As afirmativas III, IV, V e VI estão corretas",
      "(C) As afirmativas II, III, IV e V estão corretas",
      "(D) As afirmativas V e VI estão corretas",
      "(E) As afirmativas I, II, III, IV, V e VI estão corretas"
    ],
    correctOption: "C",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  }
];

// Função para renderizar todas as questões de uma única vez
function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = questions.map((q, i) => {
    return `
      <div class="question" id="question-${i}">
        <h3>${q.question}</h3>
        <div class="options">
          ${q.options.map((option, j) => {
            const trimmed = option.trim();
            const displayText = trimmed.startsWith("(") ? trimmed : `${String.fromCharCode(65 + j)}) ${option}`;
            const value = trimmed.startsWith("(") ? trimmed.substring(1,2) : option;
            return `
              <div class="option" onclick="selectOption(this, 'q${i}')">
                <input type="radio" name="q${i}" id="q${i}_${j}" value="${value}">
                <label for="q${i}_${j}">${displayText}</label>
              </div>
            `;
          }).join('')}
        </div>
        <!-- Botão "Mostrar Solução" inicia desabilitado -->
        <button class="show-solution-btn" id="sol-btn-${i}" disabled onclick="toggleSolution(${i}, this)">Mostrar Solução</button>
        <!-- Bloco de solução para a questão -->
        <div class="solution" id="solution-${i}">
          <fieldset class="solution-box">
            <legend>Resposta(s) correta(s)</legend>
            <p class="solution-text">
              ${q.detailedSolution}
            </p>
          </fieldset>
        </div>
      </div>
    `;
  }).join('');
}

// Função para selecionar uma opção (mantém o tamanho inalterado)
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

// Função para alternar a exibição da solução de uma questão
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

// Função para submeter o quiz, calcular o resultado, destacar alternativas erradas e exibir o certificado
function submitQuiz() {
  let score = 0;
  let unanswered = false;
  
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const container = document.getElementById(`question-${i}`);
    if (selected) {
      if (selected.value === q.correctOption) {
        score++;
      } else {
        // Destaca a alternativa errada selecionada
        selected.parentElement.classList.add("wrong");
      }
    } else {
      unanswered = true;
    }
  });
  
  if (unanswered) {
    alert("Por favor, responda todas as questões antes de submeter.");
    return;
  }
  
  const percentage = (score / questions.length) * 100;
  
  // Cria a mensagem do certificado conforme solicitado
  const certificateMessage = 
`Certificado de Conclusão
Este certificado atesta que você concluiu o exercício do EMA-137.

Não desanime! Revise o conteúdo e tente novamente para melhorar seu desempenho.

Você acertou ${score} de ${questions.length} questões (${percentage.toFixed(2)}%).`;
  
  const certificateContainer = document.getElementById("certificate");
  certificateContainer.innerHTML = `<pre>${certificateMessage}</pre>`;
  certificateContainer.classList.remove("hidden");
  
  // Após submeter, habilita todos os botões "Mostrar Solução"
  document.querySelectorAll(".show-solution-btn").forEach(btn => btn.disabled = false);
  
  // Desabilita o botão de submeter para evitar reenvio
  document.getElementById("submit-btn").disabled = true;
}

// Inicializa o quiz renderizando todas as questões
renderQuestions();