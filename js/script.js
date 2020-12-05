const canvasElement = document.querySelector("canvas");
const game = new Game(canvasElement);

const ReplayButtonMonkeyElement = document.getElementById(
  "replay-button-monkey"
);
const ReplayButtonBikeElement = document.getElementById("replay-button-bike");
const PlayButtonElement = document.getElementById("play-button");
const PlayAgainButtonElement = document.getElementById("play-again-button");

const screenStartElement = document.getElementById("screen-start");
const screenPlayElement = document.getElementById("screen-play");
const screenGameOverMonkeyElement = document.getElementById(
  "screen-game-over-monkey"
);
const screenGameOverBikeElement = document.getElementById(
  "screen-game-over-bike"
);
const screenGameWonElement = document.getElementById("screen-you-won");

console.dir(ReplayButtonMonkeyElement);
console.dir(ReplayButtonBikeElement);
console.dir(PlayButtonElement);
console.dir(PlayAgainButtonElement);

screenStartElement.style.display = "initial";
screenPlayElement.style.display = "none";
screenGameOverMonkeyElement.style.display = "none";
screenGameOverBikeElement.style.display = "none";
screenGameWonElement.style.display = "none";

PlayButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "none";

  game.loop();
  game.restore();
});

ReplayButtonMonkeyElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "none";

  game.loop();
  game.restore();
});

ReplayButtonBikeElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "none";

  game.loop();
  game.restore();
});

PlayAgainButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "none";

  game.loop();
  game.restore();
});
