// ==========================================
// NEKSHAR AGARBATTI - SCRIPT.JS
// ==========================================

// ---------- PRODUCTS ----------

const products = [

  {
  id: 1,
  name: "Chandan Agarbatti",
  type: "AGARBATTI",
  price: 15,
  symbol: "✦",
  image: "images/IMG20260719151640 (1).jpg"
},

  {
    id: 2,
    name: "Mogra Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "✿",
    image: "images/mogra.jpg"
  },

  {
    id: 3,
    name: "Rose Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "❀",
    image: "images/rose.jpg"
  },

  {
    id: 4,
    name: "Chandan Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "◈",
    image: "images/chandan-dhoop.jpg"
  },

  {
    id: 5,
    name: "Mogra Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "✿",
    image: "images/mogra-dhoop.jpg"
  },

  {
    id: 6,
    name: "Rose Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "❀",
    image: "images/rose-dhoop.jpg"
  }

];


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(
  localStorage.getItem("neksharCart")
) || [];


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

  localStorage.setItem(
    "neksharCart",
    JSON.stringify(cart)
  );

}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartCount =
    document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

  const product = products.find(
    p => p.id === productId
  );

  if (!product) return;

  const existing = cart.find(
    item => item.id === productId
  );

  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      id: product.id,
      name: product.name,
      price: product.price,
      symbol: product.symbol,
      image: product.image,
      quantity: 1

    });

  }

  saveCart();
  updateCartCount();

  alert(
    product.name +
    " cart mein add ho gaya."
  );

}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(productId) {

  cart = cart.filter(
    item => item.id !== productId
  );

  saveCart();

  updateCartCount();

  displayCart();

}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(
  productId,
  change
) {

  const item = cart.find(
    item => item.id === productId
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }

  saveCart();

  updateCartCount();

  displayCart();

}


// ==========================================
// CART TOTAL
// ==========================================

function getCartTotal() {

  return cart.reduce(

    (total, item) =>
      total +
      (item.price * item.quantity),

    0

  );

}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

  const cartContainer =
    document.getElementById("cart-items");

  const cartTotal =
    document.getElementById("cart-total");

  if (!cartContainer) return;


  // EMPTY CART

  if (cart.length === 0) {

    cartContainer.innerHTML =
      "<p>Your cart is empty.</p>";

    if (cartTotal) {

      cartTotal.textContent = "₹0";

    }

    return;

  }


  // CART ITEMS

  cartContainer.innerHTML = "";


  cart.forEach(item => {

    const itemTotal =
      item.price * item.quantity;


    const div =
      document.createElement("div");


    div.className = "cart-item";


    div.innerHTML = `

      <div class="cart-product">

        <img
          src="${item.image}"
          alt="${item.name}"
          width="70"
        >

        <div>

          <strong>
            ${item.symbol}
            ${item.name}
          </strong>

          <p>
            ₹${item.price} ×
            ${item.quantity}
          </p>

        </div>

      </div>


      <div class="cart-controls">

        <button
          onclick="changeQuantity(
            ${item.id}, -1
          )"
        >
          −
        </button>


        <span>
          ${item.quantity}
        </span>


        <button
          onclick="changeQuantity(
            ${item.id}, 1
          )"
        >
          +
        </button>


        <button
          onclick="removeFromCart(
            ${item.id}
          )"
        >
          Remove
        </button>

      </div>


      <strong>
        ₹${itemTotal}
      </strong>

    `;


    cartContainer.appendChild(div);

  });


  // TOTAL

  if (cartTotal) {

    cartTotal.textContent =
      "₹" + getCartTotal();

  }

}


// ==========================================
// BUY NOW
// ==========================================

function buyNow(productId) {

  const product = products.find(
    p => p.id === productId
  );

  if (!product) return;


  cart = [

    {

      id: product.id,
      name: product.name,
      price: product.price,
      symbol: product.symbol,
      image: product.image,
      quantity: 1

    }

  ];


  saveCart();

  updateCartCount();


  // Checkout page

  window.location.href =
    "checkout.html";

}


// ==========================================
// GO TO CHECKOUT
// ==========================================

function goToCheckout() {

  if (cart.length === 0) {

    alert(
      "Pehle product cart mein add karein."
    );

    return;

  }


  window.location.href =
    "checkout.html";

}


// ==========================================
// CLEAR CART
// ==========================================

function clearCart() {

  cart = [];

  saveCart();

  updateCartCount();

  displayCart();

}


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts() {

  const container =
    document.getElementById(
      "products-container"
    );

  if (!container) return;


  container.innerHTML = "";


  products.forEach(product => {

    const card =
      document.createElement("div");


    card.className =
      "product-card";


    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
      >


      <div class="product-symbol">
        ${product.symbol}
      </div>


      <h3>
        ${product.name}
      </h3>


      <p>
        ${product.type}
      </p>


      <h4>
        ₹${product.price}
      </h4>


      <button
        onclick="addToCart(${product.id})"
      >
        Add to Cart
      </button>


      <button
        onclick="buyNow(${product.id})"
      >
        Buy Now
      </button>

    `;


    container.appendChild(card);

  });

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    updateCartCount();

    displayProducts();

    displayCart();

  }
);


// ==========================================
// NEKSHAR WEBSITE READY
// ==========================================
