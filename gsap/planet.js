document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Title & Paragraph Animation on Scroll
    gsap.from("#AboutSection h3", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#AboutSection",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#AboutSection p", {
        opacity: 0,
        x: 50,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#AboutSection",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Moon Appears from Right with Rotation
    gsap.from(".planet img", {
        x: 300,      // Starts off-screen (right)
        opacity: 0,  // Starts invisible
        rotation: 180,  // Rotates while entering
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".planet",
            start: "top 85%",
            toggleActions: "play none none reverse",
            once: true  // Ensures animation only happens once
        },
        onComplete: function () {
            // Apply only the floating effect once it reaches the position
            gsap.to(".planet img", {
                y: -10,   // Moves up and down slightly
                duration: 2,
                repeat: -1, // Continues indefinitely
                yoyo: true, // Makes it float back and forth
                ease: "power1.inOut"
            });
        }
    });
});


// prize section 
