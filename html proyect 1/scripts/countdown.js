// 1. Define la fecha final
const fechaObjetivo = new Date("2025-12-31T23:59:59").getTime(); // cambia esta fecha según necesites

// aca despues va a ir un cuadro para obtener la fecha de un prompt 
// y que la pagina arroje cuanto falta para TUUUU

// 2. Obtiene los elementos HTML donde se mostrará la cuenta regresiva
const diasHTML = document.getElementById("dias");
const horasHTML = document.getElementById("horas");
const minutosHTML = document.getElementById("minutos");
const segundosHTML = document.getElementById("segundos");

// 3. Configura el intervalo para actualizar cada segundo
const intervalo = setInterval(() => {

    // 4. Obtiene la fecha actual
    const fechaActual = new Date().getTime();

    // 5. Calcula la diferencia de tiempo
    const diferencia = fechaObjetivo - fechaActual;

    // 6. Calcula los días, horas, minutos y segundos restantes
    // 1 día = 24 * 60 * 60 * 1000 milisegundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    // 1 hora = 60 * 60 * 1000 milisegundos
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // 1 minuto = 60 * 1000 milisegundos
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // 7. Muestra los valores en los elementos HTML
    diasHTML.innerHTML = dias;
    horasHTML.innerHTML = horas;
    minutosHTML.innerHTML = minutos;
    segundosHTML.innerHTML = segundos;

    // 8. Si la cuenta regresiva llega a cero, detiene el intervalo
    if (diferencia < 0) {
        clearInterval(intervalo);
        // 9. Actualiza el contenido para mostrar un mensaje final
        document.getElementById("contador").innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000); // 1000 milisegundos = 1 segundo
