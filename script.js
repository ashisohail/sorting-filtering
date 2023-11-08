// An array of product objects
const products = [
  { name: "Chicken Tikka", category: "curries", price: 20 },
  { name: "Mix veg", category: "curries", price: 20 },
  { name: "Lamb curry", category: "curries", price: 25 },
  { name: "Pasta", category: "fastFood", price: 10 },
  { name: "Pizza", category: "fastFood", price: 15 },
  { name: "Fizzy Drinks", category: "beverages", price: 15 },
  { name: "Coffee", category: "beverages", price: 7 },
  { name: "Green Tea", category: "beverages", price: 5 },
];

// Function to display products
function displayProducts(productsArray) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clears the existing content

  productsArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `<h3>${product.name}</h3>
                                <p>Category: ${product.category}</p>
                                <p>Price: $${product.price}</p>`;
    gallery.appendChild(productCard);
  });
}

// Initial display of all products
displayProducts(products);

// Function to filter products by category
document.getElementById("curriesButton").addEventListener("click", () => {
  const filteredProducts = products.filter(
    (product) => product.category === "curries"
  );
  displayProducts(filteredProducts);
});

document.getElementById("beveragesButton").addEventListener("click", () => {
  const filteredProducts = products.filter(
    (product) => product.category === "beverages"
  );
  displayProducts(filteredProducts);
});

document.getElementById("foodButton").addEventListener("click", () => {
  const filteredProducts = products.filter(
    (product) => product.category === "fastFood"
  );
  displayProducts(filteredProducts);
});

// Function to sort products by name or price
document.getElementById("sortByNameButton").addEventListener("click", () => {
  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  displayProducts(sortedProducts);
});

document.getElementById("sortByPriceButton").addEventListener("click", () => {
  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => a.price - b.price);
  displayProducts(sortedProducts);
});
