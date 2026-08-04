// ==========================================
// NEKSHAR AGARBATTI - ORDER SYSTEM
// ==========================================

// ⚠️ YAHAN APNA WHATSAPP NUMBER DALEIN
// Country code 91 ke saath
// Example: 919876543210

const WHATSAPP_NUMBER = "91XXXXXXXXXX";


// ------------------------------------------
// CART DATA
// ------------------------------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const totalAmount = document.getElementById("totalAmount");


// ------------------------------------------
// SHOW CART
// ------------------------------------------

function showCart() {

  if (cart.length === 0) {
    orderItems.innerHTML = "Your cart is empty.";
    totalAmount.textContent = "0";
    return;
  }

  let total = 0;

  orderItems.innerHTML = "";

  cart.forEach(item => {

    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    const itemTotal = price * quantity;

    total += itemTotal;

    const div = document.createElement("div");

    div.className = "item";

    div.innerHTML = `
      ${item.name || "Product"}
      × ${quantity}
      — ₹${itemTotal}
    `;

    orderItems.appendChild(div);

  });

  totalAmount.textContent = total;
}


// ------------------------------------------
// PLACE ORDER
// ------------------------------------------

document
  .getElementById("orderForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const address =
      document.getElementById("address").value.trim();

    const payment =
      document.getElementById("payment").value;


    // Mobile validation

    if (!/^[0-9]{10}$/.test(phone)) {

      alert("Please enter a valid 10 digit mobile number.");

      return;
    }


    // --------------------------------------
    // CREATE WHATSAPP MESSAGE
    // --------------------------------------

    let message = "";

    message += "🛍️ *NEKSHAR AGARBATTI - NEW ORDER*";
    message += "\n\n";

    message += "👤 *Customer:* " + name;
    message += "\n";

    message += "📱 *Mobile:* " + phone;
    message += "\n\n";

    message += "📦 *ORDER DETAILS*";
    message += "\n";


    let total = 0;

    cart.forEach(item => {

      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;

      const itemTotal = price * quantity;

      total += itemTotal;

      message +=
        "\n• " +
        (item.name || "Product") +
        " × " +
        quantity +
        " = ₹" +
        itemTotal;
    });


    message += "\n\n";

    message += "💰 *TOTAL: ₹" + total + "*";
    message += "\n";

    message += "💳 *Payment:* " + payment;
    message += "\n\n";

    message += "🏠 *DELIVERY ADDRESS*";
    message += "\n";

    message += address;

    message += "\n\n";
    message += "Thank you for ordering from Nekshar Agarbatti 🙏";


    // --------------------------------------
    // OPEN WHATSAPP
    // --------------------------------------

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

  });


// Show cart when page opens

showCart();
