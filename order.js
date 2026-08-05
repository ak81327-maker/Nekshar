<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Nekshar Agarbatti | Place Your Order</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
    font-family:Arial, sans-serif;
    background:#faf7f2;
    color:#292522;
}

/* HEADER */
header{
    background:linear-gradient(135deg,#8b0000,#b51212);
    color:white;
    padding:18px 20px 20px;
    box-shadow:0 3px 15px rgba(0,0,0,.18);
}

.header-inner{
    max-width:1100px;
    margin:auto;
}

.logo{
    text-align:center;
    font-family:Georgia,serif;
    font-size:30px;
    font-weight:bold;
    letter-spacing:2px;
    line-height:1.15;
}

.tagline{
    text-align:center;
    margin-top:6px;
    font-size:13px;
    letter-spacing:3px;
    opacity:.95;
    text-transform:uppercase;
}

/* NAVIGATION */
nav{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:26px;
    margin-top:20px;
    flex-wrap:wrap;
}

nav a{
    color:white;
    text-decoration:none;
    font-size:16px;
    font-weight:600;
}

nav a:hover{
    opacity:.75;
}

.cart-link{
    background:white;
    color:#8b0000 !important;
    padding:8px 14px;
    border-radius:25px;
}

/* MAIN */
main{
    max-width:900px;
    margin:auto;
    padding:48px 16px 70px;
}

.page-heading{
    text-align:center;
    margin-bottom:35px;
}

.small-title{
    color:#8b0000;
    font-size:13px;
    letter-spacing:4px;
    font-weight:bold;
    margin-bottom:12px;
}

.page-heading h1{
    font-family:Georgia,serif;
    font-size:44px;
    line-height:1.15;
    color:#292522;
}

.heading-line{
    width:70px;
    height:3px;
    background:#8b0000;
    margin:18px auto 0;
    border-radius:5px;
}

/* ORDER BOX */
.order-card{
    background:white;
    border-radius:22px;
    padding:34px;
    box-shadow:0 8px 30px rgba(70,40,20,.10);
    border:1px solid #eadfd4;
}

.order-card h2{
    font-family:Georgia,serif;
    font-size:32px;
    color:#302b27;
    margin-bottom:25px;
}

/* FORM */
.form-group{
    margin-bottom:20px;
}

label{
    display:block;
    font-size:15px;
    font-weight:bold;
    margin-bottom:8px;
    color:#39332f;
}

.required{
    color:#a00000;
}

input,
textarea,
select{
    width:100%;
    border:1px solid #d8cec5;
    background:#fffdfb;
    border-radius:12px;
    padding:15px 16px;
    font-size:16px;
    color:#292522;
    outline:none;
    transition:.2s;
}

input:focus,
textarea:focus,
select:focus{
    border-color:#9b1717;
    box-shadow:0 0 0 3px rgba(155,23,23,.08);
}

textarea{
    min-height:110px;
    resize:vertical;
}

/* ORDER SUMMARY */
.summary{
    background:#fff8f3;
    border:1px solid #ead8cc;
    border-radius:15px;
    padding:20px;
    margin:25px 0;
}

.summary h3{
    font-family:Georgia,serif;
    font-size:22px;
    margin-bottom:12px;
    color:#7e1717;
}

#orderSummary{
    font-size:15px;
    line-height:1.7;
}

/* BUTTON */
button,
.submit-btn{
    width:100%;
    border:none;
    background:linear-gradient(135deg,#8b0000,#bd1717);
    color:white;
    padding:16px 20px;
    border-radius:30px;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;
    box-shadow:0 6px 15px rgba(139,0,0,.20);
    transition:.2s;
}

button:hover,
.submit-btn:hover{
    transform:translateY(-1px);
    box-shadow:0 8px 20px rgba(139,0,0,.28);
}

/* FOOTER */
footer{
    background:#2b211d;
    color:white;
    text-align:center;
    padding:25px 15px;
}

footer strong{
    color:#fff;
    font-family:Georgia,serif;
    letter-spacing:1px;
}

footer p{
    margin-top:7px;
    font-size:13px;
    opacity:.8;
}

/* MOBILE */
@media(max-width:600px){

    header{
        padding:17px 14px 19px;
    }

    .logo{
        font-size:25px;
        letter-spacing:1.5px;
    }

    .tagline{
        font-size:11px;
        letter-spacing:2px;
    }

    nav{
        gap:10px;
        margin-top:17px;
    }

    nav a{
        font-size:14px;
        padding:7px 8px;
    }

    .cart-link{
        padding:7px 12px;
    }

    main{
        padding:38px 12px 55px;
    }

    .page-heading{
        margin-bottom:28px;
    }

    .page-heading h1{
        font-size:35px;
    }

    .small-title{
        font-size:11px;
        letter-spacing:3px;
    }

    .order-card{
        padding:22px 17px;
        border-radius:18px;
    }

    .order-card h2{
        font-size:28px;
    }

    input,
    textarea,
    select{
        font-size:16px;
        padding:14px;
    }
}
</style>
</head>

<body>

<header>
    <div class="header-inner">

        <div class="logo">
            NEKSHAR
        </div>

        <div class="tagline">
            Bhakti Ki Pahchan
        </div>

        <nav>
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="cart.html" class="cart-link">
                🛒 Cart <span id="cartCount">0</span>
            </a>
        </nav>

    </div>
</header>


<main>

    <section class="page-heading">

        <div class="small-title">
            NEKSHAR
        </div>

        <h1>
            Place Your Order
        </h1>

        <div class="heading-line"></div>

    </section>


    <section class="order-card">

        <h2>
            Delivery Details
        </h2>


        <form id="orderForm">

            <div class="form-group">
                <label>
                    Full Name <span class="required">*</span>
                </label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required>
            </div>


            <div class="form-group">
                <label>
                    Mobile Number <span class="required">*</span>
                </label>

                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="10 digit mobile number"
                    maxlength="10"
                    pattern="[0-9]{10}"
                    required>
            </div>


            <div class="form-group">
                <label>
                    Complete Address <span class="required">*</span>
                </label>

                <textarea
                    id="address"
                    name="address"
                    placeholder="House No., Street, Area, Locality..."
                    required></textarea>
            </div>


            <div class="form-group">
                <label>
                    City <span class="required">*</span>
                </label>

                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    required>
            </div>


            <div class="form-group">
                <label>
                    State <span class="required">*</span>
                </label>

                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter your state"
                    required>
            </div>


            <div class="form-group">
                <label>
                    PIN Code <span class="required">*</span>
                </label>

                <input
                    type="tel"
                    id="pincode"
                    name="pincode"
                    placeholder="6 digit PIN code"
                    maxlength="6"
                    pattern="[0-9]{6}"
                    required>
            </div>


            <div class="summary">

                <h3>
                    Order Summary
                </h3>

                <div id="orderSummary">
                    Your selected products will appear here.
                </div>

            </div>


            <button type="submit" class="submit-btn">
                Place Order
            </button>

        </form>

    </section>

</main>


<footer>

    <strong>NEKSHAR AGARBATTI</strong>

    <p>
        Bhakti Ki Pahchan
    </p>

    <p>
        © 2026 Nekshar. All Rights Reserved.
    </p>

</footer>


<!-- Aapki existing order.js file -->
<script src="order.js"></script>


<script>
/* CART COUNT */
function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {
        total += Number(item.quantity || 1);
    });

    const count = document.getElementById("cartCount");

    if(count){
        count.textContent = total;
    }
}

updateCartCount();


/* ORDER SUMMARY */
function showOrderSummary(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const summary = document.getElementById("orderSummary");

    if(!summary) return;

    if(cart.length === 0){

        summary.innerHTML =
        "Your cart is currently empty.";

        return;
    }

    let html = "";

    cart.forEach(item => {

        html += `
            <div style="margin-bottom:8px;">
                <strong>${item.name || "Product"}</strong>
                × ${item.quantity || 1}
            </div>
        `;

    });

    summary.innerHTML = html;
}

showOrderSummary();


/* MOBILE NUMBER ONLY */
document.getElementById("mobile").addEventListener("input",function(){

    this.value = this.value.replace(/[^0-9]/g,"");

});


/* PINCODE ONLY */
document.getElementById("pincode").addEventListener("input",function(){

    this.value = this.value.replace(/[^0-9]/g,"");

});
</script>

</body>
</html>
