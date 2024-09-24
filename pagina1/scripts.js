// Función para mostrar las secciones al hacer scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('section-visible');
        }
    });
});

// Carrusel simple
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
let counter = 0;
let size = carouselImages[0].clientWidth;

// Función que ajusta el tamaño al redimensionar
window.addEventListener('resize', () => {
    size = carouselImages[0].clientWidth; // Ajusta el tamaño
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Botones
document.querySelector('.next').addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.querySelector('.prev').addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Ajustar tamaño al cargar la página
window.addEventListener('load', () => {
    size = carouselImages[0].clientWidth; // Inicializar el tamaño
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});