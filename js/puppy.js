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
    this.food = "100";
  }

  drawLifestatus () {
    this.game.context.fillStyle = "black";
    this.game.context.font = '10px sans-serif';
    this.game.context.fillText("Food: " + this.food, 20, 22);
  }

  draw() {
    this.game.context.fillStyle = this.color;
    this.game.context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

}
