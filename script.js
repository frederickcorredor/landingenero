
const video = document.getElementById("video1");
const boton = document.getElementById("ctaBtn");

// 1 minuto 23 segundos = 82 segundos
const tiempoMostrar = 82;

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= tiempoMostrar) {
        boton.classList.add("activo");
    }
});

