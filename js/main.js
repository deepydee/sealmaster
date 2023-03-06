const carouselElement = document.getElementById('carousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  ride: false,
  interval: 10000,
  touch: true,
  pause: 'hover',
  keyboard: true,
});

// const carouselTestimonials = document.getElementById('testimonialsCarousel');
// const carouselTest = new bootstrap.Carousel(carouselTestimonials, {

// });

const modalAskPhoneCall = document.getElementById('modalAskPhoneCall');
const askForCallbackModal = new bootstrap.Modal(modalAskPhoneCall, {});
const userPhoneInput = document.getElementById('userPhone');

modalAskPhoneCall.addEventListener('shown.bs.modal', () => {
  userPhoneInput.focus();
});