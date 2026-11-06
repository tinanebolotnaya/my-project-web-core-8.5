const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    321: {
      enabled: false,
      spacesBetween: 0,
    },
  },
});

const brands = document.querySelector(".brands");
const showButton = document.querySelector(".brands__button--start");
const hideButton = document.querySelector(".brands__button--end");

showButton.addEventListener('click', function() {
  brands.classList.add('brands--expanded');
});

hideButton.addEventListener('click', function() {
  brands.classList.remove('brands--expanded');
});
