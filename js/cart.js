const productLSS = localStorage.getItem("products");
const productss = productLSS ? JSON.parse(productLSS) : [];

function showCartProducts() {
  const cartSlider = document.querySelector(".cart_slider"),
    priceTotal = document.querySelector(".price_total");

  cartSlider.innerHTML = "";

  let totalPrice = 0;

  productss.forEach((product) => {
    const { image, name, quantity, price } = product;

    cartSlider.innerHTML += `
            <div class="cart_items">
              <div class="cart_image">
                <img src="${image}" alt="${name}" />
              </div>
              <div class="cart_desc">
                <p class="cart_item-title">${name}</p>
                <span class="price">x${quantity}</span>
                <p class="cart_item-price price">$${(
                  price * quantity
                ).toLocaleString()}</p>
              </div>
              <i class="bi bi-trash"></i>
            </div>
          `;
    totalPrice += price * quantity;
  });
  priceTotal.innerHTML = `${totalPrice.toLocaleString()}`;
}

showCartProducts();
