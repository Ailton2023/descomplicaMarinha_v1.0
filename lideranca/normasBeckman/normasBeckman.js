function toggleVisibility(element) {
    const paragraph = element.querySelector('p');
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
        element.style.background = '#d0e7ff';
    } else {
        paragraph.style.display = 'none';
        element.style.background = '#e7f3ff';
    }
}
