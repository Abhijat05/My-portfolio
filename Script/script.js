// Animations with GSAP
gsap.from(".logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from("li", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
});

gsap.from(".main .left", {
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 1.5,
});

gsap.from(".left-1 > div", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 2,
    stagger: 0.2,
});

gsap.from("button", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 2.5,
    stagger: 0.2,
});

// Custom cursor movement
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
        x: event.clientX - cursor.offsetWidth / 2,
        y: event.clientY - cursor.offsetHeight / 2,
        duration: 1,
        ease: "power3.out",
    });
});

// Custom cursor effects on logo hover
const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ec4899",
        duration: 0.3,
        ease: "power3.out",
    });
});

logo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        duration: 0.3,
        ease: "power3.out",
    });
});

// Custom cursor effects on navbar items hover
const navItems = document.querySelectorAll(".navbar ul li");

navItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 3,
            backgroundColor: "#16f2b3",
            duration: 0.3,
            ease: "power3.out",
        });
    });

    navItem.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "white",
            duration: 0.3,
            ease: "power3.out",
        });
    });
});

// Custom cursor effects on .left-1 section hover
const left1 = document.querySelector(".left-1");

left1.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
    });
});

left1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
    });
});

