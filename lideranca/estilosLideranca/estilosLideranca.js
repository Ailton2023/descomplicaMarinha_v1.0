const tabsEstilosLideranca = document.querySelectorAll('.tab-btn-estilosLiderança');
tabsEstilosLideranca.forEach(tab => tab.addEventListener('click', () => tabClikedEstilosLideranca(tab)));

const tabClikedEstilosLideranca = (tab) => {
    tabsEstilosLideranca.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contentsEstilosLideranca = document.querySelectorAll('.content-estilosLiderança');
    contentsEstilosLideranca.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTabEstilosLideranca = document.querySelector('.tab-btn-estilosLiderança.active');
if (currentActiveTabEstilosLideranca) {
    tabClikedEstilosLideranca(currentActiveTabEstilosLideranca);
}
