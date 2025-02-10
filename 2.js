let loveCount = 0; // Contador para los mensajes bonitos
const maxLove = 10; // Número de mensajes necesarios para llenar el corazón
const heart = document.getElementById("heart-inner"); // El corazón
const messageBox = document.getElementById("messageBox"); // Caja de mensajes
const inputTexto = document.getElementById("inputTexto"); // Campo de texto
const submitButton = document.getElementById("submitButton"); // Botón de envío

// Función para agregar amor al corazón cuando el usuario escribe algo bonito
function addLove() {
    let inputMessage = inputTexto.value.trim(); // Obtener el texto escrito
    if (inputMessage && loveCount < maxLove) {
        messageBox.textContent += `\n💖 "${inputMessage}" 💖`; // Mostrar el mensaje en la caja
        loveCount++; // Incrementar el contador
        updateHeart(); // Actualizar el corazón
        inputTexto.value = ''; // Limpiar el campo de texto
    }

    // Si se llega al límite de 10 mensajes, deshabilitar el campo de texto y el botón
    if (loveCount >= maxLove) {
        inputTexto.disabled = true; // Deshabilitar el campo de texto
        submitButton.disabled = true; // Deshabilitar el botón
        messageBox.textContent += `\n💖 ¡El corazón está completamente lleno de amor! 💖`; // Mensaje final
    }
}

function updateHeart() {
    // Progresivamente cambiar el color del corazón con el número de mensajes
    const fillPercentage = (loveCount / maxLove); // Porcentaje de llenado
    const scaleAmount = 1 + (fillPercentage) * 0.5; // Aumentar el tamaño del corazón

    heart.style.transform = `scale(${scaleAmount})`; // Cambiar el tamaño del corazón

    // Cálculo de los colores graduales entre negro y rojo
    const r = Math.min(255, Math.floor(44 + (fillPercentage * (255 - 44)))); // Rojo gradualmente más fuerte
    const g = Math.min(95, Math.floor(95 + (fillPercentage * (0 - 95)))); // Verde gradualmente desapareciendo
    const b = Math.min(175, Math.floor(175 + (fillPercentage * (0 - 175)))); // Azul gradualmente desapareciendo

    const heartColor = `rgb(${r}, ${g}, ${b})`; // Gradual de negro a rojo

    heart.style.backgroundColor = heartColor; // Cambiar el color del corazón
    heart.style.setProperty('--color-heart', heartColor); // Cambiar el color de las bolitas usando la variable CSS
}

// Evento para detectar la tecla Enter en el campo de texto
inputTexto.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que se envíe un formulario por defecto
        addLove(); // Llama a la función para agregar amor
    }
});
