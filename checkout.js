// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = 0;

// Display cart items
const cartItemsList = document.getElementById('cartItemsList');
cart.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'bg-white', 'rounded-lg', 'shadow-md');
  li.innerHTML = `
    <span>${item.name} - ${item.size} - ${item.color} - $${item.price} x ${item.quantity}</span>
    <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
  `;
  cartItemsList.appendChild(li);

  totalPrice += item.price * item.quantity;
});

// Update total price display
document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
