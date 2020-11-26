class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.gravity = 10;
    this.puppy = new Puppy(this);
    this.obsticalArray = [];
    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();
  }

  loop() {
    this.runLogic();
    this.draw();
    window.requestAnimationFrame(() => {
      this.loop();
    });
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

  addObstical() {
    const obstical = new Obstical(this, canvasElement.width, 10, 40, 20);
    this.obsticalArray.push(obstical);
    console.log("obstical added");
  }

  clear(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  runLogic() {
    this.addGravity();
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
