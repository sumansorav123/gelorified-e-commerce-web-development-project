const list = document.querySelector(".product-lists");

let Arproducts = [
  {
    id: "1",
    image: "img/p1.jpeg",
    name: "Cotton Jacket",
    price: 5000,
    rating: 3,
  },
  {
    id: "2",
    image: "img/p2.jpeg",
    name: "Denim",
    price: 1000,
    rating: 4,
  },
  {
    id: "3",
    image: "img/p3.jpeg",
    name: "shirt",
    price: 2000,
    rating: 5,
  },
  {
    id: "4",
    image: "img/s1.jpg",
    name: "Watch",
    price: 2500,
    rating: 5,
  },
  {
    id: "5",
    image: "img/s2.jpg",
    name: "Leather Wallet",
    price: 450,
    rating: 3,
  },
  {
    id: "6",
    image: "img/pc2 (6).jpg",
    name: "Black leather Purse",
    price: 10000,
    rating: 3,
  },
  {
    id: "7",
    image: "img/pc2 (7).jpg",
    name: "Belt",
    price: 2000,
    rating: 4,
  },
  {
    id: "8",
    image: "img/pc1.jpg",
    name: "watch",
    price: 1050,
    rating: 4,
  },
  {
    id: "9",
    image: "img/pc2 (2).jpg",
    name: "Camera",
    price: 3499,
    rating: 4,
  },
];

let Arprroductss = [];

let productss = document.querySelector(".product-lists");
let cartitemm = document.querySelector(".cart-body");
let Toquantityy = document.querySelector(".to-quantity");
let checkOutLisst = [];

function onInit() {
  Arproducts.forEach((item, key) => {
    let productt = document.createElement("div");
    productt.classList.add("product-card");

    let star = "";
    for (i = 1; i < item.rating; i++) {
      star += `<i class="fas fa-star"></i>`;
    }

    productt.innerHTML = `
            <div class="product">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="count">Price: ${item.price.toLocaleString()}</p>
            <p>Rating: ${star}</p>
            <button class="btn" onclick="addToCart(${key})">Add to Cart</button>
            </div>
            `;
    productss.appendChild(productt);
    Arprroductss.push(productt);
  });
}
onInit();

function addToCart(id) {
  // alert("Product added to Cart")
  console.log(Arrproductss[id]);
  if (checkOutList[id] == null) {
    checkOutList[id] = Arrproductss[id];
    checkOutList[id].quantity = 1;
  } else {
    checkOutList[id].quantity += 1;
  }
  reloadCart();
}

function reloadCart() {
  cartitemm.innerHTML = " ";

  let count = 0;
  let totalPrice = 0;
  checkOutList.forEach((item, key) => {
    if (item != null) {
      count += item.quantity;
      totalPrice += parseInt(item.price * item.quantity);

      cartitemm.innerHTML += `
                <div class="cart-body">
                 <div class="cart-item">
                    <div class="product-image">
                        <img src="${item.querySelector("img").src}" alt="${
        item.querySelector("h3").innerText
      }">
                    </div>
                    <div class="product-details">
                        <h3>${item.querySelector("h3").innerText}</h3>
                        <p>Rs.  ${item.querySelector("p").innerText}</p>
                    </div>

                    <div class="quantity">
                    
                    <input  value="${
                      item.quantity
                    }" onchange="changeQuantity(${key})">
                    </div>
                    <div class="remove" onclick="removecart()">
                        <i class="fa-solid fa-trash-can-arrow-up"></i>
                    </div>
                   

                    </div>
                    </div>
                    `;
    }

    cartitemm.appendChild;
  });
  Toquantityy.innerText = count;
}
// remove cart
function removecart(id) {
  checkOutList[id] = null;
  reloadCart();
}
