const carouselElement = document.querySelector('#carousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 10000,
  touch: true,
  pause: 'hover',
  keyboard: true,
})