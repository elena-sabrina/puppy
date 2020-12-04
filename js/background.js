const layerOne = new Image();
layerOne.src = "/images/background/layers/1.png";

const layerTwo = new Image();
layerTwo.src = "/images/background/layers/2.png";

const layerThree = new Image();
layerThree.src = "/images/background/layers/3.png";

const layerFour = new Image();
layerFour.src = "/images/background/layers/4.png";

class LayerOne {
  constructor(game, x) {
    this.game = game;
    this.x = x;
    this.y = canvasElement.height;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogic() {
    this.x -= this.game.gamespeed;
  }

  /*draw() {
      this.game.context.fillStyle = this.color;
      this.game.context.fillRect(this.x, this.y, this.width, this.height);
    }
    */

  draw() {
    if (Date.now() > this.positionChangeTimestamp + 250) {
      this.position = (this.position + 1) % 4;
      this.positionChangeTimestamp = Date.now();
    }
    this.game.context.drawImage(layerOne, this.x, this.y, 200, 200);
  }
}
