gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card-main", {
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
    gsap.set(".card-main", { y: 0 })
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card-s", {
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
    gsap.set(".card-s", { y: 0 })
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card-category", {
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
    gsap.set(".card-category", { y: 0 })
  );
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch(".card", {
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
    gsap.set(".card", { y: 0 })
  );
});
