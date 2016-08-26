// when a key is pressed it needs to create a keyboardevent
// the event then gets passed to the simGame
function keyPressed(key) {
  // no running into your self
  // 0 stopped, 1 top, 2 left, 3 down, 4 right

  // if (keyCode === 16) {
  //   simGame.togglePlay()
  // }

  // Make a new KeyboardEvent with the key pressed
  // Notify all listeners
  var newKeyEvent = new KeyboardEvent(keyCode)
  eventManager.post(newKeyEvent)

  console.log(keyCode);

  // prevent default browser behavior
  return false;
}
