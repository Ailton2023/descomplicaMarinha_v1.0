const gallery = document.querySelector('.gallery');
        const images = gallery.querySelectorAll('img');
        const dotsContainer = document.querySelector('.dots-container');
        const playBtn = document.querySelector('.play-btn');
        const pauseBtn = document.querySelector('.pause-btn');
        let currentIndex = 0;
        let autoSlideInterval;

        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToImage(index));
            dotsContainer.insertBefore(dot, pauseBtn);
        });

        const dots = document.querySelectorAll('.dot');
        updateDots();
        updateButtons();

        function updateGallery() {
            const offset = -currentIndex * document.querySelector('.gallery-container').offsetWidth;
            gallery.style.transform = `translateX(${offset}px)`;
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

        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            updateGallery();
        }

        function prevImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            updateGallery();
        }

        function goToImage(index) {
            currentIndex = index;
            updateGallery();
            resetAutoSlide();
        }

        function startAutoSlide() {
            if (!autoSlideInterval) {
                autoSlideInterval = setInterval(() => {
                    nextImage();
                }, 5000);
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
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
            startAutoSlide();
        }

        startAutoSlide();