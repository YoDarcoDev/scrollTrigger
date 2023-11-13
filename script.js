gsap.registerPlugin(ScrollTrigger) 

const intro = document.querySelector('.intro')
let sections = gsap.utils.toArray(".wrapper section");



// INTRO
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


// SECTION 1 après intro
gsap.from('.section-1 .block', {
    y: 500, 
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.section-1',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play reverse resume reverse'
    }
})



// SCROLL HORIZONTAL
let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 0.1,
      start: 'top top',
      end: '+=3000'
    }
})


const timelineSection1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        containerAnimation: scrollTween,
        start: "center 40%",
        // markers: true,
        toggleActions: "play none none reverse",
        id: "1"
    }
})

timelineSection1.to('.chapter-3 .banner', { width: '50px', markers: true, duration: 0.5})
timelineSection1.to('.chapter-3 .banner .vertical-text', { opacity: 0 }, '<0.2')
timelineSection1.to('.chapter-3', { left: 'calc(100vw - 50px)' }, '<')

timelineSection1.to('.chapter-2 .banner', { width: '50px', markers: true, duration: 0.5})
timelineSection1.to('.chapter-2 .banner .vertical-text', { opacity: 0 }, '<0.2')
timelineSection1.to('.chapter-2', { left: 'calc(100vw - 100px)' }, '<')

timelineSection1.to('.chapter-1 .banner', { width: '50px', markers: true, duration: 0.5})
timelineSection1.to('.chapter-1 .banner .vertical-text', { opacity: 0 }, '<0.2')
timelineSection1.to('.chapter-1', { left: 'calc(100vw - 150px)' }, '<')

timelineSection1.to('.brand', { left: 'calc(100vw - 500px'})






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
  




  


