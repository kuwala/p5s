// This sketch is a grid of circleObjs that
// grow over time as they get updated.
// Inovations:
// fullscreen support CSS, click on left
//
// Todo:
// optional Grid Lines
// different objects
function setup() {
  cnvs = createCanvas(1366,844);
  cnvs.parent("p5canvas");
  // var pos = {x:100, y:100};
  // mrLine = new MrLine(pos);
  tiles = new Grid();
  // tiles.reset();
  noStroke();
  frameRate(30);
}

function draw() {
  background(33);
  tiles.update();
  tiles.draw();
}

// full screen toggles when clicked on the left side
function mousePressed() {
  if(mouseX > 0 && mouseX < 100) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}
