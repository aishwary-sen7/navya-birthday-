* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
  background: #09090f;
  color: #f7f3ea;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

button {
  font-family: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

/* ---------------- BACKGROUND ---------------- */

.background {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -2;
}

.glow {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.16;
}

.glow-one {
  background: #b88a52;
  top: -120px;
  left: -100px;
}

.glow-two {
  background: #7056a8;
  bottom: -120px;
  right: -120px;
}

.stars {
  position: absolute;
  inset: 0;
  opacity: 0.25;
  background-image:
    radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
    radial-gradient(circle at 70% 30%, white 1px, transparent 1px),
    radial-gradient(circle at 40% 75%, white 1px, transparent 1px),
    radial-gradient(circle at 85% 80%, white 1px, transparent 1px);
  background-size: 150px 150px;
}

/* ---------------- PROGRESS ---------------- */

.progress {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 7px;
  z-index: 50;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  transition: 0.4s;
}

.dot.active {
  width: 20px;
  border-radius: 10px;
  background: #e8c68d;
}

/* ---------------- MUSIC ---------------- */

.music-btn {
  position: fixed;
  right: 18px;
  top: 17px;

  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);

  background: rgba(255,255,255,0.06);
  color: #e8c68d;

  font-size: 18px;

  backdrop-filter: blur(12px);

  z-index: 50;
}

.music-btn.playing {
  animation: musicPulse 1.2s infinite;
}

@keyframes musicPulse {
  50% {
    transform: scale(1.08);
  }
}

/* ---------------- SCREENS ---------------- */

#story {
  width: 100%;
  height: 100dvh;
  position: relative;
}

.screen {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  padding:
    75px
    22px
    calc(35px + env(safe-area-inset-bottom));

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  opacity: 0;
  visibility: hidden;

  transform: translateX(30px) scale(0.98);

  transition:
    opacity 0.55s ease,
    transform 0.55s ease,
    visibility 0.55s;

  overflow-y: auto;
  overscroll-behavior: none;
}

.screen.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(0) scale(1);
}

/* ---------------- TYPOGRAPHY ---------------- */

.small-label,
.chapter {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #c6a875;
  font-weight: 600;
}

.chapter {
  margin-bottom: 22px;
}

h1,
h2 {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  line-height: 1.08;
}

h1 {
  font-size: clamp(44px, 13vw, 68px);
}

h1 span {
  display: block;
  color: #e8c68d;
}

h2 {
  font-size: clamp(32px, 9vw, 48px);
}

.subtitle {
  max-width: 310px;
  margin-top: 20px;
  color: #aaa5a0;
  font-size: 14px;
  line-height: 1.7;
}

/* ---------------- HERO ---------------- */

.birthday-icon {
  font-size: 50px;
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  50% {
    transform: translateY(-9px);
  }
}

/* ---------------- BUTTON ---------------- */

.next-btn {
  margin-top: 28px;

  min-height: 52px;
  min-width: 175px;

  padding: 14px 22px;

  border-radius: 30px;
  border: 1px solid rgba(232,198,141,0.4);

  background: rgba(232,198,141,0.08);
  color: #e8c68d;

  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;

  transition: 0.25s;
}

.next-btn:active {
  transform: scale(0.94);
  background: rgba(232,198,141,0.18);
}

.arrow {
  margin-left: 8px;
}

/* ---------------- DATE ---------------- */

.memory-date {
  margin: 8px 0 20px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: #77736f;

  font-size: 10px;
  letter-spacing: 2px;
}

.memory-date span {
  font-size: 28px;
  color: #e8c68d;
  font-family: "DM Serif Display", serif;
}

/* ---------------- STORY CARD ---------------- */

.story-card {
  width: 100%;
  max-width: 390px;

  margin-top: 24px;
  padding: 25px 21px;

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.07),
      rgba(255,255,255,0.025)
    );

  border: 1px solid rgba(255,255,255,0.1);

  box-shadow: 0 20px 60px rgba(0,0,0,0.25);
}

.card-icon {
  color: #e8c68d;
  font-size: 20px;
  margin-bottom: 15px;
}

.story-card p {
  color: #bcb8b2;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 15px;
}

.story-card strong {
  color: #eee6d9;
}

.divider {
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 20px 0;
}

.story-card .highlight {
  color: #e8c68d;
  font-family: "DM Serif Display", serif;
  font-size: 17px;
  line-height: 1.5;
  margin: 0;
}

/* ---------------- MEMORIES ---------------- */

.memory-stack {
  width: 100%;
  max-width: 400px;

  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 13px;
}

.memory-card {
  position: relative;

  padding: 20px;

  text-align: left;

  border-radius: 20px;

  background: rgba(255,255,255,0.045);
  border: 1px solid rgba(255,255,255,0.09);

  overflow: hidden;
}

.memory-card::after {
  content: "";
  position: absolute;

  width: 100px;
  height: 100px;

  right: -50px;
  top: -50px;

  border-radius: 50%;

  background: rgba(232,198,141,0.08);
}

.memory-number {
  position: absolute;
  top: 15px;
  right: 17px;

  color: rgba(255,255,255,0.22);

  font-size: 10px;
  letter-spacing: 2px;
}

.memory-emoji {
  font-size: 25px;
  margin-bottom: 9px;
}

.memory-card h3 {
  font-family: "DM Serif Display", serif;
  font-size: 23px;
  font-weight: 400;
  margin-bottom: 8px;
}

.memory-card p {
  color: #aaa6a1;
  font-size: 12px;
  line-height: 1.7;
  max-width: 310px;
}

.memory-tag {
  display: inline-block;

  margin-top: 12px;
  padding: 5px 9px;

  border-radius: 20px;

  color: #c6a875;
  background: rgba(232,198,141,0.07);

  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ---------------- WINTER ---------------- */

.winter-icon {
  font-size: 45px;
  margin-bottom: 15px;

  animation: snowfall 3s ease-in-out infinite;
}

@keyframes snowfall {
  50% {
    transform: translateY(8px) rotate(5deg);
  }
}

.winter-card {
  width: 100%;
  max-width: 390px;

  margin-top: 24px;

  padding: 25px 21px;

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.065),
      rgba(255,255,255,0.025)
    );

  border: 1px solid rgba(255,255,255,0.1);

  text-align: left;
}

.winter-card p {
  color: #bcb8b2;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 17px;
}

.winter-card strong {
  color: #eee6d9;
}

.quote {
  border-left: 2px solid #c6a875;

  padding-left: 14px;

  color: #e8c68d;

  font-family: "DM Serif Display", serif;

  font-size: 18px;
  line-height: 1.45;
}

/* ---------------- QUESTION ---------------- */

.question-mark {
  font-family: "DM Serif Display", serif;

  font-size: 65px;

  color: #e8c68d;

  margin-bottom: 5px;

  animation: questionFloat 2.5s ease-in-out infinite;
}

@keyframes questionFloat {
  50% {
    transform: translateY(-8px) rotate(3deg);
  }
}

.question-text {
  color: #aaa6a1;
  font-size: 13px;
  line-height: 1.7;
  margin-top: 15px;
}

.big-question {
  max-width: 350px;

  margin-top: 18px;

  color: #ddd7ce;

  font-family: "DM Serif Display", serif;

  font-size: 20px;
  line-height: 1.4;
}

.ask {
  margin-top: 16px;

  color: #e8c68d;

  font-size: 14px;
  font-weight: 600;
}

.choices {
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-top: 25px;
}

.choice {
  width: 100%;
  min-height: 55px;

  border-radius: 30px;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 1px;

  transition: 0.2s;
}

.choice:active {
  transform: scale(0.95);
}

.yes {
  background: #e8c68d;
  color: #16130e;

  border: none;
}

.definitely {
  background: rgba(255,255,255,0.04);
  color: #e8c68d;

  border: 1px solid rgba(232,198,141,0.35);
}

/* ---------------- FINAL ---------------- */

.final-screen {
  overflow: hidden;
}

.final-star {
  font-size: 30px;
  color: #e8c68d;

  margin-bottom: 18px;

  animation: starSpin 5s linear infinite;
}

@keyframes starSpin {
  to {
    transform: rotate(360deg);
  }
}

.final-screen h1 {
  font-size: clamp(40px, 12vw, 60px);

  margin-top: 16px;
}

.final-message {
  margin-top: 27px;

  max-width: 330px;
}

.final-message p {
  color: #aaa6a1;
  font-size: 14px;
  line-height: 1.8;

  margin-bottom: 10px;
}

.final-message h3 {
  color: #e8c68d;

  font-family: "DM Serif Display", serif;

  font-size: 25px;
  font-weight: 400;

  margin-top: 20px;
}

.final-divider {
  width: 45px;
  height: 1px;

  background: #c6a875;

  margin: 20px auto;
}

.signature {
  font-size: 11px !important;
  color: #77736f !important;
  margin-top: 5px;
}

.final-sparkles {
  margin-top: 30px;

  color: #c6a875;

  letter-spacing: 5px;

  animation: sparkle 2s infinite;
}

@keyframes sparkle {
  50% {
    opacity: 0.4;
  }
}

/* ---------------- CONFETTI ---------------- */

.confetti-container {
  position: absolute;
  inset: 0;

  pointer-events: none;

  overflow: hidden;
}

.confetti {
  position: absolute;

  width: 6px;
  height: 10px;

  top: -20px;

  opacity: 0;

  animation: confettiFall linear forwards;
}

@keyframes confettiFall {

  0% {
    transform:
      translateY(-20px)
      rotate(0deg);

    opacity: 1;
  }

  100% {
    transform:
      translateY(110vh)
      rotate(720deg);

    opacity: 0;
  }

}

/* ---------------- SMALL PHONES ---------------- */

@media (max-height: 680px) {

  .screen {
    padding-top: 65px;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 29px;
  }

  .story-card,
  .winter-card {
    padding: 18px;
    margin-top: 15px;
  }

  .story-card p,
  .winter-card p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .memory-stack {
    margin-top: 12px;
    gap: 8px;
  }

  .memory-card {
    padding: 14px;
  }

  .memory-card h3 {
    font-size: 20px;
  }

  .memory-card p {
    font-size: 11px;
  }

  .next-btn {
    margin-top: 15px;
  }

  .choices {
    margin-top: 17px;
  }

}

/* ---------------- TABLET / LANDSCAPE ---------------- */

@media (min-width: 600px) {

  .screen {
    max-width: 600px;
    margin: auto;
    left: 50%;
    transform: translateX(-50%) translateX(30px) scale(0.98);
  }

  .screen.active {
    transform: translateX(-50%) scale(1);
  }

}
