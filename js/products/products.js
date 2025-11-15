// ========== PRODUCT DEFINITIONS ==========
const products = [
    {
        id: "tri_citygen",
        name: "Tri-CityGen",
        image: "assets/images/tri_citygen.jpg",
        gif: "assets/gifs/tri_citygen.gif",
        description: "A procedural city generator for Blender/UPBGE.",
        link: "https://mega.nz/example1"
    },
    {
        id: "tri_blueprint",
        name: "Tri-Blueprint",
        image: "assets/images/tri_blueprint.jpg",
        gif: "assets/gifs/tri_blueprint.gif",
        description: "A dynamic blueprint detection and placement addon.",
        link: "https://mega.nz/example2"
    }
    // Add more products here
];

// ========== RENDER PRODUCT CARDS ==========
function renderProductList() {
    const container = document.getElementById("productList");
    
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h2>${p.name}</h2>
            <button onclick="showProduct('${p.id}')">View Details</button>
        `;
        container.appendChild(card);
    });
}

// ========== SHOW PRODUCT DETAILS ==========
function showProduct(id) {
    const product = products.find(p => p.id === id);
    const display = document.getElementById("productDisplay");
    const list = document.getElementById("productList");

    list.style.display = "none";
    display.style.display = "block";

    display.innerHTML = `
        <h1>${product.name}</h1>

        <img class="product-image" src="${product.image}" alt="${product.name}">
        <img class="product-gif" src="${product.gif}" alt="${product.name} animation">

        <p>${product.description}</p>

        <a href="${product.link}" class="btn" target="_blank">Download / More Info</a>

        <br><br>
        <button onclick="goBack()">Back to Products</button>
    `;
}

// ========== BACK BUTTON ==========
function goBack() {
    document.getElementById("productList").style.display = "grid";
    document.getElementById("productDisplay").style.display = "none";
}

// Initialize on load
document.addEventListener("DOMContentLoaded", renderProductList);
