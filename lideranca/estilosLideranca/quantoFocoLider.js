document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de aba para o "Foco do Líder"
    const tabsFocoLider = document.querySelectorAll('.tab-btn-estilosLidFocoLider');
    const contentsFocoLider = document.querySelectorAll('.content-estilosLidFocoLider');

    // Função para alternar abas
    const handleTabClickFocoLider = (tab) => {
        // Remove a classe 'active' de todos os botões
        tabsFocoLider.forEach(t => t.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        tab.classList.add('active');

        // Oculta todos os conteúdos de aba
        contentsFocoLider.forEach(content => content.classList.remove('show'));

        // Mostra o conteúdo correspondente à aba ativa
        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        if (content) {
            content.classList.add('show');
        }
    };

    // Adiciona o evento de clique a cada botão de aba
    tabsFocoLider.forEach(tab => {
        tab.addEventListener('click', () => handleTabClickFocoLider(tab));
    });

    // Inicializa a aba ativa, se houver
    const initialActiveTab = document.querySelector('.tab-btn-estilosLidFocoLider.active');
    if (initialActiveTab) {
        handleTabClickFocoLider(initialActiveTab);
    }
});
