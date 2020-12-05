const layerOneImage = new Image();
layerOneImage.src = "/images/background/Cartoon_Forest_BG_03.png";

class LayerOne {
  constructor(game, x) {
    this.game = game;
    this.x = x;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicOne() {
    this.x -= this.game.gamespeed;
  }

  drawloopOne() {
    if (this.x + this.width == 0) {
      this.draw();
    }
  }

  drawOne() {
    this.game.context.drawImage(
      layerOneImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.drawloopOne();
  }
}