gsap.registerPlugin(ScrollTrigger) 


/* * * * * INTERVIEW * * * * */
gsap.from('#interview-text', {
    y: 200,
    scrollTrigger: {
        scrub: 1,
        trigger: "#interview",
        start: "top 70%",
        end: "top 40%",
        markers: true
    }
})

gsap.from('#interview-video', {
    y: 200,
    scrollTrigger: {
        scrub: 1,
        trigger: "#interview",
        start: "top 70%",
        end: "top 40%",

        // markers: true
    }
})
/* * * * * INTERVIEW * * * * */



/* * * * * CITATION * * * * */
gsap.from('#citation', {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#citation",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
        // markers: true
    }
})
/* * * * * CITATION * * * * */



/* * * * * COMIC STRIP * * * * */
gsap.from('#comic-strip-text', {
    y: 500,
    scrollTrigger: {
        scrub: 1,
        trigger: "#comic-strip",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
    }
})

gsap.from('#comic-strip-img', {
    xPercent: -100,
    scale: 0,
    scrollTrigger: {
        scrub: 1,
        trigger: "#comic-strip",
        start: "top 80%",
        end: "top 30%",
    }
})
/* * * * * COMIC STRIP * * * * */




/* * * * * SECTION 1 * * * * */

ScrollTrigger.create({
    trigger: "#section-1",
    start: "top top", 
    end: "+=5000",
    scrub: 1,
    pin: "#img-background",
});



  