 
    // Armazena o estado das checkboxes localmente
    const checkboxes = document.querySelectorAll('.checkbox');
    const totalCelulas = 20;

    // Função para carregar o estado das checkboxes do localStorage
    function carregarEstado() {
      checkboxes.forEach((checkbox, index) => {
        const estadoSalvo = localStorage.getItem(`checkbox-${index}`);
        checkbox.checked = estadoSalvo === 'true';
      });
      atualizarEstado(); // Atualiza a porcentagem após carregar
    }

    // Função para salvar o estado das checkboxes e atualizar a porcentagem
    function atualizarEstado() {
      checkboxes.forEach((checkbox, index) => {
        localStorage.setItem(`checkbox-${index}`, checkbox.checked);
      });
      const marcadas = Array.from(checkboxes).filter(cb => cb.checked).length;
      const porcentagem = (marcadas / totalCelulas) * 100;
      // Armazena a porcentagem no localStorage para ser usada em graficos.html
      localStorage.setItem('porcentagem', porcentagem.toFixed(2));
    }

    // Adiciona evento de mudança a cada checkbox
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', atualizarEstado);
    });

    // Carrega o estado ao iniciar
    carregarEstado();

/*Comando que atua no html gráficos*/
// Lê o estado das checkboxes do localStorage e atualiza o progresso