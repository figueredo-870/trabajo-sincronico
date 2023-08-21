document.addEventListener('DOMContentLoaded', function() {
    let inputText = document.getElementById('inputText');
    let buttonText = document.getElementById('buttonText');
    buttonText.addEventListener('click', function() {
        var dato = inputText.value;
        if (dato) {
          localStorage.setItem('datoGuardado', dato);
          alert('Dato guardado correctamente.');
        } else {
          alert('Por favor ingresa un dato.');
        }
      })
    
  });
  /*;*/