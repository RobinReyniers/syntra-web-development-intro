// If all assets have been loaded, this event fires.(Loads images etc...)
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  // Keyboard actions
  class inputHandler {}
  // Shoot lasers
  class Projectile {}
  // Damaged enemy loses gears
  class Particle {}
  // The player itself
  class Player {
    constructor(game) {
      this.game = game;
      this.height = 120;
      this.width = 190;
      // Starting position of the player
      this.x = 20;
      this.y = 120;
      // No vertical movement
      this.speedY = 0;
    }

    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // Blueprint for enemies
  class Enemy {}
  // Handles background layer animation
  class Layer {}
  // Class that pulls all the layers together
  class Background {}
  // The HUD
  class UI {}
  // Class to put everything together
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }

    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
});
