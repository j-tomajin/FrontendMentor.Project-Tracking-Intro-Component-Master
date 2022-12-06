const nav = document.querySelector('nav')
const menuImg = document.querySelector('.menu-img')
// const menu = document.querySelector('.menu')
// const close = document.querySelector('.close-nav')

function openMenu() {
    nav.classList.toggle('close-nav')
    
    if(!menuImg.src.match('icon-hamburger')) {
        menuImg.src = './images/icon-hamburger.svg'
    } else {
        menuImg.src = './images/icon-close.svg'
    }
}

