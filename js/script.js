//Modal window

let modalShow = document.querySelector('.how__footer_button')
let modalWindow = document.querySelector('.modal')
let modalClose = document.querySelector('.button__close')

modalShow.addEventListener('click', showModalWindow)
modalClose.addEventListener('click', hideModalWindow)

function showModalWindow(){
    modalWindow.classList.add('modal__show')
}

function hideModalWindow(){
    modalWindow.classList.remove('modal__show')
}

//Side menu 
let sideMenuButton = document.querySelector('.burger__menu')
let sideMenu = document.querySelector('.side__menu')
let sideMenuClose = document.querySelector('.side__menu_close')

sideMenuButton.addEventListener('click', showMenu)
sideMenuClose.addEventListener('click', hideMenu)

function showMenu(){
    sideMenu.classList.add('side__menu_visible')
}

function hideMenu(){
    sideMenu.classList.remove('side__menu_visible')
}
