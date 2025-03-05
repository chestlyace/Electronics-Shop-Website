// Products database
const products = [
    { id: 1, name: 'iPhone 13 Pro', price: 879.99, originalPrice: 1099.99, category: 'Phones', brand: 'Apple', rating: 4.5, inStock: true, reviews: 128, image: 'images/iphone13pm.webp' },
    { id: 2, name: 'MacBook Pro M2', price: 1499.99, category: 'Laptops', brand: 'Apple', rating: 5, inStock: true, reviews: 256, image: 'images/macbook pro m2.webp' },
    { id: 3, name: 'Samsung Galaxy S22', price: 764.99, originalPrice: 899.99, category: 'Phones', brand: 'Samsung', rating: 4, inStock: true, reviews: 89, image: 'images/s22.jpg' },
    { id: 4, name: 'AirPods Pro', price: 249.99, category: 'Accessories', brand: 'Apple', rating: 4.5, inStock: true, reviews: 156, image: 'images/airpods pro.jpg' },
    { id: 5, name: 'Dell XPS 13', price: 974.99, originalPrice: 1299.99, category: 'Laptops', brand: 'Dell', rating: 4, inStock: true, reviews: 92, image: 'images/xps 13.jpg' },
    { id: 6, name: 'Sony WH-1000XM4', price: 349.99, category: 'Accessories', brand: 'Sony', rating: 5, inStock: true, reviews: 203, image: 'images/sony.webp' },
    { id: 7, name: 'iPad Pro 12.9', price: 989.99, originalPrice: 1099.99, category: 'Accessories', brand: 'Apple', rating: 4.5, inStock: true, reviews: 167, image: 'images/ipad.webp' },
    { id: 8, name: 'Samsung Galaxy Watch 5', price: 299.99, originalPrice: 50000, category: 'Accessories', brand: 'Samsung', rating: 4, inStock: true, reviews: 78, image: 'images/watch 5.jpg' },
    { id: 9, name: 'iPad Pro 12.9', price: 989.99, originalPrice: 10000000, category: 'Accessories', brand: 'Apple', rating: 4.5, inStock: true, reviews: 167, image: 'images/ipad.webp' }
];

// Function to add a product to the favourites
function addToFavourites(productId) {
    const product = products.find(p => p.id === productId);
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const existingProduct = favourites.find(p => p.id === productId);

    if (!existingProduct) {
        favourites.push(product);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
}

// Function to update the favourites counter
function updateFavouritesCounter() {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const favouritesCounter = document.getElementById('favouritesCounter');
    favouritesCounter.textContent = favourites.length;
}

// Call updateFavouritesCounter on page load
updateFavouritesCounter();