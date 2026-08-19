const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

// Gallery Photo Carousel (within each article)
document.querySelectorAll('.gallery-carousel-container').forEach(container => {
  const wrapper = container.querySelector('.gallery-carousel-wrapper');
  const photos = container.querySelectorAll('.gallery-media');
  const prevBtn = container.querySelector('.gallery-carousel-prev');
  const nextBtn = container.querySelector('.gallery-carousel-next');
  const dotsContainer = container.querySelector('.gallery-carousel-dots');
  
  let currentPhoto = 0;
  
  // Create dots
  photos.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `gallery-carousel-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToPhoto(idx));
    dotsContainer.appendChild(dot);
  });
  
  function updateCarousel() {
    wrapper.scrollLeft = currentPhoto * wrapper.offsetWidth;
    container.querySelectorAll('.gallery-carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentPhoto);
    });
  }
  
  function goToPhoto(n) {
    currentPhoto = (n + photos.length) % photos.length;
    updateCarousel();
  }
  
  prevBtn.addEventListener('click', () => goToPhoto(currentPhoto - 1));
  nextBtn.addEventListener('click', () => goToPhoto(currentPhoto + 1));
  window.addEventListener('resize', updateCarousel);
});
