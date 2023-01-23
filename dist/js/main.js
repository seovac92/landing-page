const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.hamburger')
const mobile = document.querySelector('.mobile')
const mobNav = document.querySelector('.mob-menu')

let showMenu = false

menuBtn.addEventListener('click', ()=>{
    if(!showMenu){
        hamburger.classList.add('open')
        mobile.classList.add('open')
        mobNav.classList.add('open')

        showMenu = true
    }
    else{
        hamburger.classList.remove('open')
        mobile.classList.remove('open')
        mobNav.classList.remove('open')

        showMenu = false
    }
})