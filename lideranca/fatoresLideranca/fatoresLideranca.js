document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões das abas de Fatores de Liderança
    const tabsFatoresLideranca = document.querySelectorAll('.tab-btn-FatoresLideranca');
    // Seleciona todos os conteúdos das abas de Fatores de Liderança
    const contentsFatoresLideranca = document.querySelectorAll('.content-FatoresLideranca');

    const tabClickedFatoresLideranca = (tab) => {
        // Remove a classe 'active' de todos os botões de aba
        tabsFatoresLideranca.forEach(tab => tab.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        tab.classList.add('active');

        // Remove a classe 'show' de todos os conteúdos de aba
        contentsFatoresLideranca.forEach(content => content.classList.remove('show'));

        // Exibe o conteúdo correspondente à aba ativa
        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        if (content) {
            content.classList.add('show');
        }
    };

    // Adiciona o evento de clique para cada botão de aba
    tabsFatoresLideranca.forEach(tab => {
        tab.addEventListener('click', () => tabClickedFatoresLideranca(tab));
    });

    // Inicializa a aba ativa, se houver
    const currentActiveTabFatoresLideranca = document.querySelector('.tab-btn-FatoresLideranca.active');
    if (currentActiveTabFatoresLideranca) {
        tabClickedFatoresLideranca(currentActiveTabFatoresLideranca);
    }
});
