// ==========================================
// NEKSHAR AGARBATTI - PRODUCTS
// ==========================================

const products = [
  {
    id: 1,
    name: "Chandan Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "✦"
  },
  {
    id: 2,
    name: "Mogra Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "✿"
  },
  {
    id: 3,
    name: "Rose Agarbatti",
    type: "AGARBATTI",
    price: 15,
    symbol: "❀"
  },
  {
    id: 4,
    name: "Chandan Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "◈"
  },
  {
    id: 5,
    name: "Mogra Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "✿"
  },
  {
    id: 6,
    name: "Rose Dhoop Cone",
    type: "DHOOP CONE",
    price: 15,
    symbol: "❀"
  }
];


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(
  localStorage.getItem("neksharCart") || "[]"
);


// ==========================================
// MONEY FORMAT
// ==========================================

function money(amount) {
  return "₹" + amount;
}


// ==========================================
// SHOW PRODUCTS
// ==========================================

function renderProducts() {

  const productGrid =
    document.getElementById("productGrid");

  if (!productGrid) return;

  productGrid.innerHTML = products.map(product => {

    return `
      <article class="product">

        <div class="product-visual">
          ${product.symbol}
        </div>

        <div class="product-info">

          <span class="tag">
            ${product.type}
          </span>

          <h3>
            ${product.name}
          </h3>

          <span class="price">
            ${money(product.price)}
          </span>

          <div class="actions">

            <button
              class="add"
              onclick="addToCart(${product.id})"
            >
              Add to Cart
            </button>

            <button
              class="buy"
              onclick="buyNow(${product.id})"
            >
              Buy Now
            </button>

          </div>

        </div>

      </article>
    `;

  }).join("");
}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

  localStorage.setItem(
    "neksharCart",
    JSON.stringify(cart)
  );

  updateCartCount();
  renderCart();
}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

  const cartCount =
    document.getElementById("cartCount");

  if (!cartCount) return;

  const count = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  cartCount.textContent = count;
}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

  const existing =
    cart.find(item => item.id === productId);

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      id: productId,
      qty: 1
    });

  }

  saveCart();

  openCart();
}


// ==========================================
// BUY NOW
// ==========================================

function buyNow(productId) {

  cart = [
    {
      id: productId,
      qty: 1
    }
  ];

  saveCart();

  goCheckout();
}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(productId, change) {

  const item =
    cart.find(item => item.id === productId);

  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {

    cart =
      cart.filter(item => item.id !== productId);

  }

  saveCart();
}


// ==========================================
// TOTAL
// ==========================================

function getCartTotal() {

  return cart.reduce((total, item) => {

    const product =
      products.find(
        product => product.id === item.id
      );

    return total +
      (product.price * item.qty);

  }, 0);
}


// ==========================================
// RENDER CART
// ==========================================

function renderCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartTotal =
    document.getElementById("cartTotal");

  if (!cartItems) return;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p>
        Your cart is empty.
      </p>
    `;

    if (cartTotal) {
      cartTotal.textContent = "₹0";
    }

    return;
  }


  cartItems.innerHTML = cart.map(item => {

    const product =
      products.find(
        product => product.id === item.id
      );

    return `
      <div class="cart-row">

        <div>

          <b>
            ${product.name}
          </b>

          <div>
            ${money(product.price)}
            × ${item.qty}
          </div>

        </div>

        <div class="qty">

          <button
            onclick="changeQuantity(
              ${product.id},
              -1
            )"
          >
            −
          </button>

          ${item.qty}

          <button
            onclick="changeQuantity(
              ${product.id},
              1
            )"
          >
            +
          </button>

        </div>

      </div>
    `;

  }).join("");


  if (cartTotal) {

    cartTotal.textContent =
      money(getCartTotal());

  }
}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

  const overlay =
    document.getElementById("overlay");

  if (!overlay) return;

  overlay.classList.add("open");

  renderCart();
}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart(event) {

  const overlay =
    document.getElementById("overlay");

  if (!overlay) return;


  if (
    !event ||
    event.target === overlay
  ) {

    overlay.classList.remove("open");

  }
}


// ==========================================
// CHECKOUT
// ==========================================

function goCheckout() {

  if (cart.length === 0) {

    alert("Your cart is empty.");

    return;
  }


  const overlay =
    document.getElementById("overlay");

  if (overlay) {

    overlay.classList.remove("open");

  }

  showCheckout();
}


// ==========================================
// SHOW CHECKOUT
// ==========================================

function showCheckout() {

  const checkout =
    document.getElementById("checkout");

  const content =
    document.getElementById("checkoutContent");

  if (!checkout || !content) return;


  checkout.classList.add("open");


  content.innerHTML = `

    <p class="eyebrow">
      CHECKOUT
    </p>

    <h2>
      Delivery details
    </h2>


    <div class="field">

      <label>
        FULL NAME
      </label>

      <input
        id="customerName"
        type="text"
        placeholder="Your name"
      >

    </div>


    <div class="field">

      <label>
        MOBILE NUMBER
      </label>

      <input
        id="customerPhone"
        type="tel"
        inputmode="numeric"
        maxlength="10"
        placeholder="10-digit mobile number"
      >

    </div>


    <div class="field">

      <label>
        DELIVERY ADDRESS
      </label>

      <textarea
        id="customerAddress"
        rows="3"
        placeholder="House, street, city, PIN"
      ></textarea>

    </div>


    <div class="paybox">

      <b>
        Order total:
        ${money(getCartTotal())}
      </b>

      <p>
        Payment method:
        Online Payment
      </p>

    </div>


    <button
      class="primary full"
      onclick="continueToPayment()"
    >
      Continue to Payment
    </button>

  `;
}


// ==========================================
// VALIDATE DELIVERY DETAILS
// ==========================================

function continueToPayment() {

  const name =
    document
      .getElementById("customerName")
      .value
      .trim();


  const phone =
    document
      .getElementById("customerPhone")
      .value
      .trim();


  const address =
    document
      .getElementById("customerAddress")
      .value
      .trim();


  if (!name) {

    alert("Please enter your name.");

    return;
  }


  if (!/^[0-9]{10}$/.test(phone)) {

    alert(
      "Please enter a valid 10-digit mobile number."
    );

    return;
  }


  if (!address) {

    alert(
      "Please enter your delivery address."
    );

    return;
  }


  showPaymentScreen();

}


// ==========================================
// PAYMENT SCREEN
// ==========================================

function showPaymentScreen() {

  const content =
    document.getElementById("checkoutContent");

  if (!content) return;


  const total =
    getCartTotal();


  content.innerHTML = `

    <p class="eyebrow">
      PAYMENT
    </p>

    <h2>
      Complete your payment
    </h2>


    <div class="paybox">

      <b>
        Amount payable:
        ${money(total)}
      </b>

      <p>
        UPI / Card / Net Banking
      </p>

    </div>


    <button
      class="primary full"
      onclick="paymentSuccessful()"
    >
      Pay ${money(total)}
    </button>


    <p
      style="
        font-size:11px;
        color:#756b63;
        text-align:center;
      "
    >
      Payment gateway will be connected
      before accepting real payments.
    </p>

  `;
}


// ==========================================
// PAYMENT SUCCESSFUL
// ==========================================

function paymentSuccessful() {

  const content =
    document.getElementById("checkoutContent");

  if (!content) return;


  const total =
    getCartTotal();


  const orderNumber =
    "NK" +
    Date.now()
      .toString()
      .slice(-8);


  content.innerHTML = `

    <div class="success">

      <div class="tick">
        ✓
      </div>


      <p class="eyebrow">
        PAYMENT SUCCESSFUL
      </p>


      <h2>
        Thank you for your order!
      </h2>


      <p>
        Your Nekshar order
        <b>
          #${orderNumber}
        </b>
        has been placed successfully.
      </p>


      <p>
        Total paid:
        <b>
          ${money(total)}
        </b>
      </p>


      <button
        class="primary"
        onclick="finishOrder()"
      >
        Continue Shopping
      </button>

    </div>

  `;
}


// ==========================================
// FINISH ORDER
// ==========================================

function finishOrder() {

  cart = [];

  saveCart();

  closeCheckout();

}


// ==========================================
// CLOSE CHECKOUT
// ==========================================

function closeCheckout() {

  const checkout =
    document.getElementById("checkout");

  if (!checkout) return;

  checkout.classList.remove("open");

}


// ==========================================
// START WEBSITE
// ==========================================

renderProducts();

updateCartCount();

renderCart();
