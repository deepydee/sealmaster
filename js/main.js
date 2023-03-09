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

const renderCurrentYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  const currentYearEl = document.getElementById('currentYear');

  currentYearEl.textContent = year;
};

const generateWorkingHoursList = () => {
  const WORK_HOURS = [
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 16:00",
    "08:00 - 16:00",
  ];

  const WEEK_DAYS = [
    "ВС",
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
  ];

  const now = new Date();
  const currentDay = now.getDay();
  const whList = document.getElementById('schedule-list');

  WORK_HOURS.forEach((el, idx) => {
    let dayOfWeek;
    let template;

    if (idx === currentDay) {
      dayOfWeek = 'Сегодня';
      template = `<li class="text-end"><span class="me-3 today-list-active">${dayOfWeek}</span><span>${el}</span></li>`;
      document.getElementById('whToggle').insertAdjacentHTML('beforeend', `<span class="me-3 today-list-active">${dayOfWeek}</span><span>${el}</span>`);
    } else {
      dayOfWeek = WEEK_DAYS[idx];
      template = `<li class="text-end"><span class="me-3">${dayOfWeek}</span><span>${el}</span></li>`;
    }

    whList.insertAdjacentHTML('beforeend', template);
  });
};

renderCurrentYear();
generateWorkingHoursList();