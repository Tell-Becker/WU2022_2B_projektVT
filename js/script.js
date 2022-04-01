const burger = document.querySelector('#hamburgare_meny')
const nav = document.querySelector('.meny_lista')

function toggleMenu() {
    nav.classList.toggle('meny')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu) 