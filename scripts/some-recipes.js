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