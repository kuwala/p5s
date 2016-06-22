function SnakeGame() {
  this.score = 0;
  this.scoreX = 32;
  this.scoreY = 32;
  this.scoreColor =  color(218, 212, 94);
  this.highScore = 0;

  this.drawScore = function () {
    fill(this.scoreColor);
    textSize(16);
    text("Score: " + this.score, this.scoreX, this.scoreY );
    this.drawHighScore()
  }
  this.drawHighScore = function () {
    fill(this.scoreColor)
    textSize(16)
    text("HighScore: " + this.highScore, this.scoreX + 300, this.scoreY)
  }
  this.setHighScore = function (newScore) {
    this.highScore = newScore
  }
  this.reset = function () {
    this.score = 0;
  }
  this.update = function (snake) {
    if (snake.gotPoint > 0) {
      this.score += snake.gotPoint;
    }
    if (snake.isDead == true) {
      sendHighScore(this.score)
      this.reset();
    }
    this.drawScore();
  }
}
