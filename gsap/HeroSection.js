gsap.from("h1", { opacity: 0, y: -50, duration: 1.5, delay: 0.5, ease: "power2.out" });
gsap.from(".subtitle", { opacity: 0, x: -50, duration: 1.5, delay: 0.8, ease: "power2.out" });
gsap.from(".countdown", { opacity: 0, scale: 0.5, duration: 1.5, delay: 1.5, ease: "elastic.out(1, 0.3)" });
gsap.from(".register-btn", { opacity: 0, y: 20, scale: 0.9, duration: 1.5, delay: 1.5, ease: "back.out(1.7)" });
gsap.from("#shape-1", {
    x: "-5vw",
    y: "-20vh",
    rotation: -38,
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: "power2.out"
});

gsap.from("#shape-2 img", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    delay: 1,
    ease: "power2.out"
});

gsap.to("#shape-2 img", {
    y: "-3vh",
    rotation: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


gsap.from(".event-info p", {
    opacity: 0,
    y: 30,
    // duration: 1.5,
    stagger: 0.3,
    delay: 1,
    ease: "power2.out"
});


// // program flow 
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state for animation
    gsap.set('.process-step', { opacity: 0, y: 50 });
    gsap.set('.section-title-process, .section-subtitle', { opacity: 0, y: 30 });

    // Animate the title and subtitle
    gsap.to('.section-title-process', {
        scrollTrigger: {
            trigger: '#Process',
            start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.to('.section-subtitle', {
        scrollTrigger: {
            trigger: '#Process',
            start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Animate each process step
    gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.to(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 80%',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1)'
        });

        // Add hover animation for step numbers
        step.querySelector('.step-number').addEventListener('mouseenter', () => {
            gsap.to(step.querySelector('.step-number'), {
                scale: 1.1,
                boxShadow: '0 0 30px rgba(255, 204, 0, 0.8)',
                duration: 0.3
            });
        });

        step.querySelector('.step-number').addEventListener('mouseleave', () => {
            gsap.to(step.querySelector('.step-number'), {
                scale: 1,
                boxShadow: '0 0 20px rgba(255, 204, 0, 0.5)',
                duration: 0.3
            });
        });
    });

    // Animate the connectors
    gsap.utils.toArray('.connector').forEach(connector => {
        gsap.from(connector, {
            scrollTrigger: {
                trigger: connector,
                start: 'top 80%',
            },
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

