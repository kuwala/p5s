function SnakeGame() {
  this.score = 0;
  this.scoreX = 10;
  this.scoreY = 10;
  this.scoreColor =  color(218, 212, 94);

  this.drawScore = function () {
    fill(this.scoreColor);
    text(this.score, this.scoreX, this.scoreY );
  }
  this.reset = function () {
    this.score = 0;
  }
  this.update = function (snake) {
    if (snake.gotPoint > 0) {
      this.score += snake.gotPoint;
    }
    if (snake.isDead == true) {
      this.reset();
    }
    this.drawScore();
  }
}
