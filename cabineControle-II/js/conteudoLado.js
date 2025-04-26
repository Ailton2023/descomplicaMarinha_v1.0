// Função para mostrar um conteúdo específico baseado no ID
function showContent(contentId) {
    // Seleciona todos os elementos com a classe 'content'
    const contents = document.querySelectorAll('.content');
    
    // Remove a classe 'active' de todos os conteúdos (esconde)
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Seleciona o elemento específico pelo ID
    const selectedContent = document.getElementById(contentId);
    
    // Adiciona a classe 'active' para exibir o conteúdo selecionado
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Executa ao carregar a página: mostra o 'content1' por padrão
document.addEventListener('DOMContentLoaded', () => {
    showContent('dashboard');
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-sidebar';
    toggleButton.textContent = 'Menu';
    document.body.appendChild(toggleButton);

    const sidebar = document.querySelector('.conteudo');
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});