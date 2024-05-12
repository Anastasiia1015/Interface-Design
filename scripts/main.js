// Fetch product data from JSON file
function fetchProductData() {
    return fetch('product_data.json')
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => {
            console.error('Error fetching product data:', error);
            return [];
        });
}

// Example function to display products on the main page
function displayProducts(products) {
    // Add your code here to display products
}

// Example function to display product details on the single product page
function displayProductDetails(product) {
    // Add your code here to display product details
}

// Add event listeners for button clicks or interactions
document.addEventListener('DOMContentLoaded', function() {
    // Fetch product data and display products on the main page
    fetchProductData().then(products => {
        displayProducts(products);

        // If on the single product page, fetch and display product details
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                displayProductDetails(product);
            } else {
                console.error('Product not found.');
            }
        }
    });
});
