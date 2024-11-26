import "./styles/style.css";
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  // hero animation
  const heading = document.querySelector(".hero_heading");
  const intro = document.querySelector(".hero_intro");
  const steps = document.querySelectorAll(".aanvraag_step");
  const separator = document.querySelectorAll(".step_separator");
  const form = document.querySelector(".form_form");

  let heroTl = gsap.timeline({});

  gsap.set(heading, { opacity: 1 });
  gsap.set(intro, { opacity: 1 });
  gsap.set(steps, { opacity: 1 });
  gsap.set(separator, { opacity: 1 });
  gsap.set(form, { opacity: 1 });

  heroTl
    .from(heading, {
      x: -25,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(
      intro,
      {
        x: -25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8"
    )
    .from(
      steps[0],
      {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      separator[0],
      {
        scaleX: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      steps[1],
      {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      separator[1],
      {
        scaleX: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      steps[2],
      {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      form,
      {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    );
});
