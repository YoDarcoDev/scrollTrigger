

console.log('test')


const numbers = document.querySelectorAll('sup')
const blockNotes = document.querySelector('.notes')
let currentId = 0

// Charger le fichier JSON
const notesFile = fetch('../../files/notes.json')
    .then(response => {
        return response.json()
    })
    .then(data => { 

        if (numbers) {
            numbers.forEach(number => {
                number.addEventListener('click', () => {

                    const id = number.dataset.id
                    let text = document.querySelector('.notes .text')

                    if (!blockNotes.classList.contains('active') && currentId != id) {
                        text.innerHTML = `<strong>${id}</strong> - ${data.notes[id].text}`
                        blockNotes.classList.add('active')
                        currentId = number.dataset.id 
                    }
                    else if (blockNotes.classList.contains('active') && currentId == id) {
                        blockNotes.classList.remove('active')
                        currentId = 0
                    } 
                    else if (blockNotes.classList.contains('active') && currentId != id) {
                        text.innerHTML = `<strong>${id}</strong> - ${data.notes[id].text}`
                        currentId = number.dataset.id 
                    }
                })
            })
        }    
    })

if (blockNotes) {
    document.querySelector('.notes #close').addEventListener('click', () => {
        blockNotes.classList.remove('active')
        currentId = 0
    })
}








// SWIPER BOOKS
const swiper = new Swiper('.swiper-books', {
    slidesPerView: 1,
    spaceBetween: 80,
    drag: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
    },
});