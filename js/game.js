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
    this.previousFoodtiming = 0;
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

  // OBSTICAL

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
    this.puppy.x = this.puppy.x + this.puppy.speed.x;
    this.puppy.y = this.puppy.y + this.puppy.speed.y;
    if (this.puppy.y + this.puppy.height < canvasElement.height) {
      this.puppy.speed.y = +0.5 * 2;
    } else {
      this.puppy.speed.y = 0;
    }
  }

  stopGravityonObjects() {
    for (let obstical of this.obsticalArray) {
      var objectTop = obstical.y - obstical.height;
      var objectBottom = obstical.y;
      var objectLeft = obstical.x;
      var objectRight = obstical.x + obstical.width;
      var puppyTop = this.puppy.y - this.puppy.height;
      var puppyBottom = this.puppy.y;
      var puppyLeft = this.puppy.x;
      var puppyRight = this.puppy.x + this.puppy.width;
      //Check if puppy is on x-achse of object
      if (
        (!puppyLeft > objectRight &&
          !puppyRight < objectLeft &&
          puppyBottom < objectTop) ||
        (!puppyLeft > objectRight &&
          !puppyRight < objectLeft &&
          puppyTop > objectBottom)
      ) {
        this.puppy.speed.y = 0;
        console.log("stop gravity");
      }
    }
  }

  // FOOD

  addFood() {
    const timeNow = Date.now();
    if (timeNow > this.previousFoodtiming + 2000) {
      const food = new Food(
        this,
        canvasElement.width,
        this.getRandomArbitrary(this.canvas.height / 4, this.canvas.height - 30)
      );
      this.foodArray.push(food);
      this.previousFoodtiming = timeNow;
      console.log("food added");
    }
  }

  collectFood() {
    for (let food of this.foodArray) {
      var foodTop = this.food.y - this.food.height;
      var foodBottom = this.food.y;
      var foodLeft = this.food.x;
      var foodRight = this.food.x + this.food.width;
      var puppyTop = this.puppy.y - this.puppy.height;
      var puppyBottom = this.puppy.y;
      var puppyLeft = this.puppy.x;
      var puppyRight = this.puppy.x + this.puppy.width;
      if (
        puppyRight > foodLeft + this.food.width / 2 &&
        puppyRight <= foodRight &&
        puppyTop <= foodBottom &&
        puppyTop >= foodTop
      ) {
        console.log("puppy eats food");
        this.puppy.food += 10;
      }
    }
  }

  // GAME OVER
  Gameover() {
    if (
      (this.bike.position.x + this.bike.size.x >= this.puppy.x &&
        this.bike.position.y - this.bike.size.y <= this.puppy.y) ||
        this.puppy.food <= 0
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
    this.stopGravityonObjects();
    this.addObstical();
    for (let obstical of this.obsticalArray) {
      obstical.runLogic();
    }
    this.addFood();
    for (let food of this.foodArray) {
      food.runLogic();
    }
    this.clearTrash();
    this.Gameover();
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
