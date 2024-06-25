document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    let products = [];

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://course-api.com/react-store-products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            products = await response.json();
            displayProduct(currentIndex);
        } catch (error) {
            app.innerHTML = `<p>Failed to load products: ${error.message}. Please try again later.</p>`;
        }
    };

    const displayProduct = (index) => {
        const product = products[index];
        app.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span>${product.price}</span>
            </div>
        `;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        displayProduct(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        displayProduct(currentIndex);
    });

    app.innerHTML = '<p>Loading...</p>';
    fetchProducts();
});

