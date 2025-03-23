// Lista de questões (duas questões para teste)
const questions = [
    {
      question: "1 - De acordo com o EMA-137, prevalece a autoridade advinda da responsabilidade atribuída à função, associada com aquela decorrente de seu posto ou graduação, à qual passaremos a definir, genericamente, como chefia. De qual papel estamos falando?",
      options: ["(A) Chefe",
                "(B) Condutor de homens", 
                "(C) Líder", 
                "(D) Mais antigo", 
                "(E) Comandante"],
      // Resposta correta é "Chefe"
      correctOption: "A",
      detailedSolution: `A) Chefe<br>
  (... No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “CHEFE” e o de “condutor de homens”. Em relação ao primeiro papel, prevalece a autoridade advinda da responsabilidade atribuída à função, associada com aquela decorrente de seu posto ou graduação, à qual passaremos a definir, genericamente, como chefia. ...)`
    },

    {
      question: `2 - Segundo o EMA-137, marque a opção CORRETA quanto às afirmativas abaixo relacionadas.<br><br>
  I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de chefe.<br><br>
  II - Chefia e liderança não são processos alternativos e sim, simultâneos e complementares.<br><br>
  III - Os melhores resultados no tocante à liderança ocorrem quando ela é desenvolvida, não sendo impositiva. O exercício da chefia, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.<br><br>
  IV - A liderança deve ser entendida como um processo dinâmico e progressivo de aprendizado.<br><br>
  V - O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pela instituição e, prioritariamente, por cada militar.<br><br>
  VI - O exercício da liderança, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.`,
      options: [
        "(A) As afirmativas I, II e IV estão corretas",
        "(B) As afirmativas III, IV, V e VI estão corretas",
        "(C) As afirmativas II, III, IV e V estão corretas",
        "(D) As afirmativas V e VI estão corretas",
        "(E) As afirmativas I, II, III, IV, V e VI estão corretas"
      ],
      // Resposta correta é "C"
      correctOption: "C",
      detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
  VI - O exercício da CHEFIA, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.`
    },
    {
        question: `3 - De acordo com o EMA-137, identifica-se um estreito relacionamento com o atributo de líder. Neste contexto, fica ressaltada a importância da capacidade individual dos mais antigos em influenciarem e inspirarem os seus subordinados. De qual papel estamos falando:`,
        options: [
          "(A) Chefe",
          "(B) Condutor de homens",
          "(C) Chefe de Departamento",
          "(D) Mais antigo",
          "(E) Comandante"
        ],
        // Resposta correta é "B"
        correctOption: "B",
        detailedSolution: `No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “chefe” e o de “condutor de homens”. Em relação ao primeiro papel, prevalece a autoridade advinda da responsabilidade atribuída à função, associada com aquela decorrente de seu posto ou graduação, à qual passaremos a definir, genericamente, como chefia. Com respeito ao segundo papel, identifica-se um estreito relacionamento com o atributo de líder. Neste contexto, fica ressaltada a importância da capacidade individual dos
mais antigos em influenciarem e inspirarem os seus subordinados.`
      },

      {
        question: `4 - Acordo o EMA-137, a liderança deve ser entendida como um processo ______________ e ____________ de aprendizado, o qual, desenvolvido nos cursos de carreira e no dia a dia das OM, trará não só evidentes benefícios às organizações, como também contribuirá para o sucesso profissional individual de cada militar.`,
        options: [
          "(A) Simultâneo e correlato",
          "(B) Dinâmico e progressivo",
          "(C) Simultâneos e complementares",
          "(D) Dinâmico e complementar ",
          "(E) Simultâneo e progressivo "
        ],
        // Resposta correta é "B"
        correctOption: "B",
        detailedSolution: `A liderança deve ser entendida como um processo dinâmico e progressivo de aprendizado, o qual, desenvolvido nos cursos de carreira e no dia a dia das OM, trará não só evidentes benefícios às organizações, como também contribuirá para o sucesso profissional individual de cada militar. Desta forma, o contínuo desenvolvimento das qualidades dos
        militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pela instituição e, prioritariamente, por cada militar. `
      },

      {
        question: `5 - De acordo com o EMA-137, no desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: `,
        options: [
          "(A) o de “chefe” e o de “mestre”",
          "(B) o de “líder” e o de “mestre”",
          "(C) o de “líder” e o de “chefe de departamento”",
          "(D) o de “chefe” e o de “comandante”",
          "(E) o de “chefe” e o de “condutor de homens”"
        ],
        // Resposta correta é "B"
        correctOption: "E",
        detailedSolution: ` No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “chefe” e o de “condutor de homens”.`
      },
  
            {
        question: `6 - Segundo o EMA-137, coloque F(falso) ou V(verdadeiro) nas sentenças a seguir, em relação a chefia e liderança, assinalando em seguida a opção correta.`,
        options: [
          "( ) O exercício da chefia, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para  tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.",
          "( ) No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “chefe” e o de “comandante”",
          "( ) Caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão.",
          "( ) Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois CHEFIA e LIDERANÇA não são processos alternativos e sim, simultâneos e complementares",
          "( ) A liderança deve ser entendida como um processo DINÂMICO e PROGRESSIVO de aprendizado, o qual, desenvolvido nos cursos de carreira e no dia a dia das OM, trará não só evidentes benefícios às organizações, como também contribuirá para o sucesso profissional individual de cada militar",
          "( ) O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pelo militar e, prioritariamente, por cada OM.",
          "(A) (V) (F) (V) (V) (V) (F)",
          "(B) (F) (F) (V) (V)  (F)  (F)",
          "(C) (V) (V) (V) (V) (V) (V)",
          "(D) (F) (F) (V) (V) (V) (F)",
          "(E) (V) (V) (V) (V) (V) (F)",          
        ],
        // Resposta correta é "A"
        correctOption: "A",
        detailedSolution: `No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “chefe” e o de “condutor de homens”. <br> - O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pela instituição e, prioritariamente, por cada militar.`
      },

      {
        question: `7 - De acordo com o EMA-137, caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão. Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois chefia e liderança:`,
        options: [
          "( ) O exercício da chefia, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para  tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.",
          "( ) No desempenho de suas funções, os mais antigos, normalmente, desempenham dois papéis funcionais, a saber: o de “chefe” e o de “comandante”",
          "( ) Caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão.",
          "( ) Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois CHEFIA e LIDERANÇA não são processos alternativos e sim, simultâneos e complementares",
          "( ) A liderança deve ser entendida como um processo DINÂMICO e PROGRESSIVO de aprendizado, o qual, desenvolvido nos cursos de carreira e no dia a dia das OM, trará não só evidentes benefícios às organizações, como também contribuirá para o sucesso profissional individual de cada militar",
          "( ) O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pelo militar e, prioritariamente, por cada OM.",
          "(A) são processos alternativos e sim, simultâneos e complementares.",
          "(B) não são processos alternativos e sim, simultâneos e opostos.",
          "(C) são processos alternativos e complementares.",
          "(D) não são processos alternativos e sim, simultâneos e complementares.",
          "(E) são processos alternativos, e também simultâneos e complementares.",          
        ],
        // Resposta correta é "D"
        correctOption: "D",
        detailedSolution: `Caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão. Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois chefia e liderança não são processos alternativos e sim, simultâneos e complementares.`
        },
        {
          question: `8 - De acordo com o EMA-137, condutor de pessoas com capacidade de influenciar e inspirar:`,
          options: [
                     "(A) Chefe",
                     "(B) Líder ",
                     "(C) Comandante",
                     "(D) Mais antigo",
                     "(E) Condutor "
        
          ],
          // Resposta correta é "D"
          correctOption: "B",
          detailedSolution: `Caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão. Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois chefia e liderança não são processos alternativos e sim, simultâneos e complementares.`
        },

        {
          question: `9 - De acordo com o EMA-137, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.`,
          options: [
                 "(A) O exercício do cargo",
                 "(B) O exercício da mestrança",
                 "(C) O exercício da liderança ",
                 "(D) O exercício da chefia", 
                 "(E) O exercício do comando"
        
          ],
          // Resposta correta é "B"
          correctOption: "D",
          detailedSolution: `O exercício da chefia, é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, na sua esfera de competência, a fim de conduzir de forma integrada o setor que lhe é confiado.`
        },

        {
          question: `10 - Caracterizados esses dois atributos do ______________, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão. Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois chefia e liderança não são processos alternativos e sim, simultâneos e complementares.`,
          options: [
              "(A) Chefe", 
              "(B) Líder ",
              "(C) Comandante", 
              "(D) Mais antigo", 
              "(E) Condutor" 
        
          ],
          // Resposta correta é "B"
          correctOption: "C",
          detailedSolution: `Caracterizados esses dois atributos do comandante, o de chefe e o de líder, pode-se afirmar que comandar é exercer a chefia e a liderança, a fim de conduzir eficazmente a organização no cumprimento da missão. Sendo o exercício do comando um processo abrangente, a divisão ora apresentada será utilizada para efeito de uma melhor compreensão do tema em lide, pois chefia e liderança não são processos alternativos e sim, simultâneos e
          complementares.`
        },
  
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  // Flag para evitar múltiplas validações por questão
  let questionValidated = false;
  
  // Elementos do DOM
  const quizContainer = document.getElementById("quiz-container");
  const nextButton = document.getElementById("next-btn");
  const backButton = document.getElementById("back-btn");
  const validateButton = document.getElementById("validate-btn");
  const showSolutionButton = document.getElementById("show-solution-btn");
  const resultContainer = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const solutionContainer = document.getElementById("solution");
  const correctAnswerElement = document.getElementById("correct-answer");
  const certificateContainer = document.getElementById("certificate");
  
  // Função para exibir a questão atual (sem forçar scroll)
  function showQuestion() {
    // Reseta a flag de validação para a nova questão
    questionValidated = false;
    
    const questionObj = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
      <div class="question">
        <h3>${questionObj.question}</h3>
        <div class="options">
          ${questionObj.options.map((option, index) => `
            <div class="option" onclick="selectOption(this)">
              <input type="radio" name="option" id="option${index}">
              <label for="option${index}">
                ${ option.trim().startsWith("(") ? option : `${String.fromCharCode(65 + index)}) ${option}` }
              </label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    // Reseta botões e estilos
    nextButton.disabled = true;
    validateButton.disabled = true;
    showSolutionButton.disabled = true;
    validateButton.textContent = "Validar Resposta";
    validateButton.classList.remove("correct", "incorrect");
    solutionContainer.classList.add("hidden");
    
    // Atualiza o estado do botão "Voltar"
    backButton.disabled = (currentQuestionIndex === 0);
    
    // (Opcional) Se desejar que o usuário possa rolar livremente, não forçamos o scroll.
    // window.scrollTo(0, 0);
  }
  
  // Função para selecionar uma opção
  function selectOption(selectedElement) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
      option.classList.remove("selected");
      option.querySelector("input").checked = false;
    });
    selectedElement.classList.add("selected");
    selectedElement.querySelector("input").checked = true;
    validateButton.disabled = false;
  }
  
  // Função para validar a resposta selecionada (executa apenas uma vez por questão)
  function validateAnswer() {
    if (questionValidated) return; // Se já foi validada, não faz nada
    const selectedOption = document.querySelector(".option.selected");
    if (!selectedOption) return;
    
    const questionObj = questions[currentQuestionIndex];
    const selectedText = selectedOption.querySelector("label").textContent.trim();
    
    let isCorrect = false;
    
    if (selectedText.startsWith("(")) {
      // Se a opção já estiver formatada, ex: "(C) As afirmativas..."
      let letterSelected = selectedText.substring(1, 2);
      if (letterSelected === questionObj.correctOption) {
        isCorrect = true;
      }
    } else {
      // Se a opção não estiver formatada, ex: "A) Chefe"
      let answerText = selectedText.substring(3).trim();
      if (answerText === questionObj.correctOption) {
        isCorrect = true;
      }
    }
    
    if (isCorrect) {
      validateButton.textContent = "RESPOSTA CORRETA";
      validateButton.classList.add("correct");
      validateButton.classList.remove("incorrect");
      score++;
      showSolutionButton.disabled = true;
    } else {
      validateButton.textContent = "RESPOSTA ERRADA";
      validateButton.classList.add("incorrect");
      validateButton.classList.remove("correct");
      showSolutionButton.disabled = false;
    }
    nextButton.disabled = false;
    
    // Marca a pergunta como validada para evitar contagem duplicada
    questionValidated = true;
  }
  
  // Função para avançar para a próxima questão
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  // Função para voltar à questão anterior
  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  }
  
  // Função para gerar o certificado
  function generateCertificate() {
    const percentage = (score / questions.length) * 100;
    let message = "";
    
    if (score === questions.length) {
      message = "Parabéns! Você acertou todas as questões e demonstrou um desempenho excelente!";
    } else if (score < 0.8 * questions.length) {
      message = "Não desanime! Revise o conteúdo e tente novamente para melhorar seu desempenho.";
    } else {
      message = "Parabéns! Você concluiu o exercício com um bom desempenho.";
    }
    
    return `
      <h2>Certificado de Conclusão</h2>
      <p>Este certificado atesta que você concluiu o exercício do EMA-137.</p>
      <p><strong>${message}</strong></p>
      <p>Você acertou ${score} de ${questions.length} questões (${percentage.toFixed(2)}%).</p>
    `;
  }
  
  // Função para exibir o resultado final e o certificado
  function showResult() {
    // Oculta as áreas de quiz e solução
    quizContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    backButton.classList.add("hidden");
    validateButton.classList.add("hidden");
    showSolutionButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `Você acertou ${score} de ${questions.length} questões!`;
    
    // Oculta a área de solução (caso esteja visível)
    solutionContainer.classList.add("hidden");
    
    // Exibe o certificado
    certificateContainer.innerHTML = generateCertificate();
    certificateContainer.classList.remove("hidden");
  }
  
  // Função para exibir a resposta detalhada dentro de uma borda com a legenda "Resposta(s) correta(s)"
  function showSolution() {
    const questionObj = questions[currentQuestionIndex];
    correctAnswerElement.innerHTML = `
      <fieldset class="solution-box">
        <legend>Resposta(s) correta(s)</legend>
        <p class="solution-text">
          ${questionObj.detailedSolution}
        </p>
      </fieldset>
    `;
    solutionContainer.classList.remove("hidden");
  }
  
  // Inicializa o quiz
  showQuestion();
  