document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os botões das abas e os conteúdos das abas
    const tabButtons = document.querySelectorAll(".tab-btn-AtributosLider");
    const tabContents = document.querySelectorAll(".content-AtributosLider");

    // Adiciona um evento de clique a cada botão
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove a classe "active" de todos os botões
            tabButtons.forEach((btn) => btn.classList.remove("active"));

            // Adiciona a classe "active" ao botão clicado
            button.classList.add("active");

            // Esconde todos os conteúdos
            tabContents.forEach((content) => content.classList.remove("show"));

            // Exibe o conteúdo relacionado ao botão clicado
            const contentId = button.getAttribute("content-id");
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add("show");
            }
        });
    });
});
