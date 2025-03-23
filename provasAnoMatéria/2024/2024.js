// Lista de questões (exemplo com 2 questões)
const questions = [
  {
    question: "A tenacidade é apresentada como um dos valores que compõe a Rosa das Virtudes. Segundo a Doutrina de Liderança da Marinha, esse valor pode ser definido como:",
    options: ["(A) a presença de ânimo perante qualquer obstáculo ou dificuldade, a vontade constante de tudo superar e bem desempenhar a tarefa ou função, de caráter operativo ou administrativo.", 
              "(B) a disposição para estudar tanto o material em si como também a maneira de utilizá-lo. É a força misteriosa que, dominando a alma do verdadeiro marinheiro, o conduz sempre ao sacrifício com inexcedível vibração e estoica resignação.", 
              "(C) o sentimento que induz o individuo à prática do Bem, da Justiça e da Moral. É a força que o impele a prestigiar sua própria personalidade, como um sentimento de seu patrimônio moral, um misto de brio e valor.", 
              "(D) o querer saber longamente, sem desfalecimento e sem trégua. A disposição sincera de realmente ofereçer, espontaneamente, interesses, comodidades, vida, tudo, em prol do cumprimento do dever.", 
              "(E) o sentimento que leva o não poupar esforços para o bom desempenho das funções que Ihes são atribuídas. É o sentimento que conduz à dedicação ao serviço, como autentica expressão do dever."
            ],
    correctOption: "A",
    detailedSolution: `Letra (A)<br><br>

                      Analisando as opções:<br><br>
                      Letra (A)<br><strong>O DA poderá ter um dos seguintes graus de precedência: urgente, especial ou rotina.</strong><br
                      a) urgente - o DA exige ação ou conhecimento imediato do recebedor;<br>
                      b) especial - a tramitação do DA especial possui prioridade sobre a tramitação do DA
                      de rotina. Esse grau de precedência somente será atribuído ao DA de âmbito interno; e<br>
                      c) rotina - o DA que não se enquadra nas situações anteriores. É atribuída à maioria
                      dos DA.<br><br>
                    
                      Letra (B)<br><strong>2.2. REPRODUÇÃO DE “DA” SIGILOSO</strong><br>
                      A reprodução do <strong>todo ou de parte</strong> de DA sigiloso terá o <strong>mesmo grau de sigilo do original</strong> e dependerá de autorização da autoridade expedidora, em conformidade com as normas em vigor.<strong><br><br>

                      Letra (C)<br><strong>2.3. EXTRATOS DE “DA” SIGILOSO</strong><br>
                      Poderão ser elaborados extratos de DA sigiloso, aos quais serão atribuídos graus de
                      sigilo iguais ou inferiores àquele atribuído ao DA sigiloso original, dependendo do conteúdo
                      transcrito. Estes extratos, levando-se em conta a possível reclassificação de sigilo, serão
                      elaborados mediante autorização:
                      <strong>
                      - Documentos Ultrassecretos
                        Dependem de permissão da autoridade classificadora;
                      </strong>
                      - Documentos Secretos
                      Dependem de permissão da autoridade classificadora ou de autoridade
                      hierarquicamente superior; e
                      - Documentos Reservados
                      Serão elaborados sob responsabilidade das autoridades destinatárias, exceto quando
                      expressamente vedado no próprio documento.<br><br>

                     <strong>ESPÍRITO DE SACRIFÍCIO</strong><br> 
                     O Espírito de Sacrifício <strong>é a disposição sincera de realmente oferecer, espontaneamente, interesses, comodidades, vida, tudo, em prol do cumprimento do dever</strong>. O cultivo do Espírito de Sacrifício é praticado vencendo os pequenos incômodos pessoais, os menores percalços do dia a dia. “Quem não é fiel no pouco, certamente não será no muito”: somente percebendo o valor das coisas é que se desenvolve o Espírito de Sacrifício e se torna capaz de dar um passo a mais na formação do caráter marinheiro.<br><br>
                     
                      Letra (E)<br><strong> ZELO</strong><br>
                       O Zelo é atributo que não depende, em alto grau, de preparo profissional, de predicados especiais de inteligência e de saber. É, por isso mesmo, virtude que deve ser comum a todos os que servem à Marinha. Essa qualidade é consequência direta do “amor próprio”, do amor à Marinha e à Nação.<strong> É o sentimento que leva a não poupar esforços para o bom desempenho das funções que lhes são atribuídas</strong>. É o sentimento que conduz à dedicação ao serviço, como autêntica expressão do Dever. No Zelo, está implícita a aceitação de que se serve à Nação e não a pessoas. Ninguém tem o direito de deixar de zelar por suas obrigações, por motivos circunstanciais, alheios ou não à sua vontade. O Zelo está intimamente ligado à probidade, vista como a capacidade de bem administrar os bens, fundos e recursos que nos foram confiados. Faz-se presente, assim, no exato cumprimento de orçamentos e planos financeiros e no atento cuidado com o patrimônio da Marinha.<br><br>
`
  },
  {
    question: `Segundo o EMA-137, marque a opção CORRETA quanto às afirmativas abaixo relacionadas.<br><br>
I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de chefe.<br><br>
II - Chefia e liderança não são processos alternativos e sim, simultâneos e complementares.<br><br>
III - Os melhores resultados no tocante à liderança ocorrem quando ela é desenvolvida, não sendo impositiva. O exercício da chefia é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.<br><br>
IV - A liderança deve ser entendida como um processo dinâmico e progressivo de aprendizado.<br><br>
V - O contínuo desenvolvimento das qualidades dos militares da MB como líderes deverá ser objeto de atenta e permanente atenção, a ser trabalhada, conjuntamente, pela instituição e, prioritariamente, por cada militar.<br><br>
VI - O exercício da liderança é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.<br><br>`,
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