// ==========================================
// NEKSHAR AGARBATTI - ORDER SYSTEM
// ==========================================

const WHATSAPP_NUMBER = "918287548936";

document.addEventListener("DOMContentLoaded", function () {

  // CART DATA
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const orderItems = document.getElementById("orderItems");
  const totalAmount = document.getElementById("totalAmount");
  const orderForm = document.getElementById("orderForm");

  // ------------------------------------------
  // SHOW CART
  // ------------------------------------------

  function showCart() {

    if (!orderItems || !totalAmount) return;

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

      div.textContent =
        `${item.name || "Product"} × ${quantity} — ₹${itemTotal}`;

      orderItems.appendChild(div);
    });

    totalAmount.textContent = total;
  }

  // ------------------------------------------
  // PLACE ORDER
  // ------------------------------------------

  if (!orderForm) {
    console.error("orderForm nahi mila.");
    return;
  }

  orderForm.addEventListener("submit", function (event) {

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

    const paymentElement =
      document.getElementById("payment");

    const payment =
      paymentElement ? paymentElement.value : "COD";

    // CHECK DETAILS
    if (!name || !phone || !address) {
      alert("Please fill all required details.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    // --------------------------------------
    // CREATE WHATSAPP MESSAGE
    // --------------------------------------

    let message =
      "🛍️ *NEKSHAR AGARBATTI - NEW ORDER*\n\n";

    message +=
      "👤 *Customer:* " + name + "\n";

    message +=
      "📱 *Mobile:* " + phone + "\n\n";

    message +=
      "📦 *ORDER DETAILS*\n";

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

    message +=
      "\n\n💰 *TOTAL: ₹" + total + "*\n";

    message +=
      "💳 *Payment:* " + payment + "\n\n";

    message +=
      "🏠 *DELIVERY ADDRESS*\n" +
      address +
      "\n\n";

    message +=
      "Thank you for ordering from Nekshar Agarbatti 🙏";

    // --------------------------------------
    // WHATSAPP
    // --------------------------------------

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    console.log("WhatsApp URL:", whatsappURL);

    // WhatsApp open
    window.open(whatsappURL, "_blank");

  });

  // SHOW CART
  showCart();

});
