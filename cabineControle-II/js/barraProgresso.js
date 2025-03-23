  // Função para salvar as marcações no localStorage
  function saveProgress(section) {
    const checkboxes = document.querySelectorAll(`.checkbox[data-section="${section}"]`);
    const checkedStates = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem(`progress-${section}`, JSON.stringify(checkedStates));
}

// Função para carregar as marcações do localStorage
function loadProgress(section) {
    const checkboxes = document.querySelectorAll(`.checkbox[data-section="${section}"]`);
    const savedStates = JSON.parse(localStorage.getItem(`progress-${section}`)) || [];
    checkboxes.forEach((cb, index) => {
        if (savedStates[index] !== undefined) {
            cb.checked = savedStates[index];
        }
    });
}

// Função para atualizar a barra de progresso
function updateProgressBar(section) {
    const checkboxes = document.querySelectorAll(`.checkbox[data-section="${section}"]`);
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const percentage = Math.round((checkedCount / total) * 100) || 0;

    const progressBar = document.getElementById(`progress-${section}`);
    const progressLabel = document.getElementById(`label-${section}`);
    progressBar.style.width = `${percentage}%`;
    progressLabel.textContent = `${percentage}%`;
}

// Configurar eventos para os checkboxes
document.querySelectorAll('.checkbox').forEach(checkbox => {
    const section = checkbox.dataset.section;

    // Carregar progresso ao carregar a página
    loadProgress(section);
    updateProgressBar(section);

    // Atualizar progresso e salvar no localStorage ao clicar
    checkbox.addEventListener('change', () => {
        updateProgressBar(section);
        saveProgress(section);
    });
});