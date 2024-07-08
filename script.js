function clickme(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
}

// Prices based on size
const prices = {
    "small": 100,
    "medium": 120,
    "large": 140
};

document.getElementById('size').addEventListener('change', function() {
    const selectedSize = this.value;
    if (selectedSize in prices) {
        document.getElementById('price').textContent = 'USD $' + prices[selectedSize];
    }
});

// Cart functionality
let cart = [];

document.getElementById('addToCartButton').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').textContent;

    if (size !== 'select size' && quantity > 0) {
        const cartItem = {
            size: size,
            quantity: quantity,
            price: price
        };

        cart.push(cartItem);
        displayCart();
        toggleCart();
    } else {
        alert('Please select a size and quantity.');
    }
});

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>Item ${index + 1}: Size - ${item.size}, Quantity - ${item.quantity}, Price - ${item.price}</p>`;
    });
}

function toggleCart() {
    document.getElementById('cart').classList.toggle('active');
}
