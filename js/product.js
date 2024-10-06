const lists = document.querySelector(".product-list");

let ArrProduct = [
  {
    id: "1",
    image: "img/p5.jpeg",
    name: "t-shirt",
    price: 5700,
    rating: 5,
  },
  {
    id: "2",
    image: "img/p6.jpeg",
    name: "shirt",
    price: 1000,
    rating: 4,
  },
  {
    id: "3",
    image: "img/s4.jpg",
    name: "colorfull sandal",
    price: 2000,
    rating: 5,
  },
  {
    id: "4",
    image: "img/s5.jpg",
    name: "Baby pink sandal",
    price: 2500,
    rating: 5,
  },
  {
    id: "5",
    image: "img/s6.jpeg",
    name: "Luxry shoe",
    price: 4500,
    rating: 3,
  },
  {
    id: "6",
    image: "img/s01.jpeg",
    name: "Formal mud pant",
    price: 2700,
    rating: 3,
  },
  {
    id: "7",
    image: "img/s9.jpeg",
    name: "white snekeer",
    price: 2000,
    rating: 4,
  },
  {
    id: "8",
    image: "img/s7.jpeg",
    name: "sonata gold watch",
    price: 6050,
    rating: 4,
  },
  {
    id: "9",
    image: "img/s8.jpeg",
    name: "jeens",
    price: 3499,
    rating: 4,
  },
];

let ArrProducts = [];

let products = document.querySelector(".product-list");
let cartItem = document.querySelector(".cart-body");
let Toquantity = document.querySelector(".to-quantity");
let checkOutList = [];

function onInit() {
  ArrProduct.forEach((item, key) => {
    let product = document.createElement("div");
    product.classList.add("product-card");

    let star = "";
    for (i = 1; i < item.rating; i++) {
      star += `<i class="fas fa-star"></i>`;
    }

    product.innerHTML = `
            <div class="product">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="count">Price: ${item.price.toLocaleString()}</p>
            <p>Rating: ${star}</p>
            <button class="btn" onclick="addToCart(${key})">Add to Cart</button>
            </div>
            `;
    products.appendChild(product);
    ArrProducts.push(product);
  });
}
onInit();

function addToCart(id) {
  // alert("Product added to Cart")
  console.log(ArrProducts[id]);
  if (checkOutList[id] == null) {
    checkOutList[id] = ArrProducts[id];
    checkOutList[id].quantity = 1;
  } else {
    checkOutList[id].quantity += 1;
  }
  reloadCart();
}

function reloadCart() {
  cartItem.innerHTML = " ";

  let count = 0;
  let totalPrice = 0;
  checkOutList.forEach((item, key) => {
    if (item != null) {
      count += item.quantity;
      totalPrice += parseInt(item.price * item.quantity);

      cartItem.innerHTML += `
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

    cartItem.appendChild;
  });
  Toquantity.innerText = count;
}
// remove cart
function removecart(id) {
  checkOutList[id] = null;
  reloadCart();
}
