// ===========================
// NEKSHAR AGARBATTI
// CHECKOUT.JS
// ===========================

document.getElementById("checkoutForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;

    localStorage.setItem("customerName", name);
    localStorage.setItem("customerMobile", mobile);
    localStorage.setItem("customerAddress", address);

    alert("Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href = "success.html";

});
