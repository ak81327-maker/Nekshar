document.getElementById("checkoutForm").addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const mobile=document.getElementById("mobile").value;
const address=document.getElementById("address").value;

const payment=document.querySelector("input[name='payment']:checked").value;

let utr="";

if(payment==="UPI"){
    utr=document.getElementById("utr").value.trim();

    if(utr===""){
        alert("Please enter UTR / Transaction ID");
        return;
    }
}

const message=
`🛍️ *New Order - Nekshar Agarbatti*

👤 Name: ${name}
📱 Mobile: ${mobile}
🏠 Address: ${address}

💳 Payment: ${payment}

${payment==="UPI" ? "🧾 UTR: "+utr : ""}`;

window.open(
`https://wa.me/91YOURNUMBER?text=${encodeURIComponent(message)}`,
"_blank"
);

localStorage.removeItem("cart");

window.location.href="success.html";

});
