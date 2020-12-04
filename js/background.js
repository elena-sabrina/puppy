const imageUrls = [];

imageUrls.push(`/images/background/layers/1.png`);
imageUrls.push(`/images/background/layers/2.png`);
imageUrls.push(`/images/background/layers/3.png`);
imageUrls.push(`/images/background/layers/4.png`);

const backgroundLayers = imageUrls.map((url) => {
  const image = new Image();
  image.src = url;
  return image;
});

class Background {
  constructor(game) {
    this.game = game;
    this.position = 0;
  }

  /*runLogic() {
    this.x -= this.game.gamespeed;
  }
  draw() {
    this.game.context.fillStyle = "red";
    this.game.context.fillRect(0, 0, 800, 400);
  }*/

  draw() {
    const context = this.game.context;
    for (let i = 0; i < backgroundLayers.length; i++) {
      //for (let layer of backgroundLayers) {
      const layer = backgroundLayers[i];
      this.position -= 0.5;
      context.drawImage(layer, this.position, 0, 800, 400);
    }
  }
}
