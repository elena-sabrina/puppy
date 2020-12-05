const boneImage = new Image();
boneImage.src = "/images/bone/bone.png";

class Food {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.previousFoodtiming = 0;
  }

  runLogic() {
    this.x -= this.game.gamespeed;
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

