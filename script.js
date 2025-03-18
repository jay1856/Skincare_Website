const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const menu = document.getElementById('menu')

menu.addEventListener('click', () =>{
    navMenu.classList.toggle('left-[0]')
    menu.classList.toggle('ri-close-large-line')
})

// Show Scroll Up
const scrollUp=()=>{
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove('-bottom-1/2')
        scrollUpBtn.classList.add('bottom-4')
    }
    else{
        scrollUpBtn.classList.add('-bottom-1/2')
        scrollUpBtn.classList.remove('bottom-4')
    }

}
window.addEventListener('scroll', scrollUp)
// Change Header Background
const scrollHeader=()=>{
    const header = document.getElementById("navbar")

    if(this.scrollY >=50){
        header.classList.add('border-b','border-[#f48b08]')
    }
    else{
        header.classList.remove('border-b','border-[#f48b08]')
    }

}
window.addEventListener('scroll',scrollHeader)

const subscribe=()=>{
    const buttn=document.getElementById('subscribe')
    const input=document.getElementsByTagName('input')
    
    alert('Subcribed to Newsletter !')
    input[0].value=''
}