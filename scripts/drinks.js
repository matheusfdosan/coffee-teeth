const coffees = [
  {
    img: "https://images.pexels.com/photos/531829/pexels-photo-531829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Cappuccino",
    price: "US$ 3,80",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=c68a77b7f90abce5969af343fc5be483d9967655-4077366-images-thumbs&n=13&exp=1",
    name: "Espresso",
    price: "US$ 2.75",
  },
  {
    img: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
    name: "Moccha",
    price: "US$ 4.69",
  },
  {
    img: "https://pixy.org/src2/583/5839224.jpg",
    name: "Latte",
    price: "US$ 3.50",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/5448678/2a0000017dbae28408a86e04836d7cf9cc1b/XXL",
    name: "Americano",
    price: "US$ 2.45",
  },
  {
    img: "https://pbs.twimg.com/media/CRuAQnUUEAE3SlC.jpg:large",
    name: "Macchiatto",
    price: "US$ 4.75",
  },
  {
    img: "https://pbs.twimg.com/media/FJ9itOgVgAAm6kA.jpg",
    name: "Irish Coffee",
    price: "US$ 11.20",
  },
  {
    img: "https://www.c-store.com.au/wp-content/uploads/2017/01/iStock-503917463.jpg?resize=1200",
    name: "Affogato",
    price: "US$ 7.70",
  },
  {
    img: "https://i.pinimg.com/736x/6e/28/ca/6e28ca451bcd77ab6a87bef21fcdd9db--iced-mocha-zurich.jpg",
    name: "Fredo",
    price: "US$ 4.60",
  },
  {
    img: "https://yandex-images.clstorage.net/k9G8w3T51/d9f623p8Oqu/XpZ0nyJQMGOPIbxoTIPyArDTFIfjd3MqHuF5iRhxRtpsfzdDJOfz5p0SWms6a1kTKpIvCYRKAAWfsoBXruN-_h5GJ42zlea03mQpakxCsoXng9DA9fZkbI52eljPM4RPre72gTbx5rWMxZhw9eIFD_AZtZYNFR5DX3GXQPwwqigdnLsLq4Zx60_78-EDQ_jIpRAfx_V37aXTPTBaWvVYUT8ztIq-piz_ilBMf_HsR8szF7vXDhRUAR7w3cl4rWxtnhk40SMKuSPOu7Bjj4xzCipb2IDyP29tUfsz3R0x29lysviH8mmlOcRTxTy_Ls8KOZj9VQHXFsCW-doDdGbrKluePZhlRr8uxbmwKQ_J-gHnGdzCeXQgrJI0MNJac9cWvHZ3y3TqJL0GkMi1N6zHj_8W-ZHFklWJXDaUiDlqY6bWk7ieb0a-6wH5dG6LTL-H4FuQgHV5aWsXNrnfGDmWkzN_Nch-56z_wlhPNDmvCMP1W73SyRzWSJ732A_-7ujqnJvwEKdGfukO8vgqREE5z-_UlII1MyDrVLBw0lQ51929tTKGOGYjvQrZQbt-IQBNfBc7EMEe1kDcdteIO-PvqRtRtBWthbvvRXF4bELB9UItVNdKMbgkJJF9vJWdudkderV8hzsjpX6NlMJ2--BMBfyaOB6N2pPDXnRfSzEvqOafmf4b68C36025_-6BBPOIZlldg_b_qC3au7eWHboXEHL0t0Z0pC2xQdkJc3djgYW703zUgFpWRFe-1cP_amigEFp-naeDMShHc_8rRMC7iaiVnMP1uylq3LC62RS5193xtf5HMq7jukLeCLy67s7C-pL4XIFeXIGUsx-K-munIJeXtldjC_FgSLl5YwxE-wxqGtOIOnNprlJ2_RqVdlpWurU-SjJuZL3NWAF8-yGLyrQRulnPEVAEFrieCvpn5mGbHfDar8r45gIzse1OjjEOZtpUiPG04erePL2ZnQ",
    name: "Cocoa",
    price: "US$ 3.40",
  },
  {
    img: "https://www.kfuo.org/wp-content/uploads/2018/02/FI021518_CH_AsianSeniorCenter.jpg",
    name: "Herbal tea",
    price: "US$ 3.00",
  },
  {
    img: "https://i.pinimg.com/736x/39/ed/50/39ed5025692df38de655430f58c7c059.jpg",
    name: "Green tea latte with condensed milk",
    price: "US$ 6.50",
  },
]

function addCoffees() {
  coffees.forEach(({ img, name, price }) => {
    document.querySelector(".drinks-container").innerHTML += `
      <div class="drink-card">
        <img src="${img}" alt="${name} Image">
        <div class="info">
          <h3>${price} - ${name}</h3>
        </div>
      </div>
    `
  })
}

addCoffees()