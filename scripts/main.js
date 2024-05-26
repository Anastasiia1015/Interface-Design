// Function to fetch product data
function fetchProductData() {
    return fetch('product_data.json')
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => {
            console.error('Error fetching product data:', error);
            return [];
        });
}

function createStarRating(rating) {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-rating');
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = i <= rating ? '★' : '☆';
        starContainer.appendChild(star);
    }
    return starContainer;
}

// Function to display products with infinite scroll
// Function to display products with infinite scroll
function displayProducts(products) {
    const productsContainer = document.querySelector('.products-container');
    const itemsPerPage = 10; // Number of products to display per page
    let currentPage = 1;

    // Function to create the "Add to Cart" button
    function createAddToCartButton() {
        // Create a container div
        const container = document.createElement('div');
        container.classList.add('add-to-cart-container');
    
        // Create the button element
        const button = document.createElement('button');
        button.classList.add('add-to-cart-button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', function() {
            // Add logic to handle adding the product to the cart
            // This can include sending an AJAX request, updating UI, etc.
            console.log('Product added to cart');
        });
    
        // Append the button to the container
        container.appendChild(button);
    
        return container;
    }

    // Function to display products for the current page
    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentProducts = products.slice(startIndex, endIndex);
    
        currentProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
    
            // Create anchor element
            const anchorElement = document.createElement('a');
            anchorElement.href = 'product_page.html'; // Set href attribute
            productElement.appendChild(anchorElement);
    
            // Create image element inside anchor
            const imgElement = document.createElement('img');
            imgElement.src = product.image; // Using 'image' property from product data
            anchorElement.appendChild(imgElement);
    
            // Create name element
            const nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.textContent = product.name; // Using 'name' property from product data
            productElement.appendChild(nameElement);
    
            // Create price element
            const priceElement = document.createElement('div');
            priceElement.classList.add('price');
            priceElement.textContent = '$' + product.price.toFixed(2); // Using 'price' property from product data
            productElement.appendChild(priceElement);
    
            // Create star rating element
            const starRatingElement = createStarRating(product.rating); // Assuming product has a 'rating' property
            productElement.appendChild(starRatingElement);
    
            // Create "Add to Cart" button
            const addToCartButton = createAddToCartButton();
            productElement.appendChild(addToCartButton);
    
            productsContainer.appendChild(productElement);
        });
    
        // Add event listeners for mouseover and mouseout events
        productsContainer.querySelectorAll('.product').forEach(product => {
            product.addEventListener('mouseover', function() {
                // Show the "Add to Cart" button inside the current product
                const addToCartButton = product.querySelector('.add-to-cart-button');
                addToCartButton.style.display = 'block';
            });
    
            product.addEventListener('mouseout', function() {
                // Hide the "Add to Cart" button inside the current product
                const addToCartButton = product.querySelector('.add-to-cart-button');
                addToCartButton.style.display = 'none';
            });
        });
    }

    // Initial display of products
    displayCurrentPage();

    // Event listener for scrolling
    productsContainer.addEventListener('scroll', function() {
        // If user has scrolled to the bottom, load more products
        if (isScrolledToBottom()) {
            currentPage++;
            displayCurrentPage();
        }
    });
}




// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Fetch product data and display products on the main page
    fetchProductData().then(products => {
        displayProducts(products);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the slider and value display elements
    const minPriceSlider = document.getElementById('min-price-slider');
    const maxPriceSlider = document.getElementById('max-price-slider');
    const minPriceDisplay = document.getElementById('min-price');
    const maxPriceDisplay = document.getElementById('max-price');

    // Update the displayed values when the slider values change
    minPriceSlider.addEventListener('input', function() {
        updatePriceDisplay();
    });

    maxPriceSlider.addEventListener('input', function() {
        updatePriceDisplay();
    });

    // Initialize the displayed values
    updatePriceDisplay();

    function updatePriceDisplay() {
        // Display the selected minimum and maximum values
        minPriceDisplay.textContent = `$${minPriceSlider.value}`;
        maxPriceDisplay.textContent = `$${maxPriceSlider.value}`;

        // Ensure that the minimum value is always less than or equal to the maximum value
        if (parseInt(minPriceSlider.value) > parseInt(maxPriceSlider.value)) {
            maxPriceSlider.value = minPriceSlider.value;
            maxPriceDisplay.textContent = minPriceDisplay.textContent;
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select all product elements
    const products = document.querySelectorAll('.product');

    // Loop through each product element
    products.forEach(product => {
        // Add event listener for mouseover event
        product.addEventListener('mouseover', function() {
            // Show the "Add to Cart" button inside the current product
            const addToCartButton = product.querySelector('.add-to-cart-button');
            addToCartButton.style.display = 'block';
        });

        // Add event listener for mouseout event
        product.addEventListener('mouseout', function() {
            // Hide the "Add to Cart" button inside the current product
            const addToCartButton = product.querySelector('.add-to-cart-button');
            addToCartButton.style.display = 'none';
        });
    });
});

function displayBasketProducts(products) {
    const basketContainer = document.querySelector('.basket-container');
    let totalAmount = 0;

    // Clear existing content in basket container
    basketContainer.innerHTML = '';

    // Loop through each product
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('basket-product');

        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        productElement.appendChild(imgElement);

        // Create product name element
        const nameElement = document.createElement('div');
        nameElement.classList.add('product-name');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        // Create quantity display and controls
        const quantityElement = document.createElement('div');
        quantityElement.classList.add('quantity');
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', function() {
            // Add logic to increase product quantity
            console.log('Increase quantity of', product.name);
        });
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.addEventListener('click', function() {
            // Add logic to decrease product quantity
            console.log('Decrease quantity of', product.name);
        });
        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = product.quantity;
        quantityElement.appendChild(minusButton);
        quantityElement.appendChild(quantityDisplay);
        quantityElement.appendChild(addButton);
        productElement.appendChild(quantityElement);

        // Create price element
        const priceElement = document.createElement('div');
        priceElement.classList.add('price');
        priceElement.textContent = '$' + (product.price * product.quantity).toFixed(2);
        productElement.appendChild(priceElement);

        // Add product to basket container
        basketContainer.appendChild(productElement);

        // Update total amount
        totalAmount += product.price * product.quantity;
    });

    // Display total amount
    const totalAmountElement = document.querySelector('.total-amount');
    totalAmountElement.textContent = 'Total: $' + totalAmount.toFixed(2);
}


// Fetch product data and display in basket
function fetchBasketData() {
    return fetch('basket_data.json')
        .then(response => response.json())
        .then(data => data.products)
        .catch(error => {
            console.error('Error fetching basket data:', error);
            return [];
        });
}

// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Fetch basket data and display products in the basket
    fetchBasketData().then(products => {
        displayBasketProducts(products);
    });
});