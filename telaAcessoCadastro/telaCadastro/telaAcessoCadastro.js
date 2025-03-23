/*ATIVA_DESATIVA BUTTON CADASTRAR*/
// Seleciona o checkboxButtonCadastrar e o botão
const checkboxButtonCadastrar = document.getElementById('checkboxButtonCadastrar');
const botao = document.querySelector('.botao');

// Função que atualiza o estado do botão com base no checkboxButtonCadastrar
function atualizarBotao() {
    botao.disabled = !checkboxButtonCadastrar.checked;
}

// Chama a função no início para garantir o estado correto
atualizarBotao();

// Adiciona o evento de mudança ao checkboxButtonCadastrar
checkboxButtonCadastrar.addEventListener('change', atualizarBotao);