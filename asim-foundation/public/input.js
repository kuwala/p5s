// when a key is pressed it needs to create a keyboardevent
// the event then gets passed to the simGame
function keyPressed(key) {
  // no running into your self
  // 0 stopped, 1 top, 2 left, 3 down, 4 right
  var dir = snake.dir;
  if (keyCode === LEFT_ARROW) {
    if (dir !== 4) {
      snake.setDir(2);
      // console.log("Left");
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (dir !== 2) {
      snake.setDir(4);
      // console.log("Right");
    }
  } else if (keyCode === DOWN_ARROW) {
    if (dir !== 1) {
      snake.setDir(3);
      // console.log("Down");
    }
  } else if (keyCode === UP_ARROW) {
    if (dir !== 3) {
      snake.setDir(1);
      // console.log("Up");
    }
  }
  // Toggle Tail Drawing
  if (keyCode === 32) {
    // console.log("spaced");
    snake.toggleDraw();
  }
  if (keyCode === 16) {
    // console.log("spaced");
    simGame.togglePlay()
  }
  console.log(keyCode);
  console.log(key);


  // prevent default browser behavior
  return false;
}
