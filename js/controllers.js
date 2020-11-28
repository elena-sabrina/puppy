class KeyboardController {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings() {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.game.puppy.position.y -= 40;
          break;
        case "ArrowLeft":
          this.game.puppy.position.x -= 20;
          break;
        case "ArrowRight":
          this.game.puppy.position.x += 20;
          break;
      }
    });
  }
}
