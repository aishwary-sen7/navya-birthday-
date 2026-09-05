const screens = document.querySelectorAll(".screen");
const dots = document.querySelectorAll(".dot");

let currentScreen = 0;
let transitioning = false;


// ---------------- SCREEN CONTROL ----------------

function showScreen(index) {

  if (index < 0 || index >= screens.length) return;
  if (transitioning) return;

  transitioning = true;

  screens[currentScreen].classList.remove("active");

  setTimeout(() => {

    currentScreen = index;

    screens[currentScreen].classList.add("active");

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentScreen);
    });

    transitioning = false;

  }, 150);
}


// ---------------- NEXT BUTTONS ----------------

document.querySelectorAll(".next-btn").forEach(button => {

  button.addEventListener("click", () => {

    if (currentScreen < screens.length - 1) {
      showScreen(currentScreen + 1);
    }

  });

});


// ---------------- YES BUTTONS ----------------

document.getElementById("yesBtn").addEventListener("click", finishBirthday);

document
  .getElementById("definitelyBtn")
  .addEventListener("click", finishBirthday);


function finishBirthday() {

  showScreen(5);

  setTimeout(() => {
    createConfetti();
  }, 500);

}


// ---------------- CONFETTI ----------------

function createConfetti() {

  const container = document.getElementById("confetti");

  container.innerHTML = "";

  const pieces = 70;

  for (let i = 0; i < pieces; i++) {

    const piece = document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left = Math.random() * 100 + "%";

    piece.style.animationDuration =
      (2.5 + Math.random() * 3) + "s";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    /*
      Using different shapes instead of fixed colours
      keeps the design compatible with the dark theme.
    */

    const shapes = [
      "4px",
      "6px",
      "8px"
    ];

    piece.style.width =
      shapes[Math.floor(Math.random() * shapes.length)];

    piece.style.height =
      shapes[Math.floor(Math.random() * shapes.length)];

    piece.style.background =
      Math.random() > 0.5
        ? "#e8c68d"
        : "#ffffff";

    container.appendChild(piece);
  }

}


// ---------------- SWIPE SUPPORT ----------------

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (event) => {

  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;

}, { passive: true });


document.addEventListener("touchend", (event) => {

  const touchEndX = event.changedTouches[0].screenX;
  const touchEndY = event.changedTouches[0].screenY;

  const differenceX = touchStartX - touchEndX;
  const differenceY = touchStartY - touchEndY;

  /*
    Only treat it as a swipe when horizontal
    movement is clearly greater than vertical movement.
  */

  if (Math.abs(differenceX) > 70 &&
      Math.abs(differenceX) > Math.abs(differenceY)) {

    if (differenceX > 0) {

      // Swipe left
      if (currentScreen < screens.length - 1) {
        showScreen(currentScreen + 1);
      }

    } else {

      // Swipe right
      if (currentScreen > 0) {
        showScreen(currentScreen - 1);
      }

    }

  }

}, { passive: true });


// ---------------- KEYBOARD SUPPORT ----------------

document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === " ") {

    if (currentScreen < screens.length - 1) {
      showScreen(currentScreen + 1);
    }

  }

  if (event.key === "ArrowLeft") {

    if (currentScreen > 0) {
      showScreen(currentScreen - 1);
    }

  }

});


// ---------------- OPTIONAL MUSIC ----------------

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

  /*
    If you added music.mp3 to the project,
    this button will control it.
  */

  if (!music.querySelector("source")) {

    alert(
      "Add a music.mp3 file to the website folder first."
    );

    return;
  }

  try {

    if (music.paused) {

      await music.play();

      musicBtn.classList.add("playing");
      musicBtn.textContent = "♫";

    } else {

      music.pause();

      musicBtn.classList.remove("playing");
      musicBtn.textContent = "♫";

    }

  } catch (error) {

    console.log("Music could not be played:", error);

  }

});


// ---------------- PREVENT ACCIDENTAL SCROLL ----------------

document.addEventListener("touchmove", (event) => {

  /*
    Don't interfere with scrolling inside a screen.
    The browser handles normal vertical scrolling.
  */

}, { passive: true });
