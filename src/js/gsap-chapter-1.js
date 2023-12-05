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
    ease: "power4.out",
    delay: 2,
    scrollTrigger: {
        scrub: 1,
        trigger: '#intro',
        start: 'top top+=30%',
        end: 'top top+=10%',
        markers: true
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
        // markers: true
    }
})

gsap.from('#interview-video', {
    y: 500,
    scrollTrigger: {
        scrub: 1,
        trigger: "#interview",
        start: "top 40%",
        end: "+=100",
        // markers: true
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
        end: "top 60%",
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

/* * * * * SECTION 2 : JOURNAL KLEPELKRICH * * * * */





/* * * * * IMAGE FULL TRAUSCH RTL * * * * */
gsap.from('#img-rtl img', {
    scale: 0.7,
    scrollTrigger: {
        trigger: "#img-rtl",
        start: "top center",
        end: "center 60%",
        scrub: 1,
        // markers: true
    }
})
/* * * * * IMAGE FULL TRAUSCH RTL * * * * */











/* * * * * SECTION 3 : L'ÂGE D'OR RADIO * * * * */
ScrollTrigger.create({
    trigger: "#section-3",
    start: "top top",
    end: () => '+=2500',
    pin: "#section-3-title",
    pinSpacing: false,
})

// (lines[lines.length-1].getBoundingClientRect().top - lines[0].getBoundingClientRect().top), 
console.log(contents[contents.length-1].getBoundingClientRect().top)