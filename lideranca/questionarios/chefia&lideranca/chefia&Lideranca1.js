window.onload = function() {
    alert("Atenção!\nA Marinha nunca cobrou o tópico chefia e liderança no concurso do \nCA-AA-AFN.");
};

function submitQuiz() {
    let correctAnswers = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "b", // Resposta correta para a nova pergunta
        q5: "e",
        q6: "a",
        q7: "d", 
        q8: "b",
        q9: "d",
        q10: "c",
    };
    let totalQuestions = Object.keys(correctAnswers).length;
    let allAnswered = true; // Variável para verificar se todas as perguntas foram respondidas

    // Verificar se todas as perguntas foram respondidas
    for (let i = 1; i <= totalQuestions; i++) {
        let question = `q${i}`;
        let answer = document.querySelector(`input[name="${question}"]:checked`);
        if (!answer) {
            allAnswered = false;
            break;
        }
    }

    // Se alguma pergunta não foi respondida, exibir um alerta
    if (!allAnswered) {
        alert("Por favor, marque todas as opções antes de enviar.");
        return; // Parar a execução da função
    }

    let score = 0;
    let scoreIndicator = document.getElementById("scoreIndicator");
    scoreIndicator.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Habilitar os botões de "Mostrar Solução"
    let solutionButtons = document.querySelectorAll("button[onclick^='toggleSolution']");
    solutionButtons.forEach(button => button.disabled = false);

    // Calcular a pontuação e gerar os quadrados coloridos
    for (let i = 1; i <= totalQuestions; i++) {
        let question = `q${i}`;
        let answer = document.querySelector(`input[name="${question}"]:checked`);
        let box = document.createElement("div");
        box.classList.add("score-box");

        if (answer && answer.value === correctAnswers[question]) {
            score++;
            box.style.backgroundColor = "green"; // Questão correta
        } else {
            box.style.backgroundColor = "red"; // Questão errada
        }
        box.innerText = i; // Adiciona o número da questão
        scoreIndicator.appendChild(box);
    }

    // Adicionar a classe para mostrar a borda
    scoreIndicator.classList.add("show-border");

    let resultText = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    if (score === totalQuestions) {
        resultText = "Parabéns! Você acertou todas as questões. Continue estudando!";
    }
    document.getElementById("result").innerText = resultText;
}

function toggleSolution(commentId) {
    let comment = document.getElementById(commentId);
    if (comment.style.display === "block") {
        comment.style.display = "none";
    } else {
        comment.style.display = "block";
    }
}
