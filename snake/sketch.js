var grid;
var snake;
function setup() {
  cnvs = createCanvas(512,512);
  cnvs.parent("p5Canvas");
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
  // no running into your self
  // 0 stopped, 1 top, 2 left, 3 down, 4 right
  var dir = snake.dir;
  if (keyCode === LEFT_ARROW) {
    if (dir !== 4) {
      snake.setDir(2);
      console.log("Left");
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (dir !== 2) {
      snake.setDir(4);
      console.log("Right");
    }
  } else if (keyCode === DOWN_ARROW) {
    if (dir !== 1) {
      snake.setDir(3);
      console.log("Down");
    }
  } else if (keyCode === UP_ARROW) {
    if (dir !== 3) {
      snake.setDir(1);
      console.log("Up");
    }
  }
  // Toggle Tail Drawing
  if (keyCode === 32) {
    console.log("spaced");
    snake.toggleDraw();
  }
  // console.log(key);

  // prevent default browser behavior
  return false;
}
