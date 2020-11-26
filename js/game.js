class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.gravity = 10;
    this.puppy = new Puppy(this);
    this.obsticalArray = [];
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

  addObstical() {
    const timeNow = Date.now();
    if (timeNow > this.previousObsticaltiming + 5000) {
      const obstical = new Obstical(
        this,
        canvasElement.width,
        Math.random() * (this.canvas.height - 20),
        40,
        20
      );
      this.obsticalArray.push(obstical);
      this.previousObsticaltiming = timeNow;
      console.log("obstical added");
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
      var puppyLeft = this.puppy.x;
      var puppyRight = this.puppy.position.x + this.puppy.size.x;
      if (objectLeft < puppyRight && objectTop <= puppyBottom) {
        this.puppy.speed.y = 0;
      }
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /*clearTrash (){
    for (let obstical of this.obsticalArray) {
      if (obstical.x >= this.canvas.width) {
        const indexOfBullet = this.bullets.indexOf(bullet);
        this.bullets.splice(indexOfBullet, 1);
      }
    }
  }
*/
  runLogic() {
    this.addGravity();
    this.stopGravityonObjects();
    this.addObstical();
    for (let obstical of this.obsticalArray) {
      obstical.runLogic();
    }
  }

  draw() {
    this.clear();
    for (let obstical of this.obsticalArray) {
      obstical.draw();
    }
    this.puppy.draw();
  }
}
