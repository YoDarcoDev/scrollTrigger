const resources = document.querySelectorAll('[data-resource]')
const popup = document.querySelector('.popup')
const btnClosePopup = document.querySelector('.btnClosePopup')


const resourcesFile = fetch('../../files/resources.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        
        if (resources) {
            resources.forEach(item => {
                item.addEventListener('click', () => {
                    const chapter = item.dataset.resource.split('-')[0]
                    const id = item.dataset.resource.split('-')[1]

                    popup.classList.toggle('active')
                })
            })
        }
    })


if (btnClosePopup) {
    btnClosePopup.addEventListener('click', () => {
        popup.classList.toggle('active')
    })
}

