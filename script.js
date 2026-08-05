/* =========================================
   NEKSHAR AGARBATTI
   BHAKTI KI PAHCHAN
   CART SYSTEM
========================================= */

const CART_KEY = "neksharCart";


/* ================= GET CART ================= */

function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY));

    if (Array.isArray(cart)) {
      return cart;
    }

    return [];

  } catch (error) {
    return [];
  }
}


/* ================= SAVE CART ================= */

function saveCart(cart) {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  );
}


/* ================= CART COUNT ================= */

function updateCartCount() {

  const cart = getCart();

  let totalItems = 0;

  cart.forEach(function(item) {

    totalItems += Number(item.quantity) || 1;

  });


  const countElement =
    document.getElementById("cartCount");


  if (countElement) {

    countElement.textContent = totalItems;

  }

}


/* ================= ADD TO CART ================= */

function addToCart(name, price, image) {

  const cart = getCart();


  const existingProduct =
    cart.find(function(item) {

      return item.name === name;

    });


  if (existingProduct) {

    existingProduct.quantity =
      (Number(existingProduct.quantity) || 1) + 1;

  } else {

    cart.push({

      name: name,

      price: Number(price),

      image: image,

      quantity: 1

    });

  }


  saveCart(cart);

  updateCartCount();


  showCartMessage(
    name + " cart mein add ho gaya ✓"
  );

}


/* ================= CART MESSAGE ================= */

function showCartMessage(message) {

  const oldMessage =
    document.querySelector(".nekshar-cart-message");


  if (oldMessage) {
    oldMessage.remove();
  }


  const messageBox =
    document.createElement("div");


  messageBox.className =
    "nekshar-cart-message";


  messageBox.textContent =
    message;


  messageBox.style.position = "fixed";
  messageBox.style.left = "50%";
  messageBox.style.bottom = "25px";
  messageBox.style.transform =
    "translateX(-50%)";
  messageBox.style.zIndex = "9999";
  messageBox.style.background = "#5b2418";
  messageBox.style.color = "#ffffff";
  messageBox.style.padding =
    "12px 20px";
  messageBox.style.borderRadius =
    "30px";
  messageBox.style.fontSize = "14px";
  messageBox.style.fontWeight = "700";
  messageBox.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.18)";


  document.body.appendChild(
    messageBox
  );


  setTimeout(function() {

    messageBox.style.opacity = "0";
    messageBox.style.transition =
      "opacity 0.3s ease";


    setTimeout(function() {

      messageBox.remove();

    }, 300);

  }, 1800);

}


/* ================= CLEAR CART ================= */

function clearCart() {

  localStorage.removeItem(
    CART_KEY
  );

  updateCartCount();

}


/* ================= PAGE LOAD ================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    updateCartCount();

  }
);
