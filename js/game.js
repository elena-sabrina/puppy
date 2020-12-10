const biteSound = new Audio("/sound/bite.wav");
const gameoverSoundMonkey = new Audio("/sound/gameover.wav");
const gameoverSoundBike = new Audio("/sound/gameover.wav");
const gamewonSound = new Audio("/sound/gamewon.wav");

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();
    this.gamespeed = 0;

    this.restore();
  }

  restore() {
    //this.layerFour = new LayerFour(this);
    this.layerOne = new LayerOne(this);
    //this.layerOneFirst = new layerOneFirst(this);
    //this.layerOneSecond = new layerOneSecond(this);
    //this.layerTwo = new LayerTwo(this);
    //this.layerThree = new LayerThree(this);

    this.puppy = new Puppy(this);
    this.bike = new Bike(this);
    this.obsticalArray = [];
    //this.foodscoreArray = [];
    this.foodArray = [];
    this.monkeyArray = [];
    this.gravity = 10;
    this.previousObsticaltiming = 0;
    this.previousFoodScoretiming = 0;
    this.previousFoodtiming = 0;
    this.previousMonkeytiming = 0;
    this.active = 0;
  }

  loop() {
    if (this.active == 0) {
      this.runLogic();
      this.draw();
      window.requestAnimationFrame(() => {
        this.loop();
      });
    } else {
      console.log("loop stoop");
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // OBSTICAL

  addObstical() {
    const timeNow = Date.now();
    if (timeNow > this.previousObsticaltiming + 5000) {
      const obstical = new Obstical(
        this,
        canvasElement.width,
        this.getRandomArbitrary(
          this.canvas.height / 4,
          this.canvas.height - this.puppy.speed.y
        ),
        this.getRandomArbitrary(50, 100),
        30
      );
      this.obsticalArray.push(obstical);
      this.previousObsticaltiming = timeNow;
    }
    //if (timeNow > this.previousObsticaltiming + 8000) {
    //
    //}
  }

  addGravity() {
    this.puppy.x = this.puppy.x + this.puppy.speed.x;
    this.puppy.y = this.puppy.y + this.puppy.speed.y;
    if (this.puppy.y + this.puppy.height < canvasElement.height) {
      this.puppy.speed.y += 0.008;
    } else {
      this.puppy.speed.y = 0;
    }
  }

  stopGravityonObjects() {
    for (let obstical of this.obsticalArray) {
      if (
        (this.puppy.x > obstical.x &&
          this.puppy.x < obstical.x + obstical.width &&
          this.puppy.y + this.puppy.height > obstical.y &&
          this.puppy.y + this.puppy.height < obstical.y + obstical.height) ||
        (this.puppy.x + this.puppy.width > obstical.x &&
          this.puppy.x + this.puppy.width < obstical.x + obstical.width &&
          this.puppy.y + this.puppy.height > obstical.y &&
          this.puppy.y + this.puppy.height < obstical.y + obstical.height)
      ) {
        this.puppy.speed.y = 0;
      }
    }
  }

  /*addFoodonObject() {
    const timeNow = Date.now();
    if (timeNow > this.previousFoodtiming + 5000) {
      for (let obstical of this.obsticalArray) {
        const food = new Food(
          this,
          this.getRandomArbitrary(obstical.x, obstical.x + obstical.width - 20),
          obstical.y - obstical.height
        );
        this.foodArray.push(food);
        this.previousFoodtiming = timeNow;
      }
    }
  }*/

  addFood() {
    const timeNow = Date.now();
    var obsticalWithfood = this.obsticalArray[this.obsticalArray.length - 1];
    if (timeNow > this.previousFoodtiming + 3000) {
      const food = new Food(
        this,
        canvasElement.width,
        obsticalWithfood.y - obsticalWithfood.height
      );
      this.foodArray.push(food);
      this.previousFoodtiming = timeNow;
    }
  }

  checkCollisionBetweentwoObjects(first, second) {
    var firstTop = first.y - first.height;
    var firstBottom = first.y;
    var firstLeft = first.x;
    var firstRight = first.x + first.width;

    return (
      firstLeft <= second.x &&
      second.x <= firstRight &&
      firstTop <= second.y &&
      second.y <= firstBottom
    );
  }

  collectFood() {
    for (let food of this.foodArray) {
      var puppyLeftBottomCorner = {
        x: this.puppy.x,
        y: this.puppy.y
      };
      var puppyLeftTopCorner = {
        x: this.puppy.x,
        y: this.puppy.y - this.puppy.height
      };
      var puppyRightBottomCorner = {
        x: this.puppy.x + this.puppy.width,
        y: this.puppy.y
      };
      var puppyRightTopCorner = {
        x: this.puppy.x + this.puppy.width,
        y: this.puppy.y - this.puppy.height
      };

      if (
        this.checkCollisionBetweentwoObjects(food, puppyLeftBottomCorner) ||
        this.checkCollisionBetweentwoObjects(food, puppyLeftTopCorner) ||
        this.checkCollisionBetweentwoObjects(food, puppyRightBottomCorner) ||
        this.checkCollisionBetweentwoObjects(food, puppyRightTopCorner)
      ) {
        var indexToRemove = this.foodArray.indexOf(food);
        if (indexToRemove > -1) {
          this.foodArray.splice(indexToRemove, 1);
        }
        this.puppy.food += 10;
        biteSound.play();
        // this.addFoodScore(this.food.x, this.food.y);
      }
    }
  }

  /*addFoodScore (xposition, yposition) {
    const timeNow = Date.now();
    if (timeNow > this.previousFoodScoretiming + 5000) {
      const foodscore = new Obstical(
        this,
        xposition,
        yposition
      );
      this.foodscoreArray.push(foodscore);
      this.previousObsticaltiming = timeNow;
    }
  }*/

  // MONKEY

  addMonkey() {
    const timeNow = Date.now();
    if (timeNow > this.previousMonkeytiming + 20000) {
      const monkey = new Monkey(
        this,
        canvasElement.width,
        this.getRandomArbitrary(20, this.canvas.height - 20)
      );
      this.monkeyArray.push(monkey);
      this.previousMonkeytiming = timeNow;
    }
  }

  // GAME OVER

  GameoverScenarioBike() {
    if (
      this.bike.position.x + this.bike.size.x >= this.puppy.x &&
      this.bike.position.y - this.bike.size.y <= this.puppy.y
    ) {
      gameoverSoundBike.play();
      this.active = 1;
      screenStartElement.style.display = "none";
        screenPlayElement.style.display = "none";
        screenGameOverMonkeyElement.style.display = "none";
        screenGameOverBikeElement.style.display = "initial";
        screenGameWonElement.style.display = "none";
    }
  }

  GameOverScenarioMonkey() {
    for (let monkey of this.monkeyArray) {
      var puppyLeftBottomCorner = {
        x: this.puppy.x,
        y: this.puppy.y
      };
      var puppyLeftTopCorner = {
        x: this.puppy.x,
        y: this.puppy.y - this.puppy.height
      };
      var puppyRightBottomCorner = {
        x: this.puppy.x + this.puppy.width,
        y: this.puppy.y
      };
      var puppyRightTopCorner = {
        x: this.puppy.x + this.puppy.width,
        y: this.puppy.y - this.puppy.height
      };
      if (
        this.checkCollisionBetweentwoObjects(monkey, puppyLeftBottomCorner) ||
        this.checkCollisionBetweentwoObjects(monkey, puppyLeftTopCorner) ||
        this.checkCollisionBetweentwoObjects(monkey, puppyRightBottomCorner) ||
        this.checkCollisionBetweentwoObjects(monkey, puppyRightTopCorner)
      ) {
        this.active = 1;
        gameoverSoundMonkey.play();
        screenStartElement.style.display = "none";
        screenPlayElement.style.display = "none";
        screenGameOverMonkeyElement.style.display = "initial";
        screenGameOverBikeElement.style.display = "none";
        screenGameWonElement.style.display = "none";
      }
    }
  }

  youWin() {
    if (this.puppy.food >= 100) {
      this.active = 1;
      gamewonSound.play();
      screenStartElement.style.display = "none";
      screenPlayElement.style.display = "none";
      screenGameOverMonkeyElement.style.display = "none";
      screenGameOverBikeElement.style.display = "none";
      screenGameWonElement.style.display = "initial";
    }
  }

  // CLEAR
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  clearTrash() {
    for (let obstical of this.obsticalArray) {
      if (obstical.x + obstical.width <= 0) {
        const indexOfObstical = this.obsticalArray.indexOf(obstical);
        this.obsticalArray.splice(indexOfObstical, 1);
      }
    }
  }

  // LOGIC & DRAW

  runLogic() {
    this.addGravity();
    this.stopGravityonObjects();

    this.addObstical();
    for (let obstical of this.obsticalArray) {
      obstical.runLogic();
    }
    this.addFood();
    for (let food of this.foodArray) {
      food.runLogic();
      this.collectFood();
    }
    this.addMonkey();
    for (let monkey of this.monkeyArray) {
      monkey.runLogic();
    }
    //for (let foodscore of this.foodscoreArray) {
    //  foodscore.runLogic();
    //}
    this.layerOne.runLogicOne();
    //this.layerOneFirst.runLogicOne();
    //this.layerOneSecond.runLogicOne();
    //this.layerTwo.runLogicTwo();
    //this.layerThree.runLogicThree();
    //this.layerFour.runLogicFour();
    this.puppy.runLogic();

    /* for (let layer of this.+) {
      backgroundImages[i].runLogic();
    }
*/
    // for (let layer of this.backgroundImages)
    this.clearTrash();
    this.GameoverScenarioBike();
    this.GameOverScenarioMonkey();
    this.youWin();
  }

  draw() {
    this.clear();
    this.layerOne.drawOne();
    //this.layerOneFirst.drawOne();
    //this.layerOneScond.drawOne();
    //this.layerTwo.drawTwo();
    //this.layerThree.drawThree();
    //this.layerFour.drawFour();

    for (let monkey of this.monkeyArray) {
      monkey.draw();
    }
    for (let obstical of this.obsticalArray) {
      obstical.draw();
    }
    for (let food of this.foodArray) {
      food.draw();
    }
    //for (let foodscore of this.foodscoreArray) {
    //  foodscore.draw();
    //}
    this.puppy.draw();
    this.puppy.drawLifestatus();
    this.bike.draw();
  }
}
