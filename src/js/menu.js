const btnOpenMenu = document.querySelector('.btnOpenMenu')
const btnCloseMenu = document.querySelector('.btnCloseMenu')
const header = document.querySelector('header')


btnOpenMenu.addEventListener('click', () => {
    header.style.top = 0
})


btnCloseMenu.addEventListener('click', () => {
    header.style.top = -100 + "%"
})