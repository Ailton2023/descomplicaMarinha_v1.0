const slideshowMuralINF = document.querySelector('.slideshow-items-muralINF');
const slidesMuralINF = slideshowMuralINF.querySelectorAll('img');
const markersBoxMuralINF = document.querySelector('.markers-box-muralINF');
const beginBtnMuralINF = document.querySelector('.start-btn-muralINF');
const stopBtnMuralINF = document.querySelector('.stop-btn-muralINF');
const backBtnMuralINF = document.querySelector('.back-btn-muralINF');
const forwardBtnMuralINF = document.querySelector('.forward-btn-muralINF');
let slidePositionMuralINF = 0;
let slideshowTimerMuralINF;

// Depuração
console.log('Slideshow:', slideshowMuralINF);
console.log('Slides:', slidesMuralINF.length);
console.log('Markers Box:', markersBoxMuralINF);

// Criação dos marcadores
slidesMuralINF.forEach((_, idx) => {
    const marker = document.createElement('span');
    marker.classList.add('marker-muralINF');
    marker.addEventListener('click', () => switchToSlideMuralINF(idx));
    markersBoxMuralINF.insertBefore(marker, stopBtnMuralINF);
    console.log(`Marker ${idx} criado`);
});

const markersMuralINF = document.querySelectorAll('.marker-muralINF');
console.log('Markers:', markersMuralINF.length);

refreshDisplayMuralINF();
toggleControlsMuralINF();

function refreshDisplayMuralINF() {
    const shift = -slidePositionMuralINF * document.querySelector('.slideshow-content-muralINF').offsetWidth;
    slideshowMuralINF.style.transform = `translateX(${shift}px)`;
    markersMuralINF.forEach((marker, idx) => {
        marker.classList.toggle('current-muralINF', idx === slidePositionMuralINF);
    });
    toggleControlsMuralINF();
}

function toggleControlsMuralINF() {
    beginBtnMuralINF.classList.toggle('on-muralINF', !!slideshowTimerMuralINF);
    stopBtnMuralINF.classList.toggle('on-muralINF', !slideshowTimerMuralINF);
}

function moveForwardMuralINF() {
    slidePositionMuralINF++;
    if (slidePositionMuralINF >= slidesMuralINF.length) {
        slidePositionMuralINF = 0;
    }
    refreshDisplayMuralINF();
    console.log('Forward clicked, slidePosition:', slidePositionMuralINF);
}

function moveBackMuralINF() {
    slidePositionMuralINF--;
    if (slidePositionMuralINF < 0) {
        slidePositionMuralINF = slidesMuralINF.length - 1;
    }
    refreshDisplayMuralINF();
    console.log('Back clicked, slidePosition:', slidePositionMuralINF);
}

function switchToSlideMuralINF(idx) {
    slidePositionMuralINF = idx;
    refreshDisplayMuralINF();
    restartSlideshowMuralINF();
}

function beginSlideshowMuralINF() {
    if (!slideshowTimerMuralINF) {
        slideshowTimerMuralINF = setInterval(moveForwardMuralINF, 5000);
        toggleControlsMuralINF();
    }
}

function stopSlideshowMuralINF() {
    if (slideshowTimerMuralINF) {
        clearInterval(slideshowTimerMuralINF);
        slideshowTimerMuralINF = null;
        toggleControlsMuralINF();
    }
}

function restartSlideshowMuralINF() {
    clearInterval(slideshowTimerMuralINF);
    slideshowTimerMuralINF = null;
    beginSlideshowMuralINF();
}

// Inicialização
refreshDisplayMuralINF();
beginSlideshowMuralINF();

// Eventos adicionais
backBtnMuralINF.addEventListener('click', moveBackMuralINF);
forwardBtnMuralINF.addEventListener('click', moveForwardMuralINF);