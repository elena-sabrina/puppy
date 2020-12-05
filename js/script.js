const canvasElement = document.querySelector("canvas");
const game = new Game(canvasElement);
/*

const ReplayButtonElement = document.getElementById("replay-button");
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

PlayButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "initial";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "none";

  */
  game.loop();
  game.reset ();
  /*
});

ReplayButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "none";
  screenGameOverMonkeyElement.style.display = "initial";
  screenGameOverBikeElement.style.display = "initial";
  screenGameWonElement.style.display = "none";
  game.reset();
  game.loop();
});

PlayAgainButtonElement.addEventListener("click", () => {
  screenStartElement.style.display = "none";
  screenPlayElement.style.display = "none";
  screenGameOverMonkeyElement.style.display = "none";
  screenGameOverBikeElement.style.display = "none";
  screenGameWonElement.style.display = "initial";
  game.reset();
  game.loop();
});
*/
