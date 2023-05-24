let products = [];

const productLS = localStorage.getItem("products");

if (productLS) {
  products = JSON.parse(productLS);
} else {
  products = [];
}

const cartTotal = document.querySelector(".cart_total"),
  cartSlider = document.querySelector(".cart_slider");

function addProduct(products) {
  const priceTotal = document.querySelector(".price_total");

  cartSlider.innerHTML = "";

  let totalPrice = 0;

  products.map((product) => {
    const { image, name, quantity, price } = product;
    cartSlider.innerHTML += `
      <div class="cart_items">
          <div class="cart_image">
              <img src="${image}" alt="${name}" />
          </div>
          <div class="cart_desc">
              <p class="cart_item-title">${name}</p>
              <span class="price">x${quantity}</span>
              <p class="cart_item-price price">$${parseInt(
                price * quantity
              ).toLocaleString()}</p>
          </div>
          <i class="bi bi-trash"></i>
      </div>
      `;
    totalPrice += price * quantity;
  });
  priceTotal.innerHTML = `${totalPrice.toLocaleString()}`;
  totalOfProducts();
  saveLocal();
}

cartSlider.addEventListener("click", (e) => {
  if (e.target.className === "bi bi-trash") {
    products = products.filter(
      (prod) =>
        prod.name !==
        e.target.parentElement.querySelector(".cart_item-title").textContent
    );
    addProduct(products);
    saveLocal();
    totalOfProducts();
  }
});

const messageEmpty = document.createElement("h3");
messageEmpty.classList.add("message_empty");
messageEmpty.textContent = "No hay productos en el carrito";

totalOfProducts();

function totalOfProducts() {
  if (products.length === 0) {
    cartTotal.classList.add("d-none");
    cartSlider.appendChild(messageEmpty);
  } else {
    cartTotal.classList.remove("d-none");
  }
}

function saveLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}
