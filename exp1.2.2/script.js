const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Smartphone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 }
];

const grid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sort");

function displayProducts(productList) {
    grid.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
        `;

        grid.appendChild(card);
    });
}

// Initial display
displayProducts(products);

sortSelect.addEventListener("change", () => {
    let sortedProducts = [...products];

    switch (sortSelect.value) {
        case "priceLow":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;

        case "priceHigh":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;

        case "name":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;

        default:
            sortedProducts = [...products];
    }

    displayProducts(sortedProducts);
});
