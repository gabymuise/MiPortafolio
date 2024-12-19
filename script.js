
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de fade-in para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });

    // Validación del formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.querySelector('#contacto input[type="text"]').value;
        const email = document.querySelector('#contacto input[type="email"]').value;
        const mensaje = document.querySelector('#contacto textarea').value;

        if (nombre && email && mensaje) {
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Efecto de resaltado para los proyectos
    const proyectos = document.querySelectorAll('#portafolio .proyecto');
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', () => {
            proyecto.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            proyecto.style.transform = 'translateY(-5px)';
        });
        proyecto.addEventListener('mouseleave', () => {
            proyecto.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            proyecto.style.transform = 'translateY(0)';
        });
    });

    // Navbar fijo al hacer scroll
    const navbar = document.querySelector('header');
    const sticky = navbar.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };
});