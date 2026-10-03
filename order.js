/* order.js — Complete Order System */
document.addEventListener('DOMContentLoaded', () => {

  /* ── PRODUCT DATA ── */
  const PRICES = {
    '100ml': 180, '200ml': 320, '300ml': 450, '450ml': 620,
    '30ml': 120, '60ml': 160, '100ml_kids': 150
  };

  const products = [
    { id: 1, name: 'Liver Preparation', category: 'liver', label: 'Liver & Detox', desc: 'Improves liver health with Silymarin, Bhui Amla, Kutki, Amla & Ashwagandha.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 2, name: 'Liver Preparation D.S.', category: 'liver', label: 'Liver & Detox', desc: 'Double-strength liver formula for enhanced hepatic support and detoxification.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 3, name: 'Liver + Enzyme Preparation', category: 'liver', label: 'Liver & Detox', desc: 'Combined liver and enzyme formula for complete digestive and hepatic wellness.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 4, name: 'Liver Preparation with Silymarin', category: 'liver', label: 'Liver & Detox', desc: 'Premium liver formula featuring Silymarin (Milk Thistle) as the key active ingredient.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 5, name: 'Liver Drops', category: 'liver', label: 'Liver & Detox', desc: 'Convenient concentrated drops format for targeted liver care and daily detox support.', packs: ['30ml', '60ml'], cert: 'GMP' },
    { id: 6, name: 'Female Tonic with Cranberry & Aloe Vera', category: 'women', label: "Women's Wellness", desc: 'Comprehensive female health tonic with Shatavari, Cranberry, Ulatkambal & Aloe Vera.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 7, name: 'Female Tonic for Menstrual Disorders', category: 'women', label: "Women's Wellness", desc: 'Specially formulated for menstrual disorders, leucorrhoea and hormonal balance.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 8, name: 'Female Tonic Combo Pack', category: 'women', label: "Women's Wellness", desc: 'Complete combo pack pairing syrup with tablets for comprehensive female wellness.', packs: ['200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 9, name: 'Memory Booster Syrup', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Enriched with Shankhpushpi, Brahmi, Ashwagandha & Shatavari for mental clarity.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 10, name: 'Blood Purifier with Aloe Vera & Neem', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Natural blood purifier with Aloe Vera, Neem, Giloy & Kutki for clear skin and vitality.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 11, name: 'Laxative Tonic', category: 'digestive', label: 'Digestive Care', desc: 'Herbal laxative with Isabgol, Saunf & Ajwain for gentle relief from constipation.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 12, name: 'Anti-Diabetic Syrup', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Ayurvedic formula with Jamun, Neem, Methi, Karela & Punarnava for blood sugar support.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 13, name: 'Anti-Pyretic Syrup', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Contains Kababchini, Vishvabhesaj, Arjuna & Nimb for fever and pain relief support.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 14, name: 'Anti-Arthritis Syrup', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Relieves joint pain and stiffness with Turmeric, Hadjod, Sahjan & Guggul.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 15, name: 'Dengue Support Syrup', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Carica Papaya with Giloy & Tulasi for platelet support and immunity during dengue.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 16, name: 'Enzyme Syrup', category: 'digestive', label: 'Digestive Care', desc: 'Digestive enzyme formula with Chitrak, Saunth, Jeera, Chavya & Harad.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 17, name: 'Multivitamin Tonic', category: 'immunity', label: 'Immunity & Daily Care', desc: 'Complete vitality tonic with Amla, Bala, Ashwagandha, Carrot, Wheatgrass & Giloy.', packs: ['100ml', '200ml', '300ml', '450ml'], cert: 'GMP' },
    { id: 18, name: 'Baby Tonic', category: 'kids', label: 'Kids & Nutrition', desc: 'Promotes healthy growth and appetite in children with Dill Oil, Cardamom & Long Pepper.', packs: ['60ml', '100ml_kids'], cert: 'GMP' },
    { id: 19, name: 'Cough Syrup with Honey', category: 'respiratory', label: 'Respiratory Care', desc: 'Soothing cough relief with Tulsi, Shunthi, Yashtimadhu, Haldi & Vasa.', packs: ['60ml', '100ml_kids'], cert: 'GMP' },
    { id: 20, name: 'Cough Syrup with Tulasi & Vasaka', category: 'respiratory', label: 'Respiratory Care', desc: 'Traditional respiratory formula featuring Tulasi and Vasaka for cough and cold relief.', packs: ['60ml', '100ml_kids'], cert: 'GMP' }
  ];

  const packLabels = {
    '100ml': '100 ml', '200ml': '200 ml', '300ml': '300 ml', '450ml': '450 ml',
    '30ml': '30 ml', '60ml': '60 ml', '100ml_kids': '100 ml'
  };

  const getPrice = (pack) => PRICES[pack] || 180;

  /* ── CART STATE ── */
  let cart = JSON.parse(localStorage.getItem('pranaCart') || '[]');

  const saveCart = () => localStorage.setItem('pranaCart', JSON.stringify(cart));

  const getCartTotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const getCartCount = () => cart.reduce((sum, item) => sum + item.qty, 0);

  /* ── RENDER PRODUCTS ── */
  const grid = document.getElementById('orderProductGrid');
  let activeCategory = 'all';
  let searchQuery = '';

  const renderProducts = () => {
    const filtered = products.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = !searchQuery || `${p.name} ${p.desc} ${p.label}`.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:50px;color:#8a9a92">
        <p style="font:500 20px var(--display)">No products found</p>
        <p style="font-size:12px">Try a different search or category</p>
      </div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const defaultPack = p.packs[0];
      const price = getPrice(defaultPack);
      return `
      <article class="op-card" data-id="${p.id}">
        <div class="op-card-top">
          <span class="op-label">${p.label}</span>
          <span class="op-badge-cert">${p.cert} ✓</span>
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <select class="op-pack-select" data-id="${p.id}" aria-label="Select pack size for ${p.name}">
          ${p.packs.map(pk => `<option value="${pk}" data-price="${getPrice(pk)}">${packLabels[pk]} — ₹${getPrice(pk)}</option>`).join('')}
        </select>
        <div class="op-card-footer">
          <div class="op-price">
            <span class="op-price-val">₹${price}</span>
            <small>per bottle</small>
          </div>
          <div class="op-qty-wrap">
            <button class="op-qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <input class="op-qty-val" type="number" value="1" min="1" max="99" data-id="${p.id}" aria-label="Quantity">
            <button class="op-qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-add-cart" data-id="${p.id}" aria-label="Add ${p.name} to cart">
            <i data-lucide="plus"></i> Add
          </button>
        </div>
      </article>`;
    }).join('');

    lucide.createIcons();
    attachProductEvents();
  };

  const attachProductEvents = () => {
    // Pack select → update price display
    grid.querySelectorAll('.op-pack-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const card = sel.closest('.op-card');
        const price = Number(sel.selectedOptions[0].dataset.price);
        card.querySelector('.op-price-val').textContent = `₹${price}`;
      });
    });

    // Qty buttons
    grid.querySelectorAll('.op-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const input = grid.querySelector(`.op-qty-val[data-id="${id}"]`);
        let val = parseInt(input.value) || 1;
        if (btn.dataset.action === 'inc') val = Math.min(99, val + 1);
        else val = Math.max(1, val - 1);
        input.value = val;
      });
    });

    // Add to cart
    grid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        const product = products.find(p => p.id === id);
        const card = btn.closest('.op-card');
        const sel = card.querySelector('.op-pack-select');
        const pack = sel.value;
        const price = getPrice(pack);
        const qty = parseInt(card.querySelector('.op-qty-val').value) || 1;

        const existing = cart.find(item => item.id === id && item.pack === pack);
        if (existing) {
          existing.qty += qty;
        } else {
          cart.push({ id, name: product.name, pack, packLabel: packLabels[pack], price, qty });
        }
        saveCart();
        renderCart();
        updateCartBadge();

        // Button feedback
        btn.classList.add('added');
        btn.innerHTML = '<i data-lucide="check"></i> Added';
        lucide.createIcons();
        setTimeout(() => {
          btn.classList.remove('added');
          btn.innerHTML = '<i data-lucide="plus"></i> Add';
          lucide.createIcons();
        }, 1500);

        // Show mobile cart bar
        updateMobileCartBar();
      });
    });
  };

  /* ── RENDER CART ── */
  const renderCart = () => {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartSummary = document.getElementById('cartSummary');
    const proceedBtn = document.getElementById('proceedCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    const cartCount = document.getElementById('cartCount');

    const count = getCartCount();
    cartCount.textContent = `${count} item${count !== 1 ? 's' : ''}`;

    if (!cart.length) {
      cartEmpty.style.display = 'block';
      cartItems.innerHTML = '';
      cartSummary.style.display = 'none';
      proceedBtn.style.display = 'none';
      checkoutForm.style.display = 'none';
      return;
    }

    cartEmpty.style.display = 'none';
    cartSummary.style.display = 'block';

    cartItems.innerHTML = cart.map((item, idx) => `
      <div class="cart-item" data-idx="${idx}">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-pack">${item.packLabel}</div>
          <div class="cart-item-qty-price">
            <div class="cart-item-qty">
              <button class="ciq-btn" data-action="dec" data-idx="${idx}">−</button>
              <span class="ciq-val">${item.qty}</span>
              <button class="ciq-btn" data-action="inc" data-idx="${idx}">+</button>
            </div>
            <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button class="cart-item-remove" data-idx="${idx}" aria-label="Remove ${item.name}">
          <i data-lucide="x"></i>
        </button>
      </div>
    `).join('');

    const subtotal = getCartTotal();
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;

    lucide.createIcons();

    // Cart item events
    cartItems.querySelectorAll('.ciq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        if (btn.dataset.action === 'inc') cart[idx].qty = Math.min(99, cart[idx].qty + 1);
        else {
          cart[idx].qty -= 1;
          if (cart[idx].qty <= 0) cart.splice(idx, 1);
        }
        saveCart();
        renderCart();
        updateCartBadge();
        updateMobileCartBar();
        renderMobileCart();
      });
    });

    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.splice(Number(btn.dataset.idx), 1);
        saveCart();
        renderCart();
        updateCartBadge();
        updateMobileCartBar();
        renderMobileCart();
      });
    });

    // Show proceed button (not form yet)
    if (!checkoutForm.dataset.open) {
      proceedBtn.style.display = 'flex';
      checkoutForm.style.display = 'none';
    }
  };

  /* ── MOBILE CART ── */
  const renderMobileCart = () => {
    const body = document.getElementById('mobileCartBody');
    if (!body) return;

    if (!cart.length) {
      body.innerHTML = `<div style="text-align:center;padding:40px 20px;color:#8a9a92">
        <p style="font:500 18px var(--display)">Your cart is empty</p>
        <p style="font-size:12px">Add products to get started</p>
      </div>`;
      return;
    }

    const subtotal = getCartTotal();
    const total = subtotal + Math.round(subtotal * 0.05);

    body.innerHTML = `
      ${cart.map((item, idx) => `
        <div class="cart-item" data-idx="${idx}">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-pack">${item.packLabel}</div>
            <div class="cart-item-qty-price">
              <div class="cart-item-qty">
                <button class="ciq-btn" data-action="dec" data-idx="${idx}">−</button>
                <span class="ciq-val">${item.qty}</span>
                <button class="ciq-btn" data-action="inc" data-idx="${idx}">+</button>
              </div>
              <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
            </div>
          </div>
          <button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i data-lucide="x"></i></button>
        </div>
      `).join('')}
      <div class="cart-summary" style="display:block;margin-top:10px">
        <div class="cart-total-row"><span>Subtotal</span><strong>₹${subtotal.toLocaleString('en-IN')}</strong></div>
        <div class="cart-total-row cart-total-main"><span>Total (incl. GST)</span><strong>₹${total.toLocaleString('en-IN')}</strong></div>
      </div>
      <div style="padding:16px 0 0">
        <h3 style="font:500 18px var(--display);margin:0 0 14px">Delivery Details</h3>
        <form id="mobileCheckoutForm" style="display:grid;gap:12px">
          <label style="display:grid;gap:5px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#6a7e75">Full Name *<input type="text" name="name" required placeholder="Your full name" style="border:1px solid var(--line);background:var(--cream);padding:9px 11px;font-size:12px;outline:0;font-family:var(--body)"></label>
          <label style="display:grid;gap:5px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#6a7e75">Phone *<input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" style="border:1px solid var(--line);background:var(--cream);padding:9px 11px;font-size:12px;outline:0;font-family:var(--body)"></label>
          <label style="display:grid;gap:5px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#6a7e75">Delivery Address *<textarea name="address" required placeholder="House no., Street, City, State, PIN" rows="3" style="border:1px solid var(--line);background:var(--cream);padding:9px 11px;font-size:12px;outline:0;font-family:var(--body);resize:vertical"></textarea></label>
          <button type="submit" class="btn-place-order" style="margin-top:4px">
            <i data-lucide="message-circle"></i> Place Order on WhatsApp
          </button>
          <p class="checkout-note"><i data-lucide="shield-check"></i> Shared only with our care team</p>
        </form>
      </div>
    `;

    lucide.createIcons();

    body.querySelectorAll('.ciq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        if (btn.dataset.action === 'inc') cart[idx].qty = Math.min(99, cart[idx].qty + 1);
        else { cart[idx].qty -= 1; if (cart[idx].qty <= 0) cart.splice(idx, 1); }
        saveCart(); renderCart(); updateCartBadge(); updateMobileCartBar(); renderMobileCart();
      });
    });

    body.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        cart.splice(Number(btn.dataset.idx), 1);
        saveCart(); renderCart(); updateCartBadge(); updateMobileCartBar(); renderMobileCart();
      });
    });

    document.getElementById('mobileCheckoutForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      placeOrder({ name: data.get('name'), phone: data.get('phone'), address: data.get('address'), state: '', pin: '', email: '', notes: '' });
    });
  };

  const updateMobileCartBar = () => {
    const bar = document.getElementById('mobileCartBar');
    const mcbCount = document.getElementById('mcbCount');
    const count = getCartCount();
    if (window.innerWidth <= 768) {
      bar.style.display = count > 0 ? 'flex' : 'none';
      mcbCount.textContent = `${count} item${count !== 1 ? 's' : ''}`;
    } else {
      bar.style.display = 'none';
    }
  };

  /* ── CART BADGE ── */
  const updateCartBadge = () => {
    const badge = document.getElementById('cartBadge');
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'grid' : 'none';
  };

  /* ── PLACE ORDER ── */
  const placeOrder = (details) => {
    if (!cart.length) return;

    const subtotal = getCartTotal();
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;

    const itemLines = cart.map(item =>
      `• ${item.name} (${item.packLabel}) × ${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}`
    ).join('\n');

    const message = `🌿 *New Order — Prana Ayurveda*

*Customer Details:*
Name: ${details.name}
Phone: ${details.phone}
${details.email ? `Email: ${details.email}\n` : ''}Address: ${details.address}
${details.state ? `State: ${details.state}\n` : ''}${details.pin ? `PIN: ${details.pin}\n` : ''}
*Order Items:*
${itemLines}

*Order Summary:*
Subtotal: ₹${subtotal.toLocaleString('en-IN')}
GST (5%): ₹${gst.toLocaleString('en-IN')}
*Total: ₹${total.toLocaleString('en-IN')}*

${details.notes ? `Special Instructions: ${details.notes}\n` : ''}
Please confirm this order and share delivery details. Thank you! 🙏`;

    window.open(`https://wa.me/917814318466?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');

    // Clear cart
    cart = [];
    saveCart();
    renderCart();
    updateCartBadge();
    updateMobileCartBar();

    // Close mobile drawer
    closeMobileCart();

    // Show toast
    const toast = document.getElementById('orderToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);

    // Reset checkout form state
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
      checkoutForm.reset();
      delete checkoutForm.dataset.open;
    }
  };

  /* ── CHECKOUT FORM SUBMIT ── */
  document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    placeOrder({
      name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email'),
      address: data.get('address'),
      state: data.get('state'),
      pin: data.get('pin'),
      notes: data.get('notes')
    });
  });

  /* ── PROCEED TO CHECKOUT ── */
  document.getElementById('proceedCheckout')?.addEventListener('click', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    const proceedBtn = document.getElementById('proceedCheckout');
    checkoutForm.style.display = 'grid';
    checkoutForm.dataset.open = '1';
    proceedBtn.style.display = 'none';
    checkoutForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ── FILTERS ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderProducts();
    });
  });

  /* ── SEARCH ── */
  document.getElementById('orderSearch')?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProducts();
  });

  /* ── MOBILE CART DRAWER ── */
  const openMobileCart = () => {
    renderMobileCart();
    document.getElementById('mobileCartOverlay').classList.add('open');
    document.getElementById('mobileCartDrawer').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileCart = () => {
    document.getElementById('mobileCartOverlay').classList.remove('open');
    document.getElementById('mobileCartDrawer').classList.remove('open');
    document.body.style.overflow = '';
  };

  document.getElementById('mobileCartOverlay')?.addEventListener('click', closeMobileCart);
  document.getElementById('closeCartDrawer')?.addEventListener('click', closeMobileCart);
  document.getElementById('mcbViewCart')?.addEventListener('click', openMobileCart);
  document.getElementById('cartToggle')?.addEventListener('click', () => {
    if (window.innerWidth <= 768) openMobileCart();
    else document.getElementById('cartSidebar')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ── FAQ ICONS ── */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => lucide.createIcons());
  });

  /* ── INIT ── */
  renderProducts();
  renderCart();
  updateCartBadge();
  updateMobileCartBar();

  window.addEventListener('resize', updateMobileCartBar);
});
