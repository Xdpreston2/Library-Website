/*let cart = [];

function addToCart(bookTitle) {
    cart.push(bookTitle);
    alert(`${bookTitle} has been added to your cart.`);
    console.log('Cart:', cart);  // To check the cart in the console
}
*/
// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a book to the cart
function addToCart(bookTitle) {
    // Add the book to the cart array
    cart.push(bookTitle);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    alert(`${bookTitle} has been added to your cart.`);
    console.log('Cart:', cart); // To check the cart in the console
}

function removeFromCart(bookTitle) {
    // Remove the item from the cart array
    cart = cart.filter((item) => item !== bookTitle);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback and update the displayed cart
    alert(`${bookTitle} has been removed from your cart.`);
    displayCart();
}
// Function to display the cart items on the cart.html page
function displayCart() {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the container for displaying cart items
    const cartContainer = document.getElementById('cart-items');

    // Clear the container
    cartContainer.innerHTML = '';

    // Check if the cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = '<li>Your cart is empty.</li>';
        return;
    }

    // Populate the cart items
    cart.forEach((bookTitle) => {
        const listItem = document.createElement('li');
        listItem.textContent = bookTitle;
        // Add a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = () => removeFromCart(bookTitle);

        // Append the button to the list item
        listItem.appendChild(removeButton);
        cartContainer.appendChild(listItem);
    });
}
