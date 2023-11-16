const notes = document.querySelectorAll('sup')

// Charger le fichier JSON
const notesFile = fetch('../../files/notes.json')
    .then(response => {
        return response.json()
    })
    .then(data => { console.log(data)})

notes.forEach(note => {
    note.addEventListener('click', () => {
        const id = note.dataset.id 
        

        Object.entries(notesFile).forEach(([key], [value]) => {
            console.log(key)
        });

     
    })
})


