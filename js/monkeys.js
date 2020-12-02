
const monkeyImage = new Image();
monkeyImage.src = '/images/monkey/monkey-sprite.png';

class Monkey {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.color = "brown";

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogic() {
    this.x -= 0.5;
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
  }*/


}
