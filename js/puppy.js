const puppyImage = new Image();
puppyImage.src = '/images/puppy/puppy-run-animation.png';

class Puppy {
  constructor(game) {
    this.game = game;
    this.x = canvasElement.width / 3;
    this.y = canvasElement.height - 60;
    this.width = 45;
    this.height = 55;
    this.speed = {
      x: 0,
      y: 0
    };
    this.color = "black";
    this.food = 0;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogic() {
    this.x -= this.game.gamespeed;
  }

  drawLifestatus() {
    this.game.context.fillStyle = "white";
    this.game.context.font = " 16px sans-serif";
    this.game.context.fillText("Food: " + this.food, 20, 24);
  }

  /*draw() {
    this.game.context.fillStyle = this.color;
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
  }*/

  draw() {
    if (Date.now() > this.positionChangeTimestamp + 150) {
      this.position = (this.position + 1) % 8;
      this.positionChangeTimestamp = Date.now();
    }
  
    this.game.context.drawImage(
      puppyImage,
      345 * this.position,
      0,
      345,
      481,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.game.context.restore();
  }
}
