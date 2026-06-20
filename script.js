document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const button = document.getElementById("enterButton");
  const music = document.getElementById("music"); // ✔️ ÚNICO ID CORRECTO

  if (!loader || !button) {
    console.error("Loader o botón no encontrados");
    return;
  }

  let musicStarted = false;

  button.addEventListener("click", () => {

    // 🎬 FADE CINEMATOGRÁFICO
    loader.classList.add("fade-out");

    setTimeout(() => {

      loader.style.display = "none";
      document.body.classList.add("site-visible");

      // activar animaciones si existen
      if (typeof iniciarAnimaciones === "function") {
        iniciarAnimaciones();
      }

      // 🎵 MÚSICA SEGURA
      if (music && !musicStarted) {
        musicStarted = true;
        music.volume = 0;

        const playPromise = music.play();

        if (playPromise) {
          playPromise.then(() => {
            let vol = 0;

            const fade = setInterval(() => {
              if (vol < 1) {
                vol += 0.05;
                music.volume = vol;
              } else {
                clearInterval(fade);
              }
            }, 100);
          }).catch(err => {
            console.log("Autoplay bloqueado:", err);
          });
        }
      }

    }, 1400);
  });

});
