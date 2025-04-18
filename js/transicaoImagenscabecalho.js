const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const dotsContainer = document.querySelector('.dots-container');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
let currentIndex = 0;
let autoSlideInterval = null;

// Cria os dots dinamicamente
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToImage(index));
  dotsContainer.insertBefore(dot, pauseBtn);
});

const dots = document.querySelectorAll('.dot');

function updateGallery() {
  const containerWidth = document.querySelector('.gallery-container').offsetWidth;
  gallery.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
  updateDots();
  updateButtons();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function updateButtons() {
  playBtn.classList.toggle('active', !!autoSlideInterval);
  pauseBtn.classList.toggle('active', !autoSlideInterval);
}

function goToImage(index) {
  currentIndex = index;
  updateGallery();
  resetAutoSlide();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
}

function startAutoSlide() {
  if (!autoSlideInterval) {
    autoSlideInterval = setInterval(nextImage, 5000);
    updateButtons();
  }
}

function pauseAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    updateButtons();
  }
}

function resetAutoSlide() {
  pauseAutoSlide();
  startAutoSlide();
}

startAutoSlide();

playBtn.addEventListener('click', startAutoSlide);
pauseBtn.addEventListener('click', pauseAutoSlide);
document.querySelector('.prev-btn')?.addEventListener('click', () => {
  prevImage();
  resetAutoSlide();
});
document.querySelector('.next-btn')?.addEventListener('click', () => {
  nextImage();
  resetAutoSlide();
});
window.addEventListener('resize', updateGallery);
updateGallery();
