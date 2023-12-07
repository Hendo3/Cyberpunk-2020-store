function addToCart(itemName, itemPrice) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //updateCartCount(cartItems.length);
    }


function updateCart() {
    const cartList = document.getElementById('cart-itens');
    const totalElement = document.getElementById('total');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartList.innerHTML = '';

    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function clearCart() {
    localStorage.removeItem('cartItems');
    updateCart(); 
}

window.onload = function() {
    updateCart();

    const clearCartButton = document.getElementById('clear-cart-button');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
};

window.onload = updateCart;
