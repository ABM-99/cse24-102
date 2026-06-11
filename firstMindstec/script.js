// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// Dropdown toggle
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId).parentElement;
  const allDropdowns = document.querySelectorAll('.dropdown');
  
  // Close other dropdowns
  allDropdowns.forEach(d => {
    if (d !== dropdown) {
      d.classList.remove('active');
    }
  });
  
  // Toggle current dropdown
  dropdown.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('active');
    });
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// FAQ accordion
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const allFaqItems = document.querySelectorAll('.faq-item');
  
  // Close other FAQ items
  allFaqItems.forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current FAQ item
  faqItem.classList.toggle('active');
}

// Scroll reveal animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.feature-block, .testimonial-card, .integration-card, .faq-item');
  
  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        document.getElementById('mobileMenu').classList.remove('active');
      }
    }
  });
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    const scrolled = window.pageYOffset;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Keyboard navigation for dropdowns
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close all dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('active');
    });
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('active');
  }
});

// Prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable animations
  document.querySelectorAll('.letter').forEach(el => {
    el.style.animation = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
