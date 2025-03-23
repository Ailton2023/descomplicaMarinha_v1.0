function mostrarAba(aba, elemento) {
    const abas = document.querySelectorAll('.conteudo-aba');
    const tabs = document.querySelectorAll('.tab');

    // Esconde todas as abas
    abas.forEach((el) => {
        el.classList.remove('show');
    });

    // Remove a classe 'active' de todas as abas
    tabs.forEach((el) => {
        el.classList.remove('active');
    });

    // Exibe a aba selecionada
    document.getElementById(aba).classList.add('show');

    // Marca a aba como ativa
    elemento.classList.add('active');
}

// Exibe a primeira aba ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    mostrarAba('centralizacao', document.querySelector('.tab'));
});
