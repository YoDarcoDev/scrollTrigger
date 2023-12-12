gsap.registerPlugin(ScrollTrigger) 
const intro = document.getElementById('intro');
const chapter1 = document.querySelector('.chapter-1')
const contents = document.querySelectorAll('.content')

// TODO : Check si on est dans le chapitre 1
// if (chapter1 !== null) {
//     disableScroll()
// }

/* * * * * HEADER * * * * */
// document.addEventListener('click', () => {
//     intro.scrollIntoView({ behavior: 'smooth',});
    
//     gsap.to('#header', {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: "#header",
//             scrub: 1,
//             start: "top top" 
//         }
//     })

//     enableScroll()
// })


// function disableScroll () {
//     document.body.style.overflow = 'hidden';
// }

// const enableScroll = () => {
//     document.body.style.overflow = 'unset';
// }
/* * * * * HEADER * * * * */




/* * * * * INTRO * * * * */
gsap.from('#intro-video', {
    scale: 0.2,
    opacity: 0.2,
    scrollTrigger: {
        scrub: 1,
        trigger: '#intro',
        start: 'top top+=30%',
        end: 'top top+=10%',
    }
})

gsap.from('#intro h2', 1.8, {
    y: 100,
    opacity: 0,
    ease: "power4.out",
    delay: 2,
    scrollTrigger: {
        scrub: 1,
        trigger: '#intro',
        start: 'top top+=30%',
        end: 'top top+=10%',
    },
    stagger: {
        amount: 0.3
    }
})

/* * * * * INTRO * * * * */



/* * * * * INTERVIEW * * * * */
gsap.from('#interview-text', {
    y: 200,
    scrollTrigger: {
        scrub: 1,
        trigger: "#interview",
        start: "top 70%",
        end: "top 40%",
    }
})

gsap.from('#interview-video', {
    y: 500,
    scrollTrigger: {
        scrub: 1,
        trigger: "#interview",
        start: "top 40%",
        end: "+=300",
    }
})
/* * * * * INTERVIEW * * * * */






/* * * * * CITATION * * * * */
gsap.from('#citation p', {
    y: 300,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#citation",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
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





/* * * * * SECTION 1 PINNED * * * * */
// ScrollTrigger.create({
//     trigger: "#section-1",
//     start: "top top", 
//     scrub: 1,
//     pin: "#img-background",
//     end: 'bottom -=' + document.querySelector('#section-1').offsetHeight,
// });
/* * * * * SECTION 1 PINNED * * * * */





/* * * * * SECTION 2 : JOURNAL KLEPELKRICH * * * * */
ScrollTrigger.create({
    trigger: "#section-2",
    start: "top top",
    end: '+=' + (document.querySelector('#block-section-2').offsetHeight - document.querySelector('#img-klepelkrich').offsetHeight),
    pin: "#text",
    pinSpacing: false,
})

gsap.from('#books-klepelkrich', {
    y: 400,
    opacity:0,
    scrollTrigger: {
        trigger: "#section-2",
        scrub: 1,
        start: "top top",
        end: '+=200',
    }
})


gsap.from('#chapter1-section2-title', {
    xPercent: -100,
    scrollTrigger: {
        trigger: '#section-2',
        start: 'top center+=10%',
        end: 'top 20%',
        scrub: 1,
    }
})


gsap.from('#chapter1-section2-text', {
    xPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#section-2',
        start: 'top center-=10%',
        end: 'top 10%',
        scrub: 1
    }
})

/* * * * * SECTION 2 : JOURNAL KLEPELKRICH * * * * */





/* * * * * IMAGE FULL TRAUSCH RTL * * * * */
gsap.from('#img-rtl img', {
    scale: 0.5,
    scrollTrigger: {
        trigger: "#img-rtl",
        start: "top center",
        end: "center 60%",
        scrub: 1,
    }
})
/* * * * * IMAGE FULL TRAUSCH RTL * * * * */









const title = document.getElementById('section-3')

/* * * * * SECTION 3 : L'ÂGE D'OR RADIO * * * * */
ScrollTrigger.create({
    trigger: "#section-3",
    start: "top top",
    end: () => 'top top',
    endTrigger: "#video-identity video",
    pin: "#section-3-title",
    pinSpacing: false,
})



gsap.from('#section-3-title', {
    x: '-100%',
    opacity: 0,
    scrollTrigger: {
        trigger: '#section-3',
        start: 'top center+=10%',
        end: 'top 20%',
        scrub: 1,
    }
})


gsap.from('#section-3-text', {
    x: '100%',
    opacity: 0,
    scrollTrigger: {
        trigger: '#section-3',
        start: 'top center-=10%',
        end: 'top 10%',
        scrub: 1,
    }
})
/* * * * * SECTION 3 : L'ÂGE D'OR RADIO * * * * */



/* * * * * VIDEO 1 * * * * */
gsap.from('#video-1', {
    yPercent: 100,
    opacity: 0.3,
    scrollTrigger: {
        trigger: '#videos',
        start: 'top center',
        end: '+=200',
        scrub: 1
    }
})
/* * * * * VIDEO 1 * * * * */



/* * * * * VIDEO 2 * * * * */
gsap.from('#video-2', {
    yPercent: 100,
    opacity: 0.3,
    scrollTrigger: {
        trigger: '#videos',
        start: 'top center',
        end: '+=150',
        scrub: 1
    }
})
/* * * * * VIDEO 2 * * * * */



/* * * * * VIDEO 3 * * * * */
gsap.from('#video-3', {
    yPercent: 100,
    opacity: 0.3,
    scrollTrigger: {
        trigger: '#videos',
        start: 'top center',
        end: '+=150',
        scrub: 1
    }
})
/* * * * * VIDEO 3 * * * * */



/* * * * * TEXT AGE D'OR RADIO TV * * * * */
gsap.from('#block-photo-text p', {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#block-photo-text',
        start: 'top 70%',
        end: 'top 10%',
        scrub: 1
    }
})
/* * * * * TEXT AGE D'OR RADIO TV * * * * */



/* * * * * IMAGE AGE D'OR RADIO TV * * * * */
gsap.from('#block-photo-text img', {
    yPercent: 100,
    xPercent: -100,
    scale: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: '#block-photo-text',
        start: 'top 30%',
        end: 'top top',
        scrub: 1
    }
})
/* * * * * IMAGE AGE D'OR RADIO TV * * * * */






/* * * * * IMAGE AGE D'OR RADIO TV * * * * */
gsap.from('#block-photo-text-2', {
    yPercent: 90,
    opacity: 0,
    scrollTrigger: {
        trigger: '#block-photo-text-2',
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1
    }
})
/* * * * * IMAGE AGE D'OR RADIO TV * * * * */




/* * * * * SECTION 4 : CONFERENCES GRAND PUBLIC * * * * */
ScrollTrigger.create({
    trigger: "#conferences",
    start: "top top",
    end: () => '+=3000',
    pin: "#section-4-title",
    pinSpacing: false,
})



gsap.from('#text-conference-teaser', {
    yPercent: 100,
    scrollTrigger: {
        trigger: '#block-conference-teaser-text',
        start: 'top center',
        end: 'top 30%',
        scrub: 1,
    }
})


gsap.from('#section-4-title', {
    x: '-100%',
    opacity: 0,
    scrollTrigger: {
        trigger: '#conferences',
        start: 'top center+=10%',
        end: 'top 20%',
        scrub: 1,
    }
})


gsap.from('#section-4-text', {
    xPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#conferences',
        start: 'top center-=10%',
        end: 'top 10%',
        scrub: 1,
    }
})
/* * * * * SECTION 4 : CONFERENCES GRAND PUBLIC * * * * */







/* * * * * NEWSPAPER * * * * */
gsap.from('#newspaper', {
    yPercent: 100,
    scale: 0.3,
    scrollTrigger: {
        trigger: '#block-conference-teaser-text',
        start: 'bottom 80%',
        scrub: 1,
    }
})
/* * * * * NEWSPAPER * * * * */





