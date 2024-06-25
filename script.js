document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://course-api.com/react-store-products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            app.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        }
    };
    
    const displayProducts = (products) => {
        const productHtml = products.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span>${product.price}</span>
            </div>
        `).join('');
        app.innerHTML = productHtml;
    };
    
    fetchProducts();
});

