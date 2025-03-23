// Função para mostrar o conteúdo da aba selecionada
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    // Esconde todo o conteúdo e remove a classe 'active' dos botões
    tabs.forEach(tab => tab.classList.add('hidden'));
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostra o conteúdo da aba selecionada e adiciona 'active' ao botão correspondente
    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
}
