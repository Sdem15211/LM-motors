import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  // hero animation
  const heading = document.querySelector(".hero_heading");
  const intro = document.querySelector(".hero_intro");
  const grid = document.querySelector(".tekoop_grid-item-wrap");

  let heroTl = gsap.timeline({});

  gsap.set(heading, { opacity: 1 });
  gsap.set(intro, { opacity: 1 });
  gsap.set(grid, { opacity: 1 });

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
      grid,
      {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      },
      "-=0.5"
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
          duration: 1,
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
          duration: 1,
          ease: "power4.out",
          overwrite: true,
        });
      });
    }
  });

  // filter button

  const filterButton = document.querySelector(".tekoop_filter-button");
  const filterModal = document.querySelector(".filters");

  let isModalOpen = false;

  filterButton.addEventListener("click", (event) => {
    if (!isModalOpen) {
      // Open the modal
      gsap.set(filterModal, { display: "block" });
      gsap.to(filterModal, {
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      isModalOpen = true;

      // Add the event listener to close on outside click
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Close the modal
      closeModal();
    }

    // Prevent the event from bubbling up to the document
    event.stopPropagation();
  });

  // Close the modal
  function closeModal() {
    gsap.to(filterModal, {
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      onComplete: () => {
        gsap.set(filterModal, { display: "none" });
      },
    });
    isModalOpen = false;

    // Remove the event listener for outside clicks
    document.removeEventListener("click", handleOutsideClick);
  }

  // Handle outside clicks
  function handleOutsideClick(event) {
    // Check if the click is outside the modal
    if (
      !filterModal.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      closeModal();
    }
  }
});
