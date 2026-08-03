// ===========================
// NEKSHAR AGARBATTI
// CART.JS
// ===========================

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

// Show cart
function showCart() {

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerHTML = "Total: ₹0";
        return;
    }

    let html = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {

        grandTotal += item.price;

        html += `
        <div class="product-card">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    cartItems.innerHTML = html;
    total.innerHTML = "Total: ₹" + grandTotal;
}

// Remove product
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}

// Load cart
showCart();
