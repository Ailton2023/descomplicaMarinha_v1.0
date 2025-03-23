document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões e conteúdos das abas
    const tabButtons = document.querySelectorAll(".tab-btn-ApicacaoLIDRelecoesExtra-MB");
    const tabContents = document.querySelectorAll(".content-ApicacaoLIDRelecoesExtra-MB");

    // Função para ativar a aba e exibir o conteúdo correspondente
    function activateTab(contentId) {
        // Remove a classe ativa de todos os botões e oculta todos os conteúdos
        tabButtons.forEach(button => button.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("show"));

        // Adiciona a classe ativa ao botão correspondente
        document.querySelector(`[content-id="${contentId}"]`).classList.add("active");

        // Exibe o conteúdo da aba correspondente
        document.getElementById(contentId).classList.add("show");
    }

    // Configura o clique em cada botão de aba para ativar o conteúdo correspondente
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const contentId = button.getAttribute("content-id");
            activateTab(contentId);
        });
    });

    // Exibe inicialmente a aba e o conteúdo "GruposMilitaresDemaisFAbrasileiras"
    activateTab("GruposMilitaresDemaisFAbrasileiras");
});
