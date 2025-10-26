const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === slideIndex ? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

startSlideshow();
