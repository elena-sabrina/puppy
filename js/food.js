const boneImage = new Image();
boneImage.src = "/images/bone/bone.png";

class Food {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = "blue";
    this.previousFoodtiming = 0;
  }

  runLogic() {
    this.x -= 0.5;
  }

  draw() {
    this.game.context.drawImage(
      boneImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
