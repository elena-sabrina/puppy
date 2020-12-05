const monkeyImage = new Image();
monkeyImage.src = "/images/monkey/monkey-sprite-new.png";

class Monkey {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.color = "#177263";

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

    this.game.context.drawImage(
      monkeyImage,
      97.6 * this.position,
      0,
      97.6,
      156,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.game.context.restore();
  }
}
