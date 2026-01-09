const video = document.getElementById("video1");
const overlay = document.getElementById("soundOverlay");
const boton = document.getElementById("ctaBtn");

const tiempoMostrar = 82;

// activar sonido al tocar overlay o video
const activarSonido = () => {
    video.muted = false;
    overlay.style.display = "none";
};

// interacción válida
overlay.addEventListener("click", activarSonido);
video.addEventListener("click", activarSonido);

// CTA por tiempo
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= tiempoMostrar) {
        boton.classList.add("activo");
    }
});
