import './style.css';

// Initialize Lucide icons
lucide.createIcons();

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const navCta = document.querySelector('.nav-cta');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    navCta.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      navCta.classList.remove('active');
    }
  });
});

// Initialize tsParticles
if (window.tsParticles) {
  window.tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "stars",
      background: {
        color: "transparent",
      },
      particles: {
        color: {
          value: "#F3A323" // Warna aksen oranye
        },
        links: {
          enable: true,
          color: "#F3A323",
          opacity: 0.2
        },
        move: {
          enable: true,
          speed: 0.5
        },
        number: {
          value: 60
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 2
        }
      }
    }
  });
}

// Anime.js Animations
document.addEventListener('DOMContentLoaded', () => {
  // Hero section entry animation
  anime({
    targets: '.hero-content h1, .hero-content .badge, .hero-content p, .hero-content .hero-buttons, .hero-content .stats',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(150, {start: 300}),
    easing: 'easeOutExpo',
    duration: 1200
  });

  anime({
    targets: '.hero-image-img',
    translateX: [50, 0],
    opacity: [0, 1],
    delay: 800,
    easing: 'easeOutExpo',
    duration: 1200
  });

  anime({
    targets: '.floating-card',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: 1200,
    easing: 'easeOutElastic(1, .8)',
    duration: 1500
  });

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.about-image, .about-content, .section-header, .menu-card');
  
  // Hide initially
  revealElements.forEach(el => {
    el.style.opacity = '0';
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: entry.target.classList.contains('menu-card') ? anime.stagger(100) : 0
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
});
