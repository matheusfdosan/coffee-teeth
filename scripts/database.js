const data = [
  {
    section: ["drink", "trending"],
    img: "https://images.pexels.com/photos/531829/pexels-photo-531829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Cappuccino",
    price: "US$ 3,80",
  },
  {
    section: ["drink", "trending"],
    img: "https://avatars.mds.yandex.net/i?id=c68a77b7f90abce5969af343fc5be483d9967655-4077366-images-thumbs&n=13&exp=1",
    name: "Espresso",
    price: "US$ 2.75",
  },
  {
    section: ["drink", "trending"],
    img: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
    name: "Moccha",
    price: "US$ 4.69",
  },
  {
    section: ["drink", "trending"],
    img: "https://pixy.org/src2/583/5839224.jpg",
    name: "Latte",
    price: "US$ 3.50",
  },
  {
    section: ["drink", "trending"],
    img: "https://avatars.mds.yandex.net/get-altay/5448678/2a0000017dbae28408a86e04836d7cf9cc1b/XXL",
    name: "Americano",
    price: "US$ 2.45",
  },
  {
    section: ["drink", "trending"],
    img: "https://pbs.twimg.com/media/CRuAQnUUEAE3SlC.jpg:large",
    name: "Macchiatto",
    price: "US$ 4.75",
  },
  {
    section: ["drink"],
    img: "https://pbs.twimg.com/media/FJ9itOgVgAAm6kA.jpg",
    name: "Irish Coffee",
    price: "US$ 11.20",
  },
  {
    section: ["drink"],
    img: "https://www.c-store.com.au/wp-content/uploads/2017/01/iStock-503917463.jpg?resize=1200",
    name: "Affogato",
    price: "US$ 7.70",
  },
  {
    section: ["drink"],
    img: "https://i.pinimg.com/736x/6e/28/ca/6e28ca451bcd77ab6a87bef21fcdd9db--iced-mocha-zurich.jpg",
    name: "Fredo",
    price: "US$ 4.60",
  },
  {
    section: ["drink"],
    img: "https://yandex-images.clstorage.net/k9G8w3T51/d9f623p8Oqu/XpZ0nyJQMGOPIbxoTIPyArDTFIfjd3MqHuF5iRhxRtpsfzdDJOfz5p0SWms6a1kTKpIvCYRKAAWfsoBXruN-_h5GJ42zlea03mQpakxCsoXng9DA9fZkbI52eljPM4RPre72gTbx5rWMxZhw9eIFD_AZtZYNFR5DX3GXQPwwqigdnLsLq4Zx60_78-EDQ_jIpRAfx_V37aXTPTBaWvVYUT8ztIq-piz_ilBMf_HsR8szF7vXDhRUAR7w3cl4rWxtnhk40SMKuSPOu7Bjj4xzCipb2IDyP29tUfsz3R0x29lysviH8mmlOcRTxTy_Ls8KOZj9VQHXFsCW-doDdGbrKluePZhlRr8uxbmwKQ_J-gHnGdzCeXQgrJI0MNJac9cWvHZ3y3TqJL0GkMi1N6zHj_8W-ZHFklWJXDaUiDlqY6bWk7ieb0a-6wH5dG6LTL-H4FuQgHV5aWsXNrnfGDmWkzN_Nch-56z_wlhPNDmvCMP1W73SyRzWSJ732A_-7ujqnJvwEKdGfukO8vgqREE5z-_UlII1MyDrVLBw0lQ51929tTKGOGYjvQrZQbt-IQBNfBc7EMEe1kDcdteIO-PvqRtRtBWthbvvRXF4bELB9UItVNdKMbgkJJF9vJWdudkderV8hzsjpX6NlMJ2--BMBfyaOB6N2pPDXnRfSzEvqOafmf4b68C36025_-6BBPOIZlldg_b_qC3au7eWHboXEHL0t0Z0pC2xQdkJc3djgYW703zUgFpWRFe-1cP_amigEFp-naeDMShHc_8rRMC7iaiVnMP1uylq3LC62RS5193xtf5HMq7jukLeCLy67s7C-pL4XIFeXIGUsx-K-munIJeXtldjC_FgSLl5YwxE-wxqGtOIOnNprlJ2_RqVdlpWurU-SjJuZL3NWAF8-yGLyrQRulnPEVAEFrieCvpn5mGbHfDar8r45gIzse1OjjEOZtpUiPG04erePL2ZnQ",
    name: "Cocoa",
    price: "US$ 3.40",
  },
  {
    section: ["drink"],
    img: "https://www.kfuo.org/wp-content/uploads/2018/02/FI021518_CH_AsianSeniorCenter.jpg",
    name: "Herbal tea",
    price: "US$ 3.00",
  },
  {
    section: ["drink"],
    img: "https://i.pinimg.com/736x/39/ed/50/39ed5025692df38de655430f58c7c059.jpg",
    name: "Green tea latte with condensed milk",
    price: "US$ 6.50",
  },
  {
    section: ["food"],
    img: "https://i.pinimg.com/originals/d6/e9/46/d6e946b90cc3f891a480d8c527e24ec6.jpg",
    name: "Chocolate Cake Sliced",
    price: "US$ 3.50",
  },
  {
    section: ["food"],
    img: "https://www.wikihow.com/images/0/02/Make-a-Kosher-Reuben-Sandwich-Step-9.jpg",
    name: "Sandwich",
    price: "US$ 4.50",
  },
  {
    section: ["food"],
    img: "https://avatars.mds.yandex.net/i?id=2a00000179f4fbe3ab18d201960e61031a43-4379638-images-thumbs&n=13&exp=1",
    name: "Muffins",
    price: "US$ 2.50",
  },
  {
    section: ["food"],
    img: "https://i.pinimg.com/originals/42/ec/88/42ec88825a81fc17b58477395d684be2.jpg",
    name: "Brownie",
    price: "US$ 2.65",
  },
  {
    section: ["food"],
    img: "https://g1.dcdn.lt/images/pix/kava-70504014.jpg",
    name: "Croissants",
    price: "US$ 4.10",
  },
  {
    section: ["food"],
    img: "https://receitinhas.com.br/wp-content/uploads/2022/08/Coxinha-de-charque.jpg",
    name: "Brazilian chicken ball",
    price: "US$ 2.89",
  },
  {
    section: ["food"],
    img: "https://cdn.deliway.com.br/blog/base/caa/76c/5b0/massa-pastel-feira.jpg",
    name: "Brazilian turnover",
    price: "US$ 3.25",
  },
  {
    section: ["recipe", "trending"],
    img: "https://www.ebox.mu/assets/recipes/l/Oi6GTo8nyMWIruTuxCvsvn078noobVbnWbqmKR7C.jpg",
    name: "How to make a Latte Macchiatto",
    price: null,
  },
  {
    section: ["recipe", "trending"],
    img: "https://avatars.mds.yandex.net/i?id=8a5e3381a2e13afce7936022a3bd47621cb5ab71-8182659-images-thumbs&n=13&exp=1",
    name: "Affogato step by step",
    price: null,
  },
  {
    section: ["recipe", "trending"],
    img: "https://i.pinimg.com/736x/cc/f9/c0/ccf9c0037453baac47bcd9280c287eaa.jpg",
    name: "Ristretto coffee recipe",
    price: null,
  },
  {
    section: ["recipe", "trending"],
    img: "https://bakedbroiledandbasted.com/wp-content/uploads/2017/12/Peppermint-Mocha-Mix-4.jpg",
    name: "Peppermint mocha mix",
    price: null,
  },
  {
    section: ["recipe", "trending"],
    img: "https://img.huffingtonpost.com/asset/6298f3112500003400472cf2.jpeg?ops=1200_630",
    name: "How to make a latte art",
    price: null,
  },
  {
    section: ["recipe"],
    img: "",
    name: "",
    price: null,
  },
]

data.forEach(({ section, img, name, price }) => {
  const drinksSection = section[0] === "drink"
  const foodsSection = section[0] === "food"
  const recipeSection = section[0] === "recipe"
  const trendingDrinks = section[0] === "drink" && section[1] === "trending"
  const trendingRecipes = section[0] === "recipe" && section[1] === "trending"

  if (trendingDrinks) {
    const container = document.querySelector(
      ".trending-coffees > .container > .cards-wrapper"
    )
    const card = `
    <div class="card-coffee">
      <img src="${img}" alt="${name}" />
      <div class="info">${name} - ${price}</div>
    </div>`
    container ? (container.innerHTML += card) : null
  } else if (trendingRecipes) {
    const container = document.querySelector("div.recipes-wrapper")
    const card = `
    <div class="card-recipe">
      <img src="${img}" alt="thumbnail">
      <div class="arrow">
        <img src="imgs/slanted-arrow.svg" alt="slanted-arrow">
      </div>
      <h3>${name}</h3>
    </div>`
    container ? (container.innerHTML += card) : null
  }

  if (drinksSection) {
    const container = document.querySelector(".drinks-container")
    const card = `
    <div class="drink-card">
      <img src="${img}" alt="${name} Image">
      <div class="info">
        <h3>${price} - ${name}</h3>
      </div>
    </div>`
    container ? (container.innerHTML += card) : null
  } else if (foodsSection) {
    const container = document.querySelector(".foods-container")
    const card = `
    <div class="food-card">
      <img src="${img}" alt="${name} Image">
      <div class="info">
        <h3>${price} - ${name}</h3>
      </div>
    </div>`
    container ? (container.innerHTML += card) : null
  } else if (recipeSection) {
    const container = document.querySelector("div.recipes-container")
    const card = `
    <div class="card-recipe">
      <img src="${img}" alt="thumbnail">
      <div class="arrow">
        <img src="../imgs/slanted-arrow.svg" alt="slanted-arrow">
      </div>
      <h3>${name}</h3>
    </div>`
    container ? (container.innerHTML += card) : null
  }
})
