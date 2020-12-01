class KeyboardController {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings() {
    window.addEventListener("keydown", (event) => {
       {
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
