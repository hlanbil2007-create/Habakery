document.querySelector(".shop").addEventListener("click", () => {
    document.querySelector('.menu').scrollIntoView({ behavior: 'smooth' });
});

const btn = document.getElementById("offerBtn");
btn.onclick = function(){
    alert("20% discount applied to your first order!");
};

let cart = JSON.parse(localStorage.getItem('bakeryCart')) || [];

document.addEventListener('click', (e) => {
    const addButton = e.target.closest('.add-btn');
    if (addButton) {
        const name = addButton.dataset.name;
        const price = parseInt(addButton.dataset.price) || 0;
        const card = addButton.closest('.product-card');
        const image = card ? card.querySelector('img')?.src : '';

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1, image });
        }

        updateCart();
        alert(`${name} added to cart!`);
    }
});

function updateCart() {
    const cartCountEl = document.getElementById('cart-count');
    let count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) cartCountEl.textContent = count;
    localStorage.setItem('bakeryCart', JSON.stringify(cart));
}

updateCart();