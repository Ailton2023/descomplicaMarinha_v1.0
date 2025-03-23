document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões das abas de Níveis de Liderança
    const tabs = document.querySelectorAll('.tab-btn-niveisLiderança');
    // Seleciona todos os conteúdos das abas de Níveis de Liderança
    const contents = document.querySelectorAll('.content-niveisLiderança');

    // Função para alternar entre as abas e mostrar o conteúdo correspondente
    const activateTab = (tab) => {
        // Remove a classe 'active' de todos os botões
        tabs.forEach(t => t.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        tab.classList.add('active');

        // Remove a classe 'show' de todos os conteúdos
        contents.forEach(content => content.classList.remove('show'));

        // Exibe o conteúdo correspondente à aba ativa
        const contentId = tab.getAttribute('content-id');
        const contentToShow = document.getElementById(contentId);
        if (contentToShow) {
            contentToShow.classList.add('show');
        }
    };

    // Adiciona o evento de clique para cada botão de aba
    tabs.forEach(tab => {
        tab.addEventListener('click', () => activateTab(tab));
    });

    // Inicializa a aba 'Liderança Direta' ao carregar a página
    const defaultTab = document.querySelector('.tab-btn-niveisLiderança.active');
    if (defaultTab) {
        activateTab(defaultTab);
    }
});
