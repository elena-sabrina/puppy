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
      x: -0.4,
      y: 0
    };
    this.color = "black";
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
