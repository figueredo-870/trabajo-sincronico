document.addEventListener('DOMContentLoaded', function() {
    var datoMostrado = document.getElementById('data');
    
    // Obtener el dato del localStorage
    var datoRecuperado = localStorage.getItem('datoGuardado');
  
    // Mostrar el dato en la página
    if (datoRecuperado) {
      datoMostrado.textContent = datoRecuperado;
    } else {
      datoMostrado.textContent = 'No se encontraron datos guardados.';
    }
  });