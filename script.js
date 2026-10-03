document.addEventListener('DOMContentLoaded', () => {
  const popupStyles = document.createElement('style');
  popupStyles.textContent = '.order-popup{position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center}.order-popup.is-open{display:flex}.order-popup-backdrop{position:absolute;inset:0;background:rgba(16,44,37,.72)}.order-popup-card{position:relative;z-index:1;background:var(--white);width:min(480px,calc(100% - 30px));padding:38px;box-shadow:0 25px 80px rgba(0,0,0,.25)}.order-popup-kicker{font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:var(--clay);font-weight:700}.order-popup-card h2{font:500 40px/1.03 var(--display);margin:15px 30px 12px 0}.order-popup-card p{font-size:13px;color:#657970;margin:0 0 25px}.order-popup-actions{display:grid;gap:10px}.order-popup-close{position:absolute;right:15px;top:15px;border:0;background:transparent;color:var(--ink)}.order-popup-close svg{width:19px}.order-popup-skip{text-align:center;color:#7b8c84;font-size:10px;margin-top:14px;cursor:pointer}@media(max-width:640px){.order-popup-card{padding:30px 24px}.order-popup-card h2{font-size:34px}}';
  document.head.appendChild(popupStyles);
  const mainNav = document.querySelector('.main-nav');
  if (mainNav) mainNav.innerHTML = '<a href="index.html">Home</a><a href="about.html">About</a><a href="products.html">Product range</a><a href="dosha.html">Dosha quiz</a><a href="care.html">Care programs</a><a href="rituals.html">Rituals</a><a href="stories.html">Stories</a><a href="order.html" style="color:var(--clay);font-weight:700">🛒 Order Now</a><a href="contact.html">Contact us</a>';
  const popup = document.createElement('div');
  popup.className = 'order-popup';
  popup.setAttribute('aria-hidden', 'true');
  popup.innerHTML = '<div class="order-popup-backdrop" data-close-order></div><div class="order-popup-card" role="dialog" aria-modal="true" aria-labelledby="orderPopupTitle"><button class="order-popup-close" data-close-order aria-label="Close order popup"><i data-lucide="x"></i></button><span class="order-popup-kicker">Welcome to Prana Ayurveda</span><h2 id="orderPopupTitle">Ready to start your wellness journey?</h2><p>Ask about a product, get personalised guidance, or place your first enquiry with our care team.</p><div class="order-popup-actions"><a class="button button-primary" href="https://wa.me/917814318466?text=Hello%20Prana%20Ayurveda%2C%20I%20would%20like%20to%20place%20an%20order%20or%20product%20enquiry." target="_blank" rel="noreferrer">Order now on WhatsApp <i data-lucide="message-circle"></i></a><a class="button button-outline" href="contact.html">Contact us <i data-lucide="arrow-up-right"></i></a></div><span class="order-popup-skip" data-close-order>Maybe later</span></div>';
  document.body.appendChild(popup);
  const closeOrderPopup = () => { popup.classList.remove('is-open'); popup.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); };
  popup.querySelectorAll('[data-close-order]').forEach((element) => element.addEventListener('click', closeOrderPopup));
  if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) window.setTimeout(() => { popup.classList.add('is-open'); popup.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); lucide.createIcons(); }, 900);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeOrderPopup(); });
  const uiStyles = document.createElement('style');
  uiStyles.textContent = '.live-activity{position:fixed;left:20px;bottom:20px;z-index:12;background:var(--white);border:1px solid var(--line);padding:10px 13px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 22px rgba(23,53,45,.12);font-size:10px;color:var(--ink)}.live-activity i{width:7px;height:7px;background:#39a867;border-radius:50%;display:block}.social-dock{display:flex;gap:9px;margin-top:15px}.social-dock a{width:28px;height:28px;border:1px solid rgba(255,255,255,.25);display:grid;place-items:center;color:#d8e4d7}.social-dock svg{width:13px}.countdown{font-variant-numeric:tabular-nums;color:var(--yellow);font-weight:700}.social-dock a:hover{color:var(--yellow)}@media(max-width:640px){.live-activity{left:12px;bottom:12px}.live-activity span{display:none}}';
  document.head.appendChild(uiStyles);
  const announcement = document.querySelector('.announcement');
  if (announcement && !announcement.querySelector('.countdown')) { const timer = document.createElement('span'); timer.className = 'countdown'; timer.setAttribute('aria-label', 'Offer countdown'); announcement.append(' · Offer ends in ', timer); const deadline = Date.now() + 1000 * 60 * 60 * 23; const tick = () => { const left = Math.max(0, deadline - Date.now()); const hours = String(Math.floor(left / 3600000)).padStart(2, '0'); const minutes = String(Math.floor((left % 3600000) / 60000)).padStart(2, '0'); const seconds = String(Math.floor((left % 60000) / 1000)).padStart(2, '0'); timer.textContent = `${hours}:${minutes}:${seconds}`; }; tick(); window.setInterval(tick, 1000); }
  if (!document.querySelector('.live-activity')) { const activity = document.createElement('div'); activity.className = 'live-activity'; activity.innerHTML = '<i></i><span>Live activity · <strong>7</strong> people exploring</span>'; document.body.appendChild(activity); }
  const footer = document.querySelector('.footer-top');
  if (footer && !footer.querySelector('.social-dock')) { const socials = document.createElement('div'); socials.className = 'social-dock'; socials.innerHTML = '<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i data-lucide="instagram"></i></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i data-lucide="facebook"></i></a><a href="https://wa.me/917814318466" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>'; footer.appendChild(socials); }
  const advancedStyles = document.createElement('link');
  advancedStyles.rel = 'stylesheet';
  advancedStyles.href = 'advanced.css';
  document.head.appendChild(advancedStyles);
  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = 'manifest.json';
  document.head.appendChild(manifest);
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  const header = document.querySelector('.site-header');
  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
  document.querySelectorAll('.main-nav a').forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop()) link.setAttribute('aria-current', 'page');
  });
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  lucide.createIcons();

  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle?.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`;
    lucide.createIcons();
  });

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const doshaCopy = {
    Vata: 'Start with warm water, regular meals, and slow, grounding mornings.',
    Pitta: 'Try cooling foods, a little digital distance, and soft pauses through the day.',
    Kapha: 'Wake your energy with morning movement, lighter meals, and curiosity.'
  };
  const result = document.querySelector('#doshaResult');
  document.querySelectorAll('.dosha-card').forEach((card) => {
    card.addEventListener('click', () => {
      const dosha = card.dataset.dosha;
      document.querySelectorAll('.dosha-card').forEach((item) => item.classList.remove('selected'));
      card.classList.add('selected');
      result.innerHTML = `<span>Your first step for ${dosha}:</span><strong>${doshaCopy[dosha]} <i data-lucide="arrow-right"></i></strong>`;
      result.classList.add('is-active');
      lucide.createIcons();
    });
  });

  const standardPackaging = 'Bottle with label and mono carton (Metallic, Hybrid & Matt finish)';
  const products = [
    { name: 'Liver Preparation', category: 'liver', label: 'Liver & detox', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Improves liver health and detox with Silymarin (Milk Thistle), Bhui Amla, Kutki, Amla, and Ashwagandha.', packaging: standardPackaging },
    { name: 'Liver Preparation D.S. (Double Strength)', category: 'liver', label: 'Liver & detox', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Double-strength liver preparation. Brief indication details are available from the manufacturer.', packaging: standardPackaging },
    { name: 'Liver + Enzyme Preparation', category: 'liver', label: 'Liver & detox', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Liver and enzyme preparation for a complete herbal wellness range.', packaging: standardPackaging },
    { name: 'Liver Preparation with Silymarin', category: 'liver', label: 'Liver & detox', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Liver preparation featuring Silymarin as part of the herbal formulation.', packaging: standardPackaging },
    { name: 'Liver Drops', category: 'liver', label: 'Liver & detox', pack: '30 ml / 60 ml', description: 'A convenient drops format within the Arogya liver-care range.', packaging: standardPackaging },
    { name: 'Female Tonic with Cranberry / Aloe Vera', category: 'women', label: "Women's wellness", pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'An Ayurvedic product for overall female health with Shatavari, Cranberry, Ulatkambal, Aloe vera, and other herbs.', packaging: standardPackaging },
    { name: 'Female Tonic for Menstrual Disorders / Leucorrhoea', category: 'women', label: "Women's wellness", pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'A women’s wellness tonic listed for menstrual disorders and leucorrhoea.', packaging: standardPackaging },
    { name: 'Female Tonic with Tablet (Combo Pack)', category: 'women', label: "Women's wellness", pack: '200 ml / 300 ml / 450 ml syrup + tablet', description: 'A combo pack pairing syrup with tablets for the female wellness range.', packaging: 'Bottle + 2 strips in blister packaging (Metallic, Hybrid & Matt finish)' },
    { name: 'Memory Booster Syrup with Shankhpushpi and Brahmi', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Ayurvedic memory booster tonic enriched with Shankhpushpi, Brahmi, Ashwagandha, Shatavari, and many more herbs.', packaging: standardPackaging },
    { name: 'Blood Purifier with Aloe Vera and Neem', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Ayurvedic blood purifier syrup with Aloe vera, Neem, Giloy, Kutki, and other natural ingredients.', packaging: standardPackaging },
    { name: 'Laxative Tonic', category: 'digestive', label: 'Digestive care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Herbal laxative syrup for habitual constipation with Isabgol husk, Saunf, Ajwain, and other ingredients.', packaging: standardPackaging },
    { name: 'Anti-Diabetic Syrup with Neem, Karela, Methi and Jamun Beej', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Ayurvedic herbal anti-diabetic liquid with extracts of Jamun, Neem, Methi beej, Karela, and Punarnava.', packaging: standardPackaging },
    { name: 'Anti-Pyretic Syrup', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Contains Kababchini, Vishvabhesaj, Arjuna, and Nimb for analgesic and anti-pyretic support.', packaging: standardPackaging },
    { name: 'Anti-Arthritis Syrup with Hadjod and Sahjan', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Helps alleviate symptoms of arthritis such as joint pain, inflammation, and stiffness. Common ingredients include Turmeric, Hadjod, Sahjan, and Guggul.', packaging: standardPackaging },
    { name: 'Syrup for Dengue with Papaya, Giloy and Tulasi', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Carica papaya with Giloy extract syrup, described for platelet support, immunity, and dengue symptom support.', packaging: standardPackaging },
    { name: 'Enzyme Syrup', category: 'digestive', label: 'Digestive care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Improves liver health and detox with Chitrak, Saunth, Jeera, Chavya, Lavang, Tejpatra, Harad, and Ajwain.', packaging: standardPackaging },
    { name: 'Multivitamin Tonic', category: 'immunity', label: 'Immunity & daily care', pack: '100 ml / 200 ml / 300 ml / 450 ml', description: 'Natural supplement designed to enhance overall health and vitality with Amla, Bala, Ashwagandha, Carrot, Wheatgrass, Giloy, and more.', packaging: standardPackaging },
    { name: 'Baby Tonic (Teething, Digestion, Vomiting & Growth)', category: 'kids', label: 'Kids & nutrition', pack: '60 ml / 100 ml', description: 'Improves appetite and promotes weight gain and healthy growth, enriched with Dill Oil, Cardamom, and Long Pepper.', packaging: standardPackaging },
    { name: 'Cough Syrup with Honey', category: 'respiratory', label: 'Respiratory care', pack: '60 ml / 100 ml', description: 'Cough-relieving syrup formulated with Ayurvedic herbs such as Tulsi, Shunthi, Yashtimadhu, Haldi, and Vasa.', packaging: standardPackaging },
    { name: 'Cough Syrup with Tulasi / Vasaka', category: 'respiratory', label: 'Respiratory care', pack: '60 ml / 100 ml', description: 'A cough syrup featuring Tulasi and Vasaka in the respiratory-care range.', packaging: standardPackaging }
  ];
  const productGrid = document.querySelector('#productGrid');
  const productSearch = document.querySelector('#productSearch');
  const productFilter = document.querySelector('#productFilter');
  const productCount = document.querySelector('#productCount');
  const productModal = document.querySelector('#productModal');
  const renderProducts = () => {
    const query = productSearch.value.trim().toLowerCase();
    const category = productFilter.value;
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch = !query || `${product.name} ${product.description} ${product.label}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    productCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'formula' : 'formulas'}`;
    productGrid.innerHTML = filtered.length ? filtered.map((product, index) => { const productIndex = products.indexOf(product); const message = encodeURIComponent(`Hello, I would like to enquire about ${product.name}. Pack size: ${product.pack}.`); return `<article class="product-card reveal visible" data-product-index="${productIndex}"><div class="product-icon">${String(index + 1).padStart(2, '0')}</div><div><span>${product.label}</span><h3>${product.name}</h3><p>${product.description}</p><small>${product.pack}</small></div><button class="product-view" aria-label="View ${product.name} details"><i data-lucide="arrow-up-right"></i></button><a class="product-whatsapp" href="https://wa.me/917814318466?text=${message}" target="_blank" rel="noreferrer" aria-label="Ask about ${product.name} on WhatsApp"><i data-lucide="message-circle"></i></a></article>`; }).join('') : '<div class="empty-products"><i data-lucide="search-x"></i><strong>No formulas found</strong><span>Try another search or category.</span></div>';
    lucide.createIcons();
    productGrid.querySelectorAll('.product-card').forEach((card) => card.addEventListener('click', (event) => { if (event.target.closest('.product-whatsapp')) return; openProduct(Number(card.dataset.productIndex)); }));
    productGrid.querySelectorAll('.product-whatsapp').forEach((link) => link.addEventListener('click', (event) => event.stopPropagation()));
  };
  const openProduct = (index) => {
    const product = products[index];
    document.querySelector('#modalCategory').textContent = product.label;
    document.querySelector('#modalTitle').textContent = product.name;
    document.querySelector('#modalDescription').textContent = product.description;
    document.querySelector('#modalPack').textContent = product.pack;
    document.querySelector('#modalPackaging').textContent = product.packaging;
    productModal.classList.add('is-open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };
  const closeProduct = () => {
    productModal.classList.remove('is-open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };
  productSearch?.addEventListener('input', renderProducts);
  productFilter?.addEventListener('change', renderProducts);
  productModal?.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeProduct));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProduct(); });
  document.querySelector('#catalogPrint')?.addEventListener('click', () => window.print());
  renderProducts();

  const quizQuestions = [
    { question: 'Your energy through the day is usually...', options: [{ text: 'Creative but changeable', score: 'Vata' }, { text: 'Focused and driven', score: 'Pitta' }, { text: 'Steady and calm', score: 'Kapha' }] },
    { question: 'When you are under pressure, you tend to...', options: [{ text: 'Feel restless or overthink', score: 'Vata' }, { text: 'Become impatient or intense', score: 'Pitta' }, { text: 'Withdraw or move slowly', score: 'Kapha' }] },
    { question: 'Your natural pace feels most like...', options: [{ text: 'Fast, light, and spontaneous', score: 'Vata' }, { text: 'Purposeful, warm, and precise', score: 'Pitta' }, { text: 'Grounded, patient, and consistent', score: 'Kapha' }] }
  ];
  const quizModal = document.querySelector('#quizModal');
  const quizQuestion = document.querySelector('#quizQuestion');
  const quizOptions = document.querySelector('#quizOptions');
  const quizProgress = document.querySelector('#quizProgress');
  const quizBack = document.querySelector('#quizBack');
  let quizStep = 0;
  let quizScores = { Vata: 0, Pitta: 0, Kapha: 0 };
  const showQuizQuestion = () => {
    const current = quizQuestions[quizStep];
    quizQuestion.textContent = current.question;
    quizOptions.innerHTML = current.options.map((option) => `<button class="quiz-option" type="button" data-score="${option.score}">${option.text}</button>`).join('');
    quizProgress.textContent = `Question ${quizStep + 1} of ${quizQuestions.length}`;
    quizBack.classList.toggle('is-visible', quizStep > 0);
    quizOptions.querySelectorAll('.quiz-option').forEach((option) => option.addEventListener('click', () => {
      quizScores[option.dataset.score] += 1;
      if (quizStep < quizQuestions.length - 1) { quizStep += 1; showQuizQuestion(); } else {
        const resultDosha = Object.entries(quizScores).sort((first, second) => second[1] - first[1])[0][0];
        quizQuestion.textContent = `Your starting rhythm is ${resultDosha}.`;
        quizOptions.innerHTML = `<p class="quiz-result-copy">${doshaCopy[resultDosha]} Use this as a gentle starting point, then speak with a qualified practitioner for personalised guidance.</p><a class="button button-primary" href="#booking" data-close-quiz>Continue with a consultation <i data-lucide="arrow-up-right"></i></a>`;
        quizProgress.textContent = 'Your result';
        quizBack.classList.remove('is-visible');
        lucide.createIcons();
        quizOptions.querySelector('[data-close-quiz]')?.addEventListener('click', closeQuiz);
      }
    }));
  };
  const openQuiz = () => { quizStep = 0; quizScores = { Vata: 0, Pitta: 0, Kapha: 0 }; quizModal.classList.add('is-open'); quizModal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); showQuizQuestion(); };
  const closeQuiz = () => { quizModal.classList.remove('is-open'); quizModal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); };
  document.querySelector('#quizLaunch')?.addEventListener('click', openQuiz);
  quizModal?.querySelectorAll('[data-close-quiz]').forEach((element) => element.addEventListener('click', closeQuiz));
  quizBack?.addEventListener('click', () => { if (quizStep > 0) { quizStep -= 1; showQuizQuestion(); } });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeQuiz(); });

  const languageToggle = document.querySelector('#languageToggle');
  const languageItems = [{ selector: '.main-nav a:nth-child(1)', en: 'Our approach', hi: 'हमारा तरीका' }, { selector: '.main-nav a:nth-child(2)', en: 'Product range', hi: 'उत्पाद रेंज' }, { selector: '.main-nav a:nth-child(3)', en: 'Discover your dosha', hi: 'अपना दोष जानें' }, { selector: '.main-nav a:nth-child(4)', en: 'Daily rituals', hi: 'रोज़ के रिचुअल्स' }, { selector: '.main-nav a:nth-child(5)', en: 'Stories', hi: 'कहानियां' }, { selector: '.header-cta', en: 'Consult an expert ↗', hi: 'विशेषज्ञ से बात करें ↗' }];
  let isHindi = false;
  languageToggle?.addEventListener('click', () => { isHindi = !isHindi; languageItems.forEach((item) => { const element = document.querySelector(item.selector); if (element) element.textContent = isHindi ? item.hi : item.en; }); languageToggle.textContent = isHindi ? 'EN' : 'हिंदी'; document.documentElement.lang = isHindi ? 'hi' : 'en'; });

  const ritualDetails = {
    'warm-water': 'Keep a mug by your bed and sip warm water before reaching for your phone.',
    abhyanga: 'Warm a little sesame or coconut oil, massage slowly, and rinse after 10 minutes.',
    'digital-sunset': 'Dim the lights, put your phone away, and give your nervous system room to settle.'
  };
  document.querySelectorAll('.ritual-list > div').forEach((ritual) => {
    const toggleRitual = () => {
      const isOpen = ritual.classList.toggle('is-open');
      ritual.setAttribute('aria-expanded', String(isOpen));
      let detail = ritual.querySelector('.ritual-detail');
      if (isOpen && !detail) {
        detail = document.createElement('small');
        detail.className = 'ritual-detail';
        detail.textContent = ritualDetails[ritual.dataset.ritual];
        ritual.append(detail);
      }
    };
    ritual.addEventListener('click', toggleRitual);
    ritual.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleRitual();
      }
    });
  });

  const bookingForm = document.querySelector('#bookingForm');
  const toast = document.querySelector('.toast');
  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const message = encodeURIComponent(`Hello Prana Ayurveda, my name is ${formData.get('name')}. My email is ${formData.get('email')}. I would like to explore: ${formData.get('interest')}.`);
    bookingForm.reset();
    toast.classList.add('show');
    window.open(`https://wa.me/917814318466?text=${message}`, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => toast.classList.remove('show'), 4500);
  });
});
