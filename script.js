// =========================
// LOADER CINEMATOGRÁFICO
// =========================

const enterButton = document.getElementById("enterButton");
const loader = document.getElementById("loader");

if (enterButton && loader) {
  enterButton.addEventListener("click", () => {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("loaded");
    }, 1000);
  });
}

// =========================
// CUENTA REGRESIVA PREMIUM
// =========================

const targetDate = new Date("2027-11-07T21:00:00").getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

if (d && h && m && s) {
  const update = () => {
    const now = new Date().getTime();
    const dist = targetDate - now;

    if (dist <= 0) return;

    d.innerText = Math.floor(dist / (1000 * 60 * 60 * 24));
    h.innerText = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    m.innerText = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    s.innerText = Math.floor((dist % (1000 * 60)) / 1000);
  };

  update();
  setInterval(update, 1000);
}

// =========================
// MÚSICA PREMIUM (iPhone safe)
// =========================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

if (music && musicButton) {
  musicButton.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await music.play();
        musicButton.innerText = "🔊 Pausar música";
        isPlaying = true;
      } else {
        music.pause();
        musicButton.innerText = "▶️ Reproducir música";
        isPlaying = false;
      }
    } catch (e) {
      alert("Toca nuevamente para activar el audio 🎵");
    }
  });
}

// =========================
// ANIMACIONES AL SCROLL PREMIUM
// =========================

const elements = document.querySelectorAll(".glass-card, .section, .gallery");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => observer.observe(el));
