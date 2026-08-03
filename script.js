// ==========================================
// NEKSHAR AGARBATTI - SCRIPT.JS
// ==========================================

const products = [
  {
    id: 1,
    name: "Chandan Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "✦",
    image: "images/chandan.jpg"
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

// ---------- CART ----------

let cart = JSON.parse(localStorage.getItem("neksharCart")) || [];

function saveCart() {
  localStorage.setItem("neksharCart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart();

  alert(product.name + " cart mein add ho gaya!");
}

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

// ---------- SHOW PRODUCTS ----------

function displayProducts() {
  const productContainer =
    document.getElementById("products");

  if (!productContainer) return;

  productContainer.innerHTML = "";

  products.forEach(product => {
    productContainer.innerHTML += `
      <div class="product-card">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          onerror="this.style.display='none'"
        >

        <div
