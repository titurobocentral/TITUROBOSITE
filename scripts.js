// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(currentPath) ||
        (currentPath === '/' && link.href.includes('index'))) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

// Gallery filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('[data-category]');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter items
    const filter = btn.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (!filter || item.getAttribute('data-category') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Gallery modal
const galleryItemsClickable = document.querySelectorAll('.gallery-item');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.querySelector('.modal-close');

galleryItemsClickable.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay')?.textContent || 'Gallery image';

    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalCaption.textContent = caption;
    imageModal.classList.add('open');
  });
});

if (modalClose) {
  modalClose.addEventListener('click', () => {
    imageModal.classList.remove('open');
  });
}

if (imageModal) {
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('open');
    }
  });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal) {
    imageModal.classList.remove('open');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission (if applicable)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    // Form will submit to the action URL
    // Add any custom handling here if needed
  });
}

// Stagger animation for stat items
const stats = document.querySelectorAll('.stat');
stats.forEach((stat, index) => {
  stat.style.animationDelay = `${index * 0.1}s`;
});
