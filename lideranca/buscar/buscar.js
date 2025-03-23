document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const mainContent = document.querySelector("main");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const searchCount = document.getElementById("searchCount");

    let currentIndex = 0;
    let highlightedElements = [];
    let isSearching = false; // Variável para verificar se a busca está em andamento

    // Garante que a aba de busca esteja visível ao carregar ou atualizar a página
    searchBar.style.display = "flex";

    // Função para rolar para o conteúdo principal com uma pequena distância
    function scrollToMainContent() {
        const searchBarHeight = searchBar.offsetHeight;
        const offset = 20; // Define uma pequena distância (em pixels) entre a aba de busca e o conteúdo
        window.scrollTo({ top: mainContent.offsetTop - searchBarHeight - offset, behavior: "smooth" });
    }

    scrollToMainContent(); // Chama a função para rolar para o ponto desejado

    // Oculta a barra de busca ao rolar a página, a menos que esteja em uma busca ativa
    window.addEventListener("scroll", function() {
        if (window.scrollY === 0 || isSearching) {
            searchBar.style.display = "flex"; // Mostra a barra de busca no topo ou durante a pesquisa
        } else {
            searchBar.style.display = "none"; // Oculta a barra de busca ao rolar, se não estiver pesquisando
        }
    });

    // Função para iniciar a busca com a tecla "Enter"
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (highlightedElements.length > 0) {
                currentIndex = (currentIndex + 1) % highlightedElements.length;
                updateCurrentHighlight();
            } else {
                performSearch();
            }
        }
    });

    // Função para buscar e destacar palavras
    searchButton.addEventListener("click", performSearch);

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            alert("Digite uma palavra para buscar.");
            return;
        }

        clearHighlights();
        highlightedElements = [];
        currentIndex = 0;
        isSearching = true; // Define que a pesquisa está em andamento

        const elements = document.querySelectorAll("body *:not(script):not(style)");

        elements.forEach(element => {
            if (element.children.length === 0 && element.textContent.trim() !== "") {
                const text = element.textContent;
                const regex = new RegExp(`(${query})`, 'gi');
                if (regex.test(text)) {
                    element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
                }
            }
        });

        highlightedElements = document.querySelectorAll(".highlight");
        searchCount.textContent = `${highlightedElements.length > 0 ? 1 : 0}/${highlightedElements.length}`;

        if (highlightedElements.length > 0) {
            searchBar.style.display = "flex"; // Mantém a barra de busca visível durante a busca
            updateCurrentHighlight();
        } else {
            alert("Nenhuma palavra encontrada.");
        }
    }

    // Funções para os botões de navegação
    prevButton.addEventListener("click", function() {
        if (highlightedElements.length > 0) {
            currentIndex = (currentIndex - 1 + highlightedElements.length) % highlightedElements.length;
            updateCurrentHighlight();
        }
    });

    nextButton.addEventListener("click", function() {
        if (highlightedElements.length > 0) {
            currentIndex = (currentIndex + 1) % highlightedElements.length;
            updateCurrentHighlight();
        }
    });

    function clearHighlights() {
        const elements = document.querySelectorAll(".highlight");
        elements.forEach(element => {
            const parent = element.parentNode;
            parent.replaceChild(document.createTextNode(element.textContent), element);
        });
        isSearching = false; // Define que a pesquisa terminou
        searchBar.style.display = "flex"; // Mostra a barra de busca após a pesquisa
    }

    function updateCurrentHighlight() {
        highlightedElements.forEach(el => el.classList.remove("current"));
        const currentElement = highlightedElements[currentIndex];
        currentElement.classList.add("current");
        currentElement.scrollIntoView({ behavior: "smooth", block: "center" });
        searchCount.textContent = `${currentIndex + 1}/${highlightedElements.length}`;
    }
});
