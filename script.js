
/* =========================================
   FRESHBITE — WEBSITE JAVASCRIPT
========================================= */

/*
  IMPORTANT:
  Replace the WhatsApp number below with your
  business number in international format.
  Example format for Nigeria: 2348012345678
  Do not include +, spaces, or hyphens.
*/

const WHATSAPP_NUMBER = "2348012345678";

/* =========================================
   FOOD MENU AND PICTURES
========================================= */

const foods = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    category: "Rice",
    price: 8500,
    badge: "Bestseller",
    emoji: "🍗",
    description: "Smoky Nigerian jollof with juicy grilled chicken.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 2,
    name: "Fried Rice Supreme",
    category: "Rice",
    price: 7500,
    badge: "Popular",
    emoji: "🍚",
    description: "Colourful fried rice with vegetables and tasty sides.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: "Grills",
    price: 9500,
    badge: "Chef's pick",
    emoji: "🍗",
    description: "Tender, seasoned chicken grilled to perfection.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 4,
    name: "Beef Burger",
    category: "Grills",
    price: 6500,
    badge: "Fan favourite",
    emoji: "🍔",
    description: "Juicy beef patty, fresh vegetables and soft buns.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 5,
    name: "Egusi Soup & Pounded Yam",
    category: "Swallow",
    price: 9000,
    badge: "Local favourite",
    emoji: "🍲",
    description: "Rich melon-seed soup with a satisfying swallow.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 6,
    name: "Pepper Soup",
    category: "Swallow",
    price: 7000,
    badge: "Spicy",
    emoji: "🥣",
    description: "A warming, aromatic pepper soup with bold flavours.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 7,
    name: "Crispy Chicken Wings",
    category: "Grills",
    price: 6000,
    badge: "Crispy",
    emoji: "🍗",
    description: "Golden wings tossed in our signature seasoning.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 8,
    name: "Loaded French Fries",
    category: "Sides",
    price: 3500,
    badge: "",
    emoji: "🍟",
    description: "Golden, crispy fries served hot and fresh.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 9,
    name: "Creamy Pasta",
    category: "Rice",
    price: 7000,
    badge: "Must try",
    emoji: "🍝",
    description: "Creamy, comforting pasta with a delicious sauce.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 10,
    name: "Fresh Garden Salad",
    category: "Sides",
    price: 4000,
    badge: "Fresh",
    emoji: "🥗",
    description: "Crisp greens, colourful vegetables and light dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 11,
    name: "Fresh Fruit Smoothie",
    category: "Drinks",
    price: 3000,
    badge: "Refreshing",
    emoji: "🥤",
    description: "A fruity, refreshing drink for any time of day.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 12,
    name: "Chocolate Milkshake",
    category: "Drinks",
    price: 3500,
    badge: "",
    emoji: "🍫",
    description: "A rich, chilled chocolate treat.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 13,
    name: "Grilled Fish",
    category: "Grills",
    price: 12000,
    badge: "Chef's pick",
    emoji: "🐟",
    description: "Seasoned grilled fish with a savoury finish.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 14,
    name: "Chicken Shawarma",
    category: "Grills",
    price: 5000,
    badge: "Popular",
    emoji: "🌯",
    description: "Chicken, crunchy vegetables and creamy sauce.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 15,
    name: "Pancakes & Berries",
    category: "Sides",
    price: 4500,
    badge: "Sweet treat",
    emoji: "🥞",
    description: "Fluffy pancakes with fruit and sweet toppings.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: 16,
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 2500,
    badge: "Fresh",
    emoji: "🍊",
    description: "Bright, refreshing citrus flavour served chilled.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85"
  }
];

/* =========================================
   APP STATE
========================================= */

let activeCategory = "All";
let searchQuery = "";
let cart = [];
let toastTimer;

const $ = (selector) => document.querySelector(selector);

const foodGrid = $("#foodGrid");
const emptyState = $("#emptyState");
const categoryList = $("#categoryList");
const foodSearch = $("#foodSearch");

const cartDrawer = $("#cartDrawer");
const drawerBackdrop = $("#drawerBackdrop");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const drawerCount = $("#drawerCount");
const cartSubtotal = $("#cartSubtotal");

const checkoutModal = $("#checkoutModal");
const checkoutForm = $("#checkoutForm");
const checkoutTotal = $("#checkoutTotal");

const toast = $("#toast");

/* =========================================
   FORMAT NAIRA
========================================= */

function formatMoney(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

/* =========================================
   FOOD IMAGE FALLBACK
========================================= */

function handleImageError(img) {
  img.style.display = "none";

  const fallback = img.nextElementSibling;

  if (fallback) {
    fallback.style.display = "grid";
  }
}

/* =========================================
   DISPLAY FOOD MENU
========================================= */

function renderFoods() {
  if (!foodGrid) return;

  const filteredFoods = foods.filter((food) => {
    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory;

    const searchableText = [
      food.name,
      food.category,
      food.description,
      food.badge
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(
      searchQuery.toLowerCase().trim()
    );

    return matchesCategory && matchesSearch;
  });

  foodGrid.innerHTML = filteredFoods.map((food) => `
    <article class="food-card">
      <div class="food-image-wrap">
        ${food.badge ? `
          <span class="food-badge">${food.badge}</span>
        ` : ""}

        <img
          class="food-image"
          src="${food.image}"
          alt="${food.name}"
          loading="lazy"
        >

        <div class="food-image-fallback" aria-hidden="true">
          ${food.emoji}
        </div>
      </div>

      <div class="food-details">
        <span class="food-category">${food.category}</span>

        <h3>${food.name}</h3>

        <p class="food-description">${food.description}</p>

        <div class="food-bottom">
          <span class="food-price">${formatMoney(food.price)}</span>

          <button
            class="add-to-cart"
            type="button"
            data-add="${food.id}"
            aria-label="Add ${food.name} to bag"
            title="Add to bag"
          >+</button>
        </div>
      </div>
    </article>
  `).join("");

  foodGrid.querySelectorAll(".food-image").forEach((img) => {
    img.addEventListener("error", () => handleImageError(img), {
      once: true
    });
  });

  if (emptyState) {
    emptyState.hidden = filteredFoods.length > 0;
  }
}

/* =========================================
   CATEGORY FILTER
========================================= */

if (categoryList) {
  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest(".category-btn");

    if (!button) return;

    activeCategory = button.dataset.category || "All";

    categoryList.querySelectorAll(".category-btn").forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    renderFoods();
  });
}

/* =========================================
   FOOD SEARCH
========================================= */

if (foodSearch) {
  foodSearch.addEventListener("input", () => {
    searchQuery = foodSearch.value;
    renderFoods();
  });
}

const searchToggle = $("#searchToggle");
const searchBox = $("#searchBox");

if (searchToggle && foodSearch) {
  searchToggle.addEventListener("click", () => {
    if (searchBox) {
      searchBox.classList.toggle("search-active");
    }

    foodSearch.focus();

    $("#menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* =========================================
   SHOPPING CART
========================================= */

function addToCart(foodId) {
  const food = foods.find((item) => item.id === Number(foodId));

  if (!food) return;

  const existingItem = cart.find((item) => item.id === food.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      emoji: food.emoji,
      quantity: 1
    });
  }

  renderCart();
  showToast(`${food.name} added to your bag.`);
}

if (foodGrid) {
  foodGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");

    if (!button) return;

    addToCart(button.dataset.add);

    button.textContent = "✓";

    setTimeout(() => {
      if (button.isConnected) {
        button.textContent = "+";
      }
    }, 650);
  });
}

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function renderCart() {
  const quantity = getCartQuantity();
  const subtotal = getCartSubtotal();

  if (cartCount) {
    cartCount.textContent = quantity;
  }

  if (drawerCount) {
    drawerCount.textContent = `(${quantity})`;
  }

  if (cartSubtotal) {
    cartSubtotal.textContent = formatMoney(subtotal);
  }

  if (checkoutTotal) {
    checkoutTotal.textContent = formatMoney(subtotal);
  }

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>🛍</span>
        <h3>Your bag is hungry.</h3>
        <p>Add something delicious to get started.</p>
      </div>
    `;

    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      >

      <div>
        <h4>${item.name}</h4>

        <div class="cart-item-price">
          ${formatMoney(item.price * item.quantity)}
        </div>

        <div class="quantity-controls">
          <button
            type="button"
            data-decrease="${item.id}"
            aria-label="Decrease ${item.name} quantity"
          >−</button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-increase="${item.id}"
            aria-label="Increase ${item.name} quantity"
          >+</button>
        </div>
      </div>

      <button
        class="remove-item"
        type="button"
        data-remove="${item.id}"
        aria-label="Remove ${item.name}"
      >Remove</button>
    </article>
  `).join("");

  cartItems.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    }, { once: true });
  });
}

if (cartItems) {
  cartItems.addEventListener("click", (event) => {
    const increase = event.target.closest("[data-increase]");
    const decrease = event.target.closest("[data-decrease]");
    const remove = event.target.closest("[data-remove]");

    if (increase) {
      changeQuantity(Number(increase.dataset.increase), 1);
    }

    if (decrease) {
      changeQuantity(Number(decrease.dataset.decrease), -1);
    }

    if (remove) {
      removeFromCart(Number(remove.dataset.remove));
    }
  });
}

function changeQuantity(foodId, change) {
  const item = cart.find((product) => product.id === foodId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== foodId);
  }

  renderCart();
}

function removeFromCart(foodId) {
  cart = cart.filter((item) => item.id !== foodId);
  renderCart();
  showToast("Item removed from your bag.");
}

/* =========================================
   CART DRAWER
========================================= */

function openCart() {
  cartDrawer?.classList.add("open");
  drawerBackdrop?.classList.add("visible");

  cartDrawer?.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");

  $("#cartClose")?.focus();
}

function closeCart() {
  cartDrawer?.classList.remove("open");
  drawerBackdrop?.classList.remove("visible");

  cartDrawer?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

$("#cartToggle")?.addEventListener("click", openCart);
$("#cartClose")?.addEventListener("click", closeCart);
$("#continueShopping")?.addEventListener("click", closeCart);
drawerBackdrop?.addEventListener("click", closeCart);

/* =========================================
   CHECKOUT
========================================= */

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your bag is empty. Add a meal first.");
    return;
  }

  closeCart();

  checkoutModal?.classList.add("open");
  checkoutModal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  renderCart();

  $("#customerName")?.focus();
}

function closeCheckout() {
  checkoutModal?.classList.remove("open");
  checkoutModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

$("#checkoutButton")?.addEventListener("click", openCheckout);
$("#checkoutClose")?.addEventListener("click", closeCheckout);

checkoutModal?.addEventListener("click", (event) => {
  if (event.target === checkoutModal) {
    closeCheckout();
  }
});

/* =========================================
   SEND ORDER TO WHATSAPP
========================================= */

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Your bag is empty.");
    closeCheckout();
    return;
  }

  if (!checkoutForm.reportValidity()) return;

  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    showToast("Please configure your WhatsApp number in script.js.");
    return;
  }

  const formData = new FormData(checkoutForm);

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const notes = String(formData.get("notes") || "").trim();

  const orderLines = cart.map((item) => {
    return `${item.name} x ${item.quantity} — ${formatMoney(
      item.price * item.quantity
    )}`;
  });

  const message = [
    "*FRESHBITE ORDER*",
    "",
    `*Customer:* ${name}`,
    `*Phone:* ${phone}`,
    `*Delivery address:* ${address}`,
    "",
    "*ORDER DETAILS*",
    ...orderLines,
    "",
    `*Subtotal:* ${formatMoney(getCartSubtotal())}`,
    "*Delivery:* To be confirmed",
    notes ? `*Notes:* ${notes}` : "",
    "",
    "Please confirm availability, delivery fee and total payment."
  ].filter(Boolean).join("\n");

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  showToast("Your order message is ready in WhatsApp.");
});

/* =========================================
   NEWSLETTER
========================================= */

const newsletterForm = $("#newsletterForm");
const newsletterMessage = $("#newsletterMessage");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!newsletterForm.reportValidity()) return;

  const emailInput = $("#newsletterEmail");
  const email = emailInput?.value.trim();

  if (!email) return;

  /*
    Connect this to an email marketing service or backend
    to save subscriptions permanently.
  */

  if (newsletterMessage) {
    newsletterMessage.textContent =
      "Thanks for your interest! Newsletter registration needs to be connected.";
  }

  newsletterForm.reset();
});

/* =========================================
   TOAST NOTIFICATIONS
========================================= */

function showToast(message) {
  if (!toast) return;

  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

function closeMobileMenu() {
  mainNav?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Toggle navigation");

  if (menuToggle) {
    menuToggle.textContent = "☰";
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav?.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    closeMobileMenu();
  }
});

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const navLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const active =
          link.getAttribute("href") === `#${entry.target.id}`;

        link.classList.toggle("active", active);

        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, {
    rootMargin: "-25% 0px -65% 0px"
  });

  pageSections.forEach((section) => navObserver.observe(section));
}

/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = $(".header");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  closeCart();
  closeCheckout();
  closeMobileMenu();
});

/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   INITIALISE WEBSITE
========================================= */

renderFoods();
renderCart();