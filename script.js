console.clear();

/* Smooth Scroll */
const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
    const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
}

/* All Videos */
const mainvideo = document.querySelector(".main-video-background");
const secondaryvideo = document.querySelector(".secondary-video-background");
const video1 = document.querySelector(".video-background1");
const video2 = document.querySelector(".video-background2");
const video3 = document.querySelector(".video-background3");

once(document.documentElement, "touchstart", function (e) {
    mainvideo.play();
    mainvideo.pause();
    secondaryvideo.play();
    secondaryvideo.pause();
    video1.play();
    video1.pause();
    video2.play();
    video2.pause();
    video3.play();
    video3.pause();
});

/* Scroll Control! */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

    /* Mobile View */
    "(max-width: 768px)": function () {

        /* Main Video */
        let t4 = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#mainvideocontainer",
                start: "top 28%",
                end: "bottom 15%",
                scrub: true
            }
        });

        once(mainvideo, "loadedmetadata", () => {
            t4.fromTo(
                mainvideo,
                {
                    currentTime: 0
                },
                {
                    currentTime: mainvideo.duration || 1
                }
            );
        });

        /* Secondary Video */
        let t5 = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#secondaryvideocontainer",
                start: "top 70%",
                end: "bottom 25%",
                scrub: true
            }
        });

        once(secondaryvideo, "loadedmetadata", () => {
            t5.fromTo(
                secondaryvideo,
                {
                    currentTime: 0
                },
                {
                    currentTime: secondaryvideo.duration || 1
                }
            );
        });

    },

    /* Desktop View */
    "(min-width: 769px)": function () {

        /* Main Video */
        let t4 = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#mainvideocontainer",
                start: "top 35%",
                end: "bottom 25%",
                scrub: true
            }
        });

        once(mainvideo, "loadedmetadata", () => {
            t4.fromTo(
                mainvideo,
                {
                    currentTime: 0
                },
                {
                    currentTime: mainvideo.duration || 1
                }
            );
        });

        /* Secondary Video */
        let t5 = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#secondaryvideocontainer",
                start: "top 50%",
                end: "bottom 40%",
                scrub: true
            }
        });

        once(secondaryvideo, "loadedmetadata", () => {
            t5.fromTo(
                secondaryvideo,
                {
                    currentTime: 0
                },
                {
                    currentTime: secondaryvideo.duration || 1
                }
            );
        });

    }
});


/* Video 1 */
let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        trigger: "#videocontainer1",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true
    }
});

once(video1, "loadedmetadata", () => {
    tl.fromTo(
        video1,
        {
            currentTime: 0
        },
        {
            currentTime: video1.duration || 1
        }
    );
});


/* Video 2 */
let t2 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        trigger: "#videocontainer2",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true
    }
});

once(video2, "loadedmetadata", () => {
    t2.fromTo(
        video2,
        {
            currentTime: 0
        },
        {
            currentTime: video2.duration || 1
        }
    );
});


/* Video 3 */
let t3 = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
        trigger: "#videocontainer3",
        start: "top 70%",
        end: "bottom 10%",
        scrub: true,
    }
});

once(video3, "loadedmetadata", () => {
    t3.fromTo(
        video3,
        {
            currentTime: 0
        },
        {
            currentTime: video3.duration || 1
        }
    );
});


// Add this to your existing script.js file or in a <script> tag in the head of your HTML
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("demoModal");
    const btn = document.querySelector("#modal_btn");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("demoForm");

    const navBtn = document.getElementById("nav_btn");

    navBtn.addEventListener("click", function () {
        document.documentElement.style.scrollBehavior = "smooth";
    });

    window.onscroll = function () {
        document.documentElement.style.scrollBehavior = "";
    };

    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const fileInput = document.getElementById("fileInput");
        console.log("File selected:", fileInput.files[0].name);
        modal.style.display = "none";
    });
});


// Toggle Menu in Mobile View
let nav_button = document.getElementById("navbar-sticky");
function onToggleMenu() {
    nav_button.classList.toggle('hidden');
}

// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})