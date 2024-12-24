let cart = []; // Array to hold cart items
let cartCount = 0; // Cart item count

// Event listener for "Add to Cart" button
document.getElementById('addToCartBtn').addEventListener('click', function () {
  // Get selected product details
  const product = {
    name: 'Amazing Product',
    size: document.getElementById('size').value,
    color: document.getElementById('color').value,
    price: 99.99,
    quantity: 1
  };

  // Add product to cart
  cart.push(product);
  cartCount++;

  // Update cart count display
  document.getElementById('cartCount').textContent = cartCount;

  // Show cart notification
  const cartNotification = document.getElementById('cartNotification');
  cartNotification.classList.remove('hidden');
  
  setTimeout(function () {
    cartNotification.classList.add('hidden');
  }, 2000); // Hide notification after 2 seconds
});
