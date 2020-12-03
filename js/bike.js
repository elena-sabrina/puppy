class Bike {
    constructor(game) {
      this.game = game;
      this.position = {
        x: 0,
        y: canvasElement.height-20
      };
      this.size = {
        x: 20,
        y: 20
      };
  
    }
  
    draw() {
      this.game.context.fillStyle = "#5c0d09";
      this.game.context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }
  }