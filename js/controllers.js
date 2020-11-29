class KeyboardController {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings() {
    window.addEventListener("keydown", (event) => {
      if (this.game.puppy.x > 0 && this.game.puppy.x < canvasElement.width) {
        switch (event.key) {
          case "ArrowUp":
            this.game.puppy.y -= 40;
            this.game.puppy.food -= 1;
            break;
          case "ArrowLeft":
            this.game.puppy.x -= 20;
            this.game.puppy.food -= 1;
            break;
          case "ArrowRight":
            this.game.puppy.x += 20;
            this.game.puppy.food -= 1;
            break;
        }
      }
    });
  }

  //stopDoubleJump (){}
}
