gsap.registerPlugin(ScrollTrigger) 

gsap.from('#chapter2-citation', {
    yPercent: 100,
    opacity: 0, 
    scrollTrigger: {
        trigger: '#chapter2-intro',
        start: 'bottom 70%',
        end: 'bottom 50%',
        scrub: 1,
        markers: true
    }
})