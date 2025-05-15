const cartItems = [];
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', e => {
        const card = e.target.closest('.product-card');
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        const image = card.dataset.image;

        // Avoid duplicate items
        if (!cartItems.some(item => item.name === name)) {
            cartItems.push({ name, price, image });
        }

        // Update button
        e.target.textContent = "Added To Cart";
        e.target.disabled = true;
        e.target.style.backgroundColor = '#6c757d'; // greyed out

        renderCart();
    });
});

document.querySelector('.checkout-toggle').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.add('open');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
});

document.getElementById('checkout-final').addEventListener('click', () => {
    // Redirect to checkout page
    window.location.href = 'HTMLPage5.html';
});

function renderCart() {
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const text = document.createElement('span');
        text.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        li.appendChild(img);
        li.appendChild(text);
        cartList.appendChild(li);

        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}
// JavaScript source code
