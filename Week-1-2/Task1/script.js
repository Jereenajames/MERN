// Cart data
const cart = [];
    
// Function to add items to the cart
function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear existing cart items
    cartItemsElement.innerHTML = '';

    // Populate cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Calculate and display total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
}