let cart = [];

function addToCart(bookTitle) {
    cart.push(bookTitle);
    alert(`${bookTitle} has been added to your cart.`);
    console.log('Cart:', cart);  // To check the cart in the console
}
