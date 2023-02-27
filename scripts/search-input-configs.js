window.onload = document.querySelector("input[type='text']").focus()

const search = document.querySelector(".search")
const cross = document.querySelector(".search .cross")
const input = document.querySelector("input[type='text']")

search.addEventListener("input", (event) => {
  event.target.value.length > 0
    ? (cross.style.display = "block")
    : (cross.style.display = "none")

  cross.addEventListener("click", () => {
    input.value = ""
    cross.style.display = "none"
    input.focus()
  })
})
