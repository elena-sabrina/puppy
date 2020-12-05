const bikeImage = new Image();
bikeImage.src = "/images/bike/off-road-full.png";

class Bike {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 0,
      y: canvasElement.height - 40
    };
    this.size = {
      x: 60,
      y: 40
    };
  }

  draw() {
    this.game.context.drawImage(
      bikeImage,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
}
