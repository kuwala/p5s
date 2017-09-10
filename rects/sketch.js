// This sketch is a grid of circleObjs that
// grow over time as they get updated.
// Inovations:
// fullscreen support CSS, click on left
//
// Todo:
// optional Grid Lines
// different objects
function setup() {
  // cnvs = createCanvas(1366,844);
  cnvs = createCanvas(1280,800);
  cnvs.parent("p5canvas");
  console.log(pixelDensity());
  // var pos = {x:100, y:100};
  // mrLine = new MrLine(pos);
  // tiles.reset();
  // rguy = new Rectangle(10,10,30,30,0);
  rects = new RectsManager(600,400);
  // noStroke();
  frameRate(30);
}

function draw() {
  background(33);
  // rguy.rotate();
  // rguy.draw();
  // rects.updateRotationSpread(map(mouseX,0,width,0,255));
  rects.spreadSquaresX(map(mouseX,0,width,0,255));
  rects.draw();

}

// full screen toggles when clicked on the left side
function mousePressed() {
  if(mouseX > 0 && mouseX < 100) {
    var fs = fullscreen();
    fullscreen(!fs);
    // resizeCanvas(windowWidth, windowHeight);
  }
}
