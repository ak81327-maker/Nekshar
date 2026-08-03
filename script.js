// ===============================
// NEKSHAR AGARBATTI
// SCRIPT.JS
// ===============================

// Cart
let cart = [];

// Add Product
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    alert(
        name +
        " has been added to your cart.\n\n" +
        "Total Items: " +
        cart.length
    );
}

// Page Loaded
window.onload = function () {
    console.log("Nekshar Agarbatti Website Loaded Successfully");
};
