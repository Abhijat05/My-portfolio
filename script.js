gsap.from(".logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
gsap.from("li", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
})
gsap.from(".main .left", {
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 1.5,
})

var body = document.querySelector("body")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x - 7,
        y: dets.y - 2,
        duration: 1,
        ease: "power3.out"
    })
})

var logo = document.querySelector(".logo")

logo.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ec4899"

    })
})

logo.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white"
    })
})

var navItems = document.querySelectorAll(".navbar ul li");

navItems.forEach(function (navItem) {
    navItem.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 3,
            backgroundColor: "#16f2b3"
        })
    })

    navItem.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "white"
        })
    })
})