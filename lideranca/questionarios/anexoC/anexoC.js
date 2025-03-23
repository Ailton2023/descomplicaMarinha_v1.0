const questions = [
    {
        question: "Qual das seguintes é uma norma apontada por Beckman?",
        options: [
            "A) Não se preocupe em estar informado antes de dar a ordem",
            "B) Procure estar bem informado antes de dar a ordem",
            "C) Dê a ordem sem se preocupar se será compreendida",
            "D) Delegue ordens apenas para terceiros",
            "E) Ignore os resultados do trabalhador"
        ],
        answer: 1
    },
    {
        question: "Qual é a abordagem correta ao determinar uma tarefa, de acordo com Beckman?",
        options: [
            "A) Dê a tarefa mais difícil disponível",
            "B) Determine a tarefa sem se importar com a capacidade do trabalhador",
            "C) Determine a tarefa tendo em vista o que o trabalhador pode executar",
            "D) Apenas o supervisor pode executar tarefas complexas",
            "E) Faça com que o trabalhador escolha a tarefa"
        ],
        answer: 2
    },
    {
        question: "Qual das opções a seguir está correta segundo as normas de Beckman?",
        options: [
            "A) Dê instruções extensas e detalhadas, mesmo que sejam difíceis de entender",
            "B) Dê instruções precisas, embora breves, distintamente pronunciadas",
            "C) Evite dar instruções; deixe que o trabalhador descubra sozinho",
            "D) Instrua apenas uma vez e não repita",
            "E) Dê instruções apenas por escrito"
        ],
        answer: 1
    },
    {
        question: "Qual é a recomendação correta de Beckman para ordens complexas?",
        options: [
            "A) Escreva as ordens mais difíceis ou complexas",
            "B) Fale as ordens complexas sem repetir",
            "C) Dê as ordens complexas apenas verbalmente",
            "D) Simplifique as ordens complexas ao ponto de se tornarem vagas",
            "E) Deixe o trabalhador lidar sozinho com ordens complexas"
        ],
        answer: 0
    },
    {
        question: "De acordo com as normas de Beckman, qual é a melhor maneira de lidar com emoções durante a ordem?",
        options: [
            "A) Controle o mau gênio; evite a irreverência, o abuso e o sarcasmo",
            "B) Ignore o comportamento do trabalhador",
            "C) Expresse abertamente seu mau humor para os trabalhadores",
            "D) Utilize sarcasmo para motivar os trabalhadores",
            "E) Ignore as dificuldades emocionais do trabalhador"
        ],
        answer: 0
    },
    {
        question: "O que Beckman recomenda fazer se a ordem não for entendida?",
        options: [
            "A) Siga em frente sem se preocupar com a compreensão",
            "B) Repita a ordem, se não entendida",
            "C) Dê uma ordem diferente",
            "D) Pergunte a outro trabalhador para ajudar",
            "E) Pare de dar ordens e comece outra tarefa"
        ],
        answer: 1
    },
    {
        question: "Segundo Beckman, qual é uma abordagem recomendada ao ensinar uma tarefa?",
        options: [
            "A) Faça uma demonstração da tarefa, quando necessário",
            "B) Deixe o trabalhador descobrir por conta própria",
            "C) Nunca faça demonstrações",
            "D) Apenas explique verbalmente",
            "E) Delegue a outro trabalhador para explicar"
        ],
        answer: 0
    },
    {
        question: "Qual das opções é uma recomendação de Beckman para se relacionar com trabalhadores?",
        options: [
            "A) Adote maneiras apropriadas ao indivíduo",
            "B) Trate todos exatamente da mesma forma, sem considerar diferenças individuais",
            "C) Ignore a necessidade de boas maneiras",
            "D) Seja ríspido para garantir respeito",
            "E) Adote uma atitude distante e impessoal"
        ],
        answer: 0
    },
    {
        question: "Em que situação Beckman recomenda ajustar a forma como se age?",
        options: [
            "A) Adote maneiras adequadas à situação",
            "B) Mantenha sempre a mesma postura, independentemente da situação",
            "C) Nunca ajuste a forma de agir",
            "D) Aja de maneira rígida e inflexível",
            "E) Apenas mude de atitude se solicitado"
        ],
        answer: 0
    },
    {
        question: "Qual das opções abaixo NÃO está em acordo com as normas de Beckman?",
        options: [
            "A) Não dê várias ordens ao mesmo tempo",
            "B) Forneça várias instruções ao mesmo tempo para acelerar o trabalho",
            "C) Determine uma ordem de cada vez",
            "D) Foque em uma tarefa de cada vez",
            "E) Priorize clareza e foco em cada ordem"
        ],
        answer: 1
    },
    {
        question: "Qual é uma recomendação de Beckman em relação à quantidade de trabalho?",
        options: [
            "A) Não determine mais trabalho do que possa ser executado",
            "B) Sempre dê o máximo de trabalho possível",
            "C) Ignore os limites do trabalhador",
            "D) Sobrecarregue o trabalhador para garantir eficiência",
            "E) Forneça tarefas sem preocupação com prazos"
        ],
        answer: 0
    },
    {
        question: "Qual das seguintes é uma recomendação de Beckman ao dar ordens complexas?",
        options: [
            "A) Escreva as ordens mais difíceis ou complexas",
            "B) Dê apenas instruções verbais",
            "C) Ignore a complexidade e continue falando",
            "D) Deixe que o trabalhador descubra sozinho",
            "E) Passe as ordens verbalmente e rapidamente"
        ],
        answer: 0
    },
    {
        question: "Quando Beckman recomenda explicar a finalidade da ordem?",
        options: [
            "A) Explique a finalidade, se necessário",
            "B) Nunca explique a finalidade",
            "C) Explicar sempre gera dúvida e não deve ser feito",
            "D) Explique apenas se o trabalhador perguntar",
            "E) Ignore a importância de explicar as finalidades"
        ],
        answer: 0
    },
    {
        question: "Qual é uma recomendação de Beckman em relação ao acompanhamento do trabalho?",
        options: [
            "A) Verifique e corrija o que o trabalhador faz",
            "B) Apenas observe sem interferir",
            "C) Corrija apenas se houver reclamação",
            "D) Deixe o trabalhador corrigir por conta própria",
            "E) Ignore os resultados do trabalho"
        ],
        answer: 0
    },
    {
        question: "Após dar uma ordem, qual é a recomendação de Beckman em relação ao trabalhador?",
        options: [
            "A) Depois de expedir uma ordem, não importune ou permaneça junto do trabalhador",
            "B) Fique ao lado do trabalhador o tempo todo",
            "C) Pergunte repetidamente se ele entendeu",
            "D) Insista constantemente para terminar mais rápido",
            "E) Ignore a autonomia do trabalhador e supervisione todo o tempo"
        ],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let summary = [];

function loadQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const questionCounter = document.getElementById('question-counter');
    const question = questions[index];

    questionCounter.textContent = `Pergunta ${index + 1} de ${questions.length}`;
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <ul class="options">
            ${question.options.map((option, i) => `
                <li>
                    <label>
                        <input type="radio" name="question" value="${i}">
                        ${option}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;
}

document.getElementById('next-button').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        const correctAnswer = questions[currentQuestionIndex].answer;
        const resultContainer = document.getElementById('result');
        const summaryContainer = document.getElementById('summary');

        if (answer === correctAnswer) {
            resultContainer.textContent = "Resposta correta!";
            resultContainer.style.backgroundColor = "#d4edda";
            resultContainer.style.borderLeftColor = "#28a745";
            summary.push(true);
        } else {
            resultContainer.textContent = "Resposta incorreta.";
            resultContainer.style.backgroundColor = "#f8d7da";
            resultContainer.style.borderLeftColor = "#dc3545";
            summary.push(false);
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                loadQuestion(currentQuestionIndex);
                resultContainer.textContent = "";
                resultContainer.style.backgroundColor = "#ffebcc";
                resultContainer.style.borderLeftColor = "#ffa500";
            }, 1000);
        } else {
            document.getElementById('next-button').disabled = true;
            document.getElementById('prev-button').disabled = true;
            resultContainer.textContent += " Você concluiu todas as questões!";
            displaySummary();
        }
    } else {
        alert('Por favor, selecione uma resposta antes de prosseguir.');
    }
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

function displaySummary() {
    const summaryContainer = document.getElementById('summary');
    summaryContainer.innerHTML = summary.map((isCorrect, index) => `
        <button class="btn ${isCorrect ? 'correct' : 'incorrect'}">${index + 1}</button>
    `).join('');
}

window.onload = () => {
    loadQuestion(currentQuestionIndex);
};
