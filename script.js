const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.bx');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 1;
const size = 800;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform o.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform o.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

