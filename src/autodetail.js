import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", function () {
  const thumbsSwiper = new Swiper(".swiper.is-swiper-thumbs", {
    slidesPerView: "auto",
    speed: 400,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: "400px",
    },
  });
  const topSwiper = new Swiper(".swiper.is-swiper-top", {
    slidesPerView: 1,
    speed: 400,
    keyboard: {
      enabled: true,
    },
    effect: "fade",
    thumbs: {
      swiper: thumbsSwiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
  });
});
