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