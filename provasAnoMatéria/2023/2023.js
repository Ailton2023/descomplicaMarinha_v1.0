// Lista de questões (exemplo com 2 questões)
const questions = [
  {
    question: "QUESTÃO 31<br><br>Com relação à classificação dos documentos administrativos da Marinha do Brasil, é correta afirmar que:",
    options: ["(A) é classificado quanto ao acesso em: urgente, especial ou rotina.", 
              "(B) a reprodução de parte de um documento administrativo sigiloso terá um grau de sigilo menor que o original.", 
              "(C) a elaboração de extratos de documentos administrativos ultrassecretos depende da permissão de autoridade certificadora ou de autoridade hierarquicamente superior.", 
              "(D) o documento administrativo de correspondência classificado como sigiloso, unicamente por encaminhar anexo sigiloso, será desclassificado tão logo seja retirado esse anexo.", 
              "(E) o Termo de Documentação Sigilosa (TDS) é o formulário que formaliza a decisão de classificação e determina o prazo de sigilo da informação."
            ],
    correctOption: "D",
    detailedSolution: `Letra (D)<br><br>

                      Analisando as outras opções:<br><br>
                      Letra (B)<br><strong>TENACIDADE</strong><br>
                      Aplicação é uma forma de dedicação, de amor ao serviço. <strong>É a disposição para estudar tanto o material em si como também a maneira de utilizá-lo</strong>; para estar a par das rotinas, da organização interna de bordo, da ordenança, dos regulamentos e das leis; para bem conhecer tudo referente aos aspectos essenciais da profissão. Na arte de conduzir os homens, o campo é mais profundo: faz-se necessária a tenacidade, o poder da vontade. É o saber querer longamente, sem desfalecimento e sem trégua. É a presença de ânimo perante qualquer obstáculo ou dificuldade, a vontade constante de tudo superar e bem desempenhar a tarefa ou função, de caráter operativo ou administrativo. O espírito de tenacidade transmite-se, pois, exatamente, pela continuidade da ação.<br><br>
                     
                      <strong>“FOGO SAGRADO”</strong><br> 
                      O “Fogo Sagrado” é a paixão, a fé, o entusiasmo com que o militar se dedica à sua
                      carreira; é o seu intenso amor à Marinha, o seu devotamento pela grandeza da sua profissão; é a larga medida de uma verdadeira vocação e de um sadio patriotismo; é o supremo amor pelo serviço. É essa crença que anima a ponto de, naturalmente, julgar que os deveres que a lei marca
                      são o mínimo, e que para bem servir cumpre ir além do próprio dever, fazer tudo quanto é humanamente possível, à custa, embora, de ingente labor. O “Fogo Sagrado” <strong>  é essa força misteriosa que, dominando a alma do verdadeiro marinheiro, o conduz sempre ao sacrifício com
                      inexcedível vibração e estóica resignação </strong>. O “Fogo Sagrado” transmite-se, mas para tanto é preciso possuí-lo em grande intensidade e demonstrá-lo mais por atitudes e ações do que por ordens e palavras. O “Fogo Sagrado” é a alma da Marinha!<br><br>
                      

                      Letra (C)<br><strong> A HONRA</strong><br>
                       <strong>É o sentimento que induz o indivíduo à prática do Bem, da Justiça e da Moral</strong>.<strong> É a força que o impele a prestigiar sua própria personalidade, como um sentimento de seu patrimônio moral, um misto de brio e valor</strong>. Ela exige a posse do perfeito sentimento do que é justo e respeitável, para a elevação da dignidade e da bravura desse indivíduo, e, assim, afrontar perigos de toda a ordem, na sustentação dos ditames da Verdade e do Direito. É a virtude por excelência, porque em si contém todas as demais. A Honra está acima da vida e de tudo que existe no mundo. Os haveres e demais bens que o indivíduo possui são transitórios, enquanto que a Honra a tudo sobrevive; transmite-se aos filhos, aos netos, ao lar, à profissão escolhida e à terra em que se nasce. A Honra é o patrimônio da alma. Na profissão, ela consiste, principalmente, na dedicação ao serviço, no cumprimento do dever, na intrepidez e na disciplina, tudo inspirado pelo patriotismo. Um navio nunca se entrega ao inimigo e sua bandeira jamais se arria em presença
                      dele. A Honra do Marinheiro o impede!<br><br>

                      Letra (D)<br><strong> TENACIDADE</strong><br>
                       Aplicação é uma forma de dedicação, de amor ao serviço. É a disposição para estudar tanto o material em si como também a maneira de utilizá-lo; 
                       para estar a par das rotinas, da organização interna de bordo, da ordenança, dos regulamentos e das leis; para bem conhecer tudo referente aos aspectos essenciais da profissão. Na arte de conduzir os homens, o campo é mais profundo: faz-se necessária a tenacidade, o poder da vontade. <strong>É o saber querer longamente, sem desfalecimento e sem trégua</strong>. É a presença de ânimo perante qualquer obstáculo ou dificuldade, a vontade constante de tudo superar e bem desempenhar a tarefa ou função, de caráter operativo ou administrativo. O espírito de tenacidade transmite-se, pois, exatamente, pela continuidade da ação.<br><br>

                     <strong>ESPÍRITO DE SACRIFÍCIO</strong><br> 
                     O Espírito de Sacrifício <strong>é a disposição sincera de realmente oferecer, espontaneamente, interesses, comodidades, vida, tudo, em prol do cumprimento do dever</strong>. O cultivo do Espírito de Sacrifício é praticado vencendo os pequenos incômodos pessoais, os menores percalços do dia a dia. “Quem não é fiel no pouco, certamente não será no muito”: somente percebendo o valor das coisas é que se desenvolve o Espírito de Sacrifício e se torna capaz de dar um passo a mais na formação do caráter marinheiro.<br><br>
                     
                      Letra (E)<br><strong> ZELO</strong><br>
                       O Zelo é atributo que não depende, em alto grau, de preparo profissional, de predicados especiais de inteligência e de saber. É, por isso mesmo, virtude que deve ser comum a todos os que servem à Marinha. Essa qualidade é consequência direta do “amor próprio”, do amor à Marinha e à Nação.<strong> É o sentimento que leva a não poupar esforços para o bom desempenho das funções que lhes são atribuídas</strong>. É o sentimento que conduz à dedicação ao serviço, como autêntica expressão do Dever. No Zelo, está implícita a aceitação de que se serve à Nação e não a pessoas. Ninguém tem o direito de deixar de zelar por suas obrigações, por motivos circunstanciais, alheios ou não à sua vontade. O Zelo está intimamente ligado à probidade, vista como a capacidade de bem administrar os bens, fundos e recursos que nos foram confiados. Faz-se presente, assim, no exato cumprimento de orçamentos e planos financeiros e no atento cuidado com o patrimônio da Marinha.<br><br>
`
  },
  {
    question: `Segundo o EMA-137, na definição de liderança, estão implícitos os seus agentes, ou seja, o líder e os liderados, as relações entre eles e a importância dos princípios que regem o comportamento humano. Quais são esses princípios?.<br>`,
    options: [
      "(A) psicológicos, religiosos e sociológicos.",
      "(B) sociológicos, psicológicos e pedagógicos.",
      "(C) filosóficos, psicológicos e sociológicos.",
      "(D) pedagógicos, religiosos e filosóficos.",
      "(E) sociológicos, pedagógicos e filosóficos."
    ],
    correctOption: "C",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  {
    question: `Segundo a orientação sobre as expedições de ordens do Anexo C do EMA-137, depois de examinar as vantagens e desvantagens do uso de ordens minuciosas, Beckman enumera oportunidades que, a seu ver, devem ser usadas em ordens escritas. Assim, analise as afirmativas abaixo e assinale a opção que apresenta quando tais ordens devem ser por escrito.<br>`,
    options: [
      "(A) psicológicos, religiosos e sociológicos.",
      "(B) sociológicos, psicológicos e pedagógicos.",
      "(C) filosóficos, psicológicos e sociológicos.",
      "(D) pedagógicos, religiosos e filosóficos.",
      "(E) sociológicos, pedagógicos e filosóficos."
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