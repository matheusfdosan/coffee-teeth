var home = document.getElementById('home') 
var store = document.getElementById('store') 
var about = document.getElementById('about') 
var contact = document.getElementById('contact')

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