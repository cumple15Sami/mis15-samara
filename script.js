// =========================
// INVITACIÓN PREMIUM SCRIPT
// Estilo: Rapunzel / elegante lila-violeta-dorado
// =========================


// =========================
// LOADER
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const enterButton = document.getElementById("enterButton");

  if (!loader || !enterButton) {
    console.error("❌ Loader o botón no encontrados");
    return;
  }

  enterButton.addEventListener("click", () => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("site-visible");

      if (typeof iniciarAnimaciones === "function") {
        iniciarAnimaciones();
      }
    }, 1000);
  });
});


// =========================
// INICIALIZAR TODO
// =========================
function iniciarAnimaciones() {
  iniciarScrollReveal();
  iniciarLámparasFlotantes();
  iniciarBrillos();
  activarMusicaOpcional();
}


// =========================
// SCROLL REVEAL SUAVE
// =========================
function iniciarScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}


// =========================
// LÁMPARAS FLOTANTES ANIMADAS
// =========================
function iniciarLámparasFlotantes() {
  const container = document.getElementById("lantern-container");
  if (!container) return;

  const cantidad = 12;

  for (let i = 0; i < cantidad; i++) {
    const lantern = document.createElement("div");
    lantern.className = "lantern";

    // posiciones aleatorias
    lantern.style.left = Math.random() * 100 + "vw";
    lantern.style.animationDuration = 8 + Math.random() * 10 + "s";
    lantern.style.opacity = 0.4 + Math.random() * 0.6;
    lantern.style.transform = scale(${0.6 + Math.random() * 0.8});

    container.appendChild(lantern);
  }
}


// =========================
// EFECTO BRILLOS / PARTICULAS
// =========================
function iniciarBrillos() {
  const canvas = document.getElementById("sparkles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      d: Math.random() * 1.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 215, 255, 0.6)";

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      ctx.fill();
    });

    update();
  }

  function update() {
    particles.forEach((p) => {
      p.y += p.d;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 33);
}


// =========================
// MÚSICA (OPCIONAL)
// =========================
function activarMusicaOpcional() {
  const musicBtn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");

  if (!musicBtn || !audio) return;

  let playing = false;

  musicBtn.addEventListener("click", () => {
    if (!playing) {
      audio.play();
      musicBtn.classList.add("active");
      playing = true;
    } else {
      audio.pause();
      musicBtn.classList.remove("active");
      playing = false;
    }
  });
}


// =========================
// REDIMENSION RESPONSIVE
// =========================
window.addEventListener("resize", () => {
  const canvas = document.getElementById("sparkles");
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
