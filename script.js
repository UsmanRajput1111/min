
const toggleBtn = document.getElementById("toggleBtn");
const navbarContent = document.getElementById("navbarSupportedContent");

toggleBtn.addEventListener("click", () => {
  navbarContent.classList.toggle("show");
});

const navbarDropdown = document.getElementById("navbarDropdown");
const dropdownMenu = document.querySelector('.dropdown-menu');

if (navbarDropdown && dropdownMenu) {
  navbarDropdown.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!navbarDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      navbarContent.classList.remove("show");
    }
  });
});


const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 30px rgba(171, 71, 188, 0.6)';
    navbar.style.transition = 'all 0.3s ease';
  } else {
    navbar.style.boxShadow = '0 4px 20px rgba(171, 71, 188, 0.4)';
  }
  
  lastScroll = currentScroll;
});


const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.card, .content-image, .content-paragraph, .hero-text');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
    
    const cardTitle = this.querySelector('.card-title');
    if (cardTitle) {
      console.log(`Clicked on: ${cardTitle.textContent}`);
    }
  });
});


const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6b9d, #ab47bc);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: none;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(171, 71, 188, 0.5);
  transition: all 0.3s ease;
`;
document.body.appendChild(backToTopBtn);


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopBtn.addEventListener('mouseenter', () => {
  backToTopBtn.style.transform = 'scale(1.1)';
  backToTopBtn.style.boxShadow = '0 6px 25px rgba(171, 71, 188, 0.7)';
});

backToTopBtn.addEventListener('mouseleave', () => {
  backToTopBtn.style.transform = 'scale(1)';
  backToTopBtn.style.boxShadow = '0 4px 20px rgba(171, 71, 188, 0.5)';
});


const copyrightElement = document.querySelector('.container-fluid:last-of-type h5');
if (copyrightElement && copyrightElement.textContent.includes('Copyright')) {
  const currentYear = new Date().getFullYear();
  copyrightElement.innerHTML = copyrightElement.innerHTML.replace(
    /Copyright Usman Rajput/,
    `&copy; Copyright ${currentYear} Usman Rajput`
  );
}


const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.container-fluid');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function() {
    this.style.opacity = '1';
  });

  img.addEventListener('error', function() {
    this.style.opacity = '0.5';
    console.warn('Image failed to load:', this.src);
  });
});


const heroSpan = document.querySelector('.hero-text h5 span');
if (heroSpan) {
  const originalText = heroSpan.textContent;
  heroSpan.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < originalText.length) {
      heroSpan.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  setTimeout(typeWriter, 500);
}

console.log('%c🚀 Website Enhanced with JavaScript!', 'color: #ff6b9d; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Usman Rajput', 'color: #ab47bc; font-size: 14px;');
