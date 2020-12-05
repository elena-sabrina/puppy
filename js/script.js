const canvasElement = document.querySelector("canvas");
const game = new Game(canvasElement);

const ReplayButtonElement = document.getElementById("replay-button");
const PlayButtonElement = document.getElementById("play-button");
const PlayAgainButtonElement = document.getElementById("play-again-button");

const screenStartElement = document.getElementById("screen-start");
const screenPlayElement = document.getElementById("screen-play");
const screenGameOverElement = document.getElementById("screen-game-over");
const screenGameWonElement = document.getElementById("screen-you-won");

PlayButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverElement.style.display = "none";
  screenGameWonElement.style.display = "none";
  game.loop();
});

ReplayButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "none";
  screenGameOverElement.style.display = "initial";
  game.reset();
  game.loop();
});

PlayAgainButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "none";
  screenGameOverElement.style.display = "initial";
  game.reset();
  game.loop();
});
