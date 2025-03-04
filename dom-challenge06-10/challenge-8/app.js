let totalAmount = [];

function addToCart(name, price) {
    const existingItem = totalAmount.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        totalAmount.push({
            name: name,
            price: price,
            quantity: 1,
        });
    }
    updateCartDisplay();
}

function removeFromCart(name) {
    totalAmount = totalAmount.filter(item => item.name !== name);
    updateCartDisplay();
}

function updateQuantity(name, change) {
    const item = totalAmount.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    if (totalAmount.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Cart is empty</div>';
    } else {
        totalAmount.forEach(item => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <div class="quantity-controls">
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    <button onclick="updateQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.name}', 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });
    }
    
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

updateCartDisplay();