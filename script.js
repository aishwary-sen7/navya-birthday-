const screens =
  document.querySelectorAll(".screen");

const progress =
  document.getElementById("progress");

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");


let current = 0;

let busy = false;


/* ================= PROGRESS DOTS ================= */

screens.forEach((screen, index) => {

  const dot =
    document.createElement("span");

  dot.className =
    "dot" +
    (index === 0 ? " active" : "");

  progress.appendChild(dot);

});


const dots =
  document.querySelectorAll(".dot");


/* ================= SCREEN NAVIGATION ================= */

function showScreen(index) {

  if (
    index < 0 ||
    index >= screens.length ||
    busy ||
    index === current
  ) {
    return;
  }


  busy = true;


  screens[current]
    .classList
    .remove("active");


  setTimeout(() => {

    current = index;


    screens[current]
      .classList
      .add("active");


    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === current
      );

    });


    busy = false;

  }, 160);

}


/* ================= NEXT BUTTONS ================= */

document
  .querySelectorAll(".next")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        showScreen(current + 1);

      }
    );

  });


/* ================= FINAL BUTTONS ================= */

document
  .getElementById("yes")
  .addEventListener(
    "click",
    finish
  );


document
  .getElementById("definitely")
  .addEventListener(
    "click",
    finish
  );


function finish() {

  showScreen(
    screens.length - 1
  );


  setTimeout(() => {

    createConfetti();

  }, 450);

}


/* ================= CONFETTI ================= */

function createConfetti() {

  const container =
    document.getElementById(
      "confetti"
    );


  container.innerHTML = "";


  for (
    let i = 0;
    i < 75;
    i++
  ) {

    const piece =
      document.createElement(
        "span"
      );


    piece.className =
      "piece";


    piece.style.left =
      Math.random() * 100 + "%";


    piece.style.animationDuration =
      (2.4 + Math.random() * 3)
      + "s";


    piece.style.animationDelay =
      Math.random() * 1.2
      + "s";


    piece.style.width =
      (4 + Math.random() * 5)
      + "px";


    piece.style.height =
      (5 + Math.random() * 8)
      + "px";


    piece.style.background =
      Math.random() > 0.45
        ? "#e8c68d"
        : "#ffffff";


    container.appendChild(
      piece
    );

  }

}


/* ================= SWIPE NAVIGATION ================= */

let startX = 0;

let startY = 0;


document.addEventListener(
  "touchstart",
  event => {

    startX =
      event.changedTouches[0]
        .screenX;

    startY =
      event.changedTouches[0]
        .screenY;

  },
  {
    passive: true
  }
);


document.addEventListener(
  "touchend",
  event => {

    const endX =
      event.changedTouches[0]
        .screenX;

    const endY =
      event.changedTouches[0]
        .screenY;


    const differenceX =
      startX - endX;

    const differenceY =
      startY - endY;


    if (
      Math.abs(differenceX) > 65 &&
      Math.abs(differenceX) >
      Math.abs(differenceY)
    ) {

      if (differenceX > 0) {

        showScreen(
          current + 1
        );

      } else {

        showScreen(
          current - 1
        );

      }

    }

  },
  {
    passive: true
  }
);


/* ================= KEYBOARD ================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown"
    ) {

      showScreen(
        current + 1
      );

    }


    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {

      showScreen(
        current - 1
      );

    }

  }
);


/* ================= OPTIONAL MUSIC ================= */

/*
  If you want music:

  1. Put music.mp3 in the same folder
     as these files.

  2. Remove the // from the line below.
*/

// music.src = "music.mp3";


musicBtn.addEventListener(
  "click",
  async () => {

    if (!music.src) {

      alert(
        "Add music.mp3 to the website folder first."
      );

      return;

    }


    try {

      if (music.paused) {

        await music.play();

        musicBtn.classList.add(
          "playing"
        );

      } else {

        music.pause();

        musicBtn.classList.remove(
          "playing"
        );

      }

    } catch (error) {

      console.log(
        "Music error:",
        error
      );

    }

  }
);
