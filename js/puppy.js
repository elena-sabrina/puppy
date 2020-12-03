//const puppyImage = new Image();
//puppyImage.src = '/images/puppy/puppy-run-animation.png';

class Puppy {
  constructor(game) {
    this.game = game;
    this.x = canvasElement.width / 3;
    this.y = canvasElement.height - 20;
    this.width = 20;
    this.height = 20;
    this.speed = {
      x: -0.5,
      y: 0
    };
    this.color = "black";
    this.food = 0;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  drawLifestatus() {
    this.game.context.fillStyle = "black";
    this.game.context.font = "10px sans-serif";
    this.game.context.fillText("Food: " + this.food, 20, 22);
  }

  draw() {
    this.game.context.fillStyle = this.color;
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
  }

  /*draw() {
    if (Date.now() > this.positionChangeTimestamp + 150) {
      this.position = (this.position + 1) % 15;
      this.positionChangeTimestamp = Date.now();
    }
    this.game.context.save();
    this.game.context.translate(this.x + this.width, this.y);
    this.game.context.scale(-1, 1);
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
  }*/
}
