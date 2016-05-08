var grid;
var snake;
function setup() {
  createCanvas(512,512);
  grid = new Grid();
  snake = new Snake();
  game = new SnakeGame();
  noStroke();
  frameRate(16);
}
function draw() {
  background(50);
  snake.update(grid);
  grid.draw();
  game.update(snake);
}
function keyPressed(key) {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(2);
    console.log("Left");
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(4);
    console.log("Right");
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(3);
    console.log("Down");
  } else if (keyCode === UP_ARROW) {
    snake.setDir(1);
    console.log("Up");
  }
}
