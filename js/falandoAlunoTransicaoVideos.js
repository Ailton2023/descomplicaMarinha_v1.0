const slideshowVideo = document.querySelector('.slideshow-items-video');
const slidesVideo = slideshowVideo.querySelectorAll('iframe');
const markersBoxVideo = document.querySelector('.markers-box-video');
const beginBtnVideo = document.querySelector('.start-btn-video');
const stopBtnVideo = document.querySelector('.stop-btn-video');
const backBtnVideo = document.querySelector('.back-btn-video');
const forwardBtnVideo = document.querySelector('.forward-btn-video');
let slidePositionVideo = 0;
let slideshowTimerVideo = setInterval(moveForwardVideo, 5000); // Inicia o slideshow automático ao carregar
let isVideoPlayingEnabled = false; // Controla se os vídeos podem tocar

// Depuração
console.log('Slideshow Video:', slideshowVideo);
console.log('Slides Video:', slidesVideo.length);
console.log('Markers Box Video:', markersBoxVideo);

// Criação dos marcadores
slidesVideo.forEach((_, idx) => {
    const marker = document.createElement('span');
    marker.classList.add('marker-video');
    marker.addEventListener('click', () => switchToSlideVideo(idx));
    markersBoxVideo.insertBefore(marker, stopBtnVideo);
    console.log(`Marker Video ${idx} criado`);
});

const markersVideo = document.querySelectorAll('.marker-video');
console.log('Markers Video:', markersVideo.length);

refreshDisplayVideo();
toggleControlsVideo();

// Pausa todos os vídeos na inicialização
function pauseAllVideos() {
    slidesVideo.forEach((slide) => {
        if (slide.tagName === 'IFRAME') {
            const iframe = slide;
            if (iframe.src.includes('youtube.com')) {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else {
                iframe.contentWindow.postMessage('pause', '*'); // Para vídeos locais, se suportado
            }
        }
    });
}

function refreshDisplayVideo() {
    const shift = -slidePositionVideo * document.querySelector('.slideshow-content-video').offsetWidth;
    slideshowVideo.style.transform = `translateX(${shift}px)`;
    markersVideo.forEach((marker, idx) => {
        marker.classList.toggle('current-video', idx === slidePositionVideo);
    });
    toggleControlsVideo();
    if (isVideoPlayingEnabled) { // Só gerencia a reprodução se o "play" foi ativado
        manageVideoPlayback();
    }
}

function toggleControlsVideo() {
    beginBtnVideo.classList.toggle('on-video', isVideoPlayingEnabled);
    stopBtnVideo.classList.toggle('on-video', !isVideoPlayingEnabled);
}

function moveForwardVideo() {
    slidePositionVideo++;
    if (slidePositionVideo >= slidesVideo.length) {
        slidePositionVideo = 0;
    }
    refreshDisplayVideo();
    console.log('Forward Video clicked, slidePosition:', slidePositionVideo);
}

function moveBackVideo() {
    slidePositionVideo--;
    if (slidePositionVideo < 0) {
        slidePositionVideo = slidesVideo.length - 1;
    }
    refreshDisplayVideo();
    console.log('Back Video clicked, slidePosition:', slidePositionVideo);
}

function switchToSlideVideo(idx) {
    slidePositionVideo = idx;
    refreshDisplayVideo();
    console.log('Switched to slide:', slidePositionVideo);
}

function beginSlideshowVideo() {
    if (!isVideoPlayingEnabled) {
        isVideoPlayingEnabled = true; // Ativa a reprodução dos vídeos
        toggleControlsVideo();
        manageVideoPlayback(); // Inicia o vídeo atual ao clicar em "play"
        console.log('Video playback enabled');
    }
}

function stopSlideshowVideo() {
    if (slideshowTimerVideo) {
        clearInterval(slideshowTimerVideo);
        slideshowTimerVideo = null;
        isVideoPlayingEnabled = false; // Desativa a reprodução dos vídeos
        toggleControlsVideo();
        pauseAllVideos(); // Pausa todos os vídeos ao parar
        console.log('Slideshow Video stopped');
    }
}

function restartSlideshowVideo() {
    clearInterval(slideshowTimerVideo);
    slideshowTimerVideo = setInterval(moveForwardVideo, 5000);
    isVideoPlayingEnabled = true;
    toggleControlsVideo();
    manageVideoPlayback();
}

function manageVideoPlayback() {
    slidesVideo.forEach((slide, idx) => {
        if (slide.tagName === 'IFRAME') {
            const iframe = slide;
            if (idx === slidePositionVideo && isVideoPlayingEnabled) {
                if (iframe.src.includes('youtube.com')) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                } else {
                    iframe.contentWindow.postMessage('play', '*'); // Para vídeos locais, se suportado
                }
            } else {
                if (iframe.src.includes('youtube.com')) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else {
                    iframe.contentWindow.postMessage('pause', '*'); // Para vídeos locais, se suportado
                }
            }
        }
    });
}

// Inicialização
refreshDisplayVideo();
pauseAllVideos(); // Pausa todos os vídeos ao carregar a página