// =========================
// LOADER (ENTRADA)
// =========================

const enterButton = document.getElementById("enterButton");
const loader = document.getElementById("loader");

if (enterButton && loader) {
  enterButton.addEventListener("click", () => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  });
}

// =========================
// CUENTA REGRESIVA
// =========================

const targetDate = new Date("2027-11-07T21:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if (daysEl && hoursEl && minutesEl && secondsEl) {
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      daysEl.innerText = "0";
      hoursEl.innerText = "0";
      minutesEl.innerText = "0";
      secondsEl.innerText = "0";
      return;
    }

    daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
}

// =========================
// MÚSICA
// =========================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {
  musicButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicButton.innerText = "🔊 Pausar música";
    } else {
      music.pause();
      musicButton.innerText = "▶️ Reproducir música";
    }
  });
}

// =========================
// RSVP (WHATSAPP YA MANEJA TODO)
// =========================

// (no necesario JS aquí, ya está perfecto con WhatsApp)
