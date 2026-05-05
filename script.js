// ═══════════════════════════════════════════
// NAV — scroll state + mobile toggle
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  // Add scrolled class once user moves past hero crest
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('is-open')) return;
      if (e.target.closest('.nav')) return;
      menu.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  // ═══════════════════════════════════════════
  // EXPERIENCE CARDS — tap-to-reveal on touch devices
  // ═══════════════════════════════════════════
  const isTouch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
  if (isTouch) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const wasOpen = card.classList.contains('is-open');
        cards.forEach(c => c.classList.remove('is-open'));
        if (!wasOpen) card.classList.add('is-open');
      });
    });

    // Close any open card when tapping outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.card')) {
        cards.forEach(c => c.classList.remove('is-open'));
      }
    });
  }

  // ═══════════════════════════════════════════
  // FAQ — single-open accordion
  // ═══════════════════════════════════════════
  document.querySelectorAll('[data-faq]').forEach(list => {
    const items = list.querySelectorAll('[data-faq-item]');
    items.forEach(item => {
      const trigger = item.querySelector('.faq__trigger');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        items.forEach(other => {
          other.classList.remove('is-open');
          const t = other.querySelector('.faq__trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  // ═══════════════════════════════════════════
  // MARQUEE — apply per-logo gradient vars
  // ═══════════════════════════════════════════
  document.querySelectorAll('.marquee__logo').forEach(el => {
    const from = el.dataset.gradFrom;
    const via = el.dataset.gradVia;
    const to = el.dataset.gradTo;
    if (from) el.style.setProperty('--grad-from', from);
    if (via) el.style.setProperty('--grad-via', via);
    if (to) el.style.setProperty('--grad-to', to);
  });

  // ═══════════════════════════════════════════
  // SCROLL REVEAL
  // ═══════════════════════════════════════════
  const targets = document.querySelectorAll(
    '.value__headline, .value__copy, .stats, .experience__head, .card, .manifesto__quote, .manifesto__sign, .split__media, .split__text, .pricing__head, .tier'
  );
  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach(el => observer.observe(el));
});
