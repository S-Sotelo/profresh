$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,         // Habilita el autoplay
        autoplaySpeed: 5000,    // Velocidad entre transiciones (en ms)
        arrows: true,           // Muestra las flechas de navegación
        dots: true,             // Agrega puntos para navegar
        infinite: true,         // Habilita el carrusel infinito
        slidesToShow: 1,        // Mostrar 1 imagen a la vez
        slidesToScroll: 1,      // Desliza una imagen a la vez
        speed: 1000,            // Velocidad de la animación de cambio (en ms)
        cssEase: 'ease',        // Transición suave
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Esperar a que el documento esté listo
$(document).ready(function() {
    // Función para detectar si un elemento está en la vista del usuario
    function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Agregar la animación cuando el usuario hace scroll
    $(window).on('scroll', function() {
        // Verificar cada sección
        $('section').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('fade-in'); // Añadir clase para la animación
            }
        });
    });

    // Agregar desplazamiento suave al hacer clic en los enlaces del navbar
    $(".nav-links a, .contacto").on("click", function(event) {
        event.preventDefault(); // Evita el salto instantáneo

        let targetId = $(this).attr("href").substring(1); // Obtiene el id del destino
        let targetSection = $("#" + targetId);

        if (targetSection.length) {
            $("html, body").animate({
                scrollTop: targetSection.offset().top - 70 // Ajusta la posición para evitar que quede detrás del navbar
            }, 800); // Velocidad de la animación (800ms)
        }
    });
});
