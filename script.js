// =========================
// CUENTA REGRESIVA REAL
// =========================

const targetDate = new Date("2026-12-15T20:00:00").getTime(); // cambia la fecha del evento

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "¡Es hoy el gran día! 🎉";
  }
}, 1000);

// =========================
// SCROLL SUAVE (EXTRA)
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================
// MÚSICA DE FONDO
// =========================

const music = new Audio("musica.mp3"); // poné tu archivo de música
music.loop = true;
music.volume = 0.5;

const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "🔊 Música ON";
    } else {
      music.pause();
      musicBtn.innerText = "🔇 Música OFF";
    }
  });
}

// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// =========================
// RSVP FORM (MENSAJE)
// =========================

const form = document.getElementById("rsvpForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("¡Gracias por confirmar tu asistencia! 💌");

    form.reset();
  });
}
