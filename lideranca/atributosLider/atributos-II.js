document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os botões das abas e os conteúdos das abas
    const tabButtonsII = document.querySelectorAll(".tab-btn-AtributosLider-II");
    const tabContentsII = document.querySelectorAll(".content-AtributosLider-II");

    // Adiciona o evento de clique a cada botão
    tabButtonsII.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove a classe "active" de todos os botões
            tabButtonsII.forEach((btn) => btn.classList.remove("active"));

            // Adiciona a classe "active" ao botão clicado
            button.classList.add("active");

            // Esconde todos os conteúdos
            tabContentsII.forEach((content) => content.classList.remove("show"));

            // Exibe o conteúdo correspondente ao botão clicado
            const contentId = button.getAttribute("content-id");
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add("show");
            }
        });
    });
});

