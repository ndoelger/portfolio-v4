gsap.registerPlugin(ScrollTrigger);

const name = $(".name").text();

const letters = name
  .split("")
  .map((char) =>
    char === " " ? "&nbsp;" : `<span class="letter">${char} </span>`
  );

$(".name").empty().append(letters);

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.fromTo(
    ".letter",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 10,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".letter",
        scrub: true,
        start: "top 40%",
        end: "top 13%",
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    ".swe",
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: -50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".swe",
        scrub: true,
        start: "top 20%",
        end: "top 7%",
        // markers: true,
      },
    }
  );
});
