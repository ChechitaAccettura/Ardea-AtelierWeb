document.getElementById('countdown-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página

  const fechaObjetivoInput = document.getElementById('fecha-objetivo');
  const fechaObjetivoValor = fechaObjetivoInput.value;

  // Crea un objeto Date a partir del valor del input
  const fechaFin = new Date(fechaObjetivoValor).getTime();

  // Limpiar cualquier temporizador anterior para evitar múltiples ejecuciones
  if (window.intervalId) {
    clearInterval(window.intervalId);
  }

  // Función para actualizar el temporizador
  const updateCountdown = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaFin - ahora;

    // Calcula los días, horas, minutos y segundos
    const dias1 = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas1 = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos1 = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos1 = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Muestra los resultados en la página
    document.getElementById('dias1').innerText = dias1;
    document.getElementById('horas1').innerText = horas1;
    document.getElementById('minutos1').innerText = minutos1;
    document.getElementById('segundos1').innerText = segundos1;

    // Si la cuenta regresiva termina, muestra un mensaje y para el temporizador
    if (diferencia < 0) {
      clearInterval(window.intervalId);
      document.getElementById('dias1').innerText = '0';
      document.getElementById('horas1').innerText = '0';
      document.getElementById('minutos1').innerText = '0';
      document.getElementById('segundos1').innerText = '0';
      alert('¡La cuenta regresiva ha terminado!');
    }
  };

  // Llama a la función una vez para mostrar los valores inmediatamente
  updateCountdown();

  // Actualiza la cuenta regresiva cada segundo (1000 milisegundos)
  window.intervalId = setInterval(updateCountdown, 1000);
});
