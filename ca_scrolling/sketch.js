function setup() {
  cnvs = createCanvas(900, 400);
  cnvs.parent("p5canvas");
  ca = new CA();
  ca.initCells();
  frameRate(10);
}

function draw() {
  // background(255);
  ca.update2();
  // ca.randomizeRules();

}

function mousePressed() {
  ca.randomizeRules();
}
