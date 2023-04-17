const carousel = document.getElementsByClassName('.carousel');

document.addEventListener('DOMContentLoaded', () => {

    const size = carousel.clientWidth;
    let counter = 0;
  
    carousel.style.transform = `translateX(-${size * counter}px)`;
  });
