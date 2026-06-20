document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const button = document.getElementById("enterButton");
  const music = document.getElementById("bgMusic");

  if (!loader || !button) return;

  let musicStarted = false;

  button.addEventListener("click", () => {

    // FADE CINEMATOGRÁFICO
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("site-visible");

      // activar animaciones globales
      if (typeof iniciarAnimaciones === "function") {
        iniciarAnimaciones();
      }

      // 🎵 MÚSICA SOLO AL CLICK (evita bloqueo autoplay)
      if (music && !musicStarted) {
        music.volume = 0;
        music.play().then(() => {
          musicStarted = true;

          // fade in de música
          let vol = 0;
          const fade = setInterval(() => {
            if (vol < 1) {
              vol += 0.05;
              music.volume = vol;
            } else {
              clearInterval(fade);
            }
          }, 120);

        }).catch(() => {
          console.log("Autoplay bloqueado (normal en navegadores)");
        });
      }

    }, 1400);
  });
});
