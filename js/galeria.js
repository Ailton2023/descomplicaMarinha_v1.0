document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const images = document.querySelectorAll(".gallery img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const playBtn = document.querySelector(".play-btn");
  const pauseBtn = document.querySelector(".pause-btn");
  const dotsWrapper = document.querySelector("#dotsWrapper");
  let currentIndex = 0;
  let autoSlideInterval = null;

  // Criar dots dinamicamente
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsWrapper.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Reorganizar a ordem: play, dots, pause
  const dotsContainer = document.querySelectorAll(".dots-container")[1];
  dotsContainer.innerHTML = "";
  dotsContainer.appendChild(playBtn);
  dotsWrapper.style.display = "inline-flex";
  dotsWrapper.style.gap = "10px";
  dotsContainer.appendChild(dotsWrapper);
  dotsContainer.appendChild(pauseBtn);

  // Função para atualizar a galeria
  function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Função para ir para um slide específico
  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateGallery();
  }

  // Função para iniciar reprodução automática
  function startAutoSlide() {
    if (!autoSlideInterval) {
      autoSlideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        updateGallery();
      }, 3000); // Troca a cada 3 segundos
    }
  }

  // Função para pausar reprodução automática
  function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }

  // Event listeners para botões
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    updateGallery();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateGallery();
  });

  playBtn.addEventListener("click", startAutoSlide);
  pauseBtn.addEventListener("click", pauseAutoSlide);

  // Iniciar reprodução automática ao carregar
  startAutoSlide();
});