new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

new Swiper(".mySwiperHamster", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
});

const swiperText = new Swiper ('.mySwiper2', {
  centeredSlides: true,
});

var swiper = new Swiper(".mySwiper2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

var swiper = new Swiper(".mySwiper3", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

var swiper = new Swiper(".mySwiper4", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
