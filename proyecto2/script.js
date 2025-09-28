let clicks = 0;
const maxClicks = 10;

const heart = document.getElementById("heart");
const clicksLeft = document.getElementById("clicksLeft");
const introScreen = document.getElementById("introScreen");
const menuScreen = document.getElementById("menuScreen");

document.getElementById("heartContainer").addEventListener("click", () => {
  clicks++;
  clicksLeft.textContent = `Haz clic ${maxClicks - clicks} veces más`;

  // Cambia color poco a poco
  if (clicks > maxClicks / 2) {
    heart.classList.add("filled");
  }

  // Si llega al máximo -> animación de explosión
  if (clicks >= maxClicks) {
    clicksLeft.textContent = "¡Lleno de amor! 💖";
    heart.classList.add("explode");

    setTimeout(() => {
      introScreen.classList.remove("active");
      menuScreen.classList.add("active");
    }, 900);
  }
});
