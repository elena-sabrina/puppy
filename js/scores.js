class Foodscore {
    constructor(game, x, y) {
      this.game = game;
      this.x = x;
      this.y = y;
    }
  
    runLogic() {
      this.y -= this.game.gamespeed;
    }
  
    draw() {
        this.game.context.fillStyle = "white";
        this.game.context.font = " 16px sans-serif";
        this.game.context.fillText("+10" , 20, 24);
    }
  }