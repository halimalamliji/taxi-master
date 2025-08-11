gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add("js-enabled");

function initScrollAnimations() {
  const animatedClasses = [".card-main", ".card-s", ".card-category", ".card"];

  animatedClasses.forEach(cls => {
    ScrollTrigger.batch(cls, {
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
      gsap.set(cls, { y: 0 })
    );
  });
}

document.addEventListener("turbo:load", initScrollAnimations);
