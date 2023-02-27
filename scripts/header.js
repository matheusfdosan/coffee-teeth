window.onscroll = function () {
  if (document.documentElement.scrollTop < 1) {
    document.querySelector("header").classList.remove("addShadow")
  } else {
    document.querySelector("header").classList.add("addShadow")
  }
}