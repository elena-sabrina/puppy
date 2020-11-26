class Puppy {
  constructor(game) {
    this.game = game;
    this.position = {
      x: canvasElement.width / 3,
      y: canvasElement.height - 20
    };
    this.size = {
      x: 20,
      y: 20
    };
    this.speed = {
      x: 0,
      y: 0
    };
  }

  draw() {
    this.game.context.fillStyle = "black";
    this.game.context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
}
