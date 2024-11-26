import "./styles/style.css";
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  // hero animation
  const heading = document.querySelector(".hero_heading");
  const name = document.querySelector(".contact_hero-heading");
  const text = document.querySelector(".contact_hero-paragraph");
  const imageOverlay = document.querySelector(".contact_img-overlay");
  const mobileImg = document.querySelector(".mobile_contact-img-wrap");

  let heroTl = gsap.timeline({});

  gsap.set(heading, { opacity: 1 });
  gsap.set(name, { opacity: 1 });
  gsap.set(text, { opacity: 1 });
  gsap.set(mobileImg, { opacity: 1 });

  heroTl
    .from(heading, {
      x: -25,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(
      mobileImg,
      {
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    )
    .from(
      name,
      {
        y: 25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.7"
    )
    .from(
      text,
      {
        y: 25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<0.1"
    )
    .to(
      imageOverlay,
      {
        y: "100%",
        duration: 1,
        ease: "expo.inOut",
      },
      "-=0.6"
    );
});
