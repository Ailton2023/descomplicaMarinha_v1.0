
/*CONTEÚDO QUE VAI APARECER AO LADO DA CENTRAL DE CONTÚDO*/
function showContent(contentId) {
    // Oculta todos os conteúdos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostra o conteúdo selecionado
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';

    
}


/*CONTEÚDO QUE VAI APARECER AO LADO DA CENTRAL DE CONTÚDO*/
