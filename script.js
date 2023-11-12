gsap.registerPlugin(ScrollTrigger) 

const container = document.querySelector('.main-wrapper')
const allSections = document.querySelectorAll('section')
const wrapperSections = document.querySelectorAll('.main-wrapper section')



// TIMELINE sections 1 et 2
const timeline = gsap.timeline()

timeline
    .to(container, {
        ease: 'none',
        duration: 1,
        // xPercent: -100 * (wrapperSections.length - 1 ), 
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px', // Déplace le container vers le haut
    }) 
    .to('.side-bar', {
        left: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.side-bar',
            start: 'center+=2500 center',
            scrub: 2.5
        }
    })
    .to({}, { duration: 1 / (allSections.length + 1)})

ScrollTrigger.create({
    animation: timeline,
    trigger: container,
    scrub: 1,
    pin: true,
    start: 'top top',
    end: `${container.scrollWidth}` // Fin scroll horizontal (Totalité des sections : 2 x 100vw)
})


gsap.from('.row li', {
    y: 200,
    opacity: 0,
    ease: 'none',
    duration: 2,
    delay: 1,
    stagger: {
        amount: 1   
    },
    scrollTrigger: {
        trigger: '.row li',
        toggleActions: 'play pause reverse reverse'
    }
})


gsap.from('.row-2', {
    height: '0%',
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.section-3',
        start: '40% center',
        toggleActions: 'play pause reverse reverse'
    }
})





/* * * * * NOTES * * * * */
// container.scrollWidth => width de section-1 (100vw) + section-2(100vw) en pixel