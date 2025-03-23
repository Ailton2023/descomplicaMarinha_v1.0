document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn-rosaVirtudes");
    const tabContents = document.querySelectorAll(".content-rosaVirtudes");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões e 'show' de todos os conteúdos
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("show"));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add("active");

            // Obtém o ID do conteúdo associado ao botão clicado e exibe o conteúdo correspondente
            const contentId = button.getAttribute("content-id");
            const contentToShow = document.getElementById(contentId);
            contentToShow.classList.add("show");
        });
    });
});
