document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const button = document.getElementById("enterButton");

  button.addEventListener("click", () => {

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("site-visible");

      iniciarEfectos();

    }, 1200);

  });

});

function iniciarEfectos() {

  // 🌟 lámparas
  document.querySelectorAll(".lantern-container span")
    .forEach(el => {
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = (6 + Math.random() * 6) + "s";
    });

  // ✨ partículas
  const particles = document.querySelector(".particles");

  for (let i = 0; i < 30; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "vw";
    particles.appendChild(s);
  }

}
