// This is based on artwork by Karel Martens
// http://lasociale.us/karel

function setup() {
  cnvs = createCanvas(900, 500);
  cnvs.parent("p5canvas");
  circles = new Circs();
  noStroke();
  frameRate(30);
}

function draw() {
  // background(240);
  circles.update();
  circles.draw();
}
