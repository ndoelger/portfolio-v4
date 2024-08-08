gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
    const totalPanels = document.querySelectorAll(".panel").length;
    const totalScrollDuration = window.innerHeight * totalPanels; // 300vh
    const staggerTime = totalScrollDuration / totalPanels; // duration per panel

    gsap.set(".panel", { x: window.innerWidth });

    gsap.to(".panel", {
        x: 0,
        stagger: {
            each: staggerTime / 1000, // Convert to seconds for GSAP stagger
        },
        scrollTrigger: {
            trigger: ".panel",
            scrub: true,
            start: "top top",
            end: `+=${totalScrollDuration}px`, // Total scroll duration
            markers: true,
        },
    });
});