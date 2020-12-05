const imageUrls = [];

imageUrls.push(`/images/background/layers/1.png`);
imageUrls.push(`/images/background/layers/2.png`);
imageUrls.push(`/images/background/layers/3.png`);
imageUrls.push(`/images/background/layers/4.png`);

const backgroundImages = imageUrls.map((url) => {
  const image = new Image();
  image.src = url;
  return image;
});

console.log(backgroundImages);

class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;
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
     for (let i = 0; i < backgroundImages.length; i++) {
       context.drawImage(backgroundImages[i], 0, 0, 800, 400);
    }
  }
}
