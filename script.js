const video = document.getElementById("video1");
const boton = document.getElementById("ctaBtn");

const activarSonidoEn = 0.2;
const tiempoMostrar = 82;

let sonidoActivado = false;

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= activarSonidoEn && !sonidoActivado) {
        video.muted = false;
        sonidoActivado = true;
    }

    if (video.currentTime >= tiempoMostrar) {
        boton.classList.add("activo");
    }
});

// fallback seguro
video.addEventListener("click", () => {
    video.muted = false;
});
