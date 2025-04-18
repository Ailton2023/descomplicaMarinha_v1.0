document.addEventListener('DOMContentLoaded', () => {
  // Seletores da galeria
  const gallery = document.querySelector('.gallery');
  const images = document.querySelectorAll('.gallery img');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.dots-container');
  const playBtn = document.querySelector('.play-btn');
  const pauseBtn = document.querySelector('.pause-btn');
  let currentIndex = 0;
  let intervalId = null;
  const totalImages = images.length;

  // Criar pontos dinamicamente
  images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Imagem ${index + 1}`);
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateGallery();
      stopAutoplay();
    });
    dot.addEventListener('touchstart', (e) => {
      e.preventDefault();
      currentIndex = index;
      updateGallery();
      stopAutoplay();
    });
    dotsContainer.insertBefore(dot, playBtn);
  });

  // Função para atualizar a galeria
  function updateGallery() {
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Função para ir para a próxima imagem
  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateGallery();
  }

  // Função para ir para a imagem anterior
  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateGallery();
  }

  // Função para iniciar o autoplay
  function startAutoSlide() {
    if (!intervalId) {
      intervalId = setInterval(nextImage, 3000);
      playBtn.classList.add('active');
      pauseBtn.classList.remove('active');
    }
  }

  // Função para pausar o autoplay
  function pauseAutoSlide() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      playBtn.classList.remove('active');
      pauseBtn.classList.add('active');
    }
  }

  // Eventos para navegação
  if (prevBtn) {
    prevBtn.addEventListener('click', prevImage);
    prevBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      prevImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextImage);
    nextBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      nextImage();
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', startAutoSlide);
    playBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startAutoSlide();
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', pauseAutoSlide);
    pauseBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      pauseAutoSlide();
    });
  }

  // Manipulação dos cartões flip
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
    card.addEventListener('touchstart', (e) => {
      e.preventDefault();
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.querySelector('.card-inner').classList.toggle('flipped');
      }
    });
  });

  // Inicia o autoplay
  startAutoSlide();

  // Atualiza ao redimensionar
  window.addEventListener('resize', updateGallery);

  // Inicializa a galeria
  updateGallery();
});