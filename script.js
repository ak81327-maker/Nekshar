// Nekshar Agarbatti Website

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Welcome message
    console.log("Welcome to Nekshar Agarbatti");

});

// Thank you message after WhatsApp click
const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {
    whatsapp.addEventListener("click", function () {
        alert("Thank you for choosing Nekshar Agarbatti!");
    });
}
