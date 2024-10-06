const shops = [
    { name: "Fashion Hub", category: "fashion", image: "img/shops/fashion_image1.jpg", description: "Trendy clothes for all ages" },
    { name: "Tech World", category: "electronics", image: "img/shops/tech_image1.jpg", description: "Latest gadgets and electronics" },
    { name: "Fresh Mart", category: "groceries", image: "img/shops/grocery_image1.jpg", description: "Fresh produce and groceries" },
    { name: "Style Studio", category: "fashion", image: "img/shops/fashion_image2.jpg", description: "Designer clothes and accessories" },
    { name: "Gadget Zone", category: "electronics", image: "img/shops/tech_image2.jpg", description: "Cutting-edge technology products" },
    { name: "Green Grocer", category: "groceries", image: "img/shops/grocery_image2.jpg", description: "Organic and local produce" },
    { name: "Wellness Center", category: "health", image: "img/shops/wellness_image1.jpg", description: "Health and wellness products" },
    { name: "Book Nook", category: "books", image: "img/shops/bookstore_image1.jpg", description: "Wide range of books and media" },
    { name: "Toy Box", category: "toys", image: "img/shops/toystore_image1.jpeg", description: "Fun toys and games for all ages" },
    { name: "Baby Bliss", category: "baby", image: "img/shops/babystore_image1.jpg", description: "Everything for babies and new mothers" },
    { name: "Auto Zone", category: "automotive", image: "img/shops/automative_image1.jpg", description: "Automotive parts and tools" },
    { name: "Pet Paradise", category: "pets", image: "img/shops/pet_image1.jpg", description: "Supplies and accessories for pets" }
];

function createShopCard(shop) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="shop-card">
                <img src="${shop.image}" alt="${shop.name}">
                <div class="shop-card-body">
                    <h5 class="shop-card-title">${shop.name}</h5>
                    <p class="shop-card-text">${shop.description}</p>
                    <a href="products.html?shop=${shop.name}" class="btn btn-primary">Products</a>
                </div>
            </div>
        </div>
    `;
}

function displayShops(category) {
    const shopContainer = document.getElementById('shopContainer');
    shopContainer.innerHTML = '';

    const filteredShops = category === 'all' ? shops : shops.filter(shop => shop.category === category);

    filteredShops.forEach(shop => {
        shopContainer.innerHTML += createShopCard(shop);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';
    displayShops(category);
});
