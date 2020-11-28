class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.gravity = 10;
    this.puppy = new Puppy(this);
    this.bike = new Bike(this);
    this.obsticalArray = [];
    this.foodArray = [];
    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();
    this.previousObsticaltiming = 0;
  }

  loop() {
    this.runLogic();
    this.draw();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // OBSTICALS & GRAVITY

  addObstical() {
    const timeNow = Date.now();
    if (timeNow > this.previousObsticaltiming + 5000) {
      const obstical = new Obstical(
        this,
        canvasElement.width,
        this.getRandomArbitrary(
          this.canvas.height / 4,
          this.canvas.height - 30
        ),
        this.getRandomArbitrary(30, 100),
        20
      );
      this.obsticalArray.push(obstical);
      this.previousObsticaltiming = timeNow;
    }
  }

  addGravity() {
    this.puppy.position.x = this.puppy.position.x + this.puppy.speed.x;
    this.puppy.position.y = this.puppy.position.y + this.puppy.speed.y;
    if (this.puppy.position.y + this.puppy.size.y < canvasElement.height) {
      this.puppy.speed.y = +0.5 * 2;
    } else {
      this.puppy.speed.y = 0;
    }
  }

  stopGravityonObjects() {
    for (let obstical of this.obsticalArray) {
      var objectTop = obstical.y - obstical.height;
      var puppyBottom = this.puppy.position.y;
      var objectLeft = obstical.x;
      var objectRight = obstical.x + obstical.width;
      var puppyLeft = this.puppy.position.x;
      var puppyRight = this.puppy.position.x + this.puppy.size.x;
      if (
        //Check if puppy is on x-achse of object
        (puppyRight > objectLeft && puppyLeft < objectLeft) ||
        (puppyLeft < objectRight &&
          objectLeft > puppyLeft &&
          //Check if puppy is on y-achse of object
          puppyBottom >= objectTop &&
          puppyBottom <= objectTop + 1)
      ) {
        this.puppy.speed.y = 0;
      }
    }
  }

  // FOOD

  addFood() {
    const timeNow = Date.now();
    if (timeNow > this.previousFoodtiming + 2000) {
      const food = new Food(
        this,
        300,
        200
        //canvasElement.width,
        //this.getRandomArbitrary (this.canvas.height/4, this.canvas.height-30)
      );
      this.foodArray.push(obstical);
      this.previousFoodtiming = timeNow;
      console.log("food added");
    }
  }

  // GAME OVER
  bikeGameover() {
    if (
      this.bike.position.x + this.bike.size.x >= this.puppy.position.x &&
      this.bike.position.y - this.bike.size.y <= this.puppy.position.y
    ) {
      this.puppy.speed.x = 0;
      this.puppy.speed.y = 0;
      this.puppy.color = "red";
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
    this.addObstical();
    for (let obstical of this.obsticalArray) {
      obstical.runLogic();
    }
    this.stopGravityonObjects();
    this.addFood();
    for (let food of this.foodArray) {
      food.runLogic();
    }
    this.clearTrash();
    this.bikeGameover();
  }

  draw() {
    this.clear();
    for (let obstical of this.obsticalArray) {
      obstical.draw();
    }
    for (let food of this.foodArray) {
      food.draw();
    }
    this.puppy.draw();
    this.puppy.drawLifestatus();
    this.bike.draw();
  }
}
