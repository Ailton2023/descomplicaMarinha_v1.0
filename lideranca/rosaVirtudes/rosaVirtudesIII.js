 
    // Função para alternar as abas
    document.querySelectorAll('.tab-btn-rosaVirtudesIII').forEach(button => {
        button.addEventListener('click', () => {
            // Remover a classe 'active' de todos os botões
            document.querySelectorAll('.tab-btn-rosaVirtudesIII').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adicionar a classe 'active' ao botão clicado
            button.classList.add('active');
            
            // Ocultar todos os conteúdos
            document.querySelectorAll('.content-rosaVirtudesIII').forEach(content => {
                content.classList.remove('show');
            });
            
            // Mostrar o conteúdo correspondente ao botão clicado
            const contentId = button.getAttribute('content-id');
            document.getElementById(contentId).classList.add('show');
        });
    });
 
