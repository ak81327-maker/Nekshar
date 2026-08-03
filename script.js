document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('धन्यवाद! आपका ऑर्डर/संदेश प्राप्त हो गया है। नेक्शर टीम आपसे जल्द ही संपर्क करेगी।');
    this.reset();
});

