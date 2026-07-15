// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('done'), 400);
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
  '.about-grid, .service-card, .direction-card, .why-grid, .contact-grid, .gallery-item'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

// ===== Gallery: try to load images/look-1.jpg ... look-8.jpg =====
// Replace these files in the images/ folder with your real outfit photos.
// If a file isn't found, a placeholder tile shows instead so the layout never breaks.
const galleryGrid = document.getElementById('galleryGrid');
const TOTAL_LOOKS = 8;
const LOOK_NAMES = {
  1: 'Denim corset & wide-leg trousers',
  2: 'Tribal print jumpsuit',
  3: 'Tie-dye wrap dress',
  4: 'Ankara flare trousers',
};

for (let i = 1; i <= TOTAL_LOOKS; i++) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = `images/look-${i}.jpg`;
  img.alt = LOOK_NAMES[i] ? `Esther Couture — ${LOOK_NAMES[i]}` : `Esther Couture look ${i}`;
  img.loading = 'lazy';

  const placeholder = document.createElement('span');
  placeholder.textContent = `Add photo\nimages/look-${i}.jpg`;

  img.onerror = () => {
    img.remove();
    item.appendChild(placeholder);
  };

  item.appendChild(img);
  galleryGrid.appendChild(item);
}
