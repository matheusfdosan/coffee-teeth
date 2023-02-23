window.onscroll = function () {
  if (document.documentElement.scrollTop < 1) {
    document.querySelector("header").classList.remove("addShadow")
  } else {
    document.querySelector("header").classList.add("addShadow")
  }
}

const trendingCoffees = [
  {
    name: "cappuccino",
    img: "https://images.pexels.com/photos/531829/pexels-photo-531829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "US$ 3,80",
  },
  {
    name: "espresso",
    img: "https://avatars.mds.yandex.net/i?id=c68a77b7f90abce5969af343fc5be483d9967655-4077366-images-thumbs&n=13&exp=1",
    price: "US$ 2.75",
  },
  {
    name: "moccha",
    img: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
    price: "US$ 4.69",
  },
  {
    name: "latte",
    img: "https://pixy.org/src2/583/5839224.jpg",
    price: "US$ 3.50",
  },
  {
    name: "americano",
    img: "https://avatars.mds.yandex.net/get-altay/5448678/2a0000017dbae28408a86e04836d7cf9cc1b/XXL",
    price: "US$ 2.45",
  },
  {
    name: "macchiatto",
    img: "https://pbs.twimg.com/media/CRuAQnUUEAE3SlC.jpg:large",
    price: "US$ 4.75",
  },
]

function addCoffeeCards() {
  trendingCoffees.forEach(({ name, img, price }) => {
    document.querySelector("div.cards-wrapper").innerHTML += `
    <div class="card-coffee">
      <img src="${img}" alt="${name}" />
      <div class="info">${name.toUpperCase()} - ${price}</div>
    </div>
    `
  })
}

addCoffeeCards()

const someRecipes = [
  {
    img: "https://www.ebox.mu/assets/recipes/l/Oi6GTo8nyMWIruTuxCvsvn078noobVbnWbqmKR7C.jpg",
    title: "How to make a Latte Macchiatto",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=8a5e3381a2e13afce7936022a3bd47621cb5ab71-8182659-images-thumbs&n=13&exp=1",
    title: "Affogato step by step",
  },
  {
    img: "https://i.pinimg.com/736x/cc/f9/c0/ccf9c0037453baac47bcd9280c287eaa.jpg",
    title: "Ristretto coffee recipe",
  },
  {
    img: "https://bakedbroiledandbasted.com/wp-content/uploads/2017/12/Peppermint-Mocha-Mix-4.jpg",
    title: "Peppermint mocha mix",
  },
  {
    img: "https://img.huffingtonpost.com/asset/6298f3112500003400472cf2.jpeg?ops=1200_630",
    title: "How to make a latte art",
  },
]

function addRecipes() {
  someRecipes.forEach(({ img, title }) => {
    document.querySelector("div.recipes-wrapper").innerHTML += `
    <div class="card-recipe">
      <img src="${img}" alt="thumbnail">
      <div class="arrow">
        <img src="imgs/slanted-arrow.svg" alt="slanted-arrow">
      </div>
      <h3>${title}</h3>
    </div>
    `
  })
}

addRecipes()

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
