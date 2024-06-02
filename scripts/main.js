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
        const container = document.createElement('div');
        container.classList.add('cart');
        const button = document.createElement('p');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', function() {
            console.log('Product added to cart');
        });
        container.appendChild(button);
        return container;
    }

    // Function to display products for the current page
    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentProducts = products.slice(startIndex, endIndex);

        currentProducts.forEach(product => {
            const perfumeElement = document.createElement('div');
            perfumeElement.classList.add('perfume');

            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            const h3Element = document.createElement('h3');
            h3Element.textContent =  product.name;
        
            titleElement.appendChild(h3Element);
           
            perfumeElement.appendChild(titleElement);

            const contentElement = document.createElement('div');
            contentElement.classList.add('content');

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'xxx2';
            radioInput.classList.add('btn-hide2');
            radioInput.id = `p${startIndex + currentProducts.indexOf(product) + 1}`;
            radioInput.checked = true;
            contentElement.appendChild(radioInput);


            const boxElement = document.createElement('div');
            boxElement.classList.add('BOX3');
            const imgElement = document.createElement('img');
            imgElement.src = product.image;
            const descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = `Description: ${product.description} <br>
            <strong>Price:</strong> $${product.price.toFixed(2)}`;
            boxElement.appendChild(imgElement);
            boxElement.appendChild(descriptionElement);
            contentElement.appendChild(boxElement);

            const namesElement = document.createElement('li');
            namesElement.classList.add('names2');
            const greenElement = document.createElement('div');
            greenElement.classList.add('green');
            const pNameElement = document.createElement('p');
            pNameElement.textContent = product.name;
            greenElement.appendChild(pNameElement);
            namesElement.appendChild(greenElement);
            contentElement.appendChild(namesElement);

            perfumeElement.appendChild(contentElement);

            const addToCartButton = createAddToCartButton();
            perfumeElement.appendChild(addToCartButton);

            productsContainer.appendChild(perfumeElement);
        });

        productsContainer.querySelectorAll('.perfume').forEach(product => {
            product.addEventListener('mouseover', function() {
                const addToCartButton = product.querySelector('.cart p');
                addToCartButton.style.display = 'block';
            });

            
        });
    }

    // Initial display of products
    displayCurrentPage();

    // Event listener for scrolling
    productsContainer.addEventListener('scroll', function() {
        if (isScrolledToBottom()) {
            currentPage++;
            displayCurrentPage();
        }
    });
}


function isScrolledToBottom() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return scrollTop + clientHeight >= scrollHeight - 5;
}

// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
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

document.getElementById('login-button').addEventListener('click', function() {
    var loginBox = document.getElementById('login-box');
    if (loginBox.style.display === 'none' || loginBox.style.display === '') {
        loginBox.style.display = 'block';
    } else {
        loginBox.style.display = 'none';
    }
});

document.getElementById('submit-login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var loginBox = document.getElementById('login-box');
    loginBox.style.display = 'none';
});
document.getElementById('account-button').addEventListener('click', function() {
    var accountBox = document.getElementById('account-box');
    if (accountBox.style.display === 'none' || accountBox.style.display === '') {
        accountBox.style.display = 'block';
    } else {
        accountBox.style.display = 'none';
    }
});

document.getElementById('submit-account').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var accountBox = document.getElementById('account-box');
    accountBox.style.display = 'none';
});
