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

const scrollBtn = document.getElementById('back-to-top');
const btnVisibility = () => {
  if (window.scrollY > 600) {
    scrollBtn.style.visibility = 'visible';
  } else {
    scrollBtn.style.visibility = 'hidden';
  }
};

document.addEventListener('scroll', btnVisibility);
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
