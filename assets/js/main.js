/* ── Theme toggle ───────────────────────────────────── */
const root    = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

/* ── Mobile menu ────────────────────────────────────── */
const menuBtn    = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
    });
  });
}

/* ── Scroll reveal ──────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Reading progress bar ───────────────────────────── */
const bar     = document.getElementById('reading-progress');
const content = document.getElementById('post-content');

if (bar && content) {
  window.addEventListener('scroll', () => {
    const rect    = content.getBoundingClientRect();
    const total   = content.offsetHeight + rect.top + window.scrollY - window.innerHeight;
    const scrolled = Math.max(0, window.scrollY - (rect.top + window.scrollY - window.innerHeight));
    const pct     = Math.min(100, (scrolled / total) * 100);
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', Math.round(pct));
  }, { passive: true });
}

/* ── Reading time estimate ──────────────────────────── */
const rtEl = document.getElementById('reading-time');
if (rtEl && content) {
  const words = content.innerText.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 220));
  rtEl.textContent = mins + ' min read';
}

/* ── Back to top ────────────────────────────────────── */
const btt = document.getElementById('back-to-top');
if (btt) {
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btt.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Header scroll shadow ───────────────────────────── */
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,.08)'
      : 'none';
  }, { passive: true });
}
