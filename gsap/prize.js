// GSAP Animation for the Prize Section
gsap.registerPlugin(ScrollTrigger);


gsap.from(".prize-amount", {
    scrollTrigger: {
        trigger: "#Prize",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
});


// GSAP Animations
gsap.from(".rules-title", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
gsap.from(".rules-subtitle", { duration: 1.2, opacity: 0, y: 50, delay: 0.3, ease: "power2.out" });
gsap.from(".rules-list li", { 
    duration: 1, 
    opacity: 0, 
    x: -50, 
    stagger: 0.2, 
    delay: 0.5, 
    ease: "power2.out" 
});




