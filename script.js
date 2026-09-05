const pages = [
  ...document.querySelectorAll(".page")
];

const dots = [
  ...document.querySelectorAll(".dot")
];

const nextButtons = [
  ...document.querySelectorAll(".next")
];


// Move to next page
nextButtons.forEach((button, index) => {

  button.addEventListener("click", () => {

    pages[index + 1]?.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// Detect which page is visible
const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const index =
          pages.indexOf(entry.target);


        dots.forEach((dot, i) => {

          dot.classList.toggle(
            "active",
            i === index
          );

        });


        // Animate content
        entry.target
          .querySelectorAll(
            "h1, h2, .story-card, .memory-card, .winter, .question-text, .ask, .choices, .final-note"
          )
          .forEach(element => {

            element.classList.remove("reveal");

            void element.offsetWidth;

            element.classList.add("reveal");

          });

      }

    });

  },
  {
    threshold: 0.55
  }
);


pages.forEach(page => {

  observer.observe(page);

});


// Birthday celebration
function celebrate() {

  const finalPage =
    document.querySelector(".finale");


  finalPage.scrollIntoView({
    behavior: "smooth"
  });


  const burst =
    document.createElement("div");

  burst.className = "burst";


  const symbols = [
    "✦",
    "✧",
    "🎉",
    "♡",
    "·",
    "✨"
  ];


  for (let i = 0; i < 45; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";


    piece.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];


    piece.style.left =
      Math.random() * 100 + "%";


    piece.style.setProperty(
      "--x",
      (Math.random() - 0.5) * 280 + "px"
    );


    piece.style.animationDelay =
      Math.random() * 0.45 + "s";


    burst.appendChild(piece);

  }


  document.body.appendChild(burst);


  setTimeout(() => {

    burst.remove();

  }, 3000);

}


// Both buttons lead to the final surprise
document
  .querySelectorAll(".choice")
  .forEach(button => {

    button.addEventListener(
      "click",
      celebrate
    );

  });


// Music
const music =
  document.getElementById("music");

const musicButton =
  document.getElementById("musicBtn");


musicButton.addEventListener(
  "click",
  () => {

    /*
      If you want music:

      1. Put a royalty-free MP3 in
         the same folder as this file.

      2. Name it:

         music.mp3

      3. Uncomment the line below.
    */

    // music.src = "music.mp3";


    if (!music.src) {

      alert(
        "Add a royalty-free music file named music.mp3 to the website folder first."
      );

      return;

    }


    if (music.paused) {

      music.play();

    } else {

      music.pause();

    }

  }
);
