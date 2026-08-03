// ===========================
// NEKSHAR AGARBATTI
// SCRIPT.JS
// ===========================

// Cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

    // Open cart page
    window.location.href = "cart.html";
}

// Clear cart (optional)
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
}

// Website loaded
window.onload = function () {
    console.log("Nekshar Agarbatti Website Loaded");
};
