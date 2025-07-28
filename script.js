// Restaurant data and configuration
const restaurantData = {
  restaurant: {
    name: "Spice Symphony Restaurant",
    tagline: "Authentic Indian Cuisine & More",
    description: "Experience the finest Indian dining with fresh ingredients and traditional recipes passed down through generations.",
    phone: "+91 80 4000 1234",
    email: "order@spicesymphony.in",
    address: "123 M.G. Road, Bengaluru, Karnataka 560001, India",
    hours: "11 AM – 11 PM (Mon-Sun)"
  },
  menuItems: [

    {
      id: 1,
      name: "Garlic Bread",
      description: "Toasted artisan bread with herb butter and fresh garlic",
      price: 280,
      category: "appetizers",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753627989/pplx_project_search_images/ae1f20bcc8dd8827127afb5f1556fdac0e4fa0ae.jpg",
      alt: "Fresh toasted garlic bread with herbs and butter"
    },
    {
      id: 2,
      name: "Calamari Rings", 
      description: "Golden-fried squid rings served with house tartar sauce",
      price: 450,
      category: "appetizers",
      image: "https://pplx-res.cloudinary.com/image/upload/v1753627989/pplx_project_search_images/d7d2a2920ba6aca10352f7df7e1afc00616a7484.jpg",
      alt: "Crispy fried calamari rings with dipping sauce"
    },
    {
      id: 3,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled to perfection with Indian spices",
      price: 320,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=60",
      alt: "Grilled paneer tikka with mint chutney"
    },
    {
      id: 4,
      name: "Samosa Chat",
      description: "Crispy samosas topped with yogurt, chutneys, and fresh herbs",
      price: 180,
      category: "appetizers", 
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60",
      alt: "Samosa chat with yogurt and chutneys"
    },
    {
      id: 5,
      name: "Chicken 65",
      description: "Spicy fried chicken pieces with curry leaves and green chilies",
      price: 380,
      category: "appetizers",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2YZC90rqFoT6JHzd39KWKK0fetZC8DFi1oU-XTivHcgPoCA7rgu4GGQqaTwjX1TyjxDjdKmwg1mvXAWtGoBNX1SyRqh6J3muqSWLFHkAMAaUl-TzIqKrhra_OuvlaCP7JFk0UtA667lA/w1200-h630-p-k-no-nu/chicken+65+new.jpg",
      alt: "Spicy chicken 65 with curry leaves"
    },
    {
      id: 6,
      name: "Vegetable Spring Rolls",
      description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce",
      price: 220,
      category: "appetizers",
      image: "https://amycaseycooks.com/wp-content/uploads/2016/02/Webp.net-resizeimage-2021-01-30T193616.712.jpg",
      alt: "Golden vegetable spring rolls"
    },
    
    // MAIN COURSES
    {
      id: 7,
      name: "Chicken Alfredo Pasta",
      description: "Fettuccine tossed in rich Parmesan cream sauce with grilled chicken",
      price: 540,
      category: "mains",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
      alt: "Creamy chicken Alfredo pasta"
    },
    {
      id: 8,
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and cream gravy with aromatic spices",
      price: 480,
      category: "mains",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=60",
      alt: "Creamy butter chicken curry"
    },
    {
      id: 9,
      name: "Biryani Special",
      description: "Fragrant basmati rice layered with spiced chicken or mutton, served with raita",
      price: 420,
      category: "mains",
      image: "https://www.prideindiabrands.com/cdn/shop/articles/shutterstock_1815239114_1600x.jpg?v=1629451357",
      alt: "Aromatic chicken biryani with raita"
    },
    {
      id: 10,
      name: "Palak Paneer",
      description: "Fresh cottage cheese cooked in creamy spinach gravy with Indian spices",
      price: 360,
      category: "mains",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=60",
      alt: "Palak paneer with spinach gravy"
    },
    {
      id: 11,
      name: "Fish Curry",
      description: "Fresh fish cooked in coconut milk with curry leaves and traditional spices",
      price: 520,
      category: "mains",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=60",
      alt: "Traditional fish curry with coconut"
    },
    {
      id: 12,
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in rich tomato and cream gravy",
      price: 280,
      category: "mains",
      image: "https://img.taste.com.au/-9N8RwWn/w1200-h1200-cfill-q80/taste/2025/03/dal-makhani-indian-butter-lentils-2-208408-1.jpg",
      alt: "Creamy dal makhani"
    },
    {
      id: 13,
      name: "Tandoori Chicken",
      description: "Whole chicken marinated in yogurt and spices, cooked in tandoor oven",
      price: 650,
      category: "mains", 
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=60",
      alt: "Tandoori chicken with mint chutney"
    },
    {
      id: 14,
      name: "Vegetable Korma",
      description: "Mixed vegetables cooked in rich cashew and coconut gravy",
      price: 320,
      category: "mains",
      image: "https://myfancypantry.com/wp-content/uploads/2012/04/untitled-04473.jpg",
      alt: "Mixed vegetable korma"
    },
    
    // DESSERTS
    {
      id: 15,
      name: "Gulab Jamun",
      description: "Soft milk dumplings soaked in cardamom sugar syrup",
      price: 120,
      category: "desserts",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/384944363/DN/MV/KT/144303146/gulab-jamun-desi-ghee.jpg",
      alt: "Sweet gulab jamun in syrup"
    },
    {
      id: 16,
      name: "Rasmalai",
      description: "Soft cottage cheese dumplings in sweetened milk with pistachios",
      price: 140,
      category: "desserts",
      image: "https://prashantcorner.com/cdn/shop/files/RasmalaiSR-2.png?v=1720595089&width=1946",
      alt: "Creamy rasmalai with pistachios"
    },
    {
      id: 17,
      name: "Kulfi",
      description: "Traditional Indian ice cream with cardamom and pistachios",
      price: 100,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=60",
      alt: "Traditional kulfi ice cream"
    },
    {
      id: 18,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 180,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=60",
      alt: "Chocolate lava cake with ice cream"
    },
    
    // BEVERAGES
    {
      id: 19,
      name: "Espresso",
      description: "Double shot of 100% Arabica beans pulled to perfection",
      price: 150,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60",
      alt: "Freshly pulled espresso shot"
    },
    {
      id: 20,
      name: "Masala Chai",
      description: "Traditional Indian tea brewed with aromatic spices and milk",
      price: 80,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=60",
      alt: "Traditional masala chai"
    },
    {
      id: 21,
      name: "Fresh Lime Soda",
      description: "Refreshing lime juice with soda water and mint",
      price: 90,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=60",
      alt: "Fresh lime soda with mint"
    },
    {
      id: 22,
      name: "Mango Lassi",
      description: "Creamy yogurt drink blended with fresh mango",
      price: 120,
      category: "beverages",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Q27KUPh5v60pLiJZxBcN_9jA7wQvn4kgZg&s",
      alt: "Creamy mango lassi"
    },
    {
      id: 23,
      name: "Filter Coffee",
      description: "South Indian style coffee brewed with chicory",
      price: 100,
      category: "beverages",
      image: "https://media.assettype.com/homegrown/2024-11-28/d8kdthmm/WhatsApp-Image-2024-11-27-at-16.08.06.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
      alt: "South Indian filter coffee"
    },
    {
      id: 24,
      name: "Rose Falooda",
      description: "Traditional drink with rose syrup, vermicelli, and ice cream",
      price: 160,
      category: "beverages",
      image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-falooda-recipe.jpg",
      alt: "Rose falooda with ice cream"
    }
  ],
  categories: [
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Start your meal with our delicious appetizers"
    },
    {
      id: "mains", 
      name: "Main Courses",
      description: "Hearty and satisfying main dishes"
    },
    {
      id: "desserts",
      name: "Desserts", 
      description: "Sweet endings to your perfect meal"
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Refreshing drinks to complement your meal"
    }
  ],
  taxRate: 0.18, // GST in India
  deliveryFee: 50,
  freeDeliveryThreshold: 500
};

// Global variables
let cart = [];
let currentFilter = 'all';
let searchTerm = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    renderMenuItems();
    setupEventListeners();
    updateCartDisplay();
    updateCartCount();
});

// Event listeners setup
function setupEventListeners() {
    // Cart toggle
    const cartToggle = document.getElementById('cartToggle');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartToggle) cartToggle.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);
    
    // Category filters
    const categoryFilters = document.getElementById('categoryFilters');
    if (categoryFilters) {
        categoryFilters.addEventListener('click', handleCategoryFilter);
    }
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    const submitOrder = document.getElementById('submitOrder');
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (submitOrder) submitOrder.addEventListener('click', submitOrderForm);
    
    // Order type change
    const orderType = document.getElementById('orderType');
    if (orderType) {
        orderType.addEventListener('change', handleOrderTypeChange);
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Render menu items
function renderMenuItems() {
    const menuItemsContainer = document.getElementById('menuItems');
    if (!menuItemsContainer) return;
    
    const filteredItems = getFilteredItems();
    
    if (filteredItems.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No items found</h4>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    menuItemsContainer.innerHTML = filteredItems.map(item => `
        <div class="col-lg-4 col-md-6 mb-4 fade-in">
            <div class="menu-item">
                <img src="${item.image}" alt="${item.alt || item.name}" class="w-100" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60'">
                <div class="menu-item-body">
                    <h5 class="menu-item-title">${item.name}</h5>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-price currency">₹${item.price}</div>
                    <div class="menu-item-footer">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, -1)" aria-label="Decrease quantity">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-display" id="qty-${item.id}">${getItemQuantity(item.id)}</span>
                            <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, 1)" aria-label="Increase quantity">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">
                            <i class="fas fa-cart-plus me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Get filtered items based on category and search
function getFilteredItems() {
    let items = restaurantData.menuItems;
    
    // Filter by category
    if (currentFilter !== 'all') {
        items = items.filter(item => item.category === currentFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return items;
}

// Handle category filter
function handleCategoryFilter(e) {
    if (e.target.hasAttribute('data-category')) {
        e.preventDefault();
        
        // Remove active class from all buttons
        const categoryFilters = document.getElementById('categoryFilters');
        categoryFilters.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Update filter
        currentFilter = e.target.getAttribute('data-category');
        renderMenuItems();
    }
}

// Handle search
function handleSearch(e) {
    searchTerm = e.target.value.trim();
    renderMenuItems();
}

// Get item quantity in cart
function getItemQuantity(itemId) {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
}

// Update item quantity
function updateItemQuantity(itemId, change) {
    const cartItem = cart.find(item => item.id === itemId);
    
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(itemId);
        }
    } else if (change > 0) {
        addToCart(itemId);
        return;
    }
    
    updateCartDisplay();
    updateCartCount();
    saveCartToStorage();
    
    // Update quantity display
    const qtyDisplay = document.getElementById(`qty-${itemId}`);
    if (qtyDisplay) {
        qtyDisplay.textContent = getItemQuantity(itemId);
    }
}

// Add item to cart
function addToCart(itemId) {
    const item = restaurantData.menuItems.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    updateCartCount();
    saveCartToStorage();
    showToast('Item added to cart!', 'success');
    
    // Update quantity display
    const qtyDisplay = document.getElementById(`qty-${itemId}`);
    if (qtyDisplay) {
        qtyDisplay.textContent = getItemQuantity(itemId);
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    updateCartCount();
    saveCartToStorage();
    
    // Update quantity display
    const qtyDisplay = document.getElementById(`qty-${itemId}`);
    if (qtyDisplay) {
        qtyDisplay.textContent = '0';
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    
    if (!cartItems || !cartFooter) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart text-center py-4">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Your cart is empty</p>
                <p class="text-muted">Add some delicious items to get started!</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60'">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price currency">₹${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)" aria-label="Decrease quantity">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)" aria-label="Increase quantity">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Update totals
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const delivery = calculateDeliveryFee(subtotal);
    const total = subtotal + tax + delivery;
    
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const deliveryEl = document.getElementById('delivery');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(0)}`;
    if (taxEl) taxEl.textContent = `₹${tax.toFixed(0)}`;
    if (deliveryEl) deliveryEl.textContent = delivery > 0 ? `₹${delivery}` : 'Free';
    if (totalEl) totalEl.textContent = `₹${total.toFixed(0)}`;
    
    cartFooter.style.display = 'block';
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
            updateCartCount();
            saveCartToStorage();
            
            // Update menu quantity display
            const qtyDisplay = document.getElementById(`qty-${itemId}`);
            if (qtyDisplay) {
                qtyDisplay.textContent = getItemQuantity(itemId);
            }
        }
    }
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
}

// Calculate subtotal
function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Calculate tax (GST in India)
function calculateTax(subtotal) {
    return subtotal * restaurantData.taxRate;
}

// Calculate delivery fee
function calculateDeliveryFee(subtotal) {
    return subtotal >= restaurantData.freeDeliveryThreshold ? 0 : restaurantData.deliveryFee;
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (!cartSidebar || !cartOverlay) return;
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Close cart sidebar
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (!cartSidebar || !cartOverlay) return;
    
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Open checkout modal
function openCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Populate checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <div>
                    <div class="checkout-item-name">${item.name}</div>
                    <div class="checkout-item-quantity">Qty: ${item.quantity}</div>
                </div>
                <div class="checkout-item-price currency">₹${(item.price * item.quantity).toFixed(0)}</div>
            </div>
        `).join('');
    }
    
    // Update checkout totals
    updateCheckoutTotals();
    
    // Show modal
    const checkoutModalEl = document.getElementById('checkoutModal');
    if (checkoutModalEl && typeof bootstrap !== 'undefined') {
        const checkoutModal = new bootstrap.Modal(checkoutModalEl);
        checkoutModal.show();
        closeCartSidebar();
    }
}

// Update checkout totals
function updateCheckoutTotals() {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const orderType = document.getElementById('orderType');
    const delivery = (orderType && orderType.value === 'delivery') ? calculateDeliveryFee(subtotal) : 0;
    const total = subtotal + tax + delivery;
    
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutDelivery = document.getElementById('checkoutDelivery');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal.toFixed(0)}`;
    if (checkoutTax) checkoutTax.textContent = `₹${tax.toFixed(0)}`;
    if (checkoutDelivery) checkoutDelivery.textContent = delivery > 0 ? `₹${delivery}` : 'Free';
    if (checkoutTotal) checkoutTotal.textContent = `₹${total.toFixed(0)}`;
}

// Handle order type change
function handleOrderTypeChange(e) {
    const addressField = document.getElementById('addressField');
    const addressInput = document.getElementById('customerAddress');
    
    if (!addressField || !addressInput) return;
    
    if (e.target.value === 'delivery') {
        addressField.style.display = 'block';
        addressInput.setAttribute('required', 'required');
    } else {
        addressField.style.display = 'none';
        addressInput.removeAttribute('required');
        addressInput.value = '';
    }
    
    // Update totals
    updateCheckoutTotals();
}

// Submit order
function submitOrderForm() {
    const form = document.getElementById('checkoutForm');
    
    if (!form || !form.checkValidity()) {
        if (form) form.reportValidity();
        return;
    }
    
    // Get form data
    const customerName = document.getElementById('customerName');
    const customerPhone = document.getElementById('customerPhone');
    const customerEmail = document.getElementById('customerEmail');
    const orderType = document.getElementById('orderType');
    const customerAddress = document.getElementById('customerAddress');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (!customerName || !customerPhone || !customerEmail || !orderType || !paymentMethod) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const delivery = orderType.value === 'delivery' ? calculateDeliveryFee(subtotal) : 0;
    
    const formData = {
        name: customerName.value,
        phone: customerPhone.value,
        email: customerEmail.value,
        orderType: orderType.value,
        address: customerAddress ? customerAddress.value : '',
        paymentMethod: paymentMethod.value,
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        delivery: delivery,
        total: subtotal + tax + delivery,
        orderTime: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})
    };
    
    // Show loading state
    const submitBtn = document.getElementById('submitOrder');
    if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
    }
    
    // Simulate order processing
    setTimeout(() => {
        // Hide checkout modal
        const checkoutModalEl = document.getElementById('checkoutModal');
        if (checkoutModalEl && typeof bootstrap !== 'undefined') {
            const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
            if (checkoutModal) checkoutModal.hide();
        }
        
        // Show confirmation modal
        showOrderConfirmation(formData);
        
        // Clear cart
        cart = [];
        updateCartDisplay();
        updateCartCount();
        saveCartToStorage();
        
        // Reset form
        if (form) {
            form.reset();
            const addressField = document.getElementById('addressField');
            if (addressField) addressField.style.display = 'none';
        }
        
        // Remove loading state
        if (submitBtn) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
        
        // Reset quantity displays
        document.querySelectorAll('.quantity-display').forEach(display => {
            if (display.id && display.id.startsWith('qty-')) {
                display.textContent = '0';
            }
        });
        
    }, 2500);
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    const orderDetails = document.getElementById('orderDetails');
    if (!orderDetails) return;
    
    const paymentMethodText = {
        'credit': 'Credit/Debit Card',
        'upi': 'UPI/Digital Wallet', 
        'cash': 'Cash on Delivery'
    };
    
    orderDetails.innerHTML = `
        <div class="mb-3">
            <strong>Order Type:</strong> ${orderData.orderType.charAt(0).toUpperCase() + orderData.orderType.slice(1)}
        </div>
        <div class="mb-3">
            <strong>Customer:</strong> ${orderData.name}<br>
            <strong>Phone:</strong> ${orderData.phone}<br>
            <strong>Email:</strong> ${orderData.email}
            ${orderData.orderType === 'delivery' ? `<br><strong>Address:</strong> ${orderData.address}` : ''}
        </div>
        <div class="mb-3">
            <strong>Total Amount:</strong> ₹${orderData.total.toFixed(0)}
        </div>
        <div class="mb-3">
            <strong>Payment Method:</strong> ${paymentMethodText[orderData.paymentMethod] || orderData.paymentMethod}
        </div>
        <div class="alert alert-info">
            <i class="fas fa-clock me-2"></i>
            Estimated ${orderData.orderType === 'delivery' ? 'delivery' : 'pickup'} time: 30-45 minutes
        </div>
    `;
    
    const confirmationModalEl = document.getElementById('confirmationModal');
    if (confirmationModalEl && typeof bootstrap !== 'undefined') {
        const confirmationModal = new bootstrap.Modal(confirmationModalEl);
        confirmationModal.show();
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    // Create simple alert if Bootstrap toasts aren't available
    if (typeof bootstrap === 'undefined') {
        alert(message);
        return;
    }
    
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '1070';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toastId = 'toast-' + Date.now();
    const toastHtml = `
        <div class="toast" id="${toastId}" role="alert">
            <div class="toast-header bg-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'primary'} text-white">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
                <strong class="me-auto">Spice Symphony</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    // Show toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 4000
    });
    toast.show();
    
    // Remove toast element after it's hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// Save cart to localStorage (fallback for environments without localStorage)
function saveCartToStorage() {
    try {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem('spiceSymphonyCart', JSON.stringify(cart));
        }
    } catch (error) {
        console.warn('Could not save cart to localStorage:', error);
    }
}

// Load cart from localStorage (fallback for environments without localStorage)
function loadCartFromStorage() {
    try {
        if (typeof Storage !== 'undefined') {
            const savedCart = localStorage.getItem('spiceSymphonyCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        }
    } catch (error) {
        console.warn('Could not load cart from localStorage:', error);
        cart = [];
    }
}

// Utility function to scroll to menu
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        const offsetTop = menuSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'var(--color-slate-900)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Close cart with Escape key
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            closeCartSidebar();
        }
    }
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Register service worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}