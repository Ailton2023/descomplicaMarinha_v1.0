document.addEventListener('DOMContentLoaded', () => {
    const tabsEstilosLideranca = document.querySelectorAll('.tab-btn-estilosLidTipoIncentivo');
    const contentsEstilosLideranca = document.querySelectorAll('.content-estilosLidTipoIncentivo');

    const tabClikedEstilosLideranca = (tab) => {
        // Remove a classe 'active' de todos os botões de aba
        tabsEstilosLideranca.forEach(tab => tab.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        tab.classList.add('active');

        // Remove a classe 'show' de todos os conteúdos de aba
        contentsEstilosLideranca.forEach(content => content.classList.remove('show'));

        // Exibe o conteúdo correspondente à aba ativa
        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        if (content) {
            content.classList.add('show');
        }
    };

    // Adiciona o evento de clique para cada botão de aba
    tabsEstilosLideranca.forEach(tab => {
        tab.addEventListener('click', () => tabClikedEstilosLideranca(tab));
    });

    // Inicializa a aba ativa, se houver
    const currentActiveTabEstilosLideranca = document.querySelector('.tab-btn-estilosLidTipoIncentivo.active');
    if (currentActiveTabEstilosLideranca) {
        tabClikedEstilosLideranca(currentActiveTabEstilosLideranca);
    }
});
