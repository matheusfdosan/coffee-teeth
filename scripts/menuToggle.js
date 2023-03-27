let showMenu = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = showMenu ? "hidden" : "hidden visible"

  menuSection.classList.toggle("on")
  menuToggle.classList.toggle("fixToggle")
  showMenu = !showMenu
})

window.addEventListener("resize", (event) => {
  if (event.target.innerWidth > 800) {
    document.body.style.overflowY = "visible"
  }
})
