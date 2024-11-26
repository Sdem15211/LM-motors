import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // lenis
  const lenis = new Lenis({
    lerp: 0.2,
  });

  lenis.on("scroll", (e) => {
    ScrollTrigger.update();
  });
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Navbar
  const links = document.querySelectorAll(".nav_link");
  const underline = document.querySelector(".nav_links-line-yellow");

  function setUnderlineWidth() {
    const currentPath = window.location.pathname;

    let totalWidth = 0;
    let newWidth = 0;

    links.forEach((link, index) => {
      const href = link.getAttribute("href");
      const linkWidth = link.getBoundingClientRect().width;

      if (href === currentPath) {
        link.classList.add("active");

        newWidth = totalWidth + linkWidth;
      } else {
        link.classList.remove("active");

        totalWidth += linkWidth + 24;
      }
    });

    underline.style.width = `${newWidth}px`;
  }

  setUnderlineWidth();

  window.addEventListener("resize", setUnderlineWidth);

  // Navbar mobile

  const hamburger = document.querySelector(".nav_hamburger-wrap");
  const fullPageNav = document.querySelector(".nav_page");
  const closeButton = document.querySelector(".nav_page-close-button");
  const navLinks = document.querySelectorAll("[nav-link]");
  const navLogo = document.querySelector(".nav_page-logo");

  function setActiveMobileLink() {
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (href === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  setActiveMobileLink();

  const menuTimeline = gsap.timeline({ paused: true });

  menuTimeline
    .set(fullPageNav, { display: "block" })
    .fromTo(
      fullPageNav,
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "expo.inOut" }
    )
    .fromTo(
      navLinks,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.05 },
      "-=0.3"
    )
    .fromTo(
      navLogo,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.inOut" },
      "-=0.3"
    );

  hamburger.addEventListener("click", () => {
    menuTimeline.play();
  });

  closeButton.addEventListener("click", () => {
    menuTimeline.reverse();
  });
});
