// --- QUICKDEAL CORE ENGINE ---

// Dynamic Mock Product Database
const MOCK_PRODUCTS = {
  "classic-tee": {
    name: "Classic White Tee",
    price: 29.99,
    delPrice: 39.99,
    cat: "Men's Wear",
    rating: 4.6,
    reviews: 84,
    badge: "Bestseller",
    desc: "Crafted with 100% long-staple organic cotton, this breathable tee offers comfort and classic tailoring. Perfect for layered styles or casual wear.",
    colors: ["White", "Heather Grey", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#E8F1F2"/><path d="M30 40H70L65 80H35L30 40Z" fill="#113f36" opacity="0.8"/><path d="M50 30C55 30 60 35 60 40H40C40 35 45 30 50 30Z" stroke="#d4af37" stroke-width="2"/></svg>`
  },
  "knit-shirt": {
    name: "Luxury Knit Shirt",
    price: 49.99,
    delPrice: 69.99,
    cat: "Men's Wear",
    rating: 4.8,
    reviews: 124,
    badge: "Trending",
    desc: "A soft, medium-weight knit shirt featuring clean collar detailing and ribbed cuffs. Designed to adapt seamlessly between formal and leisure wear.",
    colors: ["Oatmeal", "Navy Blue", "Olive"],
    sizes: ["M", "L", "XL"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#FBF0F0"/><path d="M30 35H70L65 75H35L30 35Z" fill="#d4af37" opacity="0.8"/><path d="M45 25C45 25 48 20 50 20C52 20 55 25 55 25" stroke="#113f36" stroke-width="2" stroke-linecap="round"/></svg>`
  },
  "denim-jeans": {
    name: "Straight Denim Jeans",
    price: 59.99,
    delPrice: 79.99,
    cat: "Men's Wear",
    rating: 4.7,
    reviews: 96,
    badge: "Classic Fit",
    desc: "Hardy raw denim, tailored in a comfortable straight fit. Features premium metal rivets and reinforced pockets for rugged longevity.",
    colors: ["Indigo Denim", "Vintage Black"],
    sizes: ["30", "32", "34", "36"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#E8EEF1"/><path d="M35 30H65V85H35V30Z" fill="#64736f" opacity="0.8"/><path d="M35 45H65" stroke="#ffffff" stroke-width="2"/></svg>`
  },
  "day-dress": {
    name: "Summer Day Dress",
    price: 79.99,
    delPrice: 119.99,
    cat: "Women's Wear",
    rating: 4.9,
    reviews: 154,
    badge: "Hot Buy",
    desc: "Lightweight woven linen blend dress styled with subtle side pleats. Designed to capture breeze and movement beautifully.",
    colors: ["Sage Green", "Amber Yellow"],
    sizes: ["XS", "S", "M", "L"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#FAF3E0"/><path d="M30 30L50 20L70 30L65 80H35L30 30Z" fill="#113f36" opacity="0.6"/><circle cx="50" cy="55" r="8" fill="#d4af37"/></svg>`
  },
  "linen-trouser": {
    name: "Linen Casual Trouser",
    price: 69.99,
    delPrice: 89.99,
    cat: "Men's Wear",
    rating: 4.5,
    reviews: 42,
    badge: "Summer Style",
    desc: "Pure Italian linen trousers crafted with a relaxed waistband and drop fit. Keeps you refreshed and relaxed in warm weather.",
    colors: ["Off-White", "Sage Green"],
    sizes: ["S", "M", "L", "XL"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#E5F3EC"/><path d="M25 35H75L70 80H30L25 35Z" fill="#b8952b" opacity="0.8"/></svg>`
  },
  "polo-shirt": {
    name: "Smart Fit Polo",
    price: 39.99,
    delPrice: 49.99,
    cat: "Men's Wear",
    rating: 4.7,
    reviews: 81,
    badge: "Smart Wear",
    desc: "Pique knit smart polo shirt. Features standard active-dry ventilation collars and subtle tonal details on cuffs.",
    colors: ["Navy Blue", "Blush Pink", "White"],
    sizes: ["M", "L", "XL"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#F3E9F8"/><path d="M35 30H65V70H35V30Z" fill="#113f36" opacity="0.9"/><circle cx="50" cy="45" r="5" fill="#fbcbc9"/></svg>`
  },
  "hoodie": {
    name: "Oversized Hoodie",
    price: 54.99,
    delPrice: 74.99,
    cat: "Men's Wear",
    rating: 4.8,
    reviews: 93,
    badge: "Cozy Wear",
    desc: "Heavyweight French terry loops provide high insulation. Cut in a roomy oversized fit with deep pockets.",
    colors: ["Sand Brown", "Carbon Grey"],
    sizes: ["S", "M", "L", "XL"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#FBF0F0"/><path d="M25 45L50 25L75 45V80H25V45Z" fill="#64736f" opacity="0.7"/></svg>`
  },
  "trainers": {
    name: "Minimalist Trainers",
    price: 89.99,
    delPrice: 119.99,
    cat: "Men's Wear",
    rating: 4.6,
    reviews: 58,
    badge: "Lightweight",
    desc: "Crafted with lightweight breathable mesh lining and anti-skidding rubber grip paths. Comfort support for your active lifestyle.",
    colors: ["Ash Grey", "Clean White"],
    sizes: ["8", "9", "10", "11"],
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="100" height="100" fill="#EAF0F6"/><path d="M25 60L40 45L75 45L75 75L25 75V60Z" fill="#d4af37" opacity="0.9"/></svg>`
  },
  "k1": {
    name: "Elysian Crimson Gown",
    price: 99.99,
    delPrice: 199.99,
    cat: "Women's Wear",
    rating: 4.8,
    reviews: 142,
    badge: "50% Off",
    desc: "A gorgeous flowing evening dress woven from premium silk and tulle. Styled in a deep rich crimson color that commands focus.",
    colors: ["Crimson Red", "Burgundy"],
    sizes: ["XS", "S", "M", "L"],
    svg: `<svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="200" height="300" fill="#FFF5F5"/><path d="M80 60L60 110L40 260H160L140 110L120 60H80Z" fill="#C53030" opacity="0.9"/><path d="M80 60C80 60 90 70 100 70C110 70 120 60 120 60" stroke="#d4af37" stroke-width="3"/><path d="M50 200H150" stroke="#fbcbc9" stroke-width="2" stroke-dasharray="4 4"/></svg>`
  },
  "k2": {
    name: "Obsidian Fitted Henley",
    price: 47.99,
    delPrice: 79.99,
    cat: "Men's Wear",
    rating: 4.9,
    reviews: 98,
    badge: "40% Off",
    desc: "Form-fitting black long-sleeve knit shirt featuring soft gold buttons. Tailored stretch fit that holds shape beautifully.",
    colors: ["Carbon Black", "Dark Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    svg: `<svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="200" height="300" fill="#F3F4F6"/><path d="M70 50H130L150 90L140 120L130 100V250H70V100L60 120L50 90L70 50Z" fill="#1F2937"/><circle cx="100" cy="80" r="3" fill="#d4af37"/><circle cx="100" cy="110" r="3" fill="#d4af37"/></svg>`
  },
  "k3": {
    name: "Deep Teal Summer Blazer",
    price: 104.99,
    delPrice: 149.99,
    cat: "Men's Wear",
    rating: 4.7,
    reviews: 64,
    badge: "30% Off",
    desc: "A lightweight unstructured cotton summer blazer in our signature deep teal. Perfect for sharp dressing on balmy evenings.",
    colors: ["Deep Teal", "Vintage Navy"],
    sizes: ["M", "L", "XL"],
    svg: `<svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;"><rect width="200" height="300" fill="#EEF2F6"/><path d="M60 40H140L160 110L145 130L135 110V260H65V110L55 130L40 110L60 40Z" fill="#113f36"/><path d="M100 40V260" stroke="#d4af37" stroke-width="2"/><path d="M80 80L100 100L120 80" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>`
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initUIState();
  initSearch();
  initCart();
  initForms();
  initProgressModal();
  initProductDetailPage();
  initCartPage();
  initDashboard();
});

// --- AUTHENTICATION & HEADER INTERFACE GREETINGS ---
function getActiveUser() {
  return JSON.parse(localStorage.getItem('quickdeal_active_user'));
}

function initUIState() {
  const activeUser = getActiveUser();
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu) return;

  // Find Sign In link
  const navLinks = navMenu.querySelectorAll('a');
  let signInLink = null;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === 'registration form.html') {
      signInLink = link;
    }
  });

  if (activeUser) {
    if (signInLink) {
      const parent = signInLink.parentElement;
      parent.innerHTML = `
        <span class="nav-user-greeting">Hi, ${activeUser.firstName}!</span>
        <button class="btn-signout" id="nav-signout-btn" aria-label="Sign Out">Sign Out</button>
      `;
      document.getElementById('nav-signout-btn').addEventListener('click', () => {
        logoutUser();
      });
    }
  }
}

function logoutUser() {
  localStorage.removeItem('quickdeal_active_user');
  showToast('Logged out successfully!', 'success');
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

// --- GLOBAL TOAST SYSTEM ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed; bottom:30px; right:30px; display:flex; flex-direction:column; gap:12px; z-index:99999;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    min-width: 280px;
    padding: 16px 24px;
    background-color: ${type === 'success' ? '#113f36' : '#c94b4b'};
    color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 0.95rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-left: 5px solid ${type === 'success' ? '#d4af37' : '#fbcbc9'};
  `;

  toast.innerHTML = `
    <span>${message}</span>
    <button style="background:none; border:none; color:inherit; font-size:1.2rem; cursor:pointer; font-weight:bold; line-height:1;">&times;</button>
  `;

  toast.querySelector('button').addEventListener('click', () => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  });

  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; }, 50);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }
  }, 4000);
}

// --- SEARCH FORM ---
function initSearch() {
  const forms = document.querySelectorAll('.search-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.search-input');
      const query = input ? input.value.trim() : '';
      if (query) {
        showToast(`Searching database for: "${query}"...`, 'success');
        input.value = '';
      } else {
        showToast('Please enter a search value.', 'error');
      }
    });
  });
}

// --- PERSISTENT CART MANAGER ---
function getCart() {
  return JSON.parse(localStorage.getItem('quickdeal_cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('quickdeal_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const badge = document.querySelector('.cart-badge') || createCartBadge();
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
}

function createCartBadge() {
  const cartBtn = document.querySelector('.action-btn[aria-label="Cart"]');
  if (!cartBtn) return null;

  // Make the action button redirect to cart.html instead of doing nothing
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'cart.html';
  });

  const badge = document.createElement('span');
  badge.className = 'cart-badge';
  badge.style.cssText = `
    background-color: #d4af37;
    color: #141817;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50%;
    padding: 2px 6px;
    position: absolute;
    top: -2px;
    right: -2px;
    display: none;
  `;
  cartBtn.appendChild(badge);
  return badge;
}

function addToCart(id, name, price, qty = 1, color = 'Default', size = 'Medium', svg = '') {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === id && item.color === color && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({ id, name, price, qty, color, size, svg });
  }

  saveCart(cart);
  showToast(`"${name}" added to shopping bag!`, 'success');
}

function initCart() {
  updateCartBadge();

  // Bind homepage buy buttons
  const buyButtons = document.querySelectorAll('.btn-card-buy');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const card = btn.closest('.product-card');
      if (!card) return;

      const id = card.id ? card.id.replace('card-', '') : 'item';
      const prod = MOCK_PRODUCTS[id];
      if (prod) {
        addToCart(id, prod.name, prod.price, 1, prod.colors[0], prod.sizes[0], prod.svg);
      }
    });
  });

  // Bind slide redirects (homepage slider)
  document.querySelectorAll('.product-slide').forEach(slide => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      
      const titleEl = slide.querySelector('h4');
      if (!titleEl) return;
      const title = titleEl.textContent.trim().toLowerCase();
      let id = 'classic-tee';
      
      if (title.includes('white tee')) id = 'classic-tee';
      else if (title.includes('knit shirt')) id = 'knit-shirt';
      else if (title.includes('denim jeans')) id = 'denim-jeans';
      else if (title.includes('day dress')) id = 'day-dress';
      else if (title.includes('linen')) id = 'linen-trouser';
      else if (title.includes('polo')) id = 'polo-shirt';
      else if (title.includes('hoodie')) id = 'hoodie';
      else if (title.includes('trainers')) id = 'trainers';

      window.location.href = `product-detail.html?id=${id}`;
    });
  });

  // Bind card redirects (offers grid)
  document.querySelectorAll('.product-card').forEach(card => {
    const imgWrapper = card.querySelector('.product-card-img-wrapper');
    const titleEl = card.querySelector('.product-title');
    
    const clickHandler = (e) => {
      if (e.target.closest('button')) return;
      
      let id = card.id ? card.id.replace('card-', '') : '';
      if (id === 'offer3') id = 'k3'; // map offer3 to k3
      if (id && MOCK_PRODUCTS[id]) {
        window.location.href = `product-detail.html?id=${id}`;
      }
    };
    
    if (imgWrapper) {
      imgWrapper.style.cursor = 'pointer';
      imgWrapper.addEventListener('click', clickHandler);
    }
    if (titleEl) {
      titleEl.style.cursor = 'pointer';
      titleEl.addEventListener('click', clickHandler);
    }
  });
}

// --- SIGN-IN & REGISTRATION MANAGEMENT ---
function initForms() {
  // Login signup card toggle
  const toggleLinks = document.querySelectorAll('.auth-toggle-link');
  const regForm = document.querySelector('.registration-form');

  toggleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (!regForm) return;
      
      const authHeaderTitle = document.querySelector('.auth-title');
      const authHeaderSubtitle = document.querySelector('.auth-subtitle');
      const submitBtn = document.querySelector('.btn-form-submit');
      
      if (regForm.classList.contains('signin-mode')) {
        // Switch to sign up
        regForm.classList.remove('signin-mode');
        authHeaderTitle.textContent = 'Register Your Account';
        authHeaderSubtitle.textContent = 'Join the QuickDeal Family';
        submitBtn.textContent = 'Sign Up';
      } else {
        // Switch to sign in
        regForm.classList.add('signin-mode');
        authHeaderTitle.textContent = 'Sign In';
        authHeaderSubtitle.textContent = 'Welcome Back to QuickDeal';
        submitBtn.textContent = 'Log In';
      }
    });
  });

  // Handle submit
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isSignIn = regForm.classList.contains('signin-mode');
      const email = document.getElementById('email id').value.trim();
      const password = document.getElementById('password') ? document.getElementById('password').value : 'temp-password';

      const users = JSON.parse(localStorage.getItem('quickdeal_users')) || [];

      if (isSignIn) {
        // SIGN IN
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('quickdeal_active_user', JSON.stringify(user));
          showToast(`Welcome back, ${user.firstName}! Redirecting to homepage...`, 'success');
          setTimeout(() => {
            window.location.href = 'QUIK DEAL.html';
          }, 1500);
        } else {
          showToast('Invalid email or password.', 'error');
        }
      } else {
        // SIGN UP
        const fullNameInput = document.getElementById('full name').value.trim();
        const firstName = fullNameInput.split(' ')[0];
        const lastName = document.getElementById('last name').value.trim();
        const middleName = document.getElementById('middle name').value.trim();
        const agree = document.getElementById('agree').checked;
        
        const genders = document.querySelectorAll('input[name="gender"]');
        let gender = '';
        genders.forEach(g => { if (g.checked) gender = g.value; });

        if (!firstName || !lastName || !email || !gender) {
          showToast('Please complete all fields.', 'error');
          return;
        }

        if (!agree) {
          showToast('You must agree to the Terms & Conditions.', 'error');
          return;
        }

        // Email duplicates check
        if (users.find(u => u.email === email)) {
          showToast('An account is already registered with this email.', 'error');
          return;
        }

        const newUser = {
          firstName,
          lastName,
          middleName,
          email,
          gender,
          password,
          orders: [],
          points: 250
        };

        users.push(newUser);
        localStorage.setItem('quickdeal_users', JSON.stringify(users));
        localStorage.setItem('quickdeal_active_user', JSON.stringify(newUser));

        showToast(`Registration complete! Welcome, ${firstName}!`, 'success');
        setTimeout(() => {
          window.location.href = 'QUIK DEAL.html';
        }, 1500);
      }
    });
  }

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been received.', 'success');
      contactForm.reset();
    });
  }
}

// --- DYNAMIC PROGRESS MODAL INTERCEPTOR ---
function initProgressModal() {
  // Create modal markup dynamically
  if (!document.getElementById('progress-modal')) {
    const modal = document.createElement('div');
    modal.className = 'progress-modal-overlay';
    modal.id = 'progress-modal';
    modal.innerHTML = `
      <div class="progress-modal-card">
        <button class="progress-modal-close" id="modal-close-btn" aria-label="Close Modal">&times;</button>
        <div class="progress-modal-icon">&#9881;</div>
        <h3 class="progress-modal-title">Feature in Progress...</h3>
        <p class="progress-modal-text" id="modal-typewriter-text"></p>
        <div class="glow-loading-bar"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // Close button trigger
    document.getElementById('modal-close-btn').addEventListener('click', closeProgressModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProgressModal();
    });
    
    // ESC key close trigger
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProgressModal();
    });
  }

  // Intercept links
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    
    // Check if it's an external link or matches progress features
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://')) && !href.includes(window.location.hostname);
    const isProgress = link.classList.contains('in-progress-link') || href === '#';

    if (isExternal || isProgress) {
      e.preventDefault();
      openProgressModal();
    }
  });
}

let typewriterInterval = null;

function openProgressModal() {
  const modal = document.getElementById('progress-modal');
  if (!modal) return;

  modal.classList.add('active');

  const textEl = document.getElementById('modal-typewriter-text');
  textEl.textContent = '';
  textEl.className = 'progress-modal-text typewriter-cursor';

  const fullText = "Our designers and developers are currently crafting this collection with high-end fabrications and seamless details. Stay tuned for launch!";
  let i = 0;
  
  if (typewriterInterval) clearInterval(typewriterInterval);
  
  typewriterInterval = setInterval(() => {
    if (i < fullText.length) {
      textEl.textContent += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typewriterInterval);
      textEl.className = 'progress-modal-text'; // remove cursor blinking
    }
  }, 30);
}

function closeProgressModal() {
  const modal = document.getElementById('progress-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  if (typewriterInterval) clearInterval(typewriterInterval);
}

// --- DYNAMIC PRODUCT DETAIL VIEW PAGE ---
function initProductDetailPage() {
  const pageContainer = document.getElementById('product-detail-view');
  if (!pageContainer) return;

  // Read URL query
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'classic-tee';

  const prod = MOCK_PRODUCTS[id];
  if (!prod) {
    pageContainer.innerHTML = '<div class="section-container" style="text-align:center;"><h2>Product not found.</h2><a href="QUIK DEAL.html" class="btn-primary" style="margin-top:20px;">Return Home</a></div>';
    return;
  }

  // Generate size pill controls
  let sizePills = '';
  prod.sizes.forEach((size, idx) => {
    sizePills += `<button class="pill-btn size-pill ${idx === 0 ? 'active' : ''}" data-size="${size}">${size}</button>`;
  });

  // Generate color pill controls
  let colorPills = '';
  prod.colors.forEach((color, idx) => {
    colorPills += `<button class="pill-btn color-pill ${idx === 0 ? 'active' : ''}" data-color="${color}">${color}</button>`;
  });

  pageContainer.innerHTML = `
    <div class="detail-grid">
      <!-- Gallery Column -->
      <div class="detail-gallery">
        <div class="detail-main-img">
          ${prod.svg}
        </div>
      </div>
      
      <!-- Details Content Column -->
      <div class="detail-info">
        <span class="product-cat">${prod.cat}</span>
        <h1>${prod.name}</h1>
        
        <div class="product-rating" style="margin-bottom:10px;">
          &#9733;&#9733;&#9733;&#9733;&#9733; <span style="color:var(--text-muted);">(${prod.reviews} reviews)</span>
        </div>

        <div class="detail-price-wrapper">
          <span class="detail-price">$${prod.price.toFixed(2)}</span>
          <del class="detail-price-del">$${prod.delPrice.toFixed(2)}</del>
          <span class="detail-badge">${prod.badge}</span>
        </div>

        <p style="color:var(--text-muted); margin-bottom: 24px; border-bottom: 1px solid var(--border-color); padding-bottom: 24px;">
          ${prod.desc}
        </p>

        <!-- Sizing selections -->
        <div class="size-selector">
          <span class="form-label" style="font-weight:600;">Select Size</span>
          <div class="pill-group" id="size-pill-group">
            ${sizePills}
          </div>
        </div>

        <!-- Color selections -->
        <div class="color-selector" style="margin-top:24px;">
          <span class="form-label" style="font-weight:600;">Select Color</span>
          <div class="pill-group" id="color-pill-group">
            ${colorPills}
          </div>
        </div>

        <!-- Add Actions -->
        <div class="cart-action-group">
          <div class="qty-control">
            <button class="qty-btn" id="detail-qty-dec">-</button>
            <span class="qty-val" id="detail-qty-val">1</span>
            <button class="qty-btn" id="detail-qty-inc">+</button>
          </div>
          <button class="btn-primary" id="btn-detail-add-bag" style="border:none; cursor:pointer;">Add to Shopping Bag</button>
        </div>
      </div>
    </div>
  `;

  // Bind selectors interactions
  const sizeGroup = document.getElementById('size-pill-group');
  sizeGroup.querySelectorAll('.size-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      sizeGroup.querySelector('.size-pill.active').classList.remove('active');
      btn.classList.add('active');
    });
  });

  const colorGroup = document.getElementById('color-pill-group');
  colorGroup.querySelectorAll('.color-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      colorGroup.querySelector('.color-pill.active').classList.remove('active');
      btn.classList.add('active');
    });
  });

  // Quantity controllers
  let qty = 1;
  const qtyVal = document.getElementById('detail-qty-val');
  document.getElementById('detail-qty-inc').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
  });
  document.getElementById('detail-qty-dec').addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyVal.textContent = qty;
    }
  });

  // Add bag click trigger
  document.getElementById('btn-detail-add-bag').addEventListener('click', () => {
    const activeSize = sizeGroup.querySelector('.size-pill.active').getAttribute('data-size');
    const activeColor = colorGroup.querySelector('.color-pill.active').getAttribute('data-color');
    addToCart(id, prod.name, prod.price, qty, activeColor, activeSize, prod.svg);
  });
}

// --- DYNAMIC CART VIEW PAGE ---
function initCartPage() {
  const pageContainer = document.getElementById('cart-page-content');
  if (!pageContainer) return;

  renderCart();

  function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
      pageContainer.innerHTML = `
        <div style="text-align:center; padding: 60px 24px; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-surface);">
          <div style="font-size:3rem; margin-bottom:20px; color:var(--text-muted);">&#128717;</div>
          <h3>Your shopping bag is empty.</h3>
          <p style="color:var(--text-muted); margin-bottom:24px; margin-top:8px;">Browse our catalog and add items to your cart.</p>
          <a href="all categories.html" class="btn-primary">Browse Categories</a>
        </div>
      `;
      return;
    }

    let itemRows = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
      const rowTotal = item.price * item.qty;
      subtotal += rowTotal;

      itemRows += `
        <tr data-index="${index}">
          <td>
            <div class="cart-item-info">
              <div class="cart-item-svg">${item.svg}</div>
              <div>
                <a href="product-detail.html?id=${item.id}" class="cart-item-title">${item.name}</a>
                <div class="cart-item-meta">Size: ${item.size} | Color: ${item.color}</div>
              </div>
            </div>
          </td>
          <td>$${item.price.toFixed(2)}</td>
          <td>
            <div class="qty-control">
              <button class="qty-btn btn-qty-dec" data-index="${index}">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn btn-qty-inc" data-index="${index}">+</button>
            </div>
          </td>
          <td>$${rowTotal.toFixed(2)}</td>
          <td>
            <button class="btn-remove-item" data-index="${index}" aria-label="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </td>
        </tr>
      `;
    });

    const tax = subtotal * 0.08; // 8% sales tax
    const shipping = subtotal > 150 ? 0 : 15.00; // Free shipping above $150
    const grandTotal = subtotal + tax + shipping;

    pageContainer.innerHTML = `
      <div class="cart-summary-grid">
        <!-- Cart Table List -->
        <div>
          <div class="cart-table-wrapper">
            <table class="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${itemRows}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Summary Order Box Card -->
        <div class="summary-card">
          <h3 style="font-size:1.4rem; margin-bottom:24px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Estimated Tax (8%)</span>
            <span>$${tax.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? '<span style="color:#113f36; font-weight:600;">FREE</span>' : '$' + shipping.toFixed(2)}</span>
          </div>
          <div class="summary-row total">
            <span>Grand Total</span>
            <span>$${grandTotal.toFixed(2)}</span>
          </div>
          <button class="btn-form-submit" id="btn-checkout-place" style="margin-top:24px;">Place Order</button>
        </div>
      </div>
    `;

    // Bind triggers
    pageContainer.querySelectorAll('.btn-qty-inc').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        cart[idx].qty++;
        saveCart(cart);
        renderCart();
      });
    });

    pageContainer.querySelectorAll('.btn-qty-dec').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        if (cart[idx].qty > 1) {
          cart[idx].qty--;
          saveCart(cart);
          renderCart();
        }
      });
    });

    pageContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        const name = cart[idx].name;
        cart.splice(idx, 1);
        saveCart(cart);
        showToast(`"${name}" removed from cart.`, 'success');
        renderCart();
      });
    });

    document.getElementById('btn-checkout-place').addEventListener('click', () => {
      executeCheckout(grandTotal);
    });
  }

  function executeCheckout(totalAmount) {
    const activeUser = getActiveUser();
    const cart = getCart();

    if (!activeUser) {
      showToast('Please sign in or register to checkout your order.', 'error');
      setTimeout(() => { window.location.href = 'registration form.html'; }, 1500);
      return;
    }

    // Process order simulation
    const newOrder = {
      orderId: 'QD-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      total: totalAmount,
      itemsCount: cart.reduce((tot, it) => tot + it.qty, 0)
    };

    // Update active user state
    activeUser.orders = activeUser.orders || [];
    activeUser.orders.push(newOrder);
    activeUser.points = activeUser.points + Math.round(totalAmount / 3.2); // Earn points on purchase (adds up to 25 points for $79.78 checkout)

    // Update local database
    localStorage.setItem('quickdeal_active_user', JSON.stringify(activeUser));
    
    const users = JSON.parse(localStorage.getItem('quickdeal_users')) || [];
    const userIdx = users.findIndex(u => u.email === activeUser.email);
    if (userIdx > -1) {
      users[userIdx] = activeUser;
      localStorage.setItem('quickdeal_users', JSON.stringify(users));
    }

    // Reset shopping cart
    saveCart([]);
    showToast(`Order Placed Successfully! Order ID: ${newOrder.orderId}`, 'success');
    
    setTimeout(() => {
      window.location.href = 'my account.html';
    }, 2000);
  }
}

// --- DYNAMIC PROFILE PORTAL DISPLAY ---
function initDashboard() {
  const profileSection = document.querySelector('.dashboard-main');
  if (!profileSection) return;

  const activeUser = getActiveUser();
  if (!activeUser) {
    // Override profile overview to display warning sign-in request
    profileSection.innerHTML = `
      <h2 style="font-size: 2rem; margin-bottom: 24px;">Account Overview</h2>
      <div class="reward-card-empty">
        <div class="reward-icon-container" style="background-color:#c94b4b; color:#ffffff;">
          &#128274;
        </div>
        <h3>Access Denied</h3>
        <p>Please register or sign in to your QuickDeal profile to track loyalty points, orders, and rewards.</p>
        <a href="registration form.html" class="btn-primary">Sign In / Register</a>
      </div>
    `;
    return;
  }

  // Update profile avatar letter
  const avatar = document.querySelector('.profile-avatar');
  if (avatar) avatar.textContent = activeUser.firstName.charAt(0).toUpperCase();

  const titleName = document.querySelector('.profile-summary h4');
  if (titleName) titleName.textContent = `${activeUser.firstName} ${activeUser.lastName}`;

  // Update layout overview details dynamically
  const ordersCount = activeUser.orders ? activeUser.orders.length : 0;
  const pointsAmount = activeUser.points || 0;
  const rewardsAmount = ordersCount > 0 ? (pointsAmount / 10).toFixed(2) : "0.00"; // $1 reward for every 10 points

  profileSection.innerHTML = `
    <h2 style="font-size: 2rem; margin-bottom: 24px;">Welcome back, ${activeUser.firstName}!</h2>
    
    <!-- Summary Stats Boxes -->
    <div class="stats-grid">
      <div class="stat-box">
        <div class="stat-number" id="db-orders-count">${ordersCount}</div>
        <div class="stat-label">Total Orders</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" id="db-points-amount">${pointsAmount}</div>
        <div class="stat-label">Member Points</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" id="db-rewards-amount">$${rewardsAmount}</div>
        <div class="stat-label">Loyalty Reward</div>
      </div>
    </div>

    <!-- Active Orders List -->
    <div style="margin-top: 40px; margin-bottom: 40px;">
      <h3 style="font-size: 1.4rem; margin-bottom: 20px; color:var(--secondary); border-bottom:1px solid var(--border-color); padding-bottom:8px;">Recent Order History</h3>
      ${renderOrderHistory(activeUser.orders)}
    </div>

    <!-- Reward Status Placeholder (Replicating original typo statement beautifully) -->
    <div class="reward-card-empty">
      <div class="reward-icon-container">
        &#127873;
      </div>
      <h3>${ordersCount > 0 ? 'YOU HAVE LOGGED ORDERS!' : 'YOU DONT HAVE ANY REWARD.'}</h3>
      <p>${ordersCount > 0 ? `Congratulations! You have earned $${rewardsAmount} in loyalty vouchers.` : 'please buy somethimg and come back again.'}</p>
      <a href="all categories.html" class="btn-primary">Browse Categories</a>
    </div>
  `;
}

function renderOrderHistory(orders) {
  if (!orders || orders.length === 0) {
    return `<p style="color:var(--text-muted); font-size:0.95rem; font-style:italic;">No purchase transactions found yet. Explore our clothing collections above to place your first order!</p>`;
  }

  let rows = '';
  orders.forEach(ord => {
    rows += `
      <tr>
        <td style="padding:12px; font-weight:600; color:var(--secondary);">${ord.orderId}</td>
        <td style="padding:12px; color:var(--text-muted);">${ord.date}</td>
        <td style="padding:12px; text-align:center;">${ord.itemsCount}</td>
        <td style="padding:12px; font-weight:700; text-align:right;">$${ord.total.toFixed(2)}</td>
      </tr>
    `;
  });

  return `
    <div style="border:1px solid var(--border-color); border-radius:var(--radius-sm); overflow-x:auto; background:var(--bg-surface);">
      <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.95rem;">
        <thead>
          <tr style="background-color:var(--bg-base); border-bottom:1px solid var(--border-color);">
            <th style="padding:12px; color:var(--secondary); font-weight:600;">Order ID</th>
            <th style="padding:12px; color:var(--secondary); font-weight:600;">Date</th>
            <th style="padding:12px; color:var(--secondary); font-weight:600; text-align:center;">Items Qty</th>
            <th style="padding:12px; color:var(--secondary); font-weight:600; text-align:right;">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}
