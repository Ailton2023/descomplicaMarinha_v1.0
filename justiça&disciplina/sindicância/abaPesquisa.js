let highlights = []; // Lista de palavras destacadas
let currentHighlightIndex = -1; // Índice da ocorrência atual

function searchContent() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const mainContent = document.querySelector('main');
    const sections = mainContent.getElementsByTagName('section');

    removeHighlights();
    for (let section of sections) {
        section.style.display = 'none';
    }

    if (searchTerm === '') {
        alert('Por favor, insira um termo para pesquisar.');
        for (let section of sections) {
            section.style.display = 'block';
        }
        return;
    }

    highlights = [];
    let found = false;

    for (let section of sections) {
        const paragraphs = section.getElementsByTagName('p');
        const headings = section.getElementsByTagName('h2');
        let sectionHasMatch = false;

        for (let p of paragraphs) {
            const text = p.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                sectionHasMatch = true;
                highlightText(p, searchTerm);
            }
        }

        for (let h of headings) {
            const text = h.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                sectionHasMatch = true;
                highlightText(h, searchTerm);
            }
        }

        if (sectionHasMatch) {
            section.style.display = 'block';
            found = true;
        }
    }

    if (!found) {
        alert('Nenhum resultado encontrado para "' + searchTerm + '".');
        for (let section of sections) {
            section.style.display = 'block';
        }
    } else {
        highlights = Array.from(document.querySelectorAll('.highlight'));
        currentHighlightIndex = -1;
        moveToNextHighlight();
    }
}

function highlightText(element, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
}

function removeHighlights() {
    const allHighlights = document.querySelectorAll('.highlight');
    allHighlights.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });
    highlights = [];
    currentHighlightIndex = -1;
}

function moveToNextHighlight() {
    if (highlights.length === 0) return;

    currentHighlightIndex = (currentHighlightIndex + 1) % highlights.length;
    const targetHighlight = highlights[currentHighlightIndex];

    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(targetHighlight);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

    targetHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.add('hidden'); // Apenas oculta (botão "OCULTAR")
}

// Eventos existentes
document.querySelector('.search-bar button:nth-child(2)').addEventListener('click', searchContent); // Botão Pesquisar
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && highlights.length === 0) {
        searchContent();
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && highlights.length > 0) {
        e.preventDefault();
        moveToNextHighlight();
    }
});

// Alternar visibilidade com Ctrl + M
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();
        const searchBar = document.querySelector('.search-bar');
        searchBar.classList.toggle('hidden'); // Alterna entre mostrar e ocultar
    }
});