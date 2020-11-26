class Obstical {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  runLogic() {
    this.x -= 1;
  }

  draw() {
    this.game.context.fillStyle = "#dbc6ae";
    this.game.context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height);
  }
}
