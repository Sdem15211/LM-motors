import gsap from "gsap";
import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", function () {
  // hero animation

  const mainSlider = document.querySelector(".auto_top-slider");
  const heroDetails = document.querySelector(".auto_details");
  const thumbsSlider = document.querySelector(".auto_thumbs-slider");

  let heroTl = gsap.timeline({});

  gsap.set(mainSlider, { autoAlpha: 1 });
  gsap.set(heroDetails, { autoAlpha: 1 });
  gsap.set(thumbsSlider, { autoAlpha: 1 });

  heroTl
    .from(mainSlider, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      heroDetails,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    )
    .from(
      thumbsSlider,
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

  // swiper
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
