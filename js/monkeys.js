const monkeyImage = new Image();
monkeyImage.src = "/images/monkey/monkey-sprite.png";

class Monkey {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = "#177263";

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogic() {
    this.x -= 0.5;
    console.log(this.x);
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

    this.game.context.drawImage(
      monkeyImage,
      140 * this.position,
      0,
      140,
      140,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.game.context.restore();
  }
}
