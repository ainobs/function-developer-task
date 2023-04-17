
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const size = carousel.clientWidth;
    let counter = 0;
  
    carousel.style.transform = `translateX(-${size * counter}px)`;
  });
