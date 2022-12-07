const nav = document.querySelector('nav')
const menuImg = document.querySelector('.menu-img')

function openMenu() {
    nav.classList.toggle('show-nav')
    
    if(!menuImg.src.match('icon-hamburger')) {
        menuImg.src = './images/icon-hamburger.svg'
    } else {
        menuImg.src = './images/icon-close.svg'
    }
}

