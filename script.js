document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const closeSidebar = document.getElementById("closeSidebar");
  const seeMoreButtons = document.querySelectorAll(".see-more");
  const productsSection = document.getElementById("productsSection");
  const productsGrid = document.getElementById("productsGrid");
  const productsTitle = document.getElementById("productsTitle");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCount = document.querySelector(".cart-count");
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");

  // Cart items count
  let cartItems = 0;

  // Sample product data
  const products = {
    clothes: [
      {
        id: 1,
        name: "Men's Casual T-Shirt",
        price: 19.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 2,
        name: "Women's Summer Dress",
        price: 29.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 3,
        name: "Unisex Hoodie",
        price: 39.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 4,
        name: "Denim Jeans",
        price: 49.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    health: [
      {
        id: 5,
        name: "Electric Toothbrush",
        price: 59.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 6,
        name: "Vitamin C Supplements",
        price: 12.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 7,
        name: "Face Moisturizer",
        price: 24.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 8,
        name: "Hair Dryer",
        price: 39.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    furniture: [
      {
        id: 9,
        name: "Modern Coffee Table",
        price: 199.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 10,
        name: "Comfy Armchair",
        price: 249.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 11,
        name: "Bookshelf",
        price: 129.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 12,
        name: "Dining Table Set",
        price: 599.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    devices: [
      {
        id: 13,
        name: "Smartphone",
        price: 699.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 14,
        name: "Wireless Headphones",
        price: 149.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 15,
        name: "Smart Watch",
        price: 199.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 16,
        name: "Tablet",
        price: 349.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    makeup: [
      {
        id: 17,
        name: "Lipstick Set",
        price: 29.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 18,
        name: "Eyeshadow Palette",
        price: 49.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 19,
        name: "Foundation",
        price: 34.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 20,
        name: "Makeup Brushes",
        price: 24.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    pets: [
      {
        id: 21,
        name: "Dog Bed",
        price: 49.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 22,
        name: "Cat Tree",
        price: 79.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 23,
        name: "Pet Carrier",
        price: 39.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 24,
        name: "Automatic Feeder",
        price: 59.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    toys: [
      {
        id: 25,
        name: "Building Blocks Set",
        price: 39.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 26,
        name: "Remote Control Car",
        price: 49.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 27,
        name: "Doll House",
        price: 79.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 28,
        name: "Puzzle Game",
        price: 19.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
    fashion: [
      {
        id: 29,
        name: "Designer Handbag",
        price: 199.99,
        image: "images/product1.jpg",
        rating: 4,
      },
      {
        id: 30,
        name: "Leather Wallet",
        price: 59.99,
        image: "images/product2.jpg",
        rating: 5,
      },
      {
        id: 31,
        name: "Silk Scarf",
        price: 39.99,
        image: "images/product3.jpg",
        rating: 4,
      },
      {
        id: 32,
        name: "Aviator Sunglasses",
        price: 89.99,
        image: "images/product4.jpg",
        rating: 3,
      },
    ],
  };

  // Category names mapping
  const categoryNames = {
    clothes: "Clothing",
    health: "Health & Personal Care",
    furniture: "Furniture",
    devices: "Devices",
    makeup: "Makeup",
    pets: "Pets Accessories",
    toys: "Toys",
    fashion: "Fashion Trends",
  };

  // Sidebar toggle
  hamburger.addEventListener("click", function () {
    sidebar.classList.add("show");
    sidebarOverlay.classList.add("show");
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("show");
    sidebarOverlay.classList.remove("show");
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("show");
    sidebarOverlay.classList.remove("show");
  });

  // See more buttons functionality
  seeMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      displayProducts(category);

      // Scroll to products section
      productsSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Display products function
  function displayProducts(category) {
    // Clear previous products
    productsGrid.innerHTML = "";

    // Set title
    productsTitle.textContent = categoryNames[category] || "Featured Products";

    // Get products for the selected category
    const categoryProducts = products[category] || [];

    // Display products
    categoryProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      // Create rating stars
      let stars = "";
      for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
          stars += "★";
        } else {
          stars += "☆";
        }
      }

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">$${product.price.toFixed(
                      2
                    )}</div>
                    <div class="product-rating">${stars}</div>
                    <button class="add-to-cart" data-id="${
                      product.id
                    }">Add to Cart</button>
                </div>
            `;

      productsGrid.appendChild(productCard);
    });

    // Add event listeners to new Add to Cart buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", function () {
        addToCart(this);
      });
    });
  }

  // Add to cart function
  function addToCart(button) {
    cartItems++;
    cartCount.textContent = cartItems;

    // Visual feedback
    button.textContent = "Added to Cart";
    button.style.backgroundColor = "#4CAF50";

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.backgroundColor = "#ffd814";
    }, 1000);
  }

  // Search functionality
  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log("Searching for:", searchTerm);
      // In a real app, you would perform a search here
      alert(`You searched for: ${searchTerm}`);
    }
  });

  // Allow search on Enter key
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });

  // Initialize with some products
  displayProducts("clothes");
});
