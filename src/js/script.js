gsap.registerPlugin(ScrollTrigger) 

const intro = document.querySelector('.intro')
let sections = gsap.utils.toArray(".wrapper section");

/* * * * * INTRO * * * * */
const timeline = gsap.timeline()
timeline
    .to('.right', { xPercent: 100, duration: 0.5 }) 
    .to('.title', { yPercent: -100 }, "<")
    .to('.name', { y: '-100vh' }, "<")
    .to ('.intro', { background: 'transparent', backgroundImage: "url('images/background-paper.jpg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: 1, duration: 0.4 }, '<')
    .to('.chapter-1', { left: 'calc(100vw - 270px)', zIndex: 10 }, "<")
    .to('.chapter-2', { left: 'calc(100vw - 180px)', zIndex: 10}, "<")
    .to('.chapter-3', { left: 'calc(100vw - 90px)', zIndex: 10}, "<")

ScrollTrigger.create({
    animation: timeline,
    trigger: intro,
    scrub: 1,
    pin: true,
    start: 'top top',
})
/* * * * * INTRO * * * * */



/* * * * * SCROLL HORIZONTAL * * * * */
let scrollHorizontal = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      start: 'top top',
      end: '+=7000',
      anticipatePin: 1,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
})
/* * * * * SCROLL HORIZONTAL * * * * */



/* * * * * SECTION 1 * * * * */
gsap.to('#intro-section1', {
    x: '100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '#intro-section1',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
})


// gsap.from('#intro-section3', {
//     x: '-100%',
//     ease: 'none',
//     scrollTrigger: {
//         trigger: '#intro-section1',
//         start: 'left left',
//         scrub: 1,
//         markers: true,
//         containerAnimation: scrollHorizontal
//     }
// })

gsap.from('#intro-section1-text', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section1',
        start: 'top center+=10%',
        end: 'top 30%',  
        scrub: 1,
    }
})


gsap.from('#intro-section1-img1', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section1',
        start: 'top 40%',
        end: 'top 20%',  
        scrub: 1,
    }
})

gsap.from('#intro-section1-img2', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section1',
        start: 'top 30%',
        end: 'top 10%',  
        scrub: 1,
    }
})


/* * * * * SECTION 1 * * * * */





/* * * * * SECTION 2 * * * * */
gsap.from('#intro-section3-text', {
    xPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section3',
        start: 'left 80%',
        end: 'left center',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})

gsap.from('#intro-section3-img1', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section3',
        start: 'left 70%',
        end: 'left center',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})

gsap.from('#intro-section3-img2', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section3',
        start: 'left 60%',
        end: 'left center-=10%',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})

gsap.from('#intro-section3-legend', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section3',
        start: 'left 50%',
        end: 'left center-=20%',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})


gsap.from('#intro-section3-img3', {
    xPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#intro-section3',
        start: 'left center-=10%',
        end: 'left 10%',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})

/* * * * * SECTION 2 * * * * */





/* * * * * SECTION 4 * * * * */
gsap.set("#intro-section4 > span", {
    x: 0
});

gsap.from('#intro-section4 > span', {
    x: '120%',
    scrollTrigger: {
        trigger: '#intro-section4',
        start: 'left center',
        end: 'left 10%',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})

gsap.from('#intro-section4 > div', {
    clipPath: "inset(0 0 0 60%)", // top right bottom left
    scale: 0.3,
    scrollTrigger: {
        trigger: '#intro-section4',
        start: 'left 90%',
        end: 'left center',
        scrub: 1,
        containerAnimation: scrollHorizontal,
    }
})
/* * * * * SECTION 4 * * * * */








/* * * * * SECTION 5 * * * * */
gsap.from('#intro-section5-text', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#section-5',
        start: 'left 70%',
        end: 'left 40%',
        scrub: 1,
        containerAnimation: scrollHorizontal
    }
})


gsap.from('#intro-section5-img', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#section-5',
        start: 'left 40%',
        end: 'left 20%',
        scrub: 1,
        containerAnimation: scrollHorizontal
    }
})
/* * * * * SECTION 5 * * * * */






/* * * * * SECTION 6 * * * * */
gsap.to('#intro-section6-img', {
    x: -300,
    scrollTrigger: {
        trigger: '#intro-section6',
        start: 'left 90%',
        scrub: 1,
        containerAnimation: scrollHorizontal
    }
})

gsap.to('#intro-section6-img img', {
    scale: 1.5,
    scrollTrigger: {
        trigger: '#intro-section6',
        start: 'left right',
        end: 'left 50%',
        scrub: 1,
        containerAnimation: scrollHorizontal
    }
})


gsap.set("#intro-section6 span", {
    x: '80%'
});

gsap.from('#intro-section6 span', {
    x: '-100%',
    scrollTrigger: {
        trigger: '#intro-section6',
        start: 'left 70%',
        scrub: 1,
        containerAnimation: scrollHorizontal
    }
})
/* * * * * SECTION 6 * * * * */





// const timelineSection1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-1",
//         containerAnimation: scrollHorizontal,
//         start: "center 40%",
//         // markers: true,
//         toggleActions: "play none none reverse",
//         id: "1"
//     }
// })

// timelineSection1.to('.chapter-3 .banner', { width: '50px', duration: 0.5})
// timelineSection1.to('.chapter-3 .banner .vertical-text', { opacity: 0 }, '<0.2')
// timelineSection1.to('.chapter-3', { left: 'calc(100vw - 50px)' }, '<')

// timelineSection1.to('.chapter-2 .banner', { width: '50px', duration: 0.5})
// timelineSection1.to('.chapter-2 .banner .vertical-text', { opacity: 0 }, '<0.2')
// timelineSection1.to('.chapter-2', { left: 'calc(100vw - 100px)' }, '<')

// timelineSection1.to('.chapter-1 .banner', { width: '50px', duration: 0.5})
// timelineSection1.to('.chapter-1 .banner .vertical-text', { opacity: 0 }, '<0.2')
// timelineSection1.to('.chapter-1', { left: 'calc(100vw - 150px)' }, '<')

// timelineSection1.to('.brand', { left: 'calc(100vw - 500px'})






// gsap.to(".chapter-1 .banner", {
//     duration: 1,
//     width: '50px',
//     ease: "elastic",
//     scrollTrigger: {
//       trigger: ".section-1",
//       containerAnimation: scrollTween,
//       start: "center 40%",
//       markers: true,
//       toggleActions: "play none none reset",
//       id: "1"
//     }
// });
  




  


