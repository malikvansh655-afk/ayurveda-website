document.addEventListener('DOMContentLoaded', () => {
  const uiStyles = document.createElement('style');
  uiStyles.textContent = '.live-activity{position:fixed;left:20px;bottom:20px;z-index:12;background:var(--white);border:1px solid var(--line);padding:10px 13px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 22px rgba(23,53,45,.12);font-size:10px;color:var(--ink)}.live-activity i{width:7px;height:7px;background:#39a867;border-radius:50%;display:block}.social-dock{display:flex;gap:9px;margin-top:15px}.social-dock a{width:28px;height:28px;border:1px solid rgba(255,255,255,.25);display:grid;place-items:center;color:#d8e4d7}.social-dock svg{width:13px}.social-dock a:hover{color:var(--yellow)}.countdown{font-variant-numeric:tabular-nums;color:var(--yellow);font-weight:700}.map-frame{height:390px;border:1px solid var(--line);overflow:hidden}.map-frame iframe{border:0;width:100%;height:100%}@media(max-width:640px){.live-activity{left:12px;bottom:12px}.live-activity span{display:none}.map-frame{height:290px}}';
  document.head.appendChild(uiStyles);
  const announcement = document.querySelector('.announcement');
  if (announcement && !announcement.querySelector('.countdown')) { const timer = document.createElement('span'); timer.className = 'countdown'; announcement.append(' · Offer ends in ', timer); const deadline = Date.now() + 1000 * 60 * 60 * 23; const tick = () => { const left = Math.max(0, deadline - Date.now()); timer.textContent = `${String(Math.floor(left / 3600000)).padStart(2, '0')}:${String(Math.floor((left % 3600000) / 60000)).padStart(2, '0')}:${String(Math.floor((left % 60000) / 1000)).padStart(2, '0')}`; }; tick(); window.setInterval(tick, 1000); }
  if (!document.querySelector('.live-activity')) { const activity = document.createElement('div'); activity.className = 'live-activity'; activity.innerHTML = '<i></i><span>Live activity · <strong>7</strong> people exploring</span>'; document.body.appendChild(activity); }
  const footer = document.querySelector('.footer-top');
  if (footer && !footer.querySelector('.social-dock')) { const socials = document.createElement('div'); socials.className = 'social-dock'; socials.innerHTML = '<a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><i data-lucide="instagram"></i></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i data-lucide="facebook"></i></a><a href="https://wa.me/917814318466" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>'; footer.appendChild(socials); }
  if (window.location.pathname.endsWith('contact.html') && !document.querySelector('.map-frame')) { const map = document.createElement('section'); map.className = 'inner-wrap contact-map'; map.innerHTML = '<div class="page-heading"><span class="kicker">Find your care team</span><h2>Rooted in <em>North India.</em></h2><p>Our supplied company information connects the range with Haridwar and Panchkula. Confirm visit details before travelling.</p></div><div class="map-frame"><iframe title="Google Map showing Haridwar and Panchkula region" src="https://www.google.com/maps?q=Haridwar%20Uttarakhand%20India&output=embed" loading="lazy"></iframe></div>'; document.querySelector('main')?.appendChild(map); }
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
  const mainNav = document.querySelector('.main-nav');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (mainNav) mainNav.innerHTML = '<a href="index.html">Home</a><a href="about.html">About</a><a href="products.html">Product range</a><a href="dosha.html">Dosha quiz</a><a href="care.html">Care programs</a><a href="rituals.html">Rituals</a><a href="stories.html">Stories</a><a href="order.html" style="color:var(--clay);font-weight:700">🛒 Order Now</a><a href="contact.html">Contact us</a>';
  document.querySelectorAll('.main-nav a').forEach((link) => { if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page'); });
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  lucide.createIcons();
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    lucide.createIcons();
  });
  const form = document.querySelector('.contact-form');
  if (form && !form.querySelector('.appointment-fields')) {
    const appointmentFields = document.createElement('div');
    appointmentFields.className = 'appointment-fields';
    appointmentFields.innerHTML = '<label>Preferred date<input type="date" name="date"></label><label>Preferred time<select name="time"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>';
    form.querySelector('textarea')?.closest('label')?.before(appointmentFields);
  }
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = encodeURIComponent(`Hello Prana Ayurveda, my name is ${data.get('name')}. Email: ${data.get('email')}. Interest: ${data.get('interest')}. Preferred date: ${data.get('date') || 'Not specified'}. Preferred time: ${data.get('time') || 'Not specified'}. Message: ${data.get('message')}`);
    window.open(`https://wa.me/917814318466?text=${message}`, '_blank', 'noopener,noreferrer');
    form.reset();
    const status = document.querySelector('.form-status');
    if (status) status.textContent = 'Your WhatsApp message is ready. We will be in touch shortly.';
  });
  const quiz = document.querySelector('#pageQuiz');
  if (quiz) {
    const questions = [
      ['Your energy feels...', ['Creative but changeable', 'Focused and driven', 'Steady and calm']],
      ['When stressed, you...', ['Overthink or feel restless', 'Become impatient or intense', 'Withdraw or slow down']],
      ['Your natural pace is...', ['Fast and spontaneous', 'Purposeful and precise', 'Grounded and consistent']]
    ];
    const scores = [0, 0, 0]; let step = 0;
    const question = quiz.querySelector('[data-question]'); const options = quiz.querySelector('[data-options]'); const progress = quiz.querySelector('[data-progress]'); const result = quiz.querySelector('[data-result]');
    const render = () => { question.textContent = questions[step][0]; progress.textContent = `Question ${step + 1} of ${questions.length}`; options.innerHTML = questions[step][1].map((text, index) => `<button type="button" data-answer="${index}">${text}</button>`).join(''); options.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => { scores[Number(button.dataset.answer)] += 1; if (step < questions.length - 1) { step += 1; render(); } else { const winner = ['Vata', 'Pitta', 'Kapha'][scores.indexOf(Math.max(...scores))]; quiz.querySelector('.quiz-question-wrap').hidden = true; result.hidden = false; result.innerHTML = `<strong>Your rhythm leans ${winner}.</strong><small>Start gently with a personalised consultation. This quiz is educational, not a diagnosis.</small><a class="button button-primary" href="contact.html">Talk to an expert <i data-lucide="arrow-up-right"></i></a>`; lucide.createIcons(); } })); };
    render();
  }
});
