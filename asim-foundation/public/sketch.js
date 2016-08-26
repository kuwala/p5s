// var grid;
function setup() {
  cnvs = createCanvas(768,512);
  cnvs.parent("p5Canvas");
  // grid = new Grid();
  // snake = new Snake();
  // game = new SnakeGame();
  simGame = new SimGame();
  simGame.setup()
  eventManager = simGame.eventManager

  // for input
  snake = simGame.snake
  simGame.changeState("playing")
  noStroke();
  frameRate(16);
  background(200);
  keyInputs = new KeyboardTest();
}
function draw() {
  simGame.update();
}
function receiveData(data) {
  // game.setHighScore(data.highscore)
  console.log("recieved data");
}
