document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Title & Subtitle Animation
    gsap.from("#WhyToJoin .section-title", {
        opacity: 0,
        // y: -50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#WhyToJoin",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#WhyToJoin .section-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#WhyToJoin",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // Planet Animation (Scale Up & Floating)
    gsap.from(".planet2 img", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".planet",
            start: "top 85%",
            toggleActions: "play none none reverse",
            once: true
        }
    });

    // Floating effect for planet
    gsap.to(".planet img", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});
