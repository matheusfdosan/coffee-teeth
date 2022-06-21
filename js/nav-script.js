var home = document.querySelector('#home') 
var store = document.querySelector('#store') 
var about = document.querySelector('#about') 
var contact = document.querySelector('#contact')

function clickhome() {
    home.removeAttribute('hidden', 'hidden')

    
    store.setAttribute('hidden', 'hidden')
    about.setAttribute('hidden', 'hidden')
    contact.setAttribute('hidden', 'hidden')
}

function clickstore() {
    store.removeAttribute('hidden', 'hidden')
    
    home.setAttribute('hidden', 'hidden')
    about.setAttribute('hidden', 'hidden')
    contact.setAttribute('hidden', 'hidden')
}

function clickabout() {
    about.removeAttribute('hidden', 'hidden')
    
    home.setAttribute('hidden', 'hidden')
    store.setAttribute('hidden', 'hidden')
    contact.setAttribute('hidden', 'hidden')
}

function clickcontact() {
    contact.removeAttribute('hidden', 'hidden')

    home.setAttribute('hidden', 'hidden')
    store.setAttribute('hidden', 'hidden')
    about.setAttribute('hidden', 'hidden')
}

const search = document.querySelector(".search")
const btn = document.querySelector("#btn6")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})