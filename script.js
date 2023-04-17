const carousel = document.querySelector('.carousel');
const carouselBox = document.querySelectorAll('.carousel-box');


let counter = 0;
const size = carouselBox[0].clientWidth;

carousel.style.transform = `translateX(-${size * counter}px)`;

// carouselNext.addEventListener('click', () => {
//   if (counter >= carouselBox.length - 1) return;
//   carousel.style.transition = "transform 0.5s ease-in-out";
//   counter++;
//   carousel.style.transform = `translateX(-${size * counter}px)`;
// });

// carouselPrev.addEventListener('click', () => {
//   if (counter <= 0) return;
//   carousel.style.transition = "transform 0.5s ease-in-out";
//   counter--;
//   carousel.style.transform = `translateX(-${size * counter}px)`;
// });
