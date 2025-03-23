document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões e conteúdos
    const buttons = document.querySelectorAll('.tab-btn-AtributosLider-III');
    const contents = document.querySelectorAll('.content-AtributosLider-III');

    // Adiciona o evento de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('content-id');

            // Remove a classe 'active' de todos os botões
            buttons.forEach(btn => btn.classList.remove('active'));

            // Remove a classe 'show' de todos os conteúdos
            contents.forEach(content => content.classList.remove('show'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // Mostra o conteúdo correspondente ao botão clicado
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add('show');
            }
        });
    });
});
