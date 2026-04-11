// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.about__label, .about__heading, .about__subtext, .about__visual-side, .expect__title, .polaroid, .quote__text, .pricing__tier, .pricing__images, .contact__shell, .contact__info'
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
    { threshold: 0.15 }
  );

  targets.forEach(el => observer.observe(el));

  // Circle animation on "gathering"
  const gatheringEl = document.querySelector('.quote__text em');
  if (gatheringEl) {
    const gatheringObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gatheringEl.classList.add('animated');
          gatheringObs.unobserve(gatheringEl);
        }
      });
    }, { threshold: 0.5 });
    gatheringObs.observe(gatheringEl);
  }

  // Mouse glow effect on pricing cards
  document.querySelectorAll('.pricing__tier').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
});
