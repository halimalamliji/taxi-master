gsap.registerPlugin(ScrollTrigger)

const card = document.querySelector(".card-service");

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card-service", {
    interval: 0.1,
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true
    }),

    onEnterBack: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      overwrite: true
    }),
    onLeaveBack: batch => gsap.to(batch, {
      opacity: 0,
      y: 100,
      duration: 0.4,
      stagger: 0.1,
      overwrite: true
    }),
    start: "20px bottom",
    end: "top top"
  });

  ScrollTrigger.addEventListener("refreshInit", () =>
    gsap.set(".card-service", { y: 0 })
  );
});
