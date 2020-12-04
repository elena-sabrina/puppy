class Obstical {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "#dbc6ae";
  }

  runLogic() {
    this.x -= this.game.gamespeed;
  }

  draw() {
    this.game.context.fillStyle = this.color;
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
