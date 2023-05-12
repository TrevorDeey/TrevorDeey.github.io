$(document).ready(function(){
  // Agregar el efecto de desplazamiento suave en todos los enlaces internos
  $("a[href^='#']").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  var mousePositionY = 0;
  var scrollSpeed = 2;
  var autoScrollActive = false;

  // Función para desplazar la página automáticamente según la posición del ratón
  function autoScroll() {
    if (!autoScrollActive) return;

    if (mousePositionY > window.innerHeight / 2) {
      window.scrollBy(0, scrollSpeed);
    } else if (mousePositionY < window.innerHeight / 2) {
      window.scrollBy(0, -scrollSpeed);
    }
    window.requestAnimationFrame(autoScroll);
  }

  // Actualizar la posición del ratón en el evento 'mousemove'
  $(document).on('mousemove', function(event) {
    mousePositionY = event.clientY;
  });

  // Iniciar la animación de desplazamiento automático cuando el ratón entra en la ventana
  $(document).on('mouseenter', function() {
    autoScrollActive = true;
    window.requestAnimationFrame(autoScroll);
  });

  // Detener la animación de desplazamiento automático cuando el ratón sale de la ventana
  $(document).on('mouseleave', function() {
    autoScrollActive = false;
  });
});
