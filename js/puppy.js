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
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
}
