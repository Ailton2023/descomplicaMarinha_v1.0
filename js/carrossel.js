const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');
const cards = document.querySelectorAll('.card-carrossel');
const cardWidth = 200 + 20;
const visibleCards = 3;
const totalCards = cards.length;

let position = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${position * cardWidth}px)`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[position % (totalCards - visibleCards + 1)].classList.add('active');
}

function createDots() {
  const dotCount = totalCards - visibleCards + 1;
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      position = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

nextBtn.addEventListener('click', () => {
  position = (position + 1) % (totalCards - visibleCards + 1);
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  position = (position - 1 + (totalCards - visibleCards + 1)) % (totalCards - visibleCards + 1);
  updateCarousel();
});

createDots();