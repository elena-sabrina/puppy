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
            break;
          case "ArrowLeft":
            this.game.puppy.x -= 20;
            break;
          case "ArrowRight":
            this.game.puppy.x += 20;
            break;
        }
      }
    });
  }



  //stopDoubleJump (){}
  // keyup event 
}
