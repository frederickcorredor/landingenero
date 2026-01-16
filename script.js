const video = document.getElementById("video1");
const overlay = document.getElementById("soundOverlay");
const boton = document.getElementById("ctaBtn");

const tiempoMostrar = 82; // segundo en el que aparece el botón
const tiempoAutoRedirect = 5000; // 5 segundos
const urlDestino = "https://frederickcorredor.github.io/landingenero/zipperstrong.html";

let autoRedirectTimeout = null;
let botonActivado = false;

// activar sonido
const activarSonido = () => {
    video.muted = false;
    overlay.style.display = "none";
};

overlay.addEventListener("click", activarSonido);
video.addEventListener("click", activarSonido);

// mostrar CTA y arrancar contador
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= tiempoMostrar && !botonActivado) {
        botonActivado = true;
        boton.classList.add("activo");

        // iniciar redirección automática
        autoRedirectTimeout = setTimeout(() => {
            window.location.href = urlDestino;
        }, tiempoAutoRedirect);
    }
});

// clic manual cancela la redirección automática
boton.addEventListener("click", () => {
    if (autoRedirectTimeout) {
        clearTimeout(autoRedirectTimeout);
    }
    window.location.href = urlDestino;
});




