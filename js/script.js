const canvasElement = document.querySelector('canvas');
const game = new Game(canvasElement);

/*const PlayButtonElement = document.getElementById('play-button');
const PlayAgainButtonElement = document.getElementById('play-again-button');

const screenStartElement = document.getElementById('screen-start');
const screenGameOverElement = document.getElementById('screen-game-over');
const screenPlayElement = document.getElementById('screen-play');

PlayButtonElement.addEventListener('click', () => {
    screenStartElement.style.display = 'none';
    screenPlayElement.style.display = 'initial';
game.loop();
});

PlayAgainButtonElement.addEventListener('click', () => {
    screenGameOverElement.style.display = 'none';
    screenPlayElement.style.display = 'initial';
    game.reset();*/

    game.loop();

    /*
  });
  */
