gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".panel",
  //     markers: true,
  //     scrub: true,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //   },
  // });

  gsap.fromTo(
    ".panel",
    { x: window.innerWidth },
    {
      x: 0,
      scrollTrigger: {
        trigger: ".letter",
        scrub: true,
        start: `top top`,
        end: "bottom 100%",
        markers: true,
      },
    }
  );
});
