class KeyboardController {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings() {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          console.log("Up called");
          this.game.puppy.position.y -= 40;
          break;
        case "ArrowLeft":
          console.log("Left called");
          this.game.puppy.position.x -= 20;
          break;
        case "ArrowRight":
          console.log("Right called");
          this.game.puppy.position.x += 20;
          break;
      }
    });
  }
}
