
// Animate sections on scroll
const faders = document.querySelectorAll('.fade-up, .slide-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => appearOnScroll.observe(el));
