const layerOneImageOne = new Image();
layerOneImageOne.src = "/images/background/layers/1.png";

const layerOneImageTwo = new Image();
layerOneImageTwo.src = "/images/background/layers/1.png";

class layerOneFirst {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicOne() {
    this.x -= this.game.gamespeed -0.2;
  }

  drawOne() {
    this.game.context.drawImage(
      layerOneImageOne,
      this.x,
      this.y,
      this.width,
      this.height
    );  
    console.log(layerOneFirst.x); 
  }
}

class layerOneSecond {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicOne() {
    this.x -= this.game.gamespeed -0.2;
  }

  drawOne() {
    this.game.context.drawImage(
      layerOneImageTwo,
      this.x,
      this.y,
      this.width,
      this.height
    );  
    console.log(this.layerOneSecond.x); 
  }
}
  /*if (this.layerOneImageOne.x < canvasElement.width) {
    this.layerOneImageTwo.x == this.layerOneImageOne.x + this.layerOneImageOne.width
  }*/

  //draw them at the same time and then replace them like this if image1.x == 30 then firstimage is there then i want to draw a second one

/*---------------------------------------------------*/

const layerTwoImage = new Image();
layerTwoImage.src = "/images/background/layers/2.png";

class LayerTwo {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicTwo() {
    this.x -= this.game.gamespeed - 0.2;
  }

  drawloopTwo() {
    if (this.x + this.width == 0) {
      this.drawTwo();
    }
  }

  drawTwo() {
    this.game.context.drawImage(
      layerTwoImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.drawloopTwo();
  }
}

/*---------------------------------------------------*/

const layerThreeImage = new Image();
layerThreeImage.src = "/images/background/layers/3.png";

class LayerThree {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicThree() {
    this.x -= this.game.gamespeed -0.1;
  }

  drawloopThree() {
    if (this.x + this.width == 0) {
      this.drawThree();
    }
  }

  drawThree() {
    this.game.context.drawImage(
      layerThreeImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.drawloopThree();
  }
}

/*---------------------------------------------------*/

const layerFourImage = new Image();
layerFourImage.src = "/images/background/layers/4.png";

class LayerFour {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = 400;

    this.positionChangeTimestamp = 0;
    this.position = 0;
  }

  runLogicFour() {
    this.x -= this.game.gamespeed;
  }

  drawloopFour() {
    if (this.x + this.width == 0) {
      this.drawFour();
    }
  }

  drawFour() {
    this.game.context.drawImage(
      layerFourImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.drawloopFour();
  }
}
