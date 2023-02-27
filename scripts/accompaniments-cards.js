const accompaniments = [
  {
    img: "https://i.pinimg.com/originals/d6/e9/46/d6e946b90cc3f891a480d8c527e24ec6.jpg",
    name: "Chocolate Cake Sliced",
    price: "US$ 3.50",
  },
  {
    img: "https://www.wikihow.com/images/0/02/Make-a-Kosher-Reuben-Sandwich-Step-9.jpg",
    name: "Sandwich",
    price: "US$ 4.50",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=2a00000179f4fbe3ab18d201960e61031a43-4379638-images-thumbs&n=13&exp=1",
    name: "Muffins",
    price: "US$ 2.50",
  },
  {
    img: "https://i.pinimg.com/originals/42/ec/88/42ec88825a81fc17b58477395d684be2.jpg",
    name: "Brownie",
    price: "US$ 2.65",
  },
  {
    img: "https://g1.dcdn.lt/images/pix/kava-70504014.jpg",
    name: "Croissants",
    price: "US$ 4.10",
  },
]

function addCards() {
  accompaniments.forEach(({ img, name, price }) => {
    document.querySelector(".accompaniments-container").innerHTML += `
      <div class="accompaniments-card">
        <img src="${img}" alt="${name} Image">
        <div class="info">
          <h3>${price} - ${name}</h3>
        </div>
      </div>
    `
  })
}

addCards()
