import "./styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

document.addEventListener("DOMContentLoaded", function () {
  // hero animation

  const hero_overlay = document.querySelector("[hero-overlay]");
  const heroHeading = document.querySelector("[hero-heading]");
  const whatsapp = document.querySelector(".whatsapp-block");
  const navbar = document.querySelector("[home-nav]");

  const splitHeading = new SplitType(heroHeading, { types: "chars" });

  let heroTimeline = gsap.timeline();

  heroTimeline
    .fromTo(hero_overlay, { opacity: 1 }, { opacity: 0, duration: 1.5 })
    .from(
      splitHeading.chars,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut",
        stagger: 0.01,
      },
      "-=1"
    )
    .from(
      navbar,
      {
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      whatsapp,
      {
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    );

  // first line animation

  const path1 = document.getElementById("path1");
  const length1 = path1.getTotalLength();

  gsap.set(path1, {
    strokeDasharray: length1,
    strokeDashoffset: length1,
  });

  gsap.to(path1, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".line_1",
      start: "top bottom",
      end: "center center",
      scrub: true,
      once: true,
    },
  });

  // second line animation

  const path2 = document.getElementById("path2");
  const length2 = path2.getTotalLength();

  gsap.set(path2, {
    strokeDasharray: length2,
    strokeDashoffset: length2,
  });

  gsap.to(path2, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".line_2",
      start: "top center",
      end: "bottom 70%",
      scrub: true,
      once: true,
    },
  });

  // third line animation

  const path3 = document.getElementById("path3");
  const length3 = path3.getTotalLength();

  gsap.set(path3, {
    strokeDasharray: length3,
    strokeDashoffset: length3,
  });

  gsap.to(path3, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".line_3",
      start: "top center",
      end: "bottom center",
      scrub: true,
      once: true,
    },
  });

  // intro text animation

  const introText = document.querySelector("[intro-text]");
  const introTagline = document.querySelector("[intro-tagline]");

  const splitIntro = new SplitType(introText, { types: "lines" });

  let introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: introText,
      start: "top 90%",
      //   markers: true,
    },
  });

  introTimeline
    .from(splitIntro.lines, {
      y: 25,
      opacity: 0,
      duration: 1,
      ease: "power4.Out",
      stagger: 0.05,
    })
    .from(
      introTagline,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power4.Out",
      },
      "-=0.3"
    );

  // heading animations

  const headings = document.querySelectorAll("[section-heading]");

  headings.forEach((heading) => {
    gsap.from(heading, {
      y: 25,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
      },
    });
  });

  // text animations

  const fadeElements = document.querySelectorAll("[section-text]");

  fadeElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });
  });

  // timeline animations

  const line1 = document.getElementById("line4");
  const length4 = line1.getTotalLength();

  gsap.set(line1, {
    strokeDasharray: length4,
    strokeDashoffset: length4,
  });

  gsap.to(line1, {
    strokeDashoffset: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".line_4",
      start: "top center",
      end: "bottom center",
      scrub: true,
      once: true,
    },
  });

  const icons = document.querySelectorAll("[icons]");
  console.log(icons);

  icons.forEach((icon) => {
    gsap.from(icon, {
      scale: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: icon,
        start: "top center",
      },
    });
  });

  const timelineTexts = document.querySelectorAll("[timeline-text]");
  const timelineOverlays = document.querySelectorAll(".timeline_img-overlay");

  timelineTexts.forEach((text, index) => {
    let timelineTl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 45%",
        end: "bottom center",
      },
    });
    timelineTl
      .from(text, {
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
      .to(
        timelineOverlays[index],
        {
          y: "100%",
          duration: 1,
          ease: "expo.inOut",
        },
        "<"
      );
  });

  const line2 = document.getElementById("line5");
  const length5 = line2.getTotalLength();

  gsap.set(line2, {
    strokeDasharray: length5,
    strokeDashoffset: length5,
  });

  gsap.to(line2, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".line_5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      once: true,
    },
  });

  const line3 = document.getElementById("line6");
  const length6 = line3.getTotalLength();

  gsap.set(line3, {
    strokeDasharray: length6,
    strokeDashoffset: length6,
  });

  gsap.to(line3, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".line_6",
      start: "top center",
      end: "bottom center",
      scrub: true,
      once: true,
    },
  });

  // background color change

  let bgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-import",
      start: "top 60%",
      end: "bottom 80%",
      toggleActions: "play reverse play reverse",
    },
  });

  bgTl
    .to(".main-wrapper.is-home", {
      backgroundColor: "#D6D7D8",
      duration: 0.7,
      ease: "power4.out",
    })
    .to(
      ".nav_link",
      {
        color: "#050606",
        duration: 0.7,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      ".nav_logo-embed",
      {
        color: "#050606",
        duration: 0.7,
        ease: "power4.out",
      },
      "<"
    );

  // te koop card hover animation

  const cards = document.querySelectorAll(".card_background");

  cards.forEach((card) => {
    const image = card.querySelector(".card_img-wrap img");
    const icon = card.querySelector(".card_arrow-button");

    if (image) {
      card.addEventListener("mouseenter", () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 1,
          ease: "power4.out",
        });
        gsap.to(icon, {
          backgroundColor: "#B0AFAE",
          duration: 0.5,
          ease: "power4.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power4.out",
          overwrite: true,
        });
        gsap.to(icon, {
          backgroundColor: "#EFAA3E",
          duration: 0.5,
          ease: "power4.out",
          overwrite: true,
        });
      });
    }
  });
});
