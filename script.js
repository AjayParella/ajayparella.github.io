(() => {
  const root = document.documentElement;
  const switchButton = document.getElementById('theme-switch');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  const toast = document.getElementById('toast');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function updateThemeLabel() {
    if (switchButton) switchButton.setAttribute('aria-label', root.dataset.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', root.dataset.theme === 'light' ? '#f8f8f4' : '#0b1117');
  }
  updateThemeLabel();
  if (switchButton) switchButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('ajay-portfolio-theme', root.dataset.theme); } catch (_) { /* storage may be disabled */ }
    updateThemeLabel();
  });

  function closeMenu() {
    nav.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  }
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) { closeMenu(); return; }
      nav.classList.add('is-open');
      menuButton.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Close navigation');
      document.body.classList.add('nav-open');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  }

  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  const copyButton = document.getElementById('copy-email');
  if (copyButton) copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      showToast('Email address copied to clipboard');
    } catch (_) {
      // Fallback for local file previews and browsers without clipboard permission.
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (_) { /* no clipboard permission */ }
      input.remove();
      showToast(copied ? 'Email address copied to clipboard' : 'Email: ' + email);
    }
  });

  // Scroll-linked diagram: subtle architecture progress, no animation dependency.
  const flow = document.getElementById('stack-flow');
  if (flow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    flow.classList.add('is-motion-ready');
    const nodes = [...flow.querySelectorAll('.stack-flow-node')];
    let flowTickPending = false;
    function updateFlow() {
      const top = flow.getBoundingClientRect().top;
      const start = window.innerHeight * 0.84;
      const end = window.innerHeight * 0.24;
      const progress = Math.max(0, Math.min(1, (start - top) / (start - end)));
      flow.style.setProperty('--flow-progress', progress.toFixed(3));
      nodes.forEach((node, index) => node.classList.toggle('active', progress >= [0.04, 0.5, 0.92][index]));
      flowTickPending = false;
    }
    function scheduleFlowUpdate() {
      if (flowTickPending) return;
      flowTickPending = true;
      requestAnimationFrame(updateFlow);
    }
    window.addEventListener('scroll', scheduleFlowUpdate, { passive: true });
    window.addEventListener('resize', scheduleFlowUpdate, { passive: true });
    scheduleFlowUpdate();
  }

  // Content is visible by default if JavaScript is unavailable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('js-enabled');
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    elements.forEach(el => observer.observe(el));
  }
})();
